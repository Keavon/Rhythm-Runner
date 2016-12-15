var Menu = {};

Menu.load = function() {
	var streamUrl;
	//streamUrl = "Midnight City.wav";
	var readiness = 0;
	var bpm;
	
	if (streamUrl === undefined) {
		var youTubeUrl = prompt("Enter YouTube video ID");
		youTubeUrl = youTubeUrl || "I_izvAbhExY";
		streamUrl = "https://rhythmrunner.herokuapp.com/?url=" + youTubeUrl;
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
	
	var moon = new Image();
	moon.addEventListener("load", done);
	moon.src = "moon.png";
	
	function done(e) {
		readiness++;
		if (typeof e === "number") {
			bpm = e;
		}
		
		if (readiness === 3) {
			Scene.load(audio, bpm, moon);
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
	Main.context.fillText("Rhythm Runner\nis loading your song...", Main.context.canvas.width / 2, Main.context.canvas.height / 2);
};
