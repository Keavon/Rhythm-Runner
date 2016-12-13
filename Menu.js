var Menu = {};

Menu.load = function() {
	var streamUrl;
	streamUrl = "Midnight City.wav";
	var loadedAudio = false;
	var loadedBPM = false;
	
	if (streamUrl === undefined) {
		var youTubeUrl = prompt("Enter YouTube video ID");
		streamUrl = "http://localhost:8080/?url=" + youTubeUrl;
	}
	
	analyze(done);
	
	var audio = new Audio(streamUrl);
	audio.load();
	audio.addEventListener("durationchange", done);
	
	function analyze(callback) {
		var request = new XMLHttpRequest();
		request.open("GET", streamUrl, true);
		request.responseType = "arraybuffer";
		request.onload = function() {
			MusicAnalyzer.run(request.response, callback);
		};
		request.send();
	}
	
	function done(bpm) {
		if (typeof bpm === "number") loadedBPM = true;
		else loadedAudio = true;
		
		if (loadedBPM && loadedAudio) {
			Scene.load(audio, bpm);
			Main.screen = "stage";
		}
	}
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
