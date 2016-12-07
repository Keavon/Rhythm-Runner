var LevelGenerator = {};

LevelGenerator.generate = function(bpm) {
	var components = [];
	
	components.push(new Platform(0, 0, 100));
	
	return components;
};
