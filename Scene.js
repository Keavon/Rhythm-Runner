var Scene = {};

Scene.load = function(audio, bpm) {
	Scene.audio = audio;
	Scene.bpm = bpm;
	Scene.runSpeed = 5;
	Scene.viewportWidth = 15;
	Scene.gravity = 0.000025;
	Scene.players = [new Player("yellow", "arrows")];
	Scene.components = LevelGenerator.generate(Scene.bpm);
	Scene.loadTime = new Date().getTime();
	Scene.lastFrame = Scene.loadTime;
	audio.muted = true;
	audio.play();
	
	var time = (new Date().getTime() - Scene.loadTime) / 1000;
};

Scene.scrolled = function() {
	return Scene.audio.currentTime * Scene.runSpeed;
};

Scene.beatPercentage = function() {
	return (Scene.audio.currentTime % (60 / Scene.bpm)) / (60 / Scene.bpm);
};

Scene.render = function() {
	// Draw pulsing background
	var color = Math.round(Math.sqrt(Scene.beatPercentage() * 255) * Math.sqrt(255));
	Main.context.fillStyle = "rgb(100, 0, " + color + ")";
	Main.context.fillRect(0, 0, Main.context.canvas.width, Main.context.canvas.height);
	
	var scroll = Scene.scrolled();
	var scale = Main.context.canvas.width / this.viewportWidth;
	var globalOffsetY = Main.context.canvas.height * (2 / 3) / scale;
	Draw.push();
	Draw.scale(scale);
	
	var deltaTime = new Date().getTime() - Scene.lastFrame;
	
	Interactions.interact();
	
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
		player.x = scroll + (index + 1) * 3;
		Draw.push();
		Draw.translate(player.x - scroll, player.y - player.height + globalOffsetY);
		player.draw();
		//Draw.debugHitbox(player.width, player.height);
		Draw.pop();
	});
	
	Draw.pop();
	Main.context.fillStyle = "#fff";
	Main.context.font = "12px sans-serif";
	Main.context.textAlign = "left";
	Main.context.textBaseline = "top";
	Main.context.fillText(Scene.bpm + " BPM", 0, 0);
};
