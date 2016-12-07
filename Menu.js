var Menu = {};

Menu.load = function() {
	var musicUrl = "song.wav";
	var audio = new Audio(musicUrl);
	
	var request = new XMLHttpRequest();
	request.open("GET", musicUrl, true);
	request.responseType = "arraybuffer";
	request.onload = function() {
		MusicAnalyzer.run(request.response, function(bpm) {
			Scene.load(audio, bpm);
			Main.screen = "stage";
		});
	};
	request.send();
};

Menu.render = function() {
	Main.context.fillStyle = "#000";
	Main.context.fillRect(0, 0, Main.context.canvas.width, Main.context.canvas.height);
	Main.context.fillStyle = "#fff";
	Main.context.font = "48px sans-serif";
	Main.context.textAlign = "center";
	Main.context.textBaseline = "middle";
	Main.context.fillText("Rhythm Runner", Main.context.canvas.width / 2, Main.context.canvas.height / 2);
};
