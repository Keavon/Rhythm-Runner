function Platform(x, y, width) {
	Component.call(this, x, y, width, 0.5, new Date().getTime(), "run");
}

// Extend Component
Platform.prototype = Object.create(Component.prototype);
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function(draw) {
	draw.fill("#222");
	draw.rect(this.x, this.y, this.width, this.height);
	draw.fill("#f00");
	if (this.width > 0.5) {
		draw.rect(this.x + 0.25, this.y + this.height * 9 / 20, this.width - 0.5, this.height / 10);
	}
};
