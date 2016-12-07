function Component(x, y, width, height, epoch, animation) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.epoch = epoch;
	this.animation = animation;
}

Component.prototype.setAnimation = function(animation) {
	this.epoch = new Date().getTime();
	this.animation = animation;
};
