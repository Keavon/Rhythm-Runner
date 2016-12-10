var LevelGenerator = {};

LevelGenerator.generate = function(bpm) {
	var components = [];
	
	//components.push(new Platform(0, 0, 50));
	//components.push(new Platform(10, -5, 10));
	components.push(new Barrier(19, 0));
	components.push(new Platform(0, 0, 10));
	components.push(new Platform(15, 0, 10));
	
	return components;
};
