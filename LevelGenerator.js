var LevelGenerator = {};

LevelGenerator.generate = function(bpm) {
	var components = [];
	
	//components.push(new Platform(0, 0, 50));
	//components.push(new Platform(10, -5, 10));
	//components.push(new Barrier(19, 0));
	//components.push(new Platform(0, 0, 10));
	//components.push(new Platform(15, 0, 10));
	
	var duration = Scene.audio.duration;
	var runSpeed = Scene.runSpeed;
	components.push(new Platform(0, 0, runSpeed * duration));
	
	var spacing = 60 / bpm;
	var timeOfLastObstacle = 5;
	for (var seconds = 5; seconds < duration; seconds += spacing) {
		if (seconds > timeOfLastObstacle + 0.75 && Math.random() < 0.5) {
			components.push(new Hexagon(seconds * runSpeed, 0));
			timeOfLastObstacle = seconds;
		}
	}
	
	return components;
};
