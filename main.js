var ytdl = require('ytdl-core');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 8080);

app.get('/', function(request, response) {
	console.log("Requesting " + request.query.url);
	response.set('Access-Control-Allow-Origin', 'https://keavon.com');
	
	if (request.query != null && request.query.url != null) {
		response.set('Content-Type', 'audio/ogg');
		ytdl(request.query.url, { filter: "audioonly" }).pipe(response);
	} else {
		console.log("Query error")
		response.send("Query error");
	}
});
