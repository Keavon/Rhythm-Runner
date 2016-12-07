var Scene = {};

Scene.load = function(audio, bpm) {
	Scene.audio = audio;
	Scene.bpm = bpm * 2;
	Scene.runSpeed = 5;
	Scene.viewportWidth = 100;
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
	
	Scene.components.forEach(function(component) {
		if (component.x - scroll + component.width > 0 && component.x < scroll + Scene.viewportWidth) {
			component.draw(scroll, offsetY, scale);
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
