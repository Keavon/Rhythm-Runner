function StarEmitter(x, y, rangeWidth, rangeHeight) {
	this.x = x;
	this.y = y;
	this.rangeWidth = rangeWidth;
	this.rangeHeight = rangeHeight;
	this.stars = [];
	for (var i = 0; i < 100; i++) {
		this.stars.push(new Star(Math.random() * rangeWidth, Math.random() * rangeHeight, Math.random() * 20, Math.random() * 5));
	}
}

StarEmitter.prototype.draw = function(t) {
	this.stars = this.stars.filter(function (star) {
		return star.draw();
	});
	
	if (this.stars.length < 100) {
		this.stars.push(new Star(Math.random() * this.rangeWidth, Math.random() * this.rangeHeight, Math.random() * 20, Math.random() * 5));
	}
};
