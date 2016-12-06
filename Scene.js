var Scene = {};

Scene.components = [];

Scene.players = [];

Scene.load = function(audio, bpm) {
	Scene.audio = audio;
	Scene.bpm = bpm;
	
	audio.play();
};

Scene.scrolled = function() {
	var unitsPerSecond = 2;
	return audio.currentTime * unitsPerSecond;
};

Scene.render = function() {
	Main.context.fillStyle = "#000";
	Main.context.fillRect(0, 0, Main.context.canvas.width, Main.context.canvas.height);
	Main.context.fillStyle = "#fff";
	Main.context.font = "48px sans-serif";
	Main.context.fillText(Scene.bpm + " BPM", 50, 100);
};
