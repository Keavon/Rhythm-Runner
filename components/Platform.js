function Platform(x, y, width) {
	Component.call(this, x, y + 0.25, width, 0.25, new Date().getTime(), "run");
}

// Extend Component
Platform.prototype = Object.create(Component.prototype);
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function() {
	Draw.fill("#222");
	Draw.rect(0, 0, this.width, this.height);
	Draw.fill("#f00");
	if (this.width > 0.5) {
		Draw.rect(0.25, this.height * 9 / 20, this.width - 0.5, this.height / 10);
	}
};
