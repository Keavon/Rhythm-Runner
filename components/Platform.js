function Platform(x, y, width) {
	Component.call(this, x, y + 0.5, width, 0.5, new Date().getTime(), "run");
}

// Extend Component
Platform.prototype = Object.create(Component.prototype);
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function(draw) {
	draw.fill("#222");
	draw.rect(0, 0, this.width, this.height);
	draw.fill("#f00");
	if (this.width > 0.5) {
		draw.rect(0.25, this.height * 9 / 20, this.width - 0.5, this.height / 10);
	}
};
