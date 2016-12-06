function Player(playerNumber) {
	var self = this;
	this.playerNumber = playerNumber;
	this.x = 0;
	this.y = 0;
	this.velocity = 0;
	this.width = 1;
	this.height = 2;
	this.animationEpoch = 0;
	this.currentAnimation = "";
	this.actionJump = false;
	this.actionSlide = false;
	this.actionStomp = false;
	this.actionKick = false;

	document.addEventListener("keydown", function(event) {
		if (event.key === "ArrowUp") {
			self.actionJump = true;
		}
		if (event.key === "ArrowDown") {
			self.actionStomp = true;
		}
		if (event.key === "ArrowLeft") {
			self.actionSlide = true;
		}
		if (event.key === "ArrowRight") {
			self.actionKick = true;
		}
	});

	document.addEventListener("keyup", function(event) {
		if (event.key === "ArrowUp") {
			self.actionJump = false;
		}
		if (event.key === "ArrowDown") {
			self.actionStomp = false;
		}
		if (event.key === "ArrowLeft") {
			self.actionSlide = false;
		}
		if (event.key === "ArrowRight") {
			self.actionKick = false;
		}
	});
}

Player.prototype.startAnimation = function(animation) {
	this.animationEpoch = new Date().getTime();
	this.currentAnimation = animation;
};

Player.prototype.stopAnimation = function() {
	this.animationEpoch = 0;
	this.currentAnimation = "";
};

Player.prototype.getAnimation = function() {
	var t = (new Date().getTime() - this.animationEpoch) / 1000;
	if (this.currentAnimation === "run") {
		return {
			body: {
				x: Math.sin(t) * 10,
				y: Math.cos(t) * 10,
				r: Math.tan(t)
			},
			legRear: {
				x: Math.sin(t/2) * 20,
				y: Math.cos(t/2) * 20,
				r: Math.tan(t/2) * 5
			},
			legFront: {
				x: Math.cos(t/4) * 20,
				y: Math.sin(t/4) * 20,
				r: Math.tan(t/4) * 5
			}
		};
	} else if (this.currentAnimation === "jump") {
		return {
			body: {
				x: -10,
				y: -10,
				r: -0.5
			},
			legRear: {
				x: -10,
				y: -10,
				r: -0.5
			},
			legFront: {
				x: -10,
				y: -10,
				r: -0.5
			}
		};
	} else if (this.currentAnimation === "stomp") {
		return {
			body: {
				x: 10,
				y: 10,
				r: 0.5
			},
			legRear: {
				x: 10,
				y: 10,
				r: 0.5
			},
			legFront: {
				x: 10,
				y: 10,
				r: 0.5
			}
		};
	} else if (this.currentAnimation === "slide") {
		return {
			body: {
				x: 20,
				y: 20,
				r: 1
			},
			legRear: {
				x: 20,
				y: 20,
				r: 1
			},
			legFront: {
				x: 20,
				y: 20,
				r: 1
			}
		};
	} else if (this.currentAnimation === "kick") {
		return {
			body: {
				x: 30,
				y: 30,
				r: 1.5
			},
			legRear: {
				x: 30,
				y: 30,
				r: 1.5
			},
			legFront: {
				x: 30,
				y: 30,
				r: 1.5
			}
		};
	} else if (!this.animationEpoch) {
		return {
			body: { x: 0, y: 0, r: 0 },
			legRear: { x: 0, y: 0, r: 0 },
			legFront: { x: 0, y: 0, r: 0 }
		};
	}
};
