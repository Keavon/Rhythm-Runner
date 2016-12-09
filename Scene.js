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
	var playerOffsetX =  Main.context.canvas.width / 10;
	var scale = Main.context.canvas.width / this.viewportWidth;
	
	var draw = {
		startOfShape: false,
		moveX: 0,
		moveY: 0,
		offset: function(x, y) {
			moveX = x;
			moveY = y;
		},
		fill: function(color) {
			Main.context.fillStyle = color;
		},
		rect: function(x, y, w, h) {
			Main.context.fillRect((x - scroll + draw.moveX) * scale, (y + draw.moveY) * scale + offsetY, w * scale, h * scale);
		},
		beginShape: function() {
			Main.context.beginPath();
			startOfShape = true;
		},
		vertex: function(x, y) {
			if (startOfShape) Main.context.moveTo((x - scroll + moveX) * scale, (y + moveY) * scale + offsetY);
			else Main.context.lineTo((x - scroll + moveX) * scale, (y + moveY) * scale + offsetY);
			startOfShape = false;
		},
		bezierVertex: function(c1x, c1y, c2x, c2y, x, y) {
			Main.context.bezierCurveTo((c1x - scroll + moveX) * scale, (c1y + moveY) * scale + offsetY, (c2x - scroll + moveX) * scale, (c2y + moveY) * scale + offsetY, (x - scroll + moveX) * scale, (y + moveY) * scale + offsetY);
			startOfShape = false;
		},
		endShape: function() {
			Main.context.fill();
		}
	};
	
	Scene.components.forEach(function(component) {
		if (component.x - scroll + component.width > 0 && component.x < scroll + Scene.viewportWidth) {
			component.draw(draw);
		}
	});
	
	Scene.players.forEach(function(player) {
		player.draw(playerOffsetX, offsetY, scale);
	});
	
	Main.context.fillStyle = "#fff";
	Main.context.font = "12px sans-serif";
	Main.context.textAlign = "left";
	Main.context.textBaseline = "top";
	Main.context.fillText(Scene.bpm + " BPM", 0, 0);
};
