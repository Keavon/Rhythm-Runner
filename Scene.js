var Scene = {};

Scene.load = function(audio, bpm, moon) {
	this.audio = audio;
	this.bpm = bpm;
	this.runSpeed = 5;
	this.viewportWidth = 15;
	this.gravity = 0.000025;
	this.players = [new Player("yellow", "arrows")];
	this.components = LevelGenerator.generate(Scene.bpm);
	this.backdrop = new Backdrop(moon);
	this.loadTime = new Date().getTime();
	this.lastFrame = Scene.loadTime;
	//audio.muted = true;
	audio.play();
	
	var time = (new Date().getTime() - Scene.loadTime) / 1000;
};

Scene.scrolled = function() {
	var runSpeed = Scene.runSpeed;
	var startSmoothingDuration = 1.5;
	var endSoothingDuration = 5;
	var time = Scene.audio.currentTime;
	var songDuration = Scene.audio.duration;
	
	var scrolled;
	
	if (time < startSmoothingDuration) {
		scrolled = (1 - Math.cos(time / startSmoothingDuration * Math.PI / 2));
	} else if (time < songDuration - endSoothingDuration) {
		scrolled = (1 - Math.cos(Math.PI / 2)) + (time - startSmoothingDuration);
	} else {
		scrolled = (1 - Math.cos(Math.PI / 2)) + (songDuration - startSmoothingDuration - endSoothingDuration) + (Math.sin((endSoothingDuration - songDuration + time) / endSoothingDuration * Math.PI / 2));
	}
	
	return scrolled * runSpeed;
};

Scene.songCompletion = function() {
	return Scene.audio.currentTime / Scene.audio.duration;
};

Scene.beatPercentage = function() {
	return (Scene.audio.currentTime % (60 / Scene.bpm)) / (60 / Scene.bpm);
};

Scene.getBeatEffectScalar = function() {
	return Math.round(Math.sqrt(Scene.beatPercentage() * 255) * Math.sqrt(255)) / 255;
};

Scene.render = function() {
	
	// Draw pulsing background
	//var color = Math.round(Math.sqrt(Scene.beatPercentage() * 255) * Math.sqrt(255));
	//Main.context.fillStyle = "rgb(100, 0, " + color + ")";
	Main.context.fillStyle = "#000";
	Main.context.fillRect(0, 0, Main.context.canvas.width, Main.context.canvas.height);
	
	this.backdrop.draw(Main.context.canvas.width, Main.context.canvas.height);
	
	var scroll = Scene.scrolled();
	var scale = Main.context.canvas.width / this.viewportWidth;
	var globalOffsetY = Main.context.canvas.height * (2 / 3) / scale;
	
	Interactions.interact();
	
	Draw.push();
	Draw.scale(scale);
	
	Scene.components.forEach(function(component) {
		if (component.x - scroll + component.width > 0 && component.x < scroll + Scene.viewportWidth) {
			Draw.push();
			Draw.translate(component.x - scroll, component.y - component.height + globalOffsetY);
			component.draw();
			//Draw.debugHitbox(component.width, component.height);
			Draw.pop();
		}
	});
	
	Scene.players.forEach(function(player, index) {
		player.x = Scene.audio.currentTime * Scene.runSpeed;
		Draw.push();
		Draw.translate(player.x - scroll, player.y - player.height + globalOffsetY);
		player.draw();
		//Draw.debugHitbox(player.width, player.height);
		Draw.pop();
	});
	
	Draw.pop();
	
	if (Scene.audio.currentTime + 2 >= Scene.audio.duration) {
		Draw.fill("rgba(0, 0, 0, 0.75)");
		Draw.rect(Main.context.canvas.width / 2 - 350, Main.context.canvas.height / 2 - 50, 700, 100);
		Main.context.fillStyle = "#fff";
		Main.context.textBaseline = "middle";
		Main.context.textAlign = "center";
		Main.context.font = "48px sans-serif";
		Main.context.fillText("You escaped with " + this.players[0].score + " points!", Main.context.canvas.width / 2, Main.context.canvas.height / 2);
	} else {
		Main.context.fillStyle = "#fff";
		Main.context.textBaseline = "top";
		
		Main.context.textAlign = "left";
		Main.context.font = "36px sans-serif";
		Main.context.fillText("Score: " + this.players[0].score, 10, 10);
		
		Main.context.textAlign = "right";
		Main.context.font = "12px sans-serif";
		Main.context.fillText(Scene.bpm + " BPM", Main.context.canvas.width - 10, 10);
	}
};
