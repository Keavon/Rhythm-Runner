function Player(color, input) {
	Component.call(this, 0, 0, 1, 2, new Date().getTime(), "run");
	this.color = color;
	this.input = input;
	this.jumpPressed = false;
	this.jumpStillPressed = false;
	this.slidePressed = false;
	this.slideStillPressed = false;
	this.stompPressed = false;
	this.stompStillPressed = false;
	this.kickPressed = false;
	this.kickStillPressed = false;
	this.initialTime = new Date().getTime();
	this.initialPosition = this.y;
	this.initialVelocity = 0;
	this.justTouchedFloor = false;
	this.gravity = Scene.gravity;
	this.startedGliding = false;
	
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
					r: t
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
			self.jumpStillPressed = false;
		}
		if (event.key === "ArrowDown") {
			self.stompPressed = false;
			self.stompStillPressed = false;
		}
		if (event.key === "ArrowLeft") {
			self.slidePressed = false;
			self.slideStillPressed = false;
		}
		if (event.key === "ArrowRight") {
			self.kickPressed = false;
			self.kickStillPressed = false;
		}
	});
}

// Extend Component
Player.prototype = Object.create(Component.prototype);
Player.prototype.constructor = Player;

Player.prototype.collide = function(component) {
	console.log("Player crashed into " + Object.getPrototypeOf(component).constructor.name);
};

Player.prototype.draw = function() {
	var anim = this.animations[this.animation](this.epoch / 1000);
	Draw.pose(442.9611511 / 1024, -1421.5787354 / 1024, anim.legFront.r);
	Leg_Rear();
	Draw.pose(566.7496338 / 1024, -1457.517334 / 1024, anim.legFront.r);
	Leg_Front();
	Draw.resetPose();
	Arm_Rear();
	Body();
	Arm_Front();
	Hair();
	Head();
	
	function Leg_Rear() {
		Draw.fill("#E8AC97");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3678, 1.3355);
		Draw.bezierVertex(0.2827, 1.4735, 0.2825, 1.5433, 0.2733, 1.5544);
		Draw.bezierVertex(0.2642, 1.5655, 0.2502, 1.5577, 0.173, 1.6201);
		Draw.bezierVertex(0.1688, 1.6235, 0.3087, 1.6747, 0.3149, 1.6695);
		Draw.bezierVertex(0.3533, 1.6381, 0.3729, 1.6464, 0.3887, 1.6306);
		Draw.bezierVertex(0.4006, 1.6187, 0.3993, 1.6101, 0.4104, 1.5889);
		Draw.bezierVertex(0.4303, 1.5511, 0.4597, 1.489, 0.4816, 1.3845);
		Draw.bezierVertex(0.4817, 1.3845, 0.3708, 1.3307, 0.3678, 1.3355);
		Draw.endShape();
		
		Draw.fill("#CC988F");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3858, 1.3407);
		Draw.bezierVertex(0.3756, 1.3366, 0.3685, 1.3344, 0.3678, 1.3355);
		Draw.bezierVertex(0.2827, 1.4735, 0.2825, 1.5433, 0.2733, 1.5544);
		Draw.bezierVertex(0.2657, 1.5636, 0.2547, 1.5599, 0.2071, 1.594);
		Draw.bezierVertex(0.2114, 1.5977, 0.2146, 1.6016, 0.2161, 1.5989);
		Draw.bezierVertex(0.2247, 1.5835, 0.2644, 1.5716, 0.2763, 1.5631);
		Draw.bezierVertex(0.2882, 1.5547, 0.2924, 1.5266, 0.3226, 1.4529);
		Draw.bezierVertex(0.3425, 1.4044, 0.3673, 1.3633, 0.3858, 1.3407);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.2321, 1.5725);
		Draw.bezierVertex(0.2321, 1.5725, 0.2836, 1.6384, 0.3566, 1.6255);
		Draw.vertex(0.3777, 1.6466);
		Draw.bezierVertex(0.3777, 1.6466, 0.2432, 1.7212, 0.1178, 1.7518);
		Draw.bezierVertex(0.1142, 1.7526, 0.1102, 1.7534, 0.1093, 1.7569);
		Draw.bezierVertex(0.1006, 1.7896, 0.0821, 1.8274, 0.0668, 1.842);
		Draw.bezierVertex(0.0578, 1.8505, 0.0593, 1.8748, 0.0634, 1.8854);
		Draw.bezierVertex(0.0634, 1.8854, 0.0705, 1.913, 0.0609, 1.9219);
		Draw.bezierVertex(0.0505, 1.9314, 0.0407, 1.919, 0.0302, 1.8988);
		Draw.bezierVertex(0.0029, 1.8461, 0.0027, 1.8421, -0.0284, 1.7896);
		Draw.bezierVertex(-0.0352, 1.7782, -0.0401, 1.7672, -0.0425, 1.7597);
		Draw.bezierVertex(-0.0457, 1.7494, -0.0429, 1.7389, -0.0387, 1.7365);
		Draw.bezierVertex(-0.0236, 1.728, -0.0199, 1.7313, -0.0065, 1.7256);
		Draw.bezierVertex(0.0018, 1.7221, 0.004, 1.7228, 0.0164, 1.7119);
		Draw.bezierVertex(0.0324, 1.6979, 0.0408, 1.6957, 0.0577, 1.6977);
		Draw.bezierVertex(0.0695, 1.699, 0.0744, 1.6885, 0.0744, 1.6885);
		Draw.bezierVertex(0.0744, 1.6885, 0.1416, 1.5999, 0.2321, 1.5725);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.2321, 1.5725);
		Draw.bezierVertex(0.1416, 1.5999, 0.0746, 1.6884, 0.0746, 1.6884);
		Draw.bezierVertex(0.0746, 1.6884, 0.0697, 1.6989, 0.0579, 1.6976);
		Draw.bezierVertex(0.041, 1.6956, 0.0326, 1.6979, 0.0166, 1.7118);
		Draw.bezierVertex(0.0041, 1.7227, 0.0019, 1.722, -0.0063, 1.7255);
		Draw.bezierVertex(-0.0197, 1.7313, -0.0234, 1.7279, -0.0385, 1.7364);
		Draw.bezierVertex(-0.0427, 1.7388, -0.0455, 1.7494, -0.0423, 1.7596);
		Draw.bezierVertex(-0.0399, 1.7671, -0.035, 1.7782, -0.0282, 1.7896);
		Draw.bezierVertex(-0.0103, 1.8198, -0.0025, 1.834, 0.006, 1.8507);
		Draw.vertex(0.0321, 1.803);
		Draw.bezierVertex(0.0321, 1.803, 0.0595, 1.7574, 0.0693, 1.7188);
		Draw.bezierVertex(0.0997, 1.6666, 0.1943, 1.602, 0.2394, 1.5804);
		Draw.bezierVertex(0.2359, 1.5766, 0.2321, 1.5725, 0.2321, 1.5725);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1902, 1.6598);
		Draw.vertex(0.2102, 1.5805);
		Draw.bezierVertex(0.2069, 1.5818, 0.2038, 1.5832, 0.2007, 1.5847);
		Draw.vertex(0.1831, 1.6556);
		Draw.vertex(0.08, 1.7186);
		Draw.bezierVertex(0.0783, 1.7195, 0.0776, 1.7216, 0.0786, 1.7233);
		Draw.bezierVertex(0.0796, 1.725, 0.0816, 1.7257, 0.0834, 1.7247);
		Draw.vertex(0.1902, 1.6598);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.2396, 1.6549);
		Draw.vertex(0.2999, 1.6205);
		Draw.bezierVertex(0.2959, 1.6191, 0.292, 1.6175, 0.2883, 1.6158);
		Draw.vertex(0.2326, 1.6499);
		Draw.vertex(0.2204, 1.7008);
		Draw.vertex(0.094, 1.7441);
		Draw.bezierVertex(0.0923, 1.7451, 0.0916, 1.747, 0.0925, 1.7488);
		Draw.bezierVertex(0.0932, 1.7503, 0.0955, 1.7512, 0.0976, 1.7505);
		Draw.vertex(0.2263, 1.7088);
		Draw.vertex(0.2396, 1.6549);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0232, 1.8284);
		Draw.bezierVertex(0.0271, 1.8225, 0.0312, 1.8163, 0.0334, 1.8097);
		Draw.bezierVertex(0.0418, 1.7852, 0.0398, 1.7798, 0.0324, 1.7663);
		Draw.bezierVertex(0.0308, 1.7633, 0.028, 1.7592, 0.0233, 1.7579);
		Draw.bezierVertex(0.019, 1.7567, 0.0142, 1.7581, 0.0073, 1.7622);
		Draw.bezierVertex(-0.0045, 1.7692, -0.0229, 1.7794, -0.0314, 1.784);
		Draw.bezierVertex(-0.0305, 1.7858, -0.0294, 1.7877, -0.0282, 1.7896);
		Draw.bezierVertex(-0.0281, 1.7897, -0.028, 1.7898, -0.0279, 1.79);
		Draw.bezierVertex(-0.0193, 1.7854, -0.0008, 1.7752, 0.011, 1.7682);
		Draw.bezierVertex(0.0159, 1.7652, 0.0194, 1.7641, 0.0217, 1.7646);
		Draw.bezierVertex(0.0228, 1.7649, 0.0243, 1.7657, 0.0265, 1.7696);
		Draw.bezierVertex(0.0328, 1.7812, 0.0347, 1.7847, 0.027, 1.8074);
		Draw.bezierVertex(0.025, 1.8132, 0.0214, 1.8188, 0.0175, 1.8246);
		Draw.bezierVertex(0.0127, 1.8319, 0.0075, 1.8398, 0.0052, 1.8491);
		Draw.bezierVertex(0.007, 1.8527, 0.0089, 1.8564, 0.0109, 1.8604);
		Draw.bezierVertex(0.0104, 1.848, 0.0169, 1.8381, 0.0232, 1.8284);
		Draw.endShape();
	}
	
	function Leg_Front() {
		Draw.fill("#FFC3A1");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4683, 1.4321);
		Draw.bezierVertex(0.5479, 1.5733, 0.6088, 1.6073, 0.6141, 1.6207);
		Draw.bezierVertex(0.6193, 1.6341, 0.6058, 1.6426, 0.623, 1.7402);
		Draw.bezierVertex(0.624, 1.7455, 0.7364, 1.6479, 0.735, 1.6399);
		Draw.bezierVertex(0.726, 1.5911, 0.7428, 1.578, 0.7366, 1.5565);
		Draw.bezierVertex(0.7319, 1.5403, 0.7238, 1.5373, 0.7106, 1.5173);
		Draw.bezierVertex(0.6871, 1.4816, 0.6471, 1.4259, 0.5662, 1.3561);
		Draw.bezierVertex(0.5662, 1.3562, 0.4654, 1.4271, 0.4683, 1.4321);
		Draw.endShape();
		
		Draw.fill("#E2AB9C");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.623, 1.6382);
		Draw.bezierVertex(0.6252, 1.6186, 0.6371, 1.6291, 0.5795, 1.5652);
		Draw.bezierVertex(0.5317, 1.5122, 0.4941, 1.4402, 0.4847, 1.4164);
		Draw.bezierVertex(0.4743, 1.4247, 0.4675, 1.4309, 0.4683, 1.4322);
		Draw.bezierVertex(0.5479, 1.5734, 0.6088, 1.6074, 0.6141, 1.6208);
		Draw.bezierVertex(0.618, 1.6308, 0.6114, 1.6381, 0.6149, 1.6813);
		Draw.vertex(0.6251, 1.6789);
		Draw.bezierVertex(0.6251, 1.6789, 0.6209, 1.6578, 0.623, 1.6382);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.6088, 1.667);
		Draw.bezierVertex(0.6088, 1.667, 0.6913, 1.6529, 0.7146, 1.5825);
		Draw.vertex(0.7432, 1.5739);
		Draw.bezierVertex(0.7432, 1.5739, 0.745, 1.7278, 0.7124, 1.8526);
		Draw.bezierVertex(0.7114, 1.8563, 0.7103, 1.8601, 0.7129, 1.8626);
		Draw.bezierVertex(0.7375, 1.8857, 0.7621, 1.92, 0.7677, 1.9403);
		Draw.bezierVertex(0.7709, 1.9522, 0.793, 1.9625, 0.8043, 1.964);
		Draw.bezierVertex(0.8043, 1.964, 0.832, 1.9708, 0.8353, 1.9835);
		Draw.bezierVertex(0.8388, 1.9972, 0.8231, 2, 0.8004, 1.9996);
		Draw.bezierVertex(0.741, 1.9986, 0.7374, 1.9968, 0.6765, 1.9994);
		Draw.bezierVertex(0.6632, 2, 0.6511, 1.9991, 0.6434, 1.9976);
		Draw.bezierVertex(0.6328, 1.9955, 0.6249, 1.988, 0.6248, 1.9832);
		Draw.bezierVertex(0.6244, 1.9659, 0.6291, 1.9643, 0.6304, 1.9497);
		Draw.bezierVertex(0.6312, 1.9407, 0.6329, 1.9391, 0.6292, 1.9229);
		Draw.bezierVertex(0.6245, 1.9022, 0.6266, 1.8937, 0.6362, 1.8798);
		Draw.bezierVertex(0.643, 1.87, 0.636, 1.8607, 0.636, 1.8607);
		Draw.bezierVertex(0.636, 1.8607, 0.59, 1.7597, 0.6088, 1.667);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.6088, 1.667);
		Draw.bezierVertex(0.59, 1.7597, 0.636, 1.8606, 0.636, 1.8606);
		Draw.bezierVertex(0.636, 1.8606, 0.643, 1.8699, 0.6362, 1.8797);
		Draw.bezierVertex(0.6265, 1.8937, 0.6244, 1.9021, 0.6292, 1.9229);
		Draw.bezierVertex(0.6329, 1.939, 0.6312, 1.9406, 0.6304, 1.9496);
		Draw.bezierVertex(0.6291, 1.9642, 0.6244, 1.9658, 0.6248, 1.9831);
		Draw.bezierVertex(0.6249, 1.9879, 0.6328, 1.9954, 0.6434, 1.9975);
		Draw.bezierVertex(0.6511, 1.9989, 0.6633, 1.9998, 0.6765, 1.9993);
		Draw.bezierVertex(0.7117, 1.9979, 0.7277, 1.9979, 0.7465, 1.9982);
		Draw.vertex(0.717, 1.9525);
		Draw.bezierVertex(0.717, 1.9525, 0.6898, 1.9068, 0.6604, 1.8798);
		Draw.bezierVertex(0.6289, 1.8282, 0.6169, 1.7143, 0.6192, 1.6645);
		Draw.bezierVertex(0.6143, 1.6655, 0.6088, 1.667, 0.6088, 1.667);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.6657, 1.7453);
		Draw.vertex(0.6054, 1.6901);
		Draw.bezierVertex(0.6051, 1.6936, 0.6048, 1.6971, 0.6046, 1.7005);
		Draw.vertex(0.6586, 1.7496);
		Draw.vertex(0.6651, 1.8703);
		Draw.bezierVertex(0.6651, 1.8723, 0.6667, 1.8738, 0.6687, 1.8738);
		Draw.bezierVertex(0.6706, 1.8738, 0.6722, 1.8723, 0.6722, 1.8703);
		Draw.vertex(0.6657, 1.7453);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.685, 1.6995);
		Draw.vertex(0.6833, 1.6302);
		Draw.bezierVertex(0.6802, 1.6331, 0.6769, 1.6357, 0.6736, 1.6382);
		Draw.vertex(0.6772, 1.7034);
		Draw.vertex(0.7162, 1.7383);
		Draw.vertex(0.6944, 1.8701);
		Draw.bezierVertex(0.6944, 1.8722, 0.6957, 1.8736, 0.6979, 1.8737);
		Draw.bezierVertex(0.6994, 1.8738, 0.7014, 1.8722, 0.7018, 1.87);
		Draw.vertex(0.7261, 1.7369);
		Draw.vertex(0.685, 1.6995);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.7351, 1.9724);
		Draw.bezierVertex(0.7316, 1.9661, 0.7281, 1.9596, 0.7234, 1.9545);
		Draw.bezierVertex(0.7059, 1.9355, 0.7002, 1.9347, 0.6848, 1.9348);
		Draw.bezierVertex(0.6813, 1.9348, 0.6765, 1.9353, 0.673, 1.9388);
		Draw.bezierVertex(0.67, 1.942, 0.6688, 1.947, 0.6692, 1.9549);
		Draw.bezierVertex(0.6699, 1.9687, 0.67, 1.9897, 0.67, 1.9994);
		Draw.bezierVertex(0.6722, 1.9994, 0.6743, 1.9993, 0.6765, 1.9992);
		Draw.bezierVertex(0.6767, 1.9992, 0.6769, 1.9992, 0.6771, 1.9992);
		Draw.bezierVertex(0.6771, 1.9895, 0.6769, 1.9684, 0.6763, 1.9546);
		Draw.bezierVertex(0.676, 1.9488, 0.6767, 1.9452, 0.6782, 1.9436);
		Draw.bezierVertex(0.6789, 1.9428, 0.6805, 1.9417, 0.6849, 1.9417);
		Draw.bezierVertex(0.698, 1.9416, 0.702, 1.9416, 0.7184, 1.9592);
		Draw.bezierVertex(0.7225, 1.9637, 0.7257, 1.9694, 0.729, 1.9756);
		Draw.bezierVertex(0.7332, 1.9833, 0.7377, 1.9916, 0.7448, 1.998);
		Draw.bezierVertex(0.7489, 1.9981, 0.753, 1.9982, 0.7575, 1.9983);
		Draw.bezierVertex(0.7462, 1.993, 0.7405, 1.9825, 0.7351, 1.9724);
		Draw.endShape();
	}
	
	function Arm_Rear() {
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(1.0078, 0.7841);
		Draw.vertex(1.0215, 0.765);
		Draw.bezierVertex(1.0233, 0.7625, 1.0261, 0.7611, 1.0289, 0.7599);
		Draw.bezierVertex(1.0437, 0.7532, 1.0519, 0.7421, 1.0581, 0.7356);
		Draw.bezierVertex(1.0644, 0.7292, 1.0694, 0.72, 1.0663, 0.7166);
		Draw.bezierVertex(1.0643, 0.7144, 1.0629, 0.7115, 1.0628, 0.7086);
		Draw.bezierVertex(1.0624, 0.7009, 1.0563, 0.698, 1.0511, 0.6971);
		Draw.bezierVertex(1.0469, 0.6963, 1.0432, 0.6935, 1.0414, 0.6895);
		Draw.bezierVertex(1.0383, 0.6824, 1.0317, 0.6794, 1.027, 0.678);
		Draw.bezierVertex(1.0234, 0.6771, 1.0206, 0.6748, 1.0189, 0.6716);
		Draw.bezierVertex(1.0127, 0.6593, 1.0007, 0.6585, 0.9941, 0.6592);
		Draw.bezierVertex(0.9913, 0.6595, 0.9886, 0.6606, 0.9864, 0.6625);
		Draw.bezierVertex(0.9767, 0.6712, 0.9714, 0.6839, 0.9693, 0.6899);
		Draw.bezierVertex(0.9686, 0.6922, 0.9671, 0.6965, 0.968, 0.705);
		Draw.bezierVertex(0.9688, 0.7134, 0.9677, 0.7146, 0.9651, 0.7205);
		Draw.vertex(0.9443, 0.7509);
		Draw.bezierVertex(0.9394, 0.7581, 0.9423, 0.768, 0.9503, 0.7714);
		Draw.vertex(0.9912, 0.7887);
		Draw.bezierVertex(0.9972, 0.7912, 1.0041, 0.7893, 1.0078, 0.7841);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.9502, 0.7341);
		Draw.bezierVertex(0.874, 0.8083, 0.8277, 0.9014, 0.821, 0.9053);
		Draw.bezierVertex(0.8143, 0.9093, 0.7552, 0.8849, 0.7213, 0.864);
		Draw.bezierVertex(0.5291, 0.7454, 0.5482, 0.8583, 0.5557, 0.8984);
		Draw.bezierVertex(0.5632, 0.9387, 0.6408, 0.9602, 0.6828, 0.9756);
		Draw.bezierVertex(0.7248, 0.991, 0.8369, 1.0301, 0.8598, 1.0169);
		Draw.bezierVertex(0.8826, 1.0037, 1.0183, 0.7772, 1.0183, 0.7772);
		Draw.bezierVertex(1.006, 0.7246, 0.9502, 0.7341, 0.9502, 0.7341);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.8058, 1.0009);
		Draw.bezierVertex(0.7569, 0.9889, 0.6324, 0.955, 0.5571, 0.9037);
		Draw.bezierVertex(0.5701, 0.9405, 0.6427, 0.9608, 0.6828, 0.9756);
		Draw.bezierVertex(0.7248, 0.991, 0.8369, 1.0301, 0.8598, 1.0169);
		Draw.bezierVertex(0.864, 1.0145, 0.8721, 1.0047, 0.8825, 0.9903);
		Draw.bezierVertex(0.882, 0.9908, 0.8622, 1.0147, 0.8058, 1.0009);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.9502, 0.7341);
		Draw.bezierVertex(0.9476, 0.7367, 0.9449, 0.7393, 0.9423, 0.7419);
		Draw.bezierVertex(0.9449, 0.7415, 0.9477, 0.7414, 0.9509, 0.7413);
		Draw.bezierVertex(0.9793, 0.7406, 1, 0.7536, 1.0092, 0.7805);
		Draw.bezierVertex(1.0102, 0.7833, 1.0105, 0.7864, 1.0105, 0.7897);
		Draw.bezierVertex(1.0153, 0.7817, 1.0182, 0.7771, 1.0182, 0.7771);
		Draw.bezierVertex(1.006, 0.7246, 0.9502, 0.7341, 0.9502, 0.7341);
		Draw.endShape();
	}
	
	function Body() {
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.6888, 0.9194);
		Draw.bezierVertex(0.6398, 0.8698, 0.6398, 0.8698, 0.6249, 0.8222);
		Draw.bezierVertex(0.6328, 0.8038, 0.6303, 0.7895, 0.6303, 0.7895);
		Draw.bezierVertex(0.558, 0.7683, 0.5667, 0.76, 0.5371, 0.7527);
		Draw.bezierVertex(0.4319, 0.7272, 0.4286, 0.7418, 0.4286, 0.7418);
		Draw.vertex(0.7109, 0.9513);
		Draw.endShape();
		
		Draw.fill("#FFC3A1");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.6622, 0.6616);
		Draw.vertex(0.4545, 0.6616);
		Draw.bezierVertex(0.4465, 0.6889, 0.4403, 0.7276, 0.4468, 0.7709);
		Draw.bezierVertex(0.4486, 0.7835, 0.4438, 0.8426, 0.4262, 0.8763);
		Draw.bezierVertex(0.395, 0.936, 0.6191, 0.9454, 0.6191, 0.9454);
		Draw.bezierVertex(0.6359, 0.9205, 0.6536, 0.8963, 0.6426, 0.8823);
		Draw.bezierVertex(0.5846, 0.8087, 0.6363, 0.7482, 0.6444, 0.7351);
		Draw.bezierVertex(0.6583, 0.7123, 0.6646, 0.6818, 0.6622, 0.6616);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.7394, 1.0114);
		Draw.bezierVertex(0.7394, 1.0388, 0.735, 1.0555, 0.7253, 1.0683);
		Draw.bezierVertex(0.7253, 1.0683, 0.6945, 1.1104, 0.6854, 1.1371);
		Draw.bezierVertex(0.6266, 1.3093, 0.6223, 1.5118, 0.6223, 1.5118);
		Draw.bezierVertex(0.437, 1.5708, 0.2601, 1.4473, 0.2563, 1.4234);
		Draw.bezierVertex(0.2485, 1.3744, 0.3348, 1.2695, 0.3348, 1.2695);
		Draw.bezierVertex(0.4013, 1.1966, 0.38, 1.146, 0.38, 1.146);
		Draw.bezierVertex(0.352, 1.0525, 0.3692, 0.9193, 0.3884, 0.8521);
		Draw.bezierVertex(0.4012, 0.8071, 0.4369, 0.7847, 0.4369, 0.7847);
		Draw.bezierVertex(0.4379, 0.7669, 0.4285, 0.7417, 0.4285, 0.7417);
		Draw.bezierVertex(0.4827, 0.7484, 0.4832, 0.7556, 0.5153, 0.7726);
		Draw.bezierVertex(0.5477, 0.7896, 0.6025, 0.797, 0.6025, 0.797);
		Draw.bezierVertex(0.6067, 0.8141, 0.5997, 0.8293, 0.5997, 0.8293);
		Draw.bezierVertex(0.5997, 0.8293, 0.6119, 0.8543, 0.6611, 0.894);
		Draw.bezierVertex(0.7181, 0.94, 0.7394, 0.991, 0.7394, 1.0114);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.6588, 1.5054);
		Draw.bezierVertex(0.6951, 1.482, 0.6973, 1.4858, 0.7143, 1.4772);
		Draw.bezierVertex(0.7541, 1.4569, 0.7422, 1.4425, 0.7422, 1.4425);
		Draw.bezierVertex(0.616, 1.2227, 0.7253, 1.0683, 0.7253, 1.0683);
		Draw.bezierVertex(0.6319, 1.1132, 0.6217, 1.4226, 0.6217, 1.4226);
		Draw.bezierVertex(0.6484, 1.4669, 0.6588, 1.5054, 0.6588, 1.5054);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.5998, 0.8);
		Draw.vertex(0.5738, 0.7946);
		Draw.vertex(0.5253, 0.7804);
		Draw.vertex(0.4991, 0.7658);
		Draw.vertex(0.4708, 0.7522);
		Draw.vertex(0.4387, 0.7458);
		Draw.vertex(0.4296, 0.7444);
		Draw.bezierVertex(0.4298, 0.7451, 0.4301, 0.7459, 0.4304, 0.7468);
		Draw.bezierVertex(0.4305, 0.7471, 0.4306, 0.7474, 0.4307, 0.7478);
		Draw.bezierVertex(0.4308, 0.748, 0.4309, 0.7484, 0.431, 0.7487);
		Draw.bezierVertex(0.4311, 0.7491, 0.4313, 0.7496, 0.4313, 0.7501);
		Draw.bezierVertex(0.4314, 0.7504, 0.4315, 0.7508, 0.4316, 0.7511);
		Draw.bezierVertex(0.4318, 0.7517, 0.4319, 0.7522, 0.4321, 0.7528);
		Draw.bezierVertex(0.4322, 0.7531, 0.4323, 0.7534, 0.4324, 0.7537);
		Draw.bezierVertex(0.4329, 0.7556, 0.4335, 0.7575, 0.434, 0.7596);
		Draw.bezierVertex(0.4341, 0.7599, 0.4341, 0.7602, 0.4342, 0.7604);
		Draw.bezierVertex(0.4344, 0.7611, 0.4346, 0.7619, 0.4348, 0.7627);
		Draw.bezierVertex(0.4349, 0.763, 0.4349, 0.7634, 0.435, 0.7637);
		Draw.bezierVertex(0.4352, 0.7645, 0.4353, 0.7653, 0.4354, 0.7661);
		Draw.bezierVertex(0.4355, 0.7664, 0.4355, 0.7667, 0.4356, 0.767);
		Draw.bezierVertex(0.436, 0.7692, 0.4364, 0.7715, 0.4367, 0.7737);
		Draw.bezierVertex(0.4367, 0.774, 0.4368, 0.7743, 0.4368, 0.7747);
		Draw.bezierVertex(0.4369, 0.7755, 0.437, 0.7763, 0.437, 0.7771);
		Draw.bezierVertex(0.437, 0.7775, 0.4371, 0.7779, 0.4371, 0.7782);
		Draw.bezierVertex(0.4371, 0.779, 0.4372, 0.7798, 0.4372, 0.7805);
		Draw.bezierVertex(0.4372, 0.7808, 0.4372, 0.7812, 0.4372, 0.7814);
		Draw.bezierVertex(0.4372, 0.7825, 0.4372, 0.7836, 0.4371, 0.7846);
		Draw.bezierVertex(0.4371, 0.7846, 0.437, 0.7847, 0.4369, 0.7847);
		Draw.bezierVertex(0.4369, 0.7847, 0.4368, 0.7847, 0.4368, 0.7848);
		Draw.bezierVertex(0.4366, 0.7849, 0.4364, 0.7851, 0.4361, 0.7853);
		Draw.bezierVertex(0.4361, 0.7853, 0.436, 0.7853, 0.436, 0.7854);
		Draw.bezierVertex(0.4354, 0.7858, 0.4345, 0.7865, 0.4332, 0.7874);
		Draw.bezierVertex(0.4331, 0.7874, 0.4331, 0.7875, 0.433, 0.7875);
		Draw.bezierVertex(0.4312, 0.7889, 0.4288, 0.7908, 0.4261, 0.7932);
		Draw.bezierVertex(0.4261, 0.7932, 0.426, 0.7933, 0.426, 0.7933);
		Draw.bezierVertex(0.4241, 0.7949, 0.4222, 0.7967, 0.4201, 0.7988);
		Draw.bezierVertex(0.4201, 0.7988, 0.4201, 0.7988, 0.42, 0.7989);
		Draw.bezierVertex(0.419, 0.8, 0.418, 0.8011, 0.4169, 0.8021);
		Draw.bezierVertex(0.4169, 0.8021, 0.4168, 0.8022, 0.4168, 0.8022);
		Draw.bezierVertex(0.4146, 0.8045, 0.4125, 0.807, 0.4104, 0.8098);
		Draw.bezierVertex(0.4103, 0.8099, 0.4103, 0.8099, 0.4102, 0.81);
		Draw.bezierVertex(0.4091, 0.8113, 0.408, 0.8128, 0.4069, 0.8143);
		Draw.bezierVertex(0.4069, 0.8143, 0.4069, 0.8144, 0.4068, 0.8144);
		Draw.bezierVertex(0.4047, 0.8173, 0.4025, 0.8205, 0.4006, 0.8239);
		Draw.bezierVertex(0.4005, 0.8241, 0.4004, 0.8242, 0.4003, 0.8244);
		Draw.bezierVertex(0.3993, 0.8261, 0.3983, 0.8278, 0.3974, 0.8296);
		Draw.bezierVertex(0.3974, 0.8296, 0.3974, 0.8296, 0.3974, 0.8297);
		Draw.bezierVertex(0.3974, 0.8297, 0.3974, 0.8297, 0.3974, 0.8298);
		Draw.bezierVertex(0.3968, 0.831, 0.3961, 0.8322, 0.3955, 0.8335);
		Draw.bezierVertex(0.3953, 0.8338, 0.3952, 0.8342, 0.395, 0.8345);
		Draw.bezierVertex(0.3945, 0.8354, 0.3941, 0.8364, 0.3937, 0.8375);
		Draw.bezierVertex(0.3935, 0.838, 0.3933, 0.8384, 0.3931, 0.8389);
		Draw.bezierVertex(0.3927, 0.8398, 0.3923, 0.8407, 0.3919, 0.8417);
		Draw.bezierVertex(0.3918, 0.8421, 0.3916, 0.8424, 0.3915, 0.8428);
		Draw.bezierVertex(0.3914, 0.8429, 0.3914, 0.8431, 0.3913, 0.8432);
		Draw.bezierVertex(0.3909, 0.8441, 0.3906, 0.8452, 0.3902, 0.8462);
		Draw.bezierVertex(0.39, 0.8467, 0.3899, 0.8471, 0.3897, 0.8476);
		Draw.bezierVertex(0.3893, 0.849, 0.3888, 0.8506, 0.3884, 0.8521);
		Draw.bezierVertex(0.3878, 0.8542, 0.3872, 0.8563, 0.3865, 0.8586);
		Draw.bezierVertex(0.3864, 0.8589, 0.3863, 0.8593, 0.3862, 0.8597);
		Draw.bezierVertex(0.3857, 0.8616, 0.3852, 0.8636, 0.3847, 0.8656);
		Draw.bezierVertex(0.3847, 0.8657, 0.3846, 0.8659, 0.3846, 0.866);
		Draw.bezierVertex(0.3811, 0.8803, 0.3776, 0.8967, 0.3747, 0.9146);
		Draw.vertex(0.3747, 0.9146);
		Draw.bezierVertex(0.3672, 0.9604, 0.3628, 1.0155, 0.3665, 1.0677);
		Draw.bezierVertex(0.3666, 1.0696, 0.3668, 1.0717, 0.3669, 1.0736);
		Draw.bezierVertex(0.3671, 1.0761, 0.3674, 1.0784, 0.3676, 1.0808);
		Draw.bezierVertex(0.3678, 1.083, 0.3681, 1.0853, 0.3683, 1.0875);
		Draw.bezierVertex(0.3686, 1.0897, 0.3688, 1.0919, 0.369, 1.0941);
		Draw.bezierVertex(0.3693, 1.0966, 0.3697, 1.0989, 0.37, 1.1014);
		Draw.bezierVertex(0.3703, 1.1034, 0.3706, 1.1055, 0.371, 1.1075);
		Draw.bezierVertex(0.3714, 1.1101, 0.3719, 1.1126, 0.3724, 1.1151);
		Draw.bezierVertex(0.3728, 1.117, 0.373, 1.1188, 0.3734, 1.1207);
		Draw.bezierVertex(0.374, 1.1235, 0.3747, 1.1264, 0.3753, 1.1291);
		Draw.bezierVertex(0.3757, 1.1306, 0.376, 1.132, 0.3764, 1.1335);
		Draw.bezierVertex(0.3774, 1.1377, 0.3785, 1.1419, 0.3798, 1.146);
		Draw.bezierVertex(0.3798, 1.146, 0.3798, 1.1461, 0.3799, 1.1461);
		Draw.bezierVertex(0.3799, 1.1461, 0.3799, 1.1462, 0.38, 1.1463);
		Draw.bezierVertex(0.38, 1.1464, 0.38, 1.1464, 0.3801, 1.1465);
		Draw.bezierVertex(0.3801, 1.1466, 0.3802, 1.1467, 0.3802, 1.1469);
		Draw.bezierVertex(0.3802, 1.147, 0.3803, 1.1471, 0.3803, 1.1472);
		Draw.bezierVertex(0.3804, 1.1474, 0.3804, 1.1476, 0.3805, 1.1478);
		Draw.bezierVertex(0.3805, 1.1479, 0.3806, 1.1479, 0.3806, 1.1481);
		Draw.bezierVertex(0.3807, 1.1483, 0.3807, 1.1486, 0.3808, 1.1489);
		Draw.bezierVertex(0.3808, 1.149, 0.3809, 1.1492, 0.3809, 1.1493);
		Draw.bezierVertex(0.381, 1.1496, 0.3811, 1.1499, 0.3811, 1.1502);
		Draw.bezierVertex(0.3811, 1.1504, 0.3812, 1.1505, 0.3812, 1.1507);
		Draw.bezierVertex(0.3813, 1.1511, 0.3813, 1.1514, 0.3814, 1.1518);
		Draw.bezierVertex(0.3814, 1.152, 0.3815, 1.1521, 0.3815, 1.1523);
		Draw.bezierVertex(0.3816, 1.1527, 0.3817, 1.1531, 0.3818, 1.1536);
		Draw.bezierVertex(0.3818, 1.1538, 0.3819, 1.154, 0.3819, 1.1542);
		Draw.bezierVertex(0.382, 1.1547, 0.3821, 1.1552, 0.3821, 1.1557);
		Draw.bezierVertex(0.3821, 1.1559, 0.3822, 1.1562, 0.3822, 1.1563);
		Draw.bezierVertex(0.3823, 1.1568, 0.3824, 1.1574, 0.3824, 1.158);
		Draw.bezierVertex(0.3824, 1.1582, 0.3825, 1.1585, 0.3825, 1.1587);
		Draw.bezierVertex(0.3826, 1.1593, 0.3826, 1.1599, 0.3827, 1.1604);
		Draw.bezierVertex(0.3827, 1.1606, 0.3827, 1.1609, 0.3828, 1.1612);
		Draw.bezierVertex(0.3829, 1.1619, 0.3829, 1.1626, 0.3829, 1.1633);
		Draw.bezierVertex(0.3829, 1.1635, 0.3829, 1.1638, 0.3829, 1.164);
		Draw.bezierVertex(0.3829, 1.1647, 0.383, 1.1655, 0.383, 1.1663);
		Draw.bezierVertex(0.383, 1.1664, 0.383, 1.1665, 0.383, 1.1667);
		Draw.bezierVertex(0.383, 1.1696, 0.3829, 1.1728, 0.3826, 1.1763);
		Draw.bezierVertex(0.3806, 1.1981, 0.3701, 1.2308, 0.3346, 1.2697);
		Draw.bezierVertex(0.3346, 1.2697, 0.2523, 1.3697, 0.2558, 1.42);
		Draw.vertex(0.2861, 1.4444);
		Draw.vertex(0.2923, 1.4444);
		Draw.bezierVertex(0.2923, 1.4444, 0.4392, 1.3352, 0.4199, 1.2136);
		Draw.bezierVertex(0.4045, 1.1157, 0.4229, 1.0406, 0.4229, 1.0406);
		Draw.bezierVertex(0.4468, 0.9648, 0.4648, 0.914, 0.4648, 0.914);
		Draw.bezierVertex(0.477, 0.8827, 0.4874, 0.8627, 0.5372, 0.8344);
		Draw.bezierVertex(0.5405, 0.8323, 0.5442, 0.8308, 0.5482, 0.8297);
		Draw.bezierVertex(0.5482, 0.8297, 0.5482, 0.8297, 0.5482, 0.8297);
		Draw.vertex(0.5482, 0.8297);
		Draw.bezierVertex(0.5684, 0.824, 0.5934, 0.8296, 0.5934, 0.8296);
		Draw.vertex(0.5963, 0.8294);
		Draw.vertex(0.6017, 0.8134);
		Draw.vertex(0.5998, 0.8);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.7238, 1.0706);
		Draw.bezierVertex(0.6342, 1.1775, 0.6234, 1.4263, 0.6234, 1.4263);
		Draw.bezierVertex(0.6305, 1.438, 0.6364, 1.4493, 0.6413, 1.4596);
		Draw.bezierVertex(0.6529, 1.3276, 0.6717, 1.2204, 0.6897, 1.1569);
		Draw.bezierVertex(0.7004, 1.1094, 0.7185, 1.0789, 0.7238, 1.0706);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.738, 1.4351);
		Draw.bezierVertex(0.7396, 1.444, 0.7353, 1.4485, 0.7337, 1.4506);
		Draw.bezierVertex(0.7314, 1.4537, 0.726, 1.4588, 0.7091, 1.4672);
		Draw.bezierVertex(0.7041, 1.4696, 0.7007, 1.471, 0.6967, 1.4726);
		Draw.bezierVertex(0.6896, 1.4752, 0.6817, 1.4782, 0.665, 1.4882);
		Draw.bezierVertex(0.6611, 1.4907, 0.6579, 1.4927, 0.6553, 1.4943);
		Draw.bezierVertex(0.6576, 1.5013, 0.6588, 1.5054, 0.6588, 1.5054);
		Draw.bezierVertex(0.6951, 1.482, 0.6973, 1.4858, 0.7143, 1.4772);
		Draw.bezierVertex(0.7541, 1.4569, 0.7422, 1.4425, 0.7422, 1.4425);
		Draw.bezierVertex(0.7407, 1.44, 0.7394, 1.4375, 0.738, 1.4351);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.7228, 1.0719);
		Draw.bezierVertex(0.707, 1.0913, 0.6847, 1.115, 0.6479, 1.2389);
		Draw.bezierVertex(0.6238, 1.3197, 0.6129, 1.4636, 0.6113, 1.5034);
		Draw.bezierVertex(0.5809, 1.5123, 0.5511, 1.5161, 0.5229, 1.5164);
		Draw.bezierVertex(0.4667, 1.5164, 0.4159, 1.5036, 0.3797, 1.4899);
		Draw.bezierVertex(0.3105, 1.4638, 0.2745, 1.4321, 0.2673, 1.4213);
		Draw.bezierVertex(0.2603, 1.4106, 0.2594, 1.4069, 0.2578, 1.4011);
		Draw.bezierVertex(0.2574, 1.4026, 0.2571, 1.4043, 0.2568, 1.4059);
		Draw.bezierVertex(0.2567, 1.4063, 0.2567, 1.4066, 0.2566, 1.407);
		Draw.bezierVertex(0.2566, 1.4071, 0.2566, 1.4072, 0.2566, 1.4072);
		Draw.bezierVertex(0.2565, 1.408, 0.2564, 1.4088, 0.2563, 1.4096);
		Draw.bezierVertex(0.2562, 1.4107, 0.2561, 1.4119, 0.256, 1.4131);
		Draw.bezierVertex(0.256, 1.4136, 0.2559, 1.4141, 0.2559, 1.4146);
		Draw.bezierVertex(0.2558, 1.4159, 0.2558, 1.4173, 0.2559, 1.4186);
		Draw.bezierVertex(0.2559, 1.4188, 0.2559, 1.4189, 0.2559, 1.4192);
		Draw.bezierVertex(0.256, 1.4207, 0.2561, 1.4222, 0.2562, 1.4235);
		Draw.bezierVertex(0.2562, 1.4238, 0.2563, 1.4241, 0.2564, 1.4244);
		Draw.bezierVertex(0.2567, 1.4253, 0.2572, 1.4264, 0.2579, 1.4276);
		Draw.vertex(0.2579, 1.4276);
		Draw.bezierVertex(0.2588, 1.4291, 0.26, 1.4307, 0.2614, 1.4323);
		Draw.bezierVertex(0.2614, 1.4324, 0.2615, 1.4324, 0.2615, 1.4325);
		Draw.bezierVertex(0.2619, 1.4329, 0.2623, 1.4334, 0.2627, 1.4339);
		Draw.bezierVertex(0.2629, 1.4341, 0.263, 1.4343, 0.2632, 1.4344);
		Draw.bezierVertex(0.2636, 1.4348, 0.264, 1.4353, 0.2645, 1.4356);
		Draw.bezierVertex(0.2646, 1.4358, 0.2648, 1.4361, 0.2651, 1.4363);
		Draw.bezierVertex(0.2655, 1.4367, 0.266, 1.4372, 0.2664, 1.4376);
		Draw.bezierVertex(0.2667, 1.4379, 0.267, 1.4381, 0.2672, 1.4384);
		Draw.bezierVertex(0.2676, 1.4388, 0.2681, 1.4393, 0.2686, 1.4396);
		Draw.bezierVertex(0.2688, 1.4399, 0.2691, 1.4402, 0.2695, 1.4405);
		Draw.bezierVertex(0.27, 1.4409, 0.2705, 1.4414, 0.271, 1.4418);
		Draw.bezierVertex(0.2714, 1.4421, 0.2717, 1.4424, 0.2721, 1.4428);
		Draw.bezierVertex(0.2726, 1.4432, 0.273, 1.4437, 0.2736, 1.444);
		Draw.bezierVertex(0.274, 1.4443, 0.2744, 1.4447, 0.2748, 1.445);
		Draw.bezierVertex(0.2753, 1.4454, 0.2759, 1.4459, 0.2765, 1.4463);
		Draw.bezierVertex(0.2769, 1.4467, 0.2773, 1.447, 0.2778, 1.4474);
		Draw.bezierVertex(0.2784, 1.4478, 0.2789, 1.4482, 0.2795, 1.4486);
		Draw.bezierVertex(0.28, 1.449, 0.2805, 1.4494, 0.281, 1.4498);
		Draw.bezierVertex(0.2815, 1.4502, 0.2821, 1.4507, 0.2827, 1.4511);
		Draw.bezierVertex(0.2832, 1.4515, 0.2838, 1.4519, 0.2843, 1.4522);
		Draw.bezierVertex(0.2849, 1.4526, 0.2854, 1.4531, 0.2861, 1.4536);
		Draw.bezierVertex(0.2867, 1.454, 0.2873, 1.4544, 0.2878, 1.4548);
		Draw.bezierVertex(0.2884, 1.4553, 0.2891, 1.4557, 0.2897, 1.4562);
		Draw.bezierVertex(0.2903, 1.4565, 0.2909, 1.457, 0.2916, 1.4574);
		Draw.bezierVertex(0.2923, 1.4578, 0.2929, 1.4583, 0.2936, 1.4587);
		Draw.bezierVertex(0.2942, 1.4591, 0.2948, 1.4596, 0.2955, 1.46);
		Draw.bezierVertex(0.2962, 1.4604, 0.2969, 1.4608, 0.2975, 1.4612);
		Draw.bezierVertex(0.2981, 1.4617, 0.2988, 1.4621, 0.2995, 1.4626);
		Draw.bezierVertex(0.3002, 1.4631, 0.3009, 1.4635, 0.3016, 1.464);
		Draw.bezierVertex(0.3022, 1.4645, 0.303, 1.4648, 0.3038, 1.4653);
		Draw.bezierVertex(0.3045, 1.4657, 0.3052, 1.4662, 0.3059, 1.4666);
		Draw.bezierVertex(0.3066, 1.4671, 0.3074, 1.4676, 0.3082, 1.4681);
		Draw.bezierVertex(0.3089, 1.4685, 0.3096, 1.4689, 0.3104, 1.4693);
		Draw.bezierVertex(0.3112, 1.4698, 0.3121, 1.4703, 0.3129, 1.4708);
		Draw.bezierVertex(0.3136, 1.4712, 0.3143, 1.4716, 0.3149, 1.472);
		Draw.bezierVertex(0.3159, 1.4726, 0.3169, 1.473, 0.3179, 1.4736);
		Draw.bezierVertex(0.3185, 1.474, 0.319, 1.4743, 0.3197, 1.4747);
		Draw.bezierVertex(0.3211, 1.4755, 0.3225, 1.4762, 0.3238, 1.477);
		Draw.bezierVertex(0.3241, 1.4771, 0.3244, 1.4772, 0.3247, 1.4774);
		Draw.bezierVertex(0.3264, 1.4783, 0.3281, 1.4792, 0.3299, 1.4802);
		Draw.bezierVertex(0.3304, 1.4805, 0.3309, 1.4807, 0.3313, 1.4809);
		Draw.bezierVertex(0.3326, 1.4815, 0.3339, 1.4821, 0.3352, 1.4828);
		Draw.bezierVertex(0.3358, 1.4831, 0.3365, 1.4835, 0.3371, 1.4838);
		Draw.bezierVertex(0.3383, 1.4844, 0.3395, 1.485, 0.3406, 1.4854);
		Draw.bezierVertex(0.3413, 1.4858, 0.3421, 1.4861, 0.3428, 1.4865);
		Draw.bezierVertex(0.3439, 1.487, 0.345, 1.4876, 0.3462, 1.4881);
		Draw.bezierVertex(0.347, 1.4885, 0.3478, 1.4888, 0.3485, 1.4892);
		Draw.bezierVertex(0.3496, 1.4896, 0.3508, 1.4901, 0.352, 1.4907);
		Draw.bezierVertex(0.3527, 1.4911, 0.3536, 1.4914, 0.3544, 1.4918);
		Draw.bezierVertex(0.3556, 1.4923, 0.3566, 1.4928, 0.3578, 1.4933);
		Draw.bezierVertex(0.3587, 1.4937, 0.3596, 1.4939, 0.3604, 1.4943);
		Draw.bezierVertex(0.3615, 1.4948, 0.3626, 1.4953, 0.3638, 1.4958);
		Draw.bezierVertex(0.3646, 1.4962, 0.3655, 1.4965, 0.3664, 1.4969);
		Draw.bezierVertex(0.3676, 1.4974, 0.3687, 1.4978, 0.3699, 1.4982);
		Draw.bezierVertex(0.3708, 1.4986, 0.3718, 1.4989, 0.3727, 1.4993);
		Draw.bezierVertex(0.3738, 1.4998, 0.375, 1.5002, 0.3762, 1.5007);
		Draw.bezierVertex(0.3771, 1.5011, 0.378, 1.5014, 0.379, 1.5018);
		Draw.bezierVertex(0.3802, 1.5021, 0.3813, 1.5026, 0.3826, 1.503);
		Draw.bezierVertex(0.3836, 1.5034, 0.3846, 1.5037, 0.3855, 1.504);
		Draw.bezierVertex(0.3867, 1.5044, 0.388, 1.5049, 0.3892, 1.5053);
		Draw.bezierVertex(0.3901, 1.5056, 0.3911, 1.506, 0.3921, 1.5062);
		Draw.bezierVertex(0.3934, 1.5066, 0.3946, 1.507, 0.3958, 1.5075);
		Draw.bezierVertex(0.3968, 1.5078, 0.3978, 1.5081, 0.3987, 1.5085);
		Draw.bezierVertex(0.4, 1.5089, 0.4013, 1.5093, 0.4025, 1.5097);
		Draw.bezierVertex(0.4035, 1.51, 0.4045, 1.5103, 0.4055, 1.5105);
		Draw.bezierVertex(0.4067, 1.5109, 0.4081, 1.5113, 0.4094, 1.5117);
		Draw.bezierVertex(0.4104, 1.512, 0.4113, 1.5123, 0.4123, 1.5126);
		Draw.bezierVertex(0.4137, 1.513, 0.4149, 1.5134, 0.4163, 1.5137);
		Draw.bezierVertex(0.4173, 1.514, 0.4183, 1.5142, 0.4192, 1.5145);
		Draw.bezierVertex(0.4206, 1.5148, 0.422, 1.5151, 0.4234, 1.5155);
		Draw.bezierVertex(0.4244, 1.5158, 0.4254, 1.516, 0.4264, 1.5163);
		Draw.bezierVertex(0.4278, 1.5167, 0.4293, 1.517, 0.4308, 1.5174);
		Draw.bezierVertex(0.4317, 1.5176, 0.4326, 1.5179, 0.4336, 1.5181);
		Draw.bezierVertex(0.4352, 1.5185, 0.4367, 1.5187, 0.4383, 1.519);
		Draw.bezierVertex(0.4392, 1.5192, 0.44, 1.5194, 0.4409, 1.5196);
		Draw.bezierVertex(0.4427, 1.52, 0.4444, 1.5203, 0.4462, 1.5207);
		Draw.bezierVertex(0.4469, 1.5208, 0.4477, 1.521, 0.4483, 1.5211);
		Draw.bezierVertex(0.4533, 1.5221, 0.4583, 1.5229, 0.4634, 1.5236);
		Draw.bezierVertex(0.464, 1.5237, 0.4646, 1.5238, 0.4652, 1.5239);
		Draw.bezierVertex(0.4672, 1.5242, 0.469, 1.5245, 0.471, 1.5247);
		Draw.bezierVertex(0.4719, 1.5248, 0.4728, 1.5249, 0.4737, 1.525);
		Draw.bezierVertex(0.4754, 1.5252, 0.4771, 1.5254, 0.4787, 1.5256);
		Draw.bezierVertex(0.4797, 1.5257, 0.4808, 1.5258, 0.4817, 1.5259);
		Draw.bezierVertex(0.4833, 1.5261, 0.4849, 1.5262, 0.4864, 1.5264);
		Draw.bezierVertex(0.4875, 1.5265, 0.4886, 1.5266, 0.4897, 1.5267);
		Draw.bezierVertex(0.4913, 1.5268, 0.4928, 1.5269, 0.4943, 1.5271);
		Draw.bezierVertex(0.4955, 1.5271, 0.4966, 1.5271, 0.4978, 1.5272);
		Draw.bezierVertex(0.4992, 1.5273, 0.5008, 1.5274, 0.5022, 1.5274);
		Draw.bezierVertex(0.5034, 1.5275, 0.5046, 1.5275, 0.5058, 1.5275);
		Draw.bezierVertex(0.5072, 1.5276, 0.5087, 1.5276, 0.5103, 1.5276);
		Draw.bezierVertex(0.5114, 1.5276, 0.5127, 1.5276, 0.5139, 1.5277);
		Draw.bezierVertex(0.5153, 1.5277, 0.5168, 1.5277, 0.5184, 1.5277);
		Draw.bezierVertex(0.5195, 1.5277, 0.5208, 1.5277, 0.522, 1.5277);
		Draw.bezierVertex(0.5234, 1.5277, 0.5249, 1.5277, 0.5264, 1.5276);
		Draw.bezierVertex(0.5276, 1.5276, 0.5288, 1.5275, 0.5301, 1.5275);
		Draw.bezierVertex(0.5315, 1.5275, 0.533, 1.5274, 0.5346, 1.5273);
		Draw.bezierVertex(0.5358, 1.5272, 0.537, 1.5272, 0.5383, 1.5271);
		Draw.bezierVertex(0.5397, 1.5271, 0.5412, 1.527, 0.5428, 1.5269);
		Draw.bezierVertex(0.544, 1.5268, 0.5453, 1.5267, 0.5466, 1.5266);
		Draw.bezierVertex(0.548, 1.5265, 0.5495, 1.5263, 0.5511, 1.5262);
		Draw.bezierVertex(0.5523, 1.5261, 0.5536, 1.526, 0.5549, 1.5258);
		Draw.bezierVertex(0.5563, 1.5256, 0.5579, 1.5255, 0.5594, 1.5253);
		Draw.bezierVertex(0.5606, 1.5252, 0.5619, 1.525, 0.5632, 1.5248);
		Draw.bezierVertex(0.5647, 1.5246, 0.5662, 1.5244, 0.5678, 1.5242);
		Draw.bezierVertex(0.569, 1.524, 0.5703, 1.5238, 0.5716, 1.5236);
		Draw.bezierVertex(0.5731, 1.5234, 0.5747, 1.5231, 0.5762, 1.5229);
		Draw.bezierVertex(0.5774, 1.5227, 0.5787, 1.5225, 0.5799, 1.5222);
		Draw.bezierVertex(0.5814, 1.5219, 0.583, 1.5216, 0.5846, 1.5213);
		Draw.bezierVertex(0.5858, 1.5211, 0.587, 1.5208, 0.5883, 1.5206);
		Draw.bezierVertex(0.5898, 1.5203, 0.5915, 1.5199, 0.5932, 1.5195);
		Draw.bezierVertex(0.5943, 1.5192, 0.5955, 1.519, 0.5968, 1.5187);
		Draw.bezierVertex(0.5984, 1.5184, 0.6002, 1.518, 0.6019, 1.5175);
		Draw.bezierVertex(0.6029, 1.5172, 0.6041, 1.5169, 0.6052, 1.5166);
		Draw.bezierVertex(0.607, 1.5161, 0.609, 1.5156, 0.6108, 1.515);
		Draw.bezierVertex(0.6118, 1.5147, 0.6127, 1.5146, 0.6137, 1.5143);
		Draw.bezierVertex(0.6165, 1.5135, 0.6193, 1.5126, 0.6222, 1.5117);
		Draw.bezierVertex(0.6222, 1.5117, 0.6264, 1.3091, 0.6854, 1.137);
		Draw.bezierVertex(0.693, 1.115, 0.7152, 1.0825, 0.7228, 1.0719);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4367, 0.7484);
		Draw.bezierVertex(0.4707, 0.7532, 0.4794, 0.7583, 0.4954, 0.7678);
		Draw.bezierVertex(0.5003, 0.7706, 0.5058, 0.7738, 0.5128, 0.7775);
		Draw.bezierVertex(0.5408, 0.7924, 0.5845, 0.7999, 0.5979, 0.802);
		Draw.bezierVertex(0.5999, 0.8153, 0.5948, 0.8269, 0.5948, 0.827);
		Draw.vertex(0.5938, 0.8294);
		Draw.vertex(0.5949, 0.8317);
		Draw.bezierVertex(0.5954, 0.8327, 0.608, 0.8555, 0.6547, 0.894);
		Draw.vertex(0.654, 0.9064);
		Draw.bezierVertex(0.701, 0.9444, 0.7299, 0.9726, 0.7392, 1.0069);
		Draw.vertex(0.7393, 1.0069);
		Draw.bezierVertex(0.7365, 0.9843, 0.7145, 0.937, 0.6614, 0.8942);
		Draw.vertex(0.6614, 0.8942);
		Draw.vertex(0.6614, 0.8942);
		Draw.bezierVertex(0.6122, 0.8545, 0.6, 0.8295, 0.6, 0.8295);
		Draw.bezierVertex(0.6, 0.8295, 0.607, 0.8143, 0.6028, 0.7972);
		Draw.bezierVertex(0.6028, 0.7972, 0.5479, 0.7898, 0.5156, 0.7728);
		Draw.bezierVertex(0.4834, 0.7558, 0.483, 0.7486, 0.4288, 0.7419);
		Draw.bezierVertex(0.4288, 0.7419, 0.4295, 0.7437, 0.4304, 0.7465);
		Draw.bezierVertex(0.4318, 0.7473, 0.434, 0.748, 0.4367, 0.7484);
		Draw.endShape();
	}
	
	function Arm_Front() {
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.2186, 1.1266);
		Draw.vertex(0.209, 1.1479);
		Draw.bezierVertex(0.2077, 1.1508, 0.2079, 1.1539, 0.2082, 1.157);
		Draw.bezierVertex(0.2099, 1.1731, 0.2043, 1.1857, 0.2019, 1.1944);
		Draw.bezierVertex(0.1994, 1.2031, 0.194, 1.2121, 0.1896, 1.2111);
		Draw.bezierVertex(0.1866, 1.2104, 0.1835, 1.2107, 0.1808, 1.2121);
		Draw.bezierVertex(0.1739, 1.2156, 0.1684, 1.2118, 0.1648, 1.2077);
		Draw.bezierVertex(0.162, 1.2045, 0.1577, 1.2027, 0.1534, 1.2032);
		Draw.bezierVertex(0.1457, 1.204, 0.1398, 1.1999, 0.1363, 1.1964);
		Draw.bezierVertex(0.1338, 1.1938, 0.1303, 1.1925, 0.1268, 1.1927);
		Draw.bezierVertex(0.1129, 1.1935, 0.1062, 1.1835, 0.1035, 1.1774);
		Draw.bezierVertex(0.1023, 1.1748, 0.102, 1.1719, 0.1025, 1.1691);
		Draw.bezierVertex(0.1052, 1.1563, 0.1135, 1.1454, 0.1177, 1.1405);
		Draw.bezierVertex(0.1192, 1.1388, 0.1223, 1.1354, 0.13, 1.1318);
		Draw.bezierVertex(0.1377, 1.1284, 0.1382, 1.1268, 0.142, 1.1216);
		Draw.vertex(0.1578, 1.0882);
		Draw.bezierVertex(0.1615, 1.0803, 0.1716, 1.0778, 0.1786, 1.0831);
		Draw.vertex(0.2142, 1.1099);
		Draw.bezierVertex(0.2194, 1.1138, 0.2212, 1.1207, 0.2186, 1.1266);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.237, 0.8234);
		Draw.bezierVertex(0.2037, 0.8604, 0.1822, 0.9734, 0.1822, 0.9734);
		Draw.bezierVertex(0.1745, 1.0357, 0.145, 1.1048, 0.145, 1.1048);
		Draw.bezierVertex(0.1578, 1.1579, 0.2184, 1.1379, 0.2184, 1.1379);
		Draw.bezierVertex(0.2425, 1.0518, 0.2792, 0.9546, 0.2902, 0.9464);
		Draw.bezierVertex(0.3013, 0.9382, 0.4021, 0.9632, 0.4021, 0.9632);
		Draw.bezierVertex(0.5484, 1.0008, 0.563, 0.9081, 0.563, 0.9081);
		Draw.bezierVertex(0.5765, 0.8213, 0.4952, 0.8218, 0.4952, 0.8218);
		Draw.bezierVertex(0.4952, 0.8218, 0.2569, 0.8014, 0.237, 0.8234);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.1466, 1.1103);
		Draw.bezierVertex(0.1469, 1.1112, 0.1473, 1.1121, 0.1477, 1.1131);
		Draw.bezierVertex(0.1479, 1.1135, 0.1479, 1.1139, 0.1481, 1.1143);
		Draw.bezierVertex(0.1486, 1.1153, 0.149, 1.1163, 0.1495, 1.1173);
		Draw.bezierVertex(0.1498, 1.1179, 0.1502, 1.1185, 0.1505, 1.1191);
		Draw.bezierVertex(0.1507, 1.1195, 0.1509, 1.1198, 0.1511, 1.1202);
		Draw.bezierVertex(0.1524, 1.1225, 0.1539, 1.1245, 0.1555, 1.1264);
		Draw.bezierVertex(0.1555, 1.1264, 0.1555, 1.1264, 0.1555, 1.1264);
		Draw.bezierVertex(0.191, 1.0483, 0.2118, 0.9102, 0.2218, 0.884);
		Draw.bezierVertex(0.2317, 0.8578, 0.2418, 0.8429, 0.2605, 0.8305);
		Draw.bezierVertex(0.2854, 0.8141, 0.3231, 0.8135, 0.3236, 0.8134);
		Draw.bezierVertex(0.2805, 0.8132, 0.2443, 0.8155, 0.237, 0.8236);
		Draw.bezierVertex(0.2037, 0.8606, 0.1822, 0.9736, 0.1822, 0.9736);
		Draw.bezierVertex(0.1745, 1.0359, 0.145, 1.105, 0.145, 1.105);
		Draw.bezierVertex(0.1454, 1.1064, 0.1458, 1.1078, 0.1462, 1.1092);
		Draw.bezierVertex(0.1464, 1.1094, 0.1465, 1.1099, 0.1466, 1.1103);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.5245, 0.9515);
		Draw.bezierVertex(0.5123, 0.9594, 0.5016, 0.9675, 0.4768, 0.9719);
		Draw.bezierVertex(0.5539, 0.9667, 0.5631, 0.9082, 0.5631, 0.9082);
		Draw.bezierVertex(0.5766, 0.8214, 0.4953, 0.8219, 0.4953, 0.8219);
		Draw.bezierVertex(0.4953, 0.8219, 0.4943, 0.8218, 0.4925, 0.8217);
		Draw.vertex(0.4925, 0.8217);
		Draw.vertex(0.4925, 0.8217);
		Draw.bezierVertex(0.5104, 0.8273, 0.5306, 0.8343, 0.5423, 0.8488);
		Draw.bezierVertex(0.5541, 0.8635, 0.5552, 0.8919, 0.553, 0.9049);
		Draw.bezierVertex(0.5508, 0.918, 0.5433, 0.9394, 0.5245, 0.9515);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.2184, 1.1379);
		Draw.bezierVertex(0.2194, 1.134, 0.2206, 1.1301, 0.2217, 1.1261);
		Draw.bezierVertex(0.2187, 1.1277, 0.2159, 1.1286, 0.2146, 1.129);
		Draw.bezierVertex(0.2105, 1.1303, 0.1879, 1.1344, 0.1719, 1.1255);
		Draw.bezierVertex(0.1639, 1.121, 0.1555, 1.1124, 0.1527, 1.1017);
		Draw.bezierVertex(0.1519, 1.098, 0.1511, 1.0942, 0.1509, 1.0896);
		Draw.bezierVertex(0.1473, 1.0991, 0.1448, 1.1048, 0.1448, 1.1048);
		Draw.bezierVertex(0.1578, 1.1579, 0.2184, 1.1379, 0.2184, 1.1379);
		Draw.endShape();
	}
	
	function Hair() {
		Draw.fill("#F2304D");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.5331, 0.0636);
		Draw.bezierVertex(0.5331, 0.0636, 0.4271, -0.0589, 0.2581, 0.0348);
		Draw.bezierVertex(0.0891, 0.1284, 0.5331, 0.0636, 0.5331, 0.0636);
		Draw.endShape();
		
		Draw.fill("#FF2400");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.5146, 0.1721);
		Draw.bezierVertex(0.5317, 0.1553, 0.6023, -0.0046, 0.4179, 0.0242);
		Draw.bezierVertex(0.4179, 0.0242, 0.542, 0.0617, 0.4628, 0.1371);
		Draw.bezierVertex(0.3836, 0.2125, 0.4977, 0.1888, 0.5146, 0.1721);
		Draw.endShape();
		
		Draw.fill("#EF4552");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1516, 0.4861);
		Draw.bezierVertex(0.148, 0.4961, 0.1443, 0.5087, 0.14, 0.5229);
		Draw.bezierVertex(0.1357, 0.537, 0.131, 0.5526, 0.1259, 0.5692);
		Draw.bezierVertex(0.1029, 0.6279, 0.1001, 0.712, 0.0411, 0.7432);
		Draw.bezierVertex(0.0691, 0.7151, 0.0804, 0.6684, 0.072, 0.6278);
		Draw.bezierVertex(0.072, 0.6465, 0.0636, 0.6684, 0.0495, 0.6776);
		Draw.bezierVertex(-0.0179, 0.7088, -0.0516, 0.7836, -0.0993, 0.8365);
		Draw.bezierVertex(-0.0515, 0.7513, 0.0063, 0.6632, 0.0078, 0.5592);
		Draw.bezierVertex(0.0079, 0.553, 0.0078, 0.5469, 0.0075, 0.5406);
		Draw.bezierVertex(-0.0009, 0.5531, -0.0065, 0.5687, -0.0128, 0.5835);
		Draw.bezierVertex(-0.0149, 0.5885, -0.017, 0.5935, -0.0191, 0.5984);
		Draw.bezierVertex(-0.0444, 0.6586, -0.0696, 0.7205, -0.1328, 0.7369);
		Draw.bezierVertex(-0.0962, 0.7159, -0.0731, 0.6766, -0.0538, 0.6322);
		Draw.bezierVertex(-0.0517, 0.6273, -0.0495, 0.6224, -0.0475, 0.6173);
		Draw.bezierVertex(-0.0462, 0.6139, -0.045, 0.6104, -0.0437, 0.6071);
		Draw.bezierVertex(-0.0424, 0.6038, -0.041, 0.6004, -0.0397, 0.5971);
		Draw.bezierVertex(-0.0261, 0.5687, -0.0148, 0.5344, -0.0004, 0.5048);
		Draw.bezierVertex(0.0016, 0.5009, 0.0036, 0.4971, 0.0057, 0.4934);
		Draw.bezierVertex(0.0099, 0.4859, 0.0142, 0.4788, 0.0188, 0.4721);
		Draw.bezierVertex(0.0134, 0.4754, 0.0078, 0.4787, 0.0022, 0.482);
		Draw.bezierVertex(-0.0006, 0.4837, -0.0033, 0.4854, -0.0062, 0.4871);
		Draw.bezierVertex(-0.0099, 0.4896, -0.0133, 0.4925, -0.0166, 0.4956);
		Draw.bezierVertex(-0.02, 0.4995, -0.0234, 0.5033, -0.0267, 0.507);
		Draw.bezierVertex(-0.03, 0.5108, -0.0332, 0.5146, -0.0363, 0.5183);
		Draw.bezierVertex(-0.0404, 0.5236, -0.056, 0.5443, -0.0737, 0.5624);
		Draw.bezierVertex(-0.0653, 0.553, -0.0574, 0.5257, -0.0561, 0.5223);
		Draw.bezierVertex(-0.0535, 0.5153, -0.0509, 0.5085, -0.0479, 0.5018);
		Draw.bezierVertex(-0.046, 0.4979, -0.0439, 0.4942, -0.0418, 0.4907);
		Draw.bezierVertex(-0.0374, 0.4836, -0.0324, 0.4771, -0.0261, 0.4715);
		Draw.bezierVertex(-0.0229, 0.4687, 0.0219, 0.439, 0.038, 0.4065);
		Draw.bezierVertex(0.0437, 0.3951, 0.0495, 0.3833, 0.0527, 0.3692);
		Draw.bezierVertex(0.0133, 0.3599, -0.0239, 0.4256, -0.0624, 0.4533);
		Draw.bezierVertex(-0.0568, 0.4471, -0.0512, 0.4408, -0.0457, 0.4353);
		Draw.bezierVertex(-0.0433, 0.4319, -0.0409, 0.4285, -0.0386, 0.4251);
		Draw.bezierVertex(-0.0316, 0.4147, -0.0247, 0.4043, -0.015, 0.3958);
		Draw.bezierVertex(-0.0118, 0.3922, -0.0086, 0.3887, -0.0053, 0.3853);
		Draw.bezierVertex(0.0014, 0.3784, 0.0084, 0.3722, 0.0161, 0.367);
		Draw.bezierVertex(0.0198, 0.3645, 0.0235, 0.3619, 0.0271, 0.3594);
		Draw.bezierVertex(0.0564, 0.3389, 0.0817, 0.3125, 0.0976, 0.2758);
		Draw.bezierVertex(0.1031, 0.2571, 0.106, 0.229, 0.1259, 0.2155);
		Draw.bezierVertex(0.1259, 0.2155, 0.1247, 0.1993, 0.1283, 0.1762);
		Draw.bezierVertex(0.1392, 0.1066, 0.1933, -0.026, 0.4532, 0.0266);
		Draw.bezierVertex(0.4532, 0.0266, 0.5171, 0.0271, 0.5239, 0.1173);
		Draw.bezierVertex(0.5331, 0.2415, 0.2508, 0.2036, 0.1516, 0.4861);
		Draw.endShape();
		
		Draw.fill("#E03870");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1621, 0.4419);
		Draw.bezierVertex(0.1621, 0.4419, 0.1538, 0.4513, 0.1435, 0.4656);
		Draw.bezierVertex(0.133, 0.4799, 0.1205, 0.4991, 0.1119, 0.5187);
		Draw.bezierVertex(0.0973, 0.5749, 0.0998, 0.6367, 0.0913, 0.6929);
		Draw.bezierVertex(0.1081, 0.6461, 0.1281, 0.5999, 0.1292, 0.5486);
		Draw.bezierVertex(0.1306, 0.527, 0.1335, 0.5096, 0.1369, 0.4955);
		Draw.bezierVertex(0.1473, 0.4535, 0.1621, 0.4419, 0.1621, 0.4419);
		Draw.endShape();
		
		Draw.fill("#F451A3");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1219, 0.3883);
		Draw.bezierVertex(0.1219, 0.3883, 0.1136, 0.3989, 0.1035, 0.4158);
		Draw.bezierVertex(0.0934, 0.433, 0.0841, 0.451, 0.0776, 0.4699);
		Draw.bezierVertex(0.0748, 0.4814, 0.0692, 0.4938, 0.0692, 0.5063);
		Draw.bezierVertex(0.0721, 0.5593, 0.0637, 0.6092, 0.0355, 0.6528);
		Draw.bezierVertex(0.0664, 0.6061, 0.0917, 0.55, 0.0926, 0.4919);
		Draw.bezierVertex(0.0936, 0.4632, 0.1009, 0.4373, 0.1079, 0.4186);
		Draw.bezierVertex(0.115, 0.3999, 0.1219, 0.3883, 0.1219, 0.3883);
		Draw.endShape();
		
		Draw.fill("#E0223D");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0945, 0.4861);
		Draw.bezierVertex(0.0692, 0.5438, 0.086, 0.6029, 0.086, 0.6621);
		Draw.bezierVertex(0.086, 0.6185, 0.1001, 0.578, 0.0879, 0.5362);
		Draw.bezierVertex(0.0867, 0.5259, 0.0876, 0.5118, 0.0945, 0.4861);
		Draw.endShape();
		
		Draw.fill("#F456B8");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4119, 0.1453);
		Draw.bezierVertex(0.4282, 0.0297, 0.3617, 0.0618, 0.3617, 0.0618);
		Draw.bezierVertex(0.3265, 0.0862, 0.3148, 0.1195, 0.3148, 0.1195);
		Draw.bezierVertex(0.3006, 0.1384, 0.2704, 0.1618, 0.2704, 0.1618);
		Draw.bezierVertex(0.2509, 0.1858, 0.2822, 0.2053, 0.2822, 0.2053);
		Draw.vertex(0.4119, 0.1453);
		Draw.endShape();
		
		Draw.fill("#FC636B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0369, 0.355);
		Draw.bezierVertex(0.0524, 0.3163, 0.0692, 0.2759, 0.088, 0.2426);
		Draw.bezierVertex(0.1025, 0.2162, 0.1131, 0.1985, 0.1153, 0.1841);
		Draw.bezierVertex(0.1207, 0.1485, 0.1446, 0.0944, 0.1689, 0.0546);
		Draw.bezierVertex(0.1933, 0.0147, 0.2555, 0.023, 0.2555, 0.023);
		Draw.bezierVertex(0.2136, 0.063, 0.1558, 0.1261, 0.1558, 0.1261);
		Draw.bezierVertex(0.1551, 0.1617, 0.1352, 0.2184, 0.1352, 0.2184);
		Draw.bezierVertex(0.1309, 0.2268, 0.1226, 0.2393, 0.1125, 0.2533);
		Draw.bezierVertex(0.1024, 0.2674, 0.0907, 0.2833, 0.0795, 0.2984);
		Draw.bezierVertex(0.0571, 0.3285, 0.0369, 0.355, 0.0369, 0.355);
		Draw.endShape();
		
		Draw.fill("#FF7F5C");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1621, 0.1429);
		Draw.bezierVertex(0.1511, 0.1626, 0.1289, 0.1828, 0.1289, 0.1828);
		Draw.bezierVertex(0.1463, 0.1567, 0.1443, 0.1508, 0.1518, 0.1127);
		Draw.bezierVertex(0.1758, -0.0099, 0.3021, 0.0146, 0.3021, 0.0146);
		Draw.bezierVertex(0.2243, 0.0847, 0.1732, 0.1231, 0.1621, 0.1429);
		Draw.endShape();
		
		Draw.fill("#EA433B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3148, 0.0193);
		Draw.bezierVertex(0.2904, -0.0083, 0.2564, 0.0101, 0.2564, 0.0101);
		Draw.bezierVertex(0.1758, 0.0612, 0.1621, 0.3399, 0.1621, 0.3399);
		Draw.bezierVertex(0.1621, 0.3399, 0.1967, 0.2601, 0.208, 0.2147);
		Draw.bezierVertex(0.2472, 0.0575, 0.3314, 0.0232, 0.3314, 0.0232);
		Draw.vertex(0.3148, 0.0193);
		Draw.endShape();
		
		Draw.fill("#FC636B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0208, 0.7011);
		Draw.bezierVertex(0.0468, 0.6746, 0.058, 0.6621, 0.0721, 0.6278);
		Draw.bezierVertex(0.0748, 0.6543, 0.0604, 0.6764, 0.0459, 0.6882);
		Draw.bezierVertex(0.0324, 0.6992, 0.0208, 0.7011, 0.0208, 0.7011);
		Draw.endShape();
		
		Draw.fill("#FC636B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0344, 0.7577);
		Draw.bezierVertex(0.058, 0.7244, 0.0747, 0.6838, 0.0721, 0.6278);
		Draw.bezierVertex(0.0819, 0.658, 0.084, 0.6884, 0.068, 0.7288);
		Draw.bezierVertex(0.0615, 0.745, 0.0344, 0.7577, 0.0344, 0.7577);
		Draw.endShape();
		
		Draw.fill("#E0223D");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1066, 0.3596);
		Draw.bezierVertex(0.0887, 0.3926, 0.0521, 0.3967, 0.0262, 0.4181);
		Draw.bezierVertex(0.0225, 0.4211, 0.019, 0.4245, 0.0158, 0.4284);
		Draw.bezierVertex(0.0183, 0.4241, 0.0211, 0.4203, 0.0241, 0.4168);
		Draw.bezierVertex(0.0271, 0.4133, 0.0306, 0.4101, 0.034, 0.407);
		Draw.bezierVertex(0.055, 0.3891, 0.0821, 0.3785, 0.0959, 0.3503);
		Draw.bezierVertex(0.1062, 0.3351, 0.1294, 0.3186, 0.1437, 0.3111);
		Draw.bezierVertex(0.1579, 0.3037, 0.1634, 0.3051, 0.1382, 0.3259);
		Draw.bezierVertex(0.1383, 0.3259, 0.1204, 0.3381, 0.1066, 0.3596);
		Draw.endShape();
		
		Draw.fill("#E0223D");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.064, 0.4995);
		Draw.bezierVertex(0.0553, 0.5376, 0.044, 0.575, 0.0216, 0.6062);
		Draw.bezierVertex(0.0356, 0.6155, 0.0469, 0.6062, 0.0524, 0.5937);
		Draw.bezierVertex(0.058, 0.5719, 0.0608, 0.5531, 0.0618, 0.5311);
		Draw.bezierVertex(0.0645, 0.5128, 0.064, 0.4995, 0.064, 0.4995);
		Draw.endShape();
		
		Draw.fill("#F99964");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0729, 0.3927);
		Draw.bezierVertex(0.0612, 0.4059, 0.0505, 0.4188, 0.0392, 0.4298);
		Draw.bezierVertex(0.0278, 0.4409, 0.0159, 0.4502, 0.0019, 0.4564);
		Draw.bezierVertex(-0.0007, 0.4581, -0.0032, 0.4597, -0.0059, 0.4612);
		Draw.bezierVertex(-0.0088, 0.4625, -0.0115, 0.464, -0.0142, 0.4657);
		Draw.bezierVertex(-0.0168, 0.4675, -0.0192, 0.4692, -0.0216, 0.4713);
		Draw.bezierVertex(-0.0276, 0.4777, -0.0334, 0.4843, -0.0389, 0.491);
		Draw.bezierVertex(-0.0416, 0.4944, -0.0442, 0.4979, -0.0468, 0.5014);
		Draw.bezierVertex(-0.0502, 0.5071, -0.0538, 0.5135, -0.0572, 0.5201);
		Draw.bezierVertex(-0.0589, 0.5234, -0.0605, 0.5269, -0.0622, 0.5303);
		Draw.bezierVertex(-0.0656, 0.5438, -0.0722, 0.5513, -0.075, 0.5637);
		Draw.bezierVertex(-0.0666, 0.5574, -0.0633, 0.5465, -0.0569, 0.5386);
		Draw.bezierVertex(-0.0549, 0.536, -0.0525, 0.5331, -0.0505, 0.5307);
		Draw.bezierVertex(-0.0464, 0.5258, -0.042, 0.5209, -0.0378, 0.5176);
		Draw.bezierVertex(-0.0336, 0.5143, -0.0307, 0.5105, -0.0271, 0.5069);
		Draw.bezierVertex(-0.0236, 0.5033, -0.02, 0.4996, -0.0166, 0.4957);
		Draw.bezierVertex(-0.0143, 0.4938, -0.0118, 0.4918, -0.0093, 0.49);
		Draw.bezierVertex(-0.0068, 0.4883, -0.0042, 0.4865, -0.0016, 0.485);
		Draw.bezierVertex(0.0012, 0.4833, 0.0039, 0.4815, 0.0065, 0.4798);
		Draw.bezierVertex(0.0146, 0.4743, 0.0223, 0.4682, 0.0295, 0.4609);
		Draw.bezierVertex(0.0417, 0.4495, 0.0524, 0.4357, 0.0608, 0.4185);
		Draw.bezierVertex(0.0694, 0.4033, 0.0729, 0.3927, 0.0729, 0.3927);
		Draw.endShape();
		
		Draw.fill("#F99964");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0523, 0.3692);
		Draw.bezierVertex(0.0703, 0.3425, 0.074, 0.3223, 0.084, 0.306);
		Draw.bezierVertex(0.065, 0.321, 0.0542, 0.3337, 0.0356, 0.3494);
		Draw.bezierVertex(0.0319, 0.3525, 0.0281, 0.3557, 0.0243, 0.3586);
		Draw.bezierVertex(0.0106, 0.3661, -0.0003, 0.3774, -0.0104, 0.3897);
		Draw.bezierVertex(-0.0139, 0.3938, -0.0172, 0.398, -0.0205, 0.4023);
		Draw.bezierVertex(-0.0275, 0.4123, -0.0346, 0.4212, -0.0416, 0.4296);
		Draw.bezierVertex(-0.0439, 0.4323, -0.0576, 0.4472, -0.0627, 0.4535);
		Draw.bezierVertex(-0.0571, 0.4504, -0.0272, 0.4169, -0.0199, 0.4084);
		Draw.bezierVertex(-0.0163, 0.405, -0.0127, 0.4016, -0.0088, 0.3987);
		Draw.bezierVertex(0.0104, 0.3843, 0.0523, 0.3692, 0.0523, 0.3692);
		Draw.endShape();
		
		Draw.fill("#F99964");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0322, 0.4783);
		Draw.bezierVertex(0.023, 0.4835, 0.0153, 0.4903, 0.0081, 0.498);
		Draw.bezierVertex(0.0058, 0.5006, 0.0034, 0.5033, 0.0011, 0.5062);
		Draw.bezierVertex(-0.0044, 0.5132, -0.0099, 0.5206, -0.0151, 0.5284);
		Draw.bezierVertex(-0.0178, 0.5323, -0.0408, 0.5768, -0.0642, 0.6474);
		Draw.bezierVertex(-0.0778, 0.6887, -0.094, 0.7257, -0.133, 0.7369);
		Draw.bezierVertex(-0.1134, 0.7338, -0.0937, 0.7244, -0.0797, 0.7089);
		Draw.bezierVertex(-0.0517, 0.6777, -0.041, 0.6354, -0.0241, 0.5975);
		Draw.bezierVertex(-0.022, 0.5927, -0.0198, 0.588, -0.0175, 0.5834);
		Draw.bezierVertex(-0.0123, 0.5749, -0.0096, 0.5656, -0.0013, 0.5572);
		Draw.bezierVertex(0.0019, 0.5531, 0.0052, 0.5492, 0.0088, 0.5454);
		Draw.bezierVertex(0.0281, 0.508, 0.0322, 0.4783, 0.0322, 0.4783);
		Draw.endShape();
		
		Draw.fill("#FF7697");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0415, 0.5281);
		Draw.bezierVertex(-0.0121, 0.6278, -0.029, 0.7493, -0.0992, 0.8366);
		Draw.bezierVertex(-0.0318, 0.7587, 0.0468, 0.6652, 0.0333, 0.5498);
		Draw.bezierVertex(0.0369, 0.5359, 0.0415, 0.5281, 0.0415, 0.5281);
		Draw.endShape();
		
		Draw.fill("#E0223D");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.2203, 0.0545);
		Draw.bezierVertex(0.1854, 0.0802, 0.1529, 0.2163, 0.1529, 0.2163);
		Draw.bezierVertex(0.1422, 0.2434, 0.1348, 0.4053, 0.1348, 0.4053);
		Draw.vertex(0.1728, 0.2393);
		Draw.bezierVertex(0.1833, 0.1351, 0.2203, 0.0545, 0.2203, 0.0545);
		Draw.endShape();
		
		Draw.fill("#F451A3");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4487, 0.1187);
		Draw.bezierVertex(0.5114, -0.0067, 0.3604, 0.0464, 0.3604, 0.0464);
		Draw.bezierVertex(0.4744, 0.025, 0.4487, 0.1187, 0.4487, 0.1187);
		Draw.endShape();
		
		Draw.fill("#FF4D6F");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0415, 0.5281);
		Draw.bezierVertex(0.0104, 0.553, 0.0104, 0.6029, -0.0037, 0.6403);
		Draw.bezierVertex(0.0047, 0.6217, 0.0131, 0.6029, 0.0159, 0.5843);
		Draw.bezierVertex(0.0215, 0.6154, 0.0243, 0.6435, 0.0188, 0.6746);
		Draw.bezierVertex(0.0328, 0.6528, 0.0384, 0.6248, 0.0302, 0.5958);
		Draw.bezierVertex(0.0292, 0.5582, 0.0415, 0.5281, 0.0415, 0.5281);
		Draw.endShape();
		
		Draw.fill("#FFD37B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0166, 0.497);
		Draw.bezierVertex(0.0143, 0.5001, 0.0119, 0.5032, 0.0097, 0.5065);
		Draw.bezierVertex(0.0074, 0.5098, 0.0053, 0.5131, 0.0031, 0.5164);
		Draw.bezierVertex(-0.0122, 0.5407, -0.0206, 0.5688, -0.036, 0.5934);
		Draw.bezierVertex(-0.0379, 0.5968, -0.0397, 0.6001, -0.0415, 0.6035);
		Draw.bezierVertex(-0.0451, 0.6103, -0.0484, 0.617, -0.0511, 0.624);
		Draw.bezierVertex(-0.0531, 0.6284, -0.0553, 0.6327, -0.0574, 0.637);
		Draw.bezierVertex(-0.0767, 0.6758, -0.0988, 0.7117, -0.1329, 0.7369);
		Draw.bezierVertex(-0.0673, 0.7283, -0.0494, 0.6623, -0.0283, 0.601);
		Draw.bezierVertex(-0.0264, 0.5954, -0.0244, 0.5898, -0.0225, 0.5845);
		Draw.bezierVertex(-0.0122, 0.5655, -0.0066, 0.5406, 0.0073, 0.5262);
		Draw.bezierVertex(0.0087, 0.5222, 0.01, 0.5184, 0.011, 0.5148);
		Draw.bezierVertex(0.0145, 0.5044, 0.0166, 0.497, 0.0166, 0.497);
		Draw.endShape();
		
		Draw.fill("#FFD37B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.0749, 0.5637);
		Draw.bezierVertex(-0.0733, 0.554, -0.0595, 0.5233, -0.0579, 0.5199);
		Draw.bezierVertex(-0.0548, 0.5132, -0.0513, 0.5067, -0.047, 0.5008);
		Draw.bezierVertex(-0.0445, 0.4971, -0.0419, 0.4935, -0.0392, 0.4899);
		Draw.bezierVertex(-0.0336, 0.483, -0.0274, 0.4765, -0.0203, 0.4707);
		Draw.bezierVertex(-0.0169, 0.4687, -0.0131, 0.4667, -0.0087, 0.4649);
		Draw.bezierVertex(-0.004, 0.4624, 0.0007, 0.4598, 0.0053, 0.4571);
		Draw.bezierVertex(0.0099, 0.4545, 0.0143, 0.4518, 0.0186, 0.4489);
		Draw.bezierVertex(0.0288, 0.4418, 0.0387, 0.4338, 0.0478, 0.4244);
		Draw.bezierVertex(0.0379, 0.4431, 0.0225, 0.4548, 0.0058, 0.465);
		Draw.bezierVertex(0.0016, 0.4676, -0.0027, 0.4701, -0.0069, 0.4727);
		Draw.bezierVertex(-0.0107, 0.4745, -0.0142, 0.4769, -0.0174, 0.4795);
		Draw.bezierVertex(-0.025, 0.4863, -0.031, 0.4947, -0.0365, 0.5036);
		Draw.bezierVertex(-0.0393, 0.508, -0.0419, 0.5126, -0.0444, 0.5173);
		Draw.bezierVertex(-0.0462, 0.5216, -0.0483, 0.5249, -0.0503, 0.5284);
		Draw.bezierVertex(-0.0522, 0.5319, -0.0546, 0.535, -0.0567, 0.538);
		Draw.bezierVertex(-0.0605, 0.5432, -0.0655, 0.5499, -0.0699, 0.5569);
		Draw.bezierVertex(-0.073, 0.5613, -0.0749, 0.5637, -0.0749, 0.5637);
		Draw.endShape();
		
		Draw.fill("#FF5A81");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.054, 0.4359);
		Draw.bezierVertex(0.058, 0.419, 0.0692, 0.4129, 0.0805, 0.4066);
		Draw.bezierVertex(0.1001, 0.391, 0.1085, 0.363, 0.1226, 0.3412);
		Draw.bezierVertex(0.117, 0.3724, 0.1058, 0.4035, 0.0786, 0.4158);
		Draw.bezierVertex(0.0655, 0.4185, 0.054, 0.4359, 0.054, 0.4359);
		Draw.endShape();
		
		Draw.fill("#FF7697");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0693, 0.4352);
		Draw.bezierVertex(0.0546, 0.4427, 0.0495, 0.4585, 0.0449, 0.4747);
		Draw.bezierVertex(0.0403, 0.491, 0.0348, 0.5042, 0.0236, 0.5176);
		Draw.bezierVertex(0.0378, 0.5026, 0.0525, 0.4917, 0.0578, 0.4669);
		Draw.bezierVertex(0.0594, 0.4449, 0.0693, 0.4352, 0.0693, 0.4352);
		Draw.endShape();
		
		Draw.fill("#FFD37B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.084, 0.306);
		Draw.bezierVertex(0.066, 0.326, 0.0469, 0.3449, 0.0263, 0.3612);
		Draw.bezierVertex(0.0229, 0.364, 0.0193, 0.3666, 0.016, 0.3693);
		Draw.bezierVertex(0.0083, 0.3748, 0.0013, 0.381, -0.0055, 0.3876);
		Draw.bezierVertex(-0.0088, 0.3909, -0.012, 0.3943, -0.0152, 0.3978);
		Draw.bezierVertex(-0.0235, 0.4068, -0.0312, 0.4169, -0.0389, 0.4266);
		Draw.bezierVertex(-0.0414, 0.4298, -0.044, 0.433, -0.0466, 0.4361);
		Draw.bezierVertex(-0.0515, 0.4409, -0.057, 0.4472, -0.0627, 0.4534);
		Draw.bezierVertex(-0.0598, 0.45, -0.0365, 0.4183, -0.0233, 0.396);
		Draw.bezierVertex(-0.021, 0.3921, 0.0056, 0.3568, 0.0187, 0.3455);
		Draw.bezierVertex(0.05, 0.3186, 0.0825, 0.281, 0.1068, 0.2525);
		Draw.bezierVertex(0.1206, 0.2371, 0.1313, 0.2249, 0.1313, 0.2249);
		Draw.bezierVertex(0.1313, 0.2249, 0.1216, 0.2427, 0.1108, 0.2617);
		Draw.bezierVertex(0.0999, 0.2808, 0.0881, 0.3013, 0.084, 0.306);
		Draw.endShape();
		
		Draw.fill("#FFD37B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.0992, 0.8366);
		Draw.bezierVertex(-0.0668, 0.7741, -0.0263, 0.7089, 0.0019, 0.6403);
		Draw.bezierVertex(0.0103, 0.6995, -0.0402, 0.74, -0.0604, 0.791);
		Draw.bezierVertex(-0.0809, 0.816, -0.0992, 0.8366, -0.0992, 0.8366);
		Draw.endShape();
		
		Draw.fill("#F6CFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.498, 0.071);
		Draw.bezierVertex(0.4951, 0.0523, 0.4572, 0.044, 0.4135, 0.0525);
		Draw.bezierVertex(0.3697, 0.061, 0.3365, 0.083, 0.3395, 0.1017);
		Draw.bezierVertex(0.3424, 0.1203, 0.3803, 0.1286, 0.424, 0.1201);
		Draw.bezierVertex(0.4678, 0.1116, 0.501, 0.0896, 0.498, 0.071);
		Draw.endShape();
		
		Draw.fill("#FFD37B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0676, 0.6848);
		Draw.bezierVertex(0.0523, 0.7214, 0.0327, 0.7525, 0.0158, 0.7868);
		Draw.bezierVertex(0.0242, 0.7712, 0.0326, 0.7619, 0.043, 0.7507);
		Draw.bezierVertex(0.0569, 0.7355, 0.0671, 0.7133, 0.0676, 0.6848);
		Draw.endShape();
		
		Draw.fill("#FF7697");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0793, 0.353);
		Draw.bezierVertex(0.0793, 0.353, 0.0882, 0.3134, 0.1127, 0.2879);
		Draw.bezierVertex(0.125, 0.2752, 0.1332, 0.2541, 0.1383, 0.2362);
		Draw.bezierVertex(0.1434, 0.2184, 0.1455, 0.2035, 0.1455, 0.2035);
		Draw.bezierVertex(0.1455, 0.2035, 0.1419, 0.2463, 0.1263, 0.2827);
		Draw.bezierVertex(0.1211, 0.2948, 0.114, 0.3058, 0.1063, 0.3155);
		Draw.bezierVertex(0.0797, 0.3499, 0.0793, 0.353, 0.0793, 0.353);
		Draw.endShape();
		
		Draw.fill("#F94230");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0961, 0.2344);
		Draw.bezierVertex(0.0692, 0.2478, 0.0552, 0.282, 0.0468, 0.3132);
		Draw.bezierVertex(0.0552, 0.2883, 0.0721, 0.2727, 0.0921, 0.258);
		Draw.bezierVertex(0.0921, 0.258, 0.1139, 0.2494, 0.1312, 0.2061);
		Draw.bezierVertex(0.1311, 0.2061, 0.1214, 0.2264, 0.0961, 0.2344);
		Draw.endShape();
		
		Draw.fill("#E03870");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1052, 0.5401);
		Draw.bezierVertex(0.1052, 0.5401, 0.1015, 0.524, 0.1019, 0.5028);
		Draw.bezierVertex(0.1022, 0.4817, 0.1065, 0.4554, 0.1219, 0.4345);
		Draw.bezierVertex(0.1296, 0.424, 0.1352, 0.41, 0.1394, 0.3948);
		Draw.bezierVertex(0.1518, 0.3494, 0.1507, 0.2939, 0.1507, 0.2939);
		Draw.bezierVertex(0.1507, 0.2939, 0.1676, 0.3717, 0.1456, 0.4208);
		Draw.bezierVertex(0.1346, 0.4454, 0.1263, 0.4617, 0.1198, 0.4785);
		Draw.bezierVertex(0.1134, 0.4953, 0.1085, 0.5129, 0.1052, 0.5401);
		Draw.endShape();
		
		Draw.fill("#FF7697");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1586, 0.0808);
		Draw.bezierVertex(0.1586, 0.0808, 0.1414, 0.1131, 0.1296, 0.1477);
		Draw.bezierVertex(0.1243, 0.1632, 0.1133, 0.1825, 0.1035, 0.198);
		Draw.bezierVertex(0.0938, 0.2136, 0.0854, 0.2253, 0.0854, 0.2253);
		Draw.bezierVertex(0.0854, 0.2253, 0.0986, 0.213, 0.1129, 0.1945);
		Draw.bezierVertex(0.12, 0.1853, 0.1273, 0.1745, 0.1335, 0.1629);
		Draw.bezierVertex(0.1396, 0.1513, 0.1431, 0.1385, 0.1465, 0.1264);
		Draw.bezierVertex(0.1586, 0.0832, 0.1586, 0.0808, 0.1586, 0.0808);
		Draw.endShape();
		
		Draw.fill("#FF9CB8");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.2022, 0.0517);
		Draw.bezierVertex(0.1816, 0.0849, 0.1675, 0.1194, 0.1494, 0.153);
		Draw.bezierVertex(0.1572, 0.137, 0.1602, 0.1242, 0.1637, 0.1087);
		Draw.bezierVertex(0.1683, 0.0877, 0.1804, 0.0667, 0.2022, 0.0517);
		Draw.endShape();
		
		Draw.fill("#F451A3");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3212, 0.0577);
		Draw.bezierVertex(0.3212, 0.0577, 0.2776, 0.0842, 0.2672, 0.1186);
		Draw.bezierVertex(0.2567, 0.1529, 0.2321, 0.172, 0.2321, 0.172);
		Draw.bezierVertex(0.2321, 0.172, 0.2777, 0.1333, 0.2876, 0.1087);
		Draw.bezierVertex(0.2975, 0.0841, 0.3212, 0.0577, 0.3212, 0.0577);
		Draw.endShape();
		
		Draw.fill("#EF5952");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3037, 0.0346);
		Draw.bezierVertex(0.3037, 0.0346, 0.2688, 0.0298, 0.2336, 0.0971);
		Draw.bezierVertex(0.1983, 0.1644, 0.2207, 0.1969, 0.182, 0.2323);
		Draw.bezierVertex(0.182, 0.2323, 0.2087, 0.1777, 0.2106, 0.1313);
		Draw.bezierVertex(0.2126, 0.085, 0.2747, 0.0158, 0.3037, 0.0346);
		Draw.endShape();
	}
	
	function Head() {
		Draw.fill("#FFD3B6");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(1.015, 0.3607);
		Draw.bezierVertex(0.9965, 0.5587, 0.9445, 0.6514, 0.9017, 0.6833);
		Draw.bezierVertex(0.8157, 0.7473, 0.6966, 0.7625, 0.6379, 0.7666);
		Draw.bezierVertex(0.5647, 0.7717, 0.5301, 0.781, 0.3405, 0.6827);
		Draw.bezierVertex(0.2897, 0.6564, 0.2582, 0.6234, 0.2248, 0.5805);
		Draw.bezierVertex(0.1324, 0.4612, 0.1988, 0.3095, 0.1988, 0.3095);
		Draw.bezierVertex(0.3636, 0.0932, 0.5715, 0.1137, 0.5715, 0.1137);
		Draw.bezierVertex(0.9391, 0.1132, 1.015, 0.3607, 1.015, 0.3607);
		Draw.endShape();
		
		Draw.fill("#E2AB9C");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4286, 0.7257);
		Draw.bezierVertex(0.057, 0.431, 0.3604, 0.1833, 0.3604, 0.1833);
		Draw.vertex(0.334, 0.1827);
		Draw.bezierVertex(0.2891, 0.2115, 0.2425, 0.2521, 0.1989, 0.3093);
		Draw.bezierVertex(0.1989, 0.3093, 0.1325, 0.4611, 0.2249, 0.5803);
		Draw.bezierVertex(0.2582, 0.6232, 0.2898, 0.6563, 0.3406, 0.6825);
		Draw.bezierVertex(0.3745, 0.7003, 0.4035, 0.7144, 0.4286, 0.7257);
		Draw.vertex(0.4286, 0.7257);
		Draw.endShape();
		
		Draw.fill("#E0B2A0");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1896, 0.4146);
		Draw.bezierVertex(0.1516, 0.3418, 0.1366, 0.4104, 0.1366, 0.4104);
		Draw.bezierVertex(0.1336, 0.4296, 0.1323, 0.4455, 0.1322, 0.4589);
		Draw.bezierVertex(0.1321, 0.4722, 0.1333, 0.4829, 0.1352, 0.4916);
		Draw.bezierVertex(0.1391, 0.5092, 0.1457, 0.5186, 0.1514, 0.5249);
		Draw.bezierVertex(0.1775, 0.5543, 0.1984, 0.5191, 0.1984, 0.5191);
		Draw.bezierVertex(0.1755, 0.4681, 0.1896, 0.4146, 0.1896, 0.4146);
		Draw.endShape();
		
		Draw.fill("#CEA284");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1734, 0.4184);
		Draw.bezierVertex(0.1734, 0.4184, 0.1515, 0.3886, 0.146, 0.4254);
		Draw.bezierVertex(0.1359, 0.4935, 0.1745, 0.5143, 0.182, 0.511);
		Draw.bezierVertex(0.1896, 0.5077, 0.1781, 0.4748, 0.1701, 0.4601);
		Draw.bezierVertex(0.1645, 0.4498, 0.1845, 0.4347, 0.1734, 0.4184);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.8658, 0.4274);
		Draw.bezierVertex(0.8658, 0.5427, 0.8055, 0.5347, 0.8055, 0.5347);
		Draw.bezierVertex(0.7651, 0.525, 0.7867, 0.4488, 0.7867, 0.4488);
		Draw.vertex(0.83, 0.4326);
		Draw.vertex(0.8658, 0.4274);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.5778, 0.4437);
		Draw.bezierVertex(0.5194, 0.3765, 0.3876, 0.3684, 0.3876, 0.3684);
		Draw.vertex(0.4408, 0.3795);
		Draw.vertex(0.3972, 0.3787);
		Draw.bezierVertex(0.4408, 0.3795, 0.4939, 0.4011, 0.4939, 0.4011);
		Draw.bezierVertex(0.434, 0.3845, 0.4075, 0.3889, 0.4075, 0.3889);
		Draw.bezierVertex(0.5504, 0.4143, 0.5778, 0.4437, 0.5778, 0.4437);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.5247, 0.4947);
		Draw.bezierVertex(0.5233, 0.4998, 0.5218, 0.5037, 0.5202, 0.5068);
		Draw.bezierVertex(0.5171, 0.513, 0.5112, 0.5167, 0.5049, 0.5164);
		Draw.bezierVertex(0.4033, 0.5125, 0.4109, 0.433, 0.4109, 0.433);
		Draw.bezierVertex(0.4144, 0.4012, 0.4266, 0.3917, 0.4266, 0.3917);
		Draw.bezierVertex(0.4703, 0.3923, 0.5087, 0.4104, 0.5087, 0.4104);
		Draw.bezierVertex(0.5143, 0.421, 0.5187, 0.4313, 0.5219, 0.4399);
		Draw.bezierVertex(0.5283, 0.4574, 0.5296, 0.4768, 0.5247, 0.4947);
		Draw.endShape();
		
		Draw.fill("#D83616");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.5499, 0.3826);
		Draw.bezierVertex(0.5521, 0.3732, 0.566, 0.3517, 0.5524, 0.3477);
		Draw.bezierVertex(0.5255, 0.3398, 0.4097, 0.2983, 0.4097, 0.2983);
		Draw.bezierVertex(0.4551, 0.3657, 0.5499, 0.3826, 0.5499, 0.3826);
		Draw.endShape();
		
		Draw.fill("#D83616");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.8121, 0.3768);
		Draw.bezierVertex(0.8836, 0.3519, 0.8956, 0.3577, 0.8956, 0.3577);
		Draw.vertex(0.8656, 0.374);
		Draw.bezierVertex(0.8656, 0.374, 0.8315, 0.3902, 0.8073, 0.4049);
		Draw.bezierVertex(0.7955, 0.412, 0.7677, 0.4149, 0.7677, 0.4149);
		Draw.bezierVertex(0.7579, 0.3903, 0.7626, 0.3824, 0.7626, 0.3824);
		Draw.bezierVertex(0.7917, 0.3837, 0.8121, 0.3768, 0.8121, 0.3768);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.6503, 0.6533);
		Draw.vertex(0.6569, 0.6541);
		Draw.bezierVertex(0.6587, 0.6269, 0.5869, 0.6304, 0.5869, 0.6304);
		Draw.vertex(0.5874, 0.634);
		Draw.bezierVertex(0.6583, 0.6343, 0.6503, 0.6533, 0.6503, 0.6533);
		Draw.endShape();
		
		Draw.fill("#FF5629");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.9882, 0.233);
		Draw.bezierVertex(1.0126, 0.2456, 1.0266, 0.2749, 1.0266, 0.2749);
		Draw.bezierVertex(1.0202, 0.2103, 0.8871, 0.1656, 0.8871, 0.1656);
		Draw.bezierVertex(0.9473, 0.1759, 0.9834, 0.207, 0.9834, 0.207);
		Draw.bezierVertex(0.9561, 0.1678, 0.8047, 0.0931, 0.6888, 0.0865);
		Draw.bezierVertex(0.6033, 0.0817, 0.4786, 0.0352, 0.3505, 0.0969);
		Draw.bezierVertex(0.2864, 0.1277, 0.1869, 0.2279, 0.1703, 0.2697);
		Draw.bezierVertex(0.1443, 0.3354, 0.148, 0.386, 0.148, 0.386);
		Draw.bezierVertex(0.1642, 0.3275, 0.1841, 0.2858, 0.1841, 0.2858);
		Draw.bezierVertex(0.1841, 0.2858, 0.1127, 0.447, 0.1775, 0.6079);
		Draw.bezierVertex(0.1775, 0.6079, 0.1644, 0.4475, 0.2178, 0.3229);
		Draw.bezierVertex(0.2178, 0.3229, 0.1759, 0.3889, 0.2121, 0.5496);
		Draw.bezierVertex(0.2121, 0.5496, 0.2225, 0.3836, 0.2515, 0.3048);
		Draw.bezierVertex(0.2515, 0.3048, 0.2503, 0.3684, 0.234, 0.4665);
		Draw.bezierVertex(0.234, 0.4665, 0.2669, 0.2649, 0.3585, 0.2284);
		Draw.bezierVertex(0.3585, 0.2284, 0.2883, 0.2768, 0.2793, 0.4308);
		Draw.bezierVertex(0.2793, 0.4308, 0.3013, 0.3689, 0.3505, 0.2884);
		Draw.bezierVertex(0.3817, 0.2372, 0.4286, 0.2207, 0.4693, 0.1784);
		Draw.bezierVertex(0.4693, 0.1784, 0.4226, 0.2416, 0.4303, 0.328);
		Draw.bezierVertex(0.4303, 0.328, 0.431, 0.2366, 0.5255, 0.1875);
		Draw.bezierVertex(0.5255, 0.1875, 0.5255, 0.245, 0.5109, 0.2893);
		Draw.bezierVertex(0.5109, 0.2893, 0.5652, 0.2283, 0.5605, 0.1503);
		Draw.bezierVertex(0.5605, 0.1503, 0.6026, 0.1775, 0.6063, 0.2205);
		Draw.bezierVertex(0.6063, 0.2205, 0.6075, 0.2806, 0.6953, 0.3696);
		Draw.bezierVertex(0.6953, 0.3696, 0.663, 0.3258, 0.6609, 0.2894);
		Draw.bezierVertex(0.6588, 0.2528, 0.685, 0.2515, 0.6605, 0.1681);
		Draw.bezierVertex(0.6605, 0.1681, 0.6949, 0.2025, 0.7343, 0.2285);
		Draw.bezierVertex(0.7669, 0.25, 0.789, 0.3064, 0.8002, 0.3544);
		Draw.bezierVertex(0.8002, 0.3544, 0.7979, 0.2888, 0.7899, 0.2674);
		Draw.bezierVertex(0.7638, 0.1977, 0.7497, 0.2126, 0.6987, 0.1574);
		Draw.bezierVertex(0.6987, 0.1574, 0.7922, 0.1668, 0.84, 0.2214);
		Draw.bezierVertex(0.84, 0.2214, 0.9208, 0.3134, 0.9315, 0.4235);
		Draw.bezierVertex(0.9315, 0.4235, 0.9592, 0.2742, 0.8521, 0.1958);
		Draw.bezierVertex(0.8521, 0.1958, 0.9588, 0.2431, 1.0384, 0.4144);
		Draw.bezierVertex(1.0383, 0.4141, 1.0417, 0.2686, 0.9882, 0.233);
		Draw.endShape();
		
		Draw.fill("#420870");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.5008, 0.5045);
		Draw.bezierVertex(0.4693, 0.5003, 0.4431, 0.4772, 0.4431, 0.4772);
		Draw.bezierVertex(0.4585, 0.4646, 0.4548, 0.4396, 0.4548, 0.4396);
		Draw.bezierVertex(0.4796, 0.4338, 0.5094, 0.4331, 0.5094, 0.4331);
		Draw.bezierVertex(0.5131, 0.4441, 0.5167, 0.4488, 0.5162, 0.4757);
		Draw.bezierVertex(0.5157, 0.5024, 0.5008, 0.5045, 0.5008, 0.5045);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.8469, 0.4474);
		Draw.vertex(0.7902, 0.4664);
		Draw.bezierVertex(0.7795, 0.4966, 0.7902, 0.5003, 0.7902, 0.5003);
		Draw.bezierVertex(0.8192, 0.4812, 0.8038, 0.4738, 0.8038, 0.4738);
		Draw.vertex(0.8469, 0.4474);
		Draw.endShape();
		
		Draw.fill("#420870");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.8558, 0.4448);
		Draw.bezierVertex(0.8469, 0.5021, 0.8086, 0.5258, 0.8086, 0.5258);
		Draw.bezierVertex(0.7884, 0.5211, 0.7937, 0.5039, 0.7937, 0.5039);
		Draw.bezierVertex(0.8208, 0.4903, 0.8162, 0.4737, 0.8162, 0.4737);
		Draw.vertex(0.8558, 0.4448);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4252, 0.424);
		Draw.bezierVertex(0.4168, 0.4612, 0.4357, 0.4726, 0.4357, 0.4726);
		Draw.bezierVertex(0.4607, 0.4377, 0.4391, 0.4366, 0.4391, 0.4366);
		Draw.bezierVertex(0.4552, 0.431, 0.4989, 0.4299, 0.4989, 0.4299);
		Draw.vertex(0.4252, 0.424);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.7493, 0.4682);
		Draw.bezierVertex(0.7948, 0.4149, 0.8985, 0.4078, 0.8985, 0.4078);
		Draw.vertex(0.8567, 0.4169);
		Draw.vertex(0.891, 0.416);
		Draw.bezierVertex(0.8567, 0.4169, 0.8149, 0.4342, 0.8149, 0.4342);
		Draw.bezierVertex(0.862, 0.4208, 0.8829, 0.4241, 0.8829, 0.4241);
		Draw.bezierVertex(0.7708, 0.4449, 0.7493, 0.4682, 0.7493, 0.4682);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3504, 0.0969);
		Draw.bezierVertex(0.2863, 0.1277, 0.1868, 0.2279, 0.1702, 0.2697);
		Draw.bezierVertex(0.1442, 0.3354, 0.1479, 0.386, 0.1479, 0.386);
		Draw.bezierVertex(0.1641, 0.3275, 0.184, 0.2858, 0.184, 0.2858);
		Draw.bezierVertex(0.184, 0.2858, 0.1126, 0.447, 0.1774, 0.6079);
		Draw.bezierVertex(0.1774, 0.6079, 0.1642, 0.4592, 0.2134, 0.3334);
		Draw.bezierVertex(0.2015, 0.3651, 0.1821, 0.4173, 0.212, 0.5496);
		Draw.bezierVertex(0.212, 0.5496, 0.2224, 0.3836, 0.2514, 0.3048);
		Draw.bezierVertex(0.2514, 0.3048, 0.2502, 0.3684, 0.2339, 0.4665);
		Draw.bezierVertex(0.2339, 0.4665, 0.2436, 0.4072, 0.267, 0.3472);
		Draw.bezierVertex(0.2452, 0.173, 0.38, 0.0963, 0.456, 0.0672);
		Draw.bezierVertex(0.4216, 0.0709, 0.3861, 0.0797, 0.3504, 0.0969);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3961, 0.2189);
		Draw.bezierVertex(0.3961, 0.2189, 0.3733, 0.2216, 0.3585, 0.2282);
		Draw.bezierVertex(0.3585, 0.2282, 0.2883, 0.2766, 0.2793, 0.4306);
		Draw.bezierVertex(0.2792, 0.4307, 0.3086, 0.258, 0.3961, 0.2189);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4693, 0.1782);
		Draw.vertex(0.4667, 0.182);
		Draw.bezierVertex(0.457, 0.1969, 0.4236, 0.2538, 0.4303, 0.3278);
		Draw.bezierVertex(0.4295, 0.2313, 0.487, 0.1704, 0.487, 0.1704);
		Draw.bezierVertex(0.4769, 0.1771, 0.4693, 0.1782, 0.4693, 0.1782);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.5255, 0.1874);
		Draw.bezierVertex(0.5255, 0.1874, 0.5255, 0.2449, 0.5109, 0.2892);
		Draw.bezierVertex(0.5252, 0.2678, 0.5422, 0.1828, 0.5422, 0.1828);
		Draw.bezierVertex(0.5302, 0.1839, 0.5255, 0.1874, 0.5255, 0.1874);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.6195, 0.2281);
		Draw.bezierVertex(0.6064, 0.1659, 0.5605, 0.1502, 0.5605, 0.1502);
		Draw.bezierVertex(0.5605, 0.1502, 0.6026, 0.1774, 0.6063, 0.2204);
		Draw.bezierVertex(0.6063, 0.2204, 0.6075, 0.2805, 0.6953, 0.3695);
		Draw.bezierVertex(0.6672, 0.3325, 0.6326, 0.2903, 0.6195, 0.2281);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.7585, 0.2414);
		Draw.bezierVertex(0.7431, 0.2196, 0.6605, 0.1679, 0.6605, 0.1679);
		Draw.bezierVertex(0.6605, 0.1679, 0.6949, 0.2023, 0.7343, 0.2283);
		Draw.bezierVertex(0.7669, 0.2498, 0.789, 0.3062, 0.8002, 0.3542);
		Draw.bezierVertex(0.7961, 0.3126, 0.7739, 0.2632, 0.7585, 0.2414);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.8028, 0.1911);
		Draw.vertex(0.8028, 0.1911);
		Draw.bezierVertex(0.8164, 0.1992, 0.8293, 0.2091, 0.8398, 0.2212);
		Draw.bezierVertex(0.8398, 0.2212, 0.9206, 0.3132, 0.9313, 0.4233);
		Draw.bezierVertex(0.9184, 0.2417, 0.8028, 0.1911, 0.8028, 0.1911);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.8656, 0.2029);
		Draw.bezierVertex(0.8969, 0.2217, 0.9759, 0.2798, 1.0383, 0.4141);
		Draw.bezierVertex(1.0162, 0.2987, 0.9047, 0.2254, 0.8656, 0.2029);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(1.0266, 0.2749);
		Draw.bezierVertex(1.0202, 0.2103, 0.8871, 0.1656, 0.8871, 0.1656);
		Draw.bezierVertex(0.8871, 0.1656, 1.0048, 0.2213, 1.0266, 0.2749);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.8871, 0.1656);
		Draw.bezierVertex(0.9473, 0.1759, 0.9834, 0.207, 0.9834, 0.207);
		Draw.bezierVertex(0.9834, 0.207, 0.9375, 0.1568, 0.8871, 0.1656);
		Draw.endShape();
	}
};
