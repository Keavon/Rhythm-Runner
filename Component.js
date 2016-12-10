function Component(x, y, width, height, epoch, animation) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.epoch = epoch || 0;
	this.animation = animation || "";
	this.solid = true;
}

Component.prototype.setAnimation = function(animation) {
	this.epoch = new Date().getTime();
	this.animation = animation;
};
