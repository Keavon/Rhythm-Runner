var Scene = {};

Scene.load = function(audio, bpm) {
	Scene.audio = audio;
	Scene.bpm = bpm;
	Scene.components = LevelGenerator.generate(bpm);
	Scene.players = [new Player(0)];
	audio.play();
	//audio.muted = true;
};

Scene.scrolled = function() {
	var unitsPerSecond = 2;
	return Scene.audio.currentTime * unitsPerSecond;
};

Scene.beatPercentage = function() {
	return (Scene.audio.currentTime % (60 / Scene.bpm)) / (60 / Scene.bpm);
};

Scene.render = function() {
	var color = Math.round(Math.sqrt(Scene.beatPercentage() * 255) * Math.sqrt(255));
	
	Main.context.fillStyle = "rgb(100, 0, " + color + ")";
	Main.context.fillRect(0, 0, Main.context.canvas.width, Main.context.canvas.height);
	Main.context.fillStyle = "#fff";
	Main.context.font = "48px sans-serif";
	Main.context.textAlign = "center";
	Main.context.textBaseline = "middle";
	Main.context.fillText(Scene.bpm + " BPM", Main.context.canvas.width / 2, Main.context.canvas.height / 2);
};
