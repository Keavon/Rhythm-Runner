function Player(color, input) {
	Component.call(this, 0, 0, 1, 2, new Date().getTime(), "run");
	this.color = color;
	this.input = input;
	this.jumpPressed = false;
	this.slidePressed = false;
	this.stompPressed = false;
	this.kickPressed = false;
	this.velocity = 0;
	
	var self = this;
	
	this.animations = {
		"run": function(t) {
			return {
				body: {
					x: Math.sin(t * 10),
					y: 0,
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
		},
		"stomp": function(t) {
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
		},
		"slide": function(t) {
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
		},
		"kick": function(t) {
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
		}
	};
	
	document.addEventListener("keydown", function(event) {
		if (event.key === "ArrowUp") {
			self.jumpPressed = true;
		}
		if (event.key === "ArrowDown") {
			self.stompPressed = true;
		}
		if (event.key === "ArrowLeft") {
			self.slidePressed = true;
		}
		if (event.key === "ArrowRight") {
			self.kickPressed = true;
		}
	});

	document.addEventListener("keyup", function(event) {
		if (event.key === "ArrowUp") {
			self.jumpPressed = false;
		}
		if (event.key === "ArrowDown") {
			self.stompPressed = false;
		}
		if (event.key === "ArrowLeft") {
			self.slidePressed = false;
		}
		if (event.key === "ArrowRight") {
			self.kickPressed = false;
		}
	});
}

// Extend Component
Player.prototype = Object.create(Component.prototype);
Player.prototype.constructor = Player;

Player.prototype.draw = function(playerOffsetX, yOffset, scale) {
	var x = this.x;
	var y = this.y;
	var w = this.width;
	var h = this.height;
	
	var time = (new Date().getTime() - this.epoch) / 1000;
	var appendages = this.animations[this.animation](time);
	
	Main.context.fillStyle = "#fff";
	Main.context.fillRect((x + appendages.body.x) * scale + playerOffsetX, (y + appendages.body.y - h) * scale + yOffset, w * scale, h * scale);
};
