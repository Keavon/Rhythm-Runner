var Menu = {};

Menu.load = function() {
	//var musicUrl = prompt("Enter music URL");
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
	Main.context.fillStyle = "#060";
	Main.context.fillRect(0, 0, Main.context.canvas.width, Main.context.canvas.height);
};
