var Scene = {};

Scene.load = function(audio, bpm) {
	this.audio = audio;
	this.bpm = bpm;
	this.runSpeed = 5;
	this.viewportWidth = 15;
	this.gravity = 0.000025;
	this.players = [new Player("yellow", "arrows")];
	this.components = LevelGenerator.generate(Scene.bpm);
	this.backdrop = new Backdrop();
	this.loadTime = new Date().getTime();
	this.lastFrame = Scene.loadTime;
	
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
	this.backdrop.draw(Main.context.canvas.width, Main.context.canvas.height);
	
	// Draw pulsing background
	//var color = Math.round(Math.sqrt(Scene.beatPercentage() * 255) * Math.sqrt(255));
	//Main.context.fillStyle = "rgb(100, 0, " + color + ")";
	//Main.context.fillRect(0, 0, Main.context.canvas.width, Main.context.canvas.height);
	
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
