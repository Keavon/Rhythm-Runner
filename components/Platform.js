function Platform(x, y, width) {
	Component.call(this, x, y, width, 1, new Date().getTime(), "run");
}

// Extend Component
Platform.prototype = Object.create(Component.prototype);
Platform.prototype.constructor = Platform;

Platform.prototype.draw = function(scroll, yOffset, scale) {
	var x = this.x - scroll;
	var y = this.y;
	var w = this.width;
	var h = this.height;
	
	Main.context.fillStyle = "#222";
	Main.context.fillRect(x * scale, y * scale + yOffset, w * scale, h * scale);
	Main.context.fillStyle = "#f00";
	Main.context.fillRect((x + 0.5) * scale, (y + 0.45) * scale + yOffset, (w - 1) * scale, (h / 10) * scale);
};
