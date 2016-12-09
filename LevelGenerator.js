var LevelGenerator = {};

LevelGenerator.generate = function(bpm) {
	var components = [];
	
	components.push(new Platform(0, 0, 20));
	components.push(new Barrier(19, 0));
	
	return components;
};
