var LevelGenerator = {};

LevelGenerator.generate = function(bpm) {
	var components = [];
	
	components.push(new Platform(5, 0, 20));
	components.push(new Barrier(10, 0));
	
	return components;
};
