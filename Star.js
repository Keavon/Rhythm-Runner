function Star(x, y, maxBrightness, lifetime) {
	this.x = x;
	this.y = y;
	this.maxBrightness = maxBrightness;
	this.lifetime = lifetime;
	this.spawnTime = new Date().getTime();
}

Star.prototype.draw = function() {
	//console.log(lifetime);
	var lifecycle = (new Date().getTime() - this.spawnTime) / 1000 / this.lifetime;
	if (lifecycle >= 1) {
		return false;
	}
	
	var currentBrightness = this.maxBrightness * Math.sin(lifecycle * Math.PI);
	
	Draw.fill("#fff");
	Draw.ellipse(this.x, this.y, currentBrightness);
	return true;
};
