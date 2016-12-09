var Scene = {};

Scene.load = function(audio, bpm) {
	Scene.audio = audio;
	Scene.bpm = bpm;
	Scene.runSpeed = 5;
	Scene.viewportWidth = 30;
	Scene.components = LevelGenerator.generate(Scene.bpm);
	Scene.players = [new Player("yellow", "arrows")];
	audio.muted = true;
	audio.play();
};

Scene.scrolled = function() {
	return Scene.audio.currentTime * Scene.runSpeed;
};

Scene.beatPercentage = function() {
	return (Scene.audio.currentTime % (60 / Scene.bpm)) / (60 / Scene.bpm);
};

Scene.render = function() {
	var color = Math.round(Math.sqrt(Scene.beatPercentage() * 255) * Math.sqrt(255));
	Main.context.fillStyle = "rgb(100, 0, " + color + ")";
	Main.context.fillRect(0, 0, Main.context.canvas.width, Main.context.canvas.height);
	
	var scroll = Scene.scrolled();
	var offsetY = Main.context.canvas.height * 2 / 3;
	var scale = Main.context.canvas.width / this.viewportWidth;
	
	var draw = {
		startOfShape: false,
		doFill: false,
		doStroke: false,
		moveX: 0,
		moveY: 0,
		offset: function(x, y) {
			draw.moveX = x;
			draw.moveY = y;
		},
		addOffset: function(x, y) {
			draw.moveX += x;
			draw.moveY += y;
		},
		fill: function(color) {
			Main.context.fillStyle = color;
			draw.doFill = true;
		},
		noFill: function() {
			Main.context.fillStyle = "transparent";
			draw.doFill = false;
		},
		stroke: function(color) {
			Main.context.strokeStyle = color;
			draw.doStroke = true;
		},
		noStroke: function() {
			Main.context.strokeStyle = "transparent";
			draw.doStroke = false;
		},
		rect: function(x, y, w, h) {
			Main.context.fillRect((x - scroll + draw.moveX) * scale, (y + draw.moveY) * scale + offsetY, w * scale, h * scale);
		},
		beginShape: function() {
			Main.context.beginPath();
			draw.startOfShape = true;
		},
		vertex: function(x, y) {
			if (draw.startOfShape) Main.context.moveTo((x - scroll + draw.moveX) * scale, (y + draw.moveY) * scale + offsetY);
			else Main.context.lineTo((x - scroll + draw.moveX) * scale, (y + draw.moveY) * scale + offsetY);
			draw.startOfShape = false;
		},
		bezierVertex: function(c1x, c1y, c2x, c2y, x, y) {
			Main.context.bezierCurveTo((c1x - scroll + draw.moveX) * scale, (c1y + draw.moveY) * scale + offsetY, (c2x - scroll + draw.moveX) * scale, (c2y + draw.moveY) * scale + offsetY, (x - scroll + draw.moveX) * scale, (y + draw.moveY) * scale + offsetY);
			draw.startOfShape = false;
		},
		endShape: function() {
			Main.context.fill();
		},
		debugHitbox: function(width, height) {
			draw.fill("rgba(255, 0, 255, 0.5)");
			draw.rect(0, 0, width, height);
			//draw.rect(-width / 2, -height, width, height);
		}
	};
	
	Scene.components.forEach(function(component) {
		if (component.x - scroll + component.width > 0 && component.x < scroll + Scene.viewportWidth) {
			draw.offset(component.x, component.y - component.height);
			component.draw(draw);
			draw.debugHitbox(component.width, component.height);
			draw.offset(0, 0);
		}
	});
	
	Scene.players.forEach(function(player) {
		draw.offset(player.x + scroll, player.y - player.height);
		player.draw(draw);
		draw.debugHitbox(player.width, player.height);
		draw.offset(0, 0);
	});
	
	Main.context.fillStyle = "#fff";
	Main.context.font = "12px sans-serif";
	Main.context.textAlign = "left";
	Main.context.textBaseline = "top";
	Main.context.fillText(Scene.bpm + " BPM", 0, 0);
};
