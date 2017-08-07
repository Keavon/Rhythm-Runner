var ytdl = require("ytdl-core");
var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.listen(process.env.PORT || 8080);

app.get("/", function(request, response) {
	console.log("Requesting " + request.query.url);
	response.set("Access-Control-Allow-Origin", "https://keavon.com");
	response.set("Content-Disposition", "attachment; filename=stream");
	
	if (request.query && request.query.url !== undefined && request.query.url.length > 0) {
		response.set("Content-Type", "audio/ogg");

		try {
			ytdl(request.query.url, { filter: "audioonly" })
			.on("error", (error) => {
				response.set("Content-Type", "application/json");
				response.status(500).json({ error: "Failed video request" });
				console.error("Failed video request for " + request.query.url);
			})
			.on("pipe", () => {
				console.log("Streaming output for " + request.query.url);
			})
			.pipe(response);
		}
		catch (error) {
			console.error("Error requesting video: ", error.toString().split("\n")[0]);
		}
	}
	else {
		response.status(400).json({ error: "Invalid query" });
		console.error("Invalid query for " + request.query.url);
	}
});
