var Menu = {};

Menu.load = function() {
	var streamUrl;
	streamUrl = "Take On Me.wav";
	var audio = new Audio(streamUrl);
	audio.load();
	
	if (streamUrl !== undefined) {
		audio.addEventListener("durationchange", function() {
			Scene.load(audio, 100);
			Main.screen = "stage";
		});
	} else {
		var youTubeUrl = prompt("Enter YouTube video ID");
		streamUrl = "http://localhost:8080/?url=" + youTubeUrl;
		
		var youTubeRequest = new XMLHttpRequest();
		youTubeRequest.onreadystatechange = function() {
			if (youTubeRequest.readyState == 4 && youTubeRequest.status == 200) {
				var request = new XMLHttpRequest();
				request.open("GET", streamUrl, true);
				request.responseType = "arraybuffer";
				request.onload = function() {
					MusicAnalyzer.run(request.response, function(bpm) {
						Scene.load(audio, bpm);
						Main.screen = "stage";
					});
				};
				request.send();
			}
		};
		youTubeRequest.open("GET", "http://localhost:8080/?url=" + youTubeUrl, true);
		youTubeRequest.send(null);
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
