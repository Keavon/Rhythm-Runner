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
					x: Math.sin(t), y: Math.cos(t), r: Math.sin(t) / 10
				},
				legRear: {
					x: 0, y: 0, r: Math.sin(t - Math.PI / 3) + 0.5
				},
				legFront: {
					x: 0, y: 0, r: Math.cos(t) - 0.5
				},
				armRear: {
					x: 0, y: 0, r: Math.sin(t)
				},
				armFront: {
					x: 0, y: 0, r: Math.cos(t)
				},
				head: {
					x: 0, y: 0, r: Math.sin(t) / 10
				},
				hair: {
					x: 0, y: 0, r: Math.cos(t) / 10
				}
			};
		},
		"stomp": function(t) {
			return {
				body: {
					x: 10, y: 10, r: 0.5
				},
				legRear: {
					x: 10, y: 10, r: 0.5
				},
				legFront: {
					x: 10, y: 10, r: 0.5
				}
			};
		},
		"slide": function(t) {
			return {
				body: {
					x: 20, y: 20, r: 1
				},
				legRear: {
					x: 20, y: 20, r: 1
				},
				legFront: {
					x: 20, y: 20, r: 1
				}
			};
		},
		"kick": function(t) {
			return {
				body: {
					x: 30, y: 30, r: 1.5
				},
				legRear: {
					x: 30, y: 30, r: 1.5
				},
				legFront: {
					x: 30, y: 30, r: 1.5
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
	Draw.pushPose(anim.body.x, anim.body.y, anim.body.r, 512.1096802 / 1024, -1394.625 / 1024);
	{
		Draw.pushPose(anim.legFront.x, anim.legFront.y, anim.legFront.r, 54.6399574 / 1024, -62.892395 / 1024);
		Leg_Front();
		Draw.popPose();
		
		Draw.pushPose(anim.legRear.x, anim.legRear.y, anim.legRear.r, -69.1485214 / 1024, -26.9537964 / 1024);
		Leg_Rear();
		Draw.popPose();
		
		Draw.pushPose(anim.armRear.x, anim.armRear.y, anim.armRear.r, 95.3038101 / 1024, 505.4633179 / 1024);
		Arm_Rear();
		Draw.popPose();
		
		Body();
		
		Draw.pushPose(anim.armFront.x, anim.armFront.y, anim.armFront.r, -5.2577 / 1024, 480.1796265 / 1024);
		Arm_Front();
		Draw.popPose();
		
		Draw.pushPose(anim.head.x, anim.head.y, anim.head.r, 35.2217674  / 1024, 662.5830688 / 1024);
		{
			Draw.pushPose(anim.hair.x, anim.hair.y, anim.hair.r, -101.5951385 / 1024, 629.1498413 / 1024);
			Hair();
			Draw.popPose();
			
			Head();
		}
		Draw.popPose();
	}
	Draw.popPose();
	
	
	function Leg_Rear() {
		Draw.fill("#E8AC97");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.0642, -0.0533);
		Draw.bezierVertex(-0.1492, 0.0847, -0.1494, 0.1544, -0.1586, 0.1655);
		Draw.bezierVertex(-0.1678, 0.1767, -0.1817, 0.1688, -0.2589, 0.2313);
		Draw.bezierVertex(-0.2631, 0.2347, -0.1232, 0.2858, -0.117, 0.2807);
		Draw.bezierVertex(-0.0786, 0.2492, -0.0591, 0.2575, -0.0433, 0.2417);
		Draw.bezierVertex(-0.0313, 0.2298, -0.0326, 0.2212, -0.0215, 0.2);
		Draw.bezierVertex(-0.0017, 0.1622, 0.0276, 0.1001, 0.0497, -0.0044);
		Draw.bezierVertex(0.0497, -0.0044, -0.0612, -0.0581, -0.0642, -0.0533);
		Draw.endShape();
		
		Draw.fill("#CC988F");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.0462, -0.0481);
		Draw.bezierVertex(-0.0564, -0.0522, -0.0636, -0.0545, -0.0643, -0.0533);
		Draw.bezierVertex(-0.1493, 0.0847, -0.1495, 0.1544, -0.1587, 0.1655);
		Draw.bezierVertex(-0.1663, 0.1747, -0.1773, 0.171, -0.2249, 0.2052);
		Draw.bezierVertex(-0.2206, 0.2088, -0.2174, 0.2127, -0.2159, 0.2101);
		Draw.bezierVertex(-0.2073, 0.1946, -0.1677, 0.1827, -0.1558, 0.1742);
		Draw.bezierVertex(-0.1438, 0.1657, -0.1396, 0.1377, -0.1095, 0.0641);
		Draw.bezierVertex(-0.0896, 0.0156, -0.0646, -0.0256, -0.0462, -0.0481);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.1999, 0.1836);
		Draw.bezierVertex(-0.1999, 0.1836, -0.1484, 0.2495, -0.0754, 0.2366);
		Draw.vertex(-0.0543, 0.2577);
		Draw.bezierVertex(-0.0543, 0.2577, -0.1889, 0.3323, -0.3143, 0.3629);
		Draw.bezierVertex(-0.3179, 0.3638, -0.3219, 0.3646, -0.3228, 0.3681);
		Draw.bezierVertex(-0.3314, 0.4007, -0.3499, 0.4386, -0.3652, 0.4531);
		Draw.bezierVertex(-0.3742, 0.4616, -0.3728, 0.4859, -0.3687, 0.4965);
		Draw.bezierVertex(-0.3687, 0.4965, -0.3615, 0.5241, -0.3711, 0.533);
		Draw.bezierVertex(-0.3815, 0.5426, -0.3913, 0.5302, -0.4019, 0.51);
		Draw.bezierVertex(-0.4291, 0.4572, -0.4293, 0.4532, -0.4604, 0.4008);
		Draw.bezierVertex(-0.4672, 0.3894, -0.4722, 0.3783, -0.4745, 0.3708);
		Draw.bezierVertex(-0.4777, 0.3605, -0.4749, 0.35, -0.4707, 0.3477);
		Draw.bezierVertex(-0.4557, 0.3392, -0.452, 0.3425, -0.4386, 0.3367);
		Draw.bezierVertex(-0.4303, 0.3332, -0.428, 0.3339, -0.4156, 0.323);
		Draw.bezierVertex(-0.3996, 0.3091, -0.3912, 0.3068, -0.3743, 0.3088);
		Draw.bezierVertex(-0.3625, 0.3102, -0.3576, 0.2996, -0.3576, 0.2996);
		Draw.bezierVertex(-0.3576, 0.2996, -0.2904, 0.211, -0.1999, 0.1836);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(-0.1999, 0.1836);
		Draw.bezierVertex(-0.2904, 0.211, -0.3574, 0.2995, -0.3574, 0.2995);
		Draw.bezierVertex(-0.3574, 0.2995, -0.3623, 0.3101, -0.3741, 0.3087);
		Draw.bezierVertex(-0.391, 0.3067, -0.3994, 0.309, -0.4154, 0.3229);
		Draw.bezierVertex(-0.4279, 0.3338, -0.4302, 0.3331, -0.4384, 0.3366);
		Draw.bezierVertex(-0.4518, 0.3424, -0.4555, 0.3391, -0.4705, 0.3476);
		Draw.bezierVertex(-0.4747, 0.3499, -0.4775, 0.3605, -0.4743, 0.3707);
		Draw.bezierVertex(-0.472, 0.3782, -0.467, 0.3894, -0.4603, 0.4007);
		Draw.bezierVertex(-0.4423, 0.431, -0.4346, 0.4451, -0.4261, 0.4618);
		Draw.vertex(-0.3999, 0.4142);
		Draw.bezierVertex(-0.3999, 0.4142, -0.3726, 0.3686, -0.3627, 0.33);
		Draw.bezierVertex(-0.3323, 0.2777, -0.2377, 0.2131, -0.1927, 0.1915);
		Draw.bezierVertex(-0.196, 0.1877, -0.1999, 0.1836, -0.1999, 0.1836);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.2418, 0.2709);
		Draw.vertex(-0.2219, 0.1916);
		Draw.bezierVertex(-0.2251, 0.193, -0.2282, 0.1943, -0.2313, 0.1958);
		Draw.vertex(-0.2489, 0.2667);
		Draw.vertex(-0.3521, 0.3297);
		Draw.bezierVertex(-0.3537, 0.3307, -0.3544, 0.3327, -0.3534, 0.3345);
		Draw.bezierVertex(-0.3524, 0.3361, -0.3504, 0.3368, -0.3486, 0.3358);
		Draw.vertex(-0.2418, 0.2709);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.1924, 0.2661);
		Draw.vertex(-0.1321, 0.2317);
		Draw.bezierVertex(-0.1361, 0.2304, -0.14, 0.2287, -0.1438, 0.2271);
		Draw.vertex(-0.1994, 0.2611);
		Draw.vertex(-0.2116, 0.312);
		Draw.vertex(-0.338, 0.3555);
		Draw.bezierVertex(-0.3397, 0.3564, -0.3404, 0.3583, -0.3396, 0.3602);
		Draw.bezierVertex(-0.3389, 0.3616, -0.3365, 0.3625, -0.3345, 0.3618);
		Draw.vertex(-0.2058, 0.3201);
		Draw.vertex(-0.1924, 0.2661);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.4088, 0.4396);
		Draw.bezierVertex(-0.4049, 0.4337, -0.4009, 0.4275, -0.3986, 0.4209);
		Draw.bezierVertex(-0.3902, 0.3964, -0.3922, 0.391, -0.3996, 0.3775);
		Draw.bezierVertex(-0.4013, 0.3745, -0.404, 0.3704, -0.4087, 0.3691);
		Draw.bezierVertex(-0.413, 0.368, -0.4179, 0.3693, -0.4247, 0.3734);
		Draw.bezierVertex(-0.4365, 0.3805, -0.455, 0.3906, -0.4635, 0.3952);
		Draw.bezierVertex(-0.4625, 0.3971, -0.4614, 0.3989, -0.4603, 0.4008);
		Draw.bezierVertex(-0.4602, 0.401, -0.4601, 0.4011, -0.46, 0.4013);
		Draw.bezierVertex(-0.4514, 0.3966, -0.4328, 0.3864, -0.421, 0.3794);
		Draw.bezierVertex(-0.4161, 0.3765, -0.4126, 0.3753, -0.4104, 0.3759);
		Draw.bezierVertex(-0.4093, 0.3762, -0.4077, 0.377, -0.4056, 0.3809);
		Draw.bezierVertex(-0.3992, 0.3924, -0.3974, 0.3959, -0.4051, 0.4187);
		Draw.bezierVertex(-0.407, 0.4244, -0.4106, 0.43, -0.4146, 0.4358);
		Draw.bezierVertex(-0.4193, 0.4432, -0.4245, 0.4511, -0.4269, 0.4604);
		Draw.bezierVertex(-0.425, 0.464, -0.4231, 0.4677, -0.4211, 0.4717);
		Draw.bezierVertex(-0.4216, 0.4592, -0.4151, 0.4493, -0.4088, 0.4396);
		Draw.endShape();
	}
	
	function Leg_Front() {
		Draw.fill("#FFC3A1");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.0854, 0.0086);
		Draw.bezierVertex(-0.0058, 0.1498, 0.0551, 0.1838, 0.0604, 0.1972);
		Draw.bezierVertex(0.0656, 0.2105, 0.0521, 0.219, 0.0693, 0.3167);
		Draw.bezierVertex(0.0703, 0.322, 0.1827, 0.2244, 0.1813, 0.2164);
		Draw.bezierVertex(0.1723, 0.1676, 0.1891, 0.1545, 0.1829, 0.133);
		Draw.bezierVertex(0.1782, 0.1168, 0.1701, 0.1138, 0.1569, 0.0938);
		Draw.bezierVertex(0.1334, 0.0582, 0.0934, 0.0024, 0.0125, -0.0674);
		Draw.bezierVertex(0.0125, -0.0674, -0.0882, 0.0036, -0.0854, 0.0086);
		Draw.endShape();
		
		Draw.fill("#E2AB9C");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0693, 0.2146);
		Draw.bezierVertex(0.0715, 0.195, 0.0834, 0.2056, 0.0258, 0.1417);
		Draw.bezierVertex(-0.022, 0.0886, -0.0595, 0.0167, -0.0689, -0.0072);
		Draw.bezierVertex(-0.0793, 0.0011, -0.0861, 0.0072, -0.0854, 0.0086);
		Draw.bezierVertex(-0.0058, 0.1498, 0.0551, 0.1838, 0.0604, 0.1972);
		Draw.bezierVertex(0.0643, 0.2071, 0.0577, 0.2145, 0.0612, 0.2576);
		Draw.vertex(0.0714, 0.2553);
		Draw.bezierVertex(0.0715, 0.2554, 0.0673, 0.2343, 0.0693, 0.2146);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0552, 0.2435);
		Draw.bezierVertex(0.0552, 0.2435, 0.1377, 0.2294, 0.1609, 0.159);
		Draw.vertex(0.1895, 0.1504);
		Draw.bezierVertex(0.1895, 0.1504, 0.1913, 0.3043, 0.1587, 0.4291);
		Draw.bezierVertex(0.1577, 0.4327, 0.1565, 0.4365, 0.1592, 0.4391);
		Draw.bezierVertex(0.1838, 0.4622, 0.2084, 0.4965, 0.214, 0.5168);
		Draw.bezierVertex(0.2172, 0.5287, 0.2393, 0.539, 0.2506, 0.5404);
		Draw.bezierVertex(0.2506, 0.5404, 0.2783, 0.5473, 0.2815, 0.56);
		Draw.bezierVertex(0.2851, 0.5736, 0.2694, 0.5765, 0.2467, 0.5761);
		Draw.bezierVertex(0.1873, 0.5751, 0.1837, 0.5732, 0.1228, 0.5759);
		Draw.bezierVertex(0.1095, 0.5765, 0.0974, 0.5756, 0.0896, 0.574);
		Draw.bezierVertex(0.0791, 0.572, 0.0712, 0.5645, 0.0711, 0.5597);
		Draw.bezierVertex(0.0707, 0.5424, 0.0754, 0.5407, 0.0767, 0.5262);
		Draw.bezierVertex(0.0774, 0.5172, 0.0792, 0.5155, 0.0755, 0.4994);
		Draw.bezierVertex(0.0708, 0.4787, 0.0729, 0.4702, 0.0825, 0.4563);
		Draw.bezierVertex(0.0893, 0.4465, 0.0823, 0.4372, 0.0823, 0.4372);
		Draw.bezierVertex(0.0823, 0.4372, 0.0363, 0.3361, 0.0552, 0.2435);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.0552, 0.2435);
		Draw.bezierVertex(0.0364, 0.3361, 0.0824, 0.4371, 0.0824, 0.4371);
		Draw.bezierVertex(0.0824, 0.4371, 0.0894, 0.4464, 0.0826, 0.4562);
		Draw.bezierVertex(0.0729, 0.4701, 0.0708, 0.4785, 0.0756, 0.4993);
		Draw.bezierVertex(0.0793, 0.5154, 0.0775, 0.5171, 0.0768, 0.5261);
		Draw.bezierVertex(0.0755, 0.5406, 0.0708, 0.5423, 0.0712, 0.5596);
		Draw.bezierVertex(0.0713, 0.5644, 0.0792, 0.5719, 0.0897, 0.5739);
		Draw.bezierVertex(0.0975, 0.5754, 0.1097, 0.5763, 0.1229, 0.5758);
		Draw.bezierVertex(0.1581, 0.5743, 0.1741, 0.5743, 0.1929, 0.5747);
		Draw.vertex(0.1634, 0.529);
		Draw.bezierVertex(0.1634, 0.529, 0.1362, 0.4833, 0.1068, 0.4563);
		Draw.bezierVertex(0.0752, 0.4048, 0.0632, 0.2908, 0.0655, 0.241);
		Draw.bezierVertex(0.0605, 0.242, 0.0552, 0.2435, 0.0552, 0.2435);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1121, 0.3218);
		Draw.vertex(0.0518, 0.2666);
		Draw.bezierVertex(0.0515, 0.27, 0.0512, 0.2735, 0.051, 0.277);
		Draw.vertex(0.105, 0.3261);
		Draw.vertex(0.1115, 0.4468);
		Draw.bezierVertex(0.1115, 0.4487, 0.1131, 0.4503, 0.115, 0.4503);
		Draw.bezierVertex(0.117, 0.4503, 0.1186, 0.4487, 0.1186, 0.4468);
		Draw.vertex(0.1121, 0.3218);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1313, 0.276);
		Draw.vertex(0.1296, 0.2066);
		Draw.bezierVertex(0.1265, 0.2096, 0.1231, 0.2122, 0.1199, 0.2146);
		Draw.vertex(0.1235, 0.2799);
		Draw.vertex(0.1625, 0.3147);
		Draw.vertex(0.1407, 0.4466);
		Draw.bezierVertex(0.1407, 0.4486, 0.142, 0.4501, 0.1441, 0.4502);
		Draw.bezierVertex(0.1457, 0.4503, 0.1477, 0.4486, 0.148, 0.4465);
		Draw.vertex(0.1724, 0.3134);
		Draw.vertex(0.1313, 0.276);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1813, 0.5488);
		Draw.bezierVertex(0.1779, 0.5426, 0.1744, 0.536, 0.1697, 0.531);
		Draw.bezierVertex(0.1521, 0.512, 0.1465, 0.5111, 0.1311, 0.5112);
		Draw.bezierVertex(0.1276, 0.5112, 0.1228, 0.5117, 0.1193, 0.5152);
		Draw.bezierVertex(0.1163, 0.5185, 0.1151, 0.5234, 0.1155, 0.5313);
		Draw.bezierVertex(0.1162, 0.5451, 0.1163, 0.5662, 0.1163, 0.5759);
		Draw.bezierVertex(0.1185, 0.5759, 0.1206, 0.5758, 0.1228, 0.5757);
		Draw.bezierVertex(0.1229, 0.5757, 0.1231, 0.5757, 0.1233, 0.5757);
		Draw.bezierVertex(0.1233, 0.5659, 0.1231, 0.5448, 0.1226, 0.5311);
		Draw.bezierVertex(0.1223, 0.5253, 0.1229, 0.5217, 0.1245, 0.52);
		Draw.bezierVertex(0.1252, 0.5192, 0.1268, 0.5182, 0.1312, 0.5182);
		Draw.bezierVertex(0.1443, 0.5181, 0.1482, 0.5181, 0.1646, 0.5356);
		Draw.bezierVertex(0.1687, 0.5401, 0.172, 0.5459, 0.1753, 0.5521);
		Draw.bezierVertex(0.1795, 0.5598, 0.184, 0.5681, 0.1911, 0.5745);
		Draw.bezierVertex(0.1952, 0.5746, 0.1993, 0.5747, 0.2038, 0.5748);
		Draw.bezierVertex(0.1926, 0.5694, 0.1869, 0.559, 0.1813, 0.5488);
		Draw.endShape();
	}
	
	function Arm_Rear() {
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.4146, -0.0848);
		Draw.vertex(0.4282, -0.1038);
		Draw.bezierVertex(0.4301, -0.1063, 0.4328, -0.1077, 0.4356, -0.109);
		Draw.bezierVertex(0.4504, -0.1156, 0.4586, -0.1268, 0.4648, -0.1332);
		Draw.bezierVertex(0.4711, -0.1396, 0.4762, -0.1488, 0.473, -0.1522);
		Draw.bezierVertex(0.471, -0.1545, 0.4696, -0.1573, 0.4695, -0.1603);
		Draw.bezierVertex(0.4691, -0.168, 0.4631, -0.1708, 0.4578, -0.1718);
		Draw.bezierVertex(0.4536, -0.1726, 0.4499, -0.1754, 0.4481, -0.1794);
		Draw.bezierVertex(0.445, -0.1864, 0.4385, -0.1895, 0.4337, -0.1908);
		Draw.bezierVertex(0.4302, -0.1918, 0.4273, -0.194, 0.4257, -0.1973);
		Draw.bezierVertex(0.4194, -0.2096, 0.4074, -0.2104, 0.4009, -0.2097);
		Draw.bezierVertex(0.398, -0.2094, 0.3953, -0.2082, 0.3932, -0.2063);
		Draw.bezierVertex(0.3834, -0.1977, 0.3781, -0.185, 0.3761, -0.1789);
		Draw.bezierVertex(0.3753, -0.1767, 0.3738, -0.1724, 0.3747, -0.1639);
		Draw.bezierVertex(0.3756, -0.1555, 0.3744, -0.1542, 0.3719, -0.1483);
		Draw.vertex(0.351, -0.1179);
		Draw.bezierVertex(0.346, -0.1106, 0.3489, -0.1008, 0.3569, -0.0974);
		Draw.vertex(0.3979, -0.0801);
		Draw.bezierVertex(0.4039, -0.0776, 0.4107, -0.0795, 0.4146, -0.0848);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3568, -0.1348);
		Draw.bezierVertex(0.2807, -0.0604, 0.2345, 0.0325, 0.2276, 0.0365);
		Draw.bezierVertex(0.2209, 0.0405, 0.1618, 0.0161, 0.1279, -0.0048);
		Draw.bezierVertex(-0.0643, -0.1234, -0.0451, -0.0105, -0.0377, 0.0297);
		Draw.bezierVertex(-0.0303, 0.0699, 0.0475, 0.0914, 0.0895, 0.1068);
		Draw.bezierVertex(0.1314, 0.1223, 0.2436, 0.1613, 0.2664, 0.1481);
		Draw.bezierVertex(0.2892, 0.1349, 0.4248, -0.0916, 0.4248, -0.0916);
		Draw.bezierVertex(0.4126, -0.1442, 0.3568, -0.1348, 0.3568, -0.1348);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.2124, 0.1321);
		Draw.bezierVertex(0.1636, 0.1201, 0.0391, 0.0862, -0.0362, 0.035);
		Draw.bezierVertex(-0.0232, 0.0718, 0.0493, 0.0921, 0.0895, 0.1068);
		Draw.bezierVertex(0.1314, 0.1223, 0.2436, 0.1613, 0.2664, 0.1481);
		Draw.bezierVertex(0.2706, 0.1457, 0.2787, 0.1359, 0.2892, 0.1216);
		Draw.bezierVertex(0.2887, 0.1221, 0.2688, 0.146, 0.2124, 0.1321);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3568, -0.1348);
		Draw.bezierVertex(0.3542, -0.1321, 0.3516, -0.1296, 0.3489, -0.127);
		Draw.bezierVertex(0.3516, -0.1273, 0.3543, -0.1274, 0.3575, -0.1275);
		Draw.bezierVertex(0.3859, -0.1282, 0.4066, -0.1152, 0.4158, -0.0884);
		Draw.bezierVertex(0.4168, -0.0855, 0.4172, -0.0824, 0.4172, -0.0791);
		Draw.bezierVertex(0.422, -0.0871, 0.4248, -0.0917, 0.4248, -0.0917);
		Draw.bezierVertex(0.4126, -0.1442, 0.3568, -0.1348, 0.3568, -0.1348);
		Draw.endShape();
	}
	
	function Body() {
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.1887, -0.4428);
		Draw.bezierVertex(0.1397, -0.4924, 0.1397, -0.4924, 0.1248, -0.54);
		Draw.bezierVertex(0.1327, -0.5584, 0.1302, -0.5728, 0.1302, -0.5728);
		Draw.bezierVertex(0.0579, -0.5939, 0.0666, -0.6022, 0.037, -0.6095);
		Draw.bezierVertex(-0.0682, -0.635, -0.0715, -0.6204, -0.0715, -0.6204);
		Draw.vertex(0.2108, -0.4109);
		Draw.endShape();
		
		Draw.fill("#FFC3A1");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1621, -0.7005);
		Draw.vertex(-0.0456, -0.7005);
		Draw.bezierVertex(-0.0536, -0.6732, -0.0598, -0.6345, -0.0533, -0.5912);
		Draw.bezierVertex(-0.0515, -0.5786, -0.0563, -0.5195, -0.0739, -0.4858);
		Draw.bezierVertex(-0.105, -0.4262, 0.119, -0.4167, 0.119, -0.4167);
		Draw.bezierVertex(0.1358, -0.4416, 0.1535, -0.4658, 0.1425, -0.4798);
		Draw.bezierVertex(0.0845, -0.5534, 0.1362, -0.6139, 0.1443, -0.6271);
		Draw.bezierVertex(0.1582, -0.6499, 0.1645, -0.6804, 0.1621, -0.7005);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.2393, -0.3508);
		Draw.bezierVertex(0.2393, -0.3234, 0.2349, -0.3067, 0.2252, -0.2939);
		Draw.bezierVertex(0.2252, -0.2939, 0.1944, -0.2519, 0.1854, -0.2251);
		Draw.bezierVertex(0.1265, -0.0529, 0.1222, 0.1496, 0.1222, 0.1496);
		Draw.bezierVertex(-0.0631, 0.2086, -0.24, 0.0851, -0.2437, 0.0612);
		Draw.bezierVertex(-0.2516, 0.0122, -0.1653, -0.0927, -0.1653, -0.0927);
		Draw.bezierVertex(-0.0988, -0.1656, -0.1201, -0.2162, -0.1201, -0.2162);
		Draw.bezierVertex(-0.1481, -0.3097, -0.1309, -0.4429, -0.1117, -0.5102);
		Draw.bezierVertex(-0.0989, -0.5551, -0.0632, -0.5775, -0.0632, -0.5775);
		Draw.bezierVertex(-0.0622, -0.5953, -0.0716, -0.6205, -0.0716, -0.6205);
		Draw.bezierVertex(-0.0174, -0.6138, -0.0169, -0.6066, 0.0152, -0.5896);
		Draw.bezierVertex(0.0476, -0.5726, 0.1024, -0.5652, 0.1024, -0.5652);
		Draw.bezierVertex(0.1066, -0.5481, 0.0996, -0.5329, 0.0996, -0.5329);
		Draw.bezierVertex(0.0996, -0.5329, 0.1118, -0.5079, 0.161, -0.4682);
		Draw.bezierVertex(0.218, -0.4222, 0.2393, -0.3712, 0.2393, -0.3508);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.1587, 0.1432);
		Draw.bezierVertex(0.195, 0.1198, 0.1972, 0.1236, 0.2142, 0.115);
		Draw.bezierVertex(0.254, 0.0947, 0.2421, 0.0803, 0.2421, 0.0803);
		Draw.bezierVertex(0.1159, -0.1396, 0.2252, -0.2939, 0.2252, -0.2939);
		Draw.bezierVertex(0.1319, -0.249, 0.1217, 0.0604, 0.1217, 0.0604);
		Draw.bezierVertex(0.1483, 0.1047, 0.1587, 0.1432, 0.1587, 0.1432);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.0997, -0.5622);
		Draw.vertex(0.0737, -0.5676);
		Draw.vertex(0.0252, -0.5818);
		Draw.vertex(-0.001, -0.5963);
		Draw.vertex(-0.0293, -0.6099);
		Draw.vertex(-0.0614, -0.6163);
		Draw.vertex(-0.0705, -0.6177);
		Draw.bezierVertex(-0.0703, -0.617, -0.07, -0.6162, -0.0697, -0.6153);
		Draw.bezierVertex(-0.0696, -0.615, -0.0695, -0.6147, -0.0694, -0.6144);
		Draw.bezierVertex(-0.0693, -0.6141, -0.0692, -0.6137, -0.0691, -0.6134);
		Draw.bezierVertex(-0.069, -0.613, -0.0688, -0.6125, -0.0687, -0.612);
		Draw.bezierVertex(-0.0687, -0.6117, -0.0686, -0.6113, -0.0685, -0.611);
		Draw.bezierVertex(-0.0683, -0.6104, -0.0682, -0.6099, -0.068, -0.6093);
		Draw.bezierVertex(-0.0679, -0.609, -0.0678, -0.6087, -0.0677, -0.6084);
		Draw.bezierVertex(-0.0672, -0.6065, -0.0666, -0.6046, -0.0661, -0.6025);
		Draw.bezierVertex(-0.066, -0.6022, -0.066, -0.602, -0.0659, -0.6018);
		Draw.bezierVertex(-0.0657, -0.601, -0.0655, -0.6002, -0.0653, -0.5994);
		Draw.bezierVertex(-0.0652, -0.5991, -0.0652, -0.5987, -0.0651, -0.5984);
		Draw.bezierVertex(-0.0649, -0.5977, -0.0648, -0.5968, -0.0646, -0.596);
		Draw.bezierVertex(-0.0646, -0.5957, -0.0646, -0.5954, -0.0645, -0.5951);
		Draw.bezierVertex(-0.0641, -0.5929, -0.0637, -0.5906, -0.0634, -0.5884);
		Draw.bezierVertex(-0.0634, -0.5881, -0.0633, -0.5878, -0.0633, -0.5874);
		Draw.bezierVertex(-0.0632, -0.5866, -0.0631, -0.5858, -0.0631, -0.585);
		Draw.bezierVertex(-0.0631, -0.5846, -0.063, -0.5842, -0.063, -0.5839);
		Draw.bezierVertex(-0.063, -0.5831, -0.0629, -0.5823, -0.0629, -0.5816);
		Draw.bezierVertex(-0.0629, -0.5813, -0.0629, -0.581, -0.0629, -0.5807);
		Draw.bezierVertex(-0.0629, -0.5796, -0.0629, -0.5785, -0.063, -0.5775);
		Draw.bezierVertex(-0.063, -0.5775, -0.0631, -0.5774, -0.0632, -0.5774);
		Draw.bezierVertex(-0.0632, -0.5774, -0.0633, -0.5774, -0.0633, -0.5773);
		Draw.bezierVertex(-0.0635, -0.5772, -0.0637, -0.5771, -0.064, -0.5769);
		Draw.bezierVertex(-0.064, -0.5769, -0.0641, -0.5769, -0.0641, -0.5768);
		Draw.bezierVertex(-0.0647, -0.5763, -0.0656, -0.5756, -0.0669, -0.5747);
		Draw.bezierVertex(-0.067, -0.5747, -0.067, -0.5746, -0.0671, -0.5746);
		Draw.bezierVertex(-0.0689, -0.5732, -0.0713, -0.5713, -0.074, -0.5689);
		Draw.bezierVertex(-0.074, -0.5689, -0.0741, -0.5688, -0.0741, -0.5688);
		Draw.bezierVertex(-0.076, -0.5672, -0.0779, -0.5654, -0.08, -0.5633);
		Draw.bezierVertex(-0.08, -0.5633, -0.08, -0.5633, -0.0801, -0.5632);
		Draw.bezierVertex(-0.0811, -0.5621, -0.0821, -0.561, -0.0832, -0.56);
		Draw.bezierVertex(-0.0832, -0.56, -0.0833, -0.5599, -0.0833, -0.5599);
		Draw.bezierVertex(-0.0854, -0.5576, -0.0876, -0.5551, -0.0897, -0.5523);
		Draw.bezierVertex(-0.0898, -0.5522, -0.0898, -0.5522, -0.0899, -0.5521);
		Draw.bezierVertex(-0.091, -0.5508, -0.0921, -0.5493, -0.0932, -0.5479);
		Draw.bezierVertex(-0.0932, -0.5479, -0.0932, -0.5478, -0.0933, -0.5478);
		Draw.bezierVertex(-0.0954, -0.5448, -0.0976, -0.5416, -0.0995, -0.5382);
		Draw.bezierVertex(-0.0996, -0.538, -0.0997, -0.5379, -0.0998, -0.5377);
		Draw.bezierVertex(-0.1008, -0.536, -0.1018, -0.5343, -0.1027, -0.5325);
		Draw.bezierVertex(-0.1027, -0.5325, -0.1027, -0.5325, -0.1027, -0.5324);
		Draw.bezierVertex(-0.1027, -0.5324, -0.1027, -0.5324, -0.1027, -0.5323);
		Draw.bezierVertex(-0.1033, -0.5312, -0.104, -0.5299, -0.1046, -0.5286);
		Draw.bezierVertex(-0.1048, -0.5283, -0.1049, -0.5279, -0.1051, -0.5276);
		Draw.bezierVertex(-0.1056, -0.5267, -0.106, -0.5257, -0.1064, -0.5246);
		Draw.bezierVertex(-0.1066, -0.5241, -0.1068, -0.5237, -0.107, -0.5232);
		Draw.bezierVertex(-0.1074, -0.5223, -0.1078, -0.5214, -0.1082, -0.5204);
		Draw.bezierVertex(-0.1083, -0.52, -0.1085, -0.5197, -0.1086, -0.5193);
		Draw.bezierVertex(-0.1087, -0.5192, -0.1087, -0.519, -0.1088, -0.5189);
		Draw.bezierVertex(-0.1092, -0.518, -0.1095, -0.5169, -0.1099, -0.5159);
		Draw.bezierVertex(-0.1101, -0.5154, -0.1102, -0.515, -0.1104, -0.5146);
		Draw.bezierVertex(-0.1108, -0.5131, -0.1113, -0.5115, -0.1117, -0.5101);
		Draw.bezierVertex(-0.1123, -0.5079, -0.1129, -0.5058, -0.1136, -0.5035);
		Draw.bezierVertex(-0.1137, -0.5032, -0.1138, -0.5028, -0.1139, -0.5024);
		Draw.bezierVertex(-0.1144, -0.5005, -0.1149, -0.4985, -0.1154, -0.4965);
		Draw.bezierVertex(-0.1154, -0.4964, -0.1155, -0.4962, -0.1155, -0.4961);
		Draw.bezierVertex(-0.119, -0.4818, -0.1225, -0.4654, -0.1254, -0.4476);
		Draw.vertex(-0.1254, -0.4476);
		Draw.bezierVertex(-0.1329, -0.4018, -0.1373, -0.3466, -0.1336, -0.2944);
		Draw.bezierVertex(-0.1335, -0.2925, -0.1333, -0.2904, -0.1332, -0.2885);
		Draw.bezierVertex(-0.133, -0.286, -0.1327, -0.2837, -0.1325, -0.2813);
		Draw.bezierVertex(-0.1323, -0.2791, -0.132, -0.2769, -0.1318, -0.2746);
		Draw.bezierVertex(-0.1315, -0.2724, -0.1313, -0.2702, -0.1311, -0.268);
		Draw.bezierVertex(-0.1308, -0.2655, -0.1304, -0.2632, -0.1301, -0.2607);
		Draw.bezierVertex(-0.1298, -0.2587, -0.1295, -0.2566, -0.1291, -0.2546);
		Draw.bezierVertex(-0.1287, -0.2521, -0.1282, -0.2495, -0.1277, -0.247);
		Draw.bezierVertex(-0.1273, -0.2451, -0.1271, -0.2433, -0.1267, -0.2414);
		Draw.bezierVertex(-0.1261, -0.2386, -0.1254, -0.2357, -0.1248, -0.233);
		Draw.bezierVertex(-0.1244, -0.2315, -0.1241, -0.2301, -0.1237, -0.2286);
		Draw.bezierVertex(-0.1227, -0.2244, -0.1216, -0.2202, -0.1203, -0.2161);
		Draw.bezierVertex(-0.1203, -0.2161, -0.1203, -0.216, -0.1202, -0.216);
		Draw.bezierVertex(-0.1202, -0.216, -0.1202, -0.2159, -0.1201, -0.2158);
		Draw.bezierVertex(-0.1201, -0.2157, -0.1201, -0.2157, -0.12, -0.2156);
		Draw.bezierVertex(-0.12, -0.2155, -0.1199, -0.2154, -0.1199, -0.2152);
		Draw.bezierVertex(-0.1199, -0.2151, -0.1198, -0.215, -0.1198, -0.2149);
		Draw.bezierVertex(-0.1197, -0.2147, -0.1197, -0.2146, -0.1196, -0.2144);
		Draw.bezierVertex(-0.1196, -0.2143, -0.1195, -0.2142, -0.1195, -0.214);
		Draw.bezierVertex(-0.1194, -0.2138, -0.1194, -0.2135, -0.1193, -0.2132);
		Draw.bezierVertex(-0.1193, -0.2131, -0.1192, -0.2129, -0.1192, -0.2128);
		Draw.bezierVertex(-0.1191, -0.2125, -0.119, -0.2122, -0.119, -0.2119);
		Draw.bezierVertex(-0.119, -0.2117, -0.1189, -0.2116, -0.1189, -0.2114);
		Draw.bezierVertex(-0.1188, -0.211, -0.1188, -0.2107, -0.1187, -0.2104);
		Draw.bezierVertex(-0.1187, -0.2102, -0.1186, -0.21, -0.1186, -0.2098);
		Draw.bezierVertex(-0.1185, -0.2094, -0.1184, -0.209, -0.1183, -0.2085);
		Draw.bezierVertex(-0.1183, -0.2083, -0.1182, -0.2081, -0.1182, -0.2079);
		Draw.bezierVertex(-0.1181, -0.2074, -0.118, -0.2069, -0.118, -0.2064);
		Draw.bezierVertex(-0.118, -0.2062, -0.1179, -0.206, -0.1179, -0.2058);
		Draw.bezierVertex(-0.1178, -0.2053, -0.1177, -0.2047, -0.1177, -0.2041);
		Draw.bezierVertex(-0.1177, -0.2039, -0.1176, -0.2036, -0.1176, -0.2034);
		Draw.bezierVertex(-0.1175, -0.2028, -0.1175, -0.2022, -0.1174, -0.2017);
		Draw.bezierVertex(-0.1174, -0.2015, -0.1174, -0.2012, -0.1173, -0.2009);
		Draw.bezierVertex(-0.1172, -0.2002, -0.1172, -0.1995, -0.1172, -0.1988);
		Draw.bezierVertex(-0.1172, -0.1986, -0.1172, -0.1983, -0.1172, -0.1981);
		Draw.bezierVertex(-0.1172, -0.1974, -0.1171, -0.1966, -0.1171, -0.1958);
		Draw.bezierVertex(-0.1171, -0.1957, -0.1171, -0.1956, -0.1171, -0.1954);
		Draw.bezierVertex(-0.1171, -0.1925, -0.1172, -0.1894, -0.1175, -0.1858);
		Draw.bezierVertex(-0.1195, -0.164, -0.13, -0.1313, -0.1655, -0.0924);
		Draw.bezierVertex(-0.1655, -0.0924, -0.2478, 0.0076, -0.2443, 0.0579);
		Draw.vertex(-0.214, 0.0823);
		Draw.vertex(-0.2078, 0.0823);
		Draw.bezierVertex(-0.2078, 0.0823, -0.0609, -0.027, -0.0802, -0.1485);
		Draw.bezierVertex(-0.0956, -0.2464, -0.0771, -0.3215, -0.0771, -0.3215);
		Draw.bezierVertex(-0.0533, -0.3973, -0.0353, -0.4481, -0.0353, -0.4481);
		Draw.bezierVertex(-0.0231, -0.4794, -0.0127, -0.4994, 0.0371, -0.5277);
		Draw.bezierVertex(0.0404, -0.5298, 0.0441, -0.5313, 0.0481, -0.5324);
		Draw.bezierVertex(0.0481, -0.5324, 0.0481, -0.5324, 0.0481, -0.5324);
		Draw.vertex(0.0481, -0.5324);
		Draw.bezierVertex(0.0683, -0.5381, 0.0933, -0.5325, 0.0933, -0.5325);
		Draw.vertex(0.0962, -0.5327);
		Draw.vertex(0.1016, -0.5487);
		Draw.vertex(0.0997, -0.5622);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.2237, -0.2916);
		Draw.bezierVertex(0.1341, -0.1847, 0.1233, 0.064, 0.1233, 0.064);
		Draw.bezierVertex(0.1304, 0.0757, 0.1363, 0.087, 0.1412, 0.0973);
		Draw.bezierVertex(0.1528, -0.0347, 0.1716, -0.1419, 0.1896, -0.2054);
		Draw.bezierVertex(0.2003, -0.2528, 0.2184, -0.2833, 0.2237, -0.2916);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.2379, 0.0729);
		Draw.bezierVertex(0.2396, 0.0818, 0.2352, 0.0863, 0.2336, 0.0884);
		Draw.bezierVertex(0.2313, 0.0915, 0.2259, 0.0966, 0.209, 0.105);
		Draw.bezierVertex(0.204, 0.1074, 0.2006, 0.1088, 0.1966, 0.1104);
		Draw.bezierVertex(0.1895, 0.113, 0.1816, 0.116, 0.1649, 0.126);
		Draw.bezierVertex(0.161, 0.1285, 0.1578, 0.1305, 0.1552, 0.1321);
		Draw.bezierVertex(0.1575, 0.1391, 0.1587, 0.1432, 0.1587, 0.1432);
		Draw.bezierVertex(0.195, 0.1198, 0.1972, 0.1236, 0.2142, 0.115);
		Draw.bezierVertex(0.254, 0.0947, 0.2421, 0.0803, 0.2421, 0.0803);
		Draw.bezierVertex(0.2406, 0.0778, 0.2393, 0.0753, 0.2379, 0.0729);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.2227, -0.2903);
		Draw.bezierVertex(0.2069, -0.2709, 0.1846, -0.2472, 0.1478, -0.1233);
		Draw.bezierVertex(0.1237, -0.0425, 0.1128, 0.1014, 0.1112, 0.1412);
		Draw.bezierVertex(0.0808, 0.1501, 0.051, 0.1539, 0.0228, 0.1542);
		Draw.bezierVertex(-0.0334, 0.1542, -0.0842, 0.1414, -0.1204, 0.1277);
		Draw.bezierVertex(-0.1895, 0.1016, -0.2255, 0.0699, -0.2327, 0.059);
		Draw.bezierVertex(-0.2397, 0.0483, -0.2406, 0.0446, -0.2422, 0.0388);
		Draw.bezierVertex(-0.2426, 0.0403, -0.2429, 0.042, -0.2432, 0.0436);
		Draw.bezierVertex(-0.2433, 0.0439, -0.2433, 0.0443, -0.2434, 0.0447);
		Draw.bezierVertex(-0.2434, 0.0448, -0.2434, 0.0449, -0.2434, 0.0449);
		Draw.bezierVertex(-0.2435, 0.0457, -0.2436, 0.0465, -0.2437, 0.0473);
		Draw.bezierVertex(-0.2438, 0.0484, -0.2439, 0.0496, -0.244, 0.0508);
		Draw.bezierVertex(-0.244, 0.0513, -0.2441, 0.0518, -0.2441, 0.0522);
		Draw.bezierVertex(-0.2442, 0.0536, -0.2442, 0.055, -0.2441, 0.0563);
		Draw.bezierVertex(-0.2441, 0.0564, -0.2441, 0.0566, -0.2441, 0.0569);
		Draw.bezierVertex(-0.244, 0.0584, -0.2439, 0.0599, -0.2437, 0.0612);
		Draw.bezierVertex(-0.2437, 0.0615, -0.2437, 0.0618, -0.2436, 0.0621);
		Draw.bezierVertex(-0.2433, 0.063, -0.2428, 0.0641, -0.2421, 0.0653);
		Draw.vertex(-0.2421, 0.0653);
		Draw.bezierVertex(-0.2412, 0.0668, -0.24, 0.0684, -0.2386, 0.07);
		Draw.bezierVertex(-0.2386, 0.0701, -0.2385, 0.0701, -0.2385, 0.0702);
		Draw.bezierVertex(-0.2381, 0.0706, -0.2377, 0.0711, -0.2373, 0.0716);
		Draw.bezierVertex(-0.2371, 0.0718, -0.237, 0.072, -0.2368, 0.0721);
		Draw.bezierVertex(-0.2364, 0.0725, -0.236, 0.0729, -0.2355, 0.0733);
		Draw.bezierVertex(-0.2354, 0.0735, -0.2352, 0.0738, -0.2349, 0.074);
		Draw.bezierVertex(-0.2345, 0.0744, -0.234, 0.0749, -0.2336, 0.0753);
		Draw.bezierVertex(-0.2333, 0.0756, -0.233, 0.0758, -0.2328, 0.0761);
		Draw.bezierVertex(-0.2324, 0.0765, -0.2319, 0.077, -0.2314, 0.0773);
		Draw.bezierVertex(-0.2312, 0.0776, -0.2309, 0.0779, -0.2305, 0.0782);
		Draw.bezierVertex(-0.23, 0.0786, -0.2295, 0.0791, -0.229, 0.0795);
		Draw.bezierVertex(-0.2286, 0.0798, -0.2283, 0.0801, -0.2279, 0.0805);
		Draw.bezierVertex(-0.2274, 0.0809, -0.227, 0.0813, -0.2264, 0.0817);
		Draw.bezierVertex(-0.226, 0.082, -0.2256, 0.0824, -0.2252, 0.0827);
		Draw.bezierVertex(-0.2247, 0.0831, -0.2241, 0.0836, -0.2235, 0.084);
		Draw.bezierVertex(-0.2231, 0.0844, -0.2227, 0.0847, -0.2222, 0.0851);
		Draw.bezierVertex(-0.2216, 0.0854, -0.2211, 0.0859, -0.2205, 0.0863);
		Draw.bezierVertex(-0.22, 0.0867, -0.2195, 0.0871, -0.219, 0.0875);
		Draw.bezierVertex(-0.2185, 0.0879, -0.2179, 0.0884, -0.2173, 0.0888);
		Draw.bezierVertex(-0.2168, 0.0892, -0.2162, 0.0896, -0.2157, 0.0899);
		Draw.bezierVertex(-0.2151, 0.0903, -0.2146, 0.0908, -0.2139, 0.0913);
		Draw.bezierVertex(-0.2133, 0.0917, -0.2127, 0.0921, -0.2122, 0.0925);
		Draw.bezierVertex(-0.2116, 0.093, -0.2109, 0.0934, -0.2103, 0.0938);
		Draw.bezierVertex(-0.2097, 0.0942, -0.2091, 0.0947, -0.2084, 0.0951);
		Draw.bezierVertex(-0.2077, 0.0955, -0.2071, 0.096, -0.2064, 0.0964);
		Draw.bezierVertex(-0.2058, 0.0968, -0.2052, 0.0973, -0.2045, 0.0977);
		Draw.bezierVertex(-0.2038, 0.098, -0.2031, 0.0985, -0.2025, 0.0989);
		Draw.bezierVertex(-0.2019, 0.0994, -0.2012, 0.0998, -0.2005, 0.1003);
		Draw.bezierVertex(-0.1998, 0.1008, -0.1991, 0.1012, -0.1984, 0.1017);
		Draw.bezierVertex(-0.1978, 0.1021, -0.197, 0.1025, -0.1962, 0.103);
		Draw.bezierVertex(-0.1955, 0.1034, -0.1948, 0.1039, -0.1941, 0.1043);
		Draw.bezierVertex(-0.1934, 0.1048, -0.1926, 0.1053, -0.1918, 0.1058);
		Draw.bezierVertex(-0.1911, 0.1062, -0.1904, 0.1066, -0.1896, 0.107);
		Draw.bezierVertex(-0.1888, 0.1075, -0.1879, 0.108, -0.1871, 0.1085);
		Draw.bezierVertex(-0.1864, 0.1089, -0.1857, 0.1093, -0.1851, 0.1097);
		Draw.bezierVertex(-0.1841, 0.1103, -0.1831, 0.1107, -0.1821, 0.1113);
		Draw.bezierVertex(-0.1815, 0.1117, -0.181, 0.112, -0.1803, 0.1124);
		Draw.bezierVertex(-0.1789, 0.1132, -0.1775, 0.1139, -0.1762, 0.1146);
		Draw.bezierVertex(-0.1759, 0.1148, -0.1756, 0.1149, -0.1753, 0.1151);
		Draw.bezierVertex(-0.1736, 0.116, -0.1719, 0.1169, -0.1701, 0.1179);
		Draw.bezierVertex(-0.1696, 0.1182, -0.1691, 0.1184, -0.1687, 0.1186);
		Draw.bezierVertex(-0.1674, 0.1192, -0.1661, 0.1198, -0.1648, 0.1205);
		Draw.bezierVertex(-0.1642, 0.1208, -0.1635, 0.1212, -0.1629, 0.1215);
		Draw.bezierVertex(-0.1617, 0.1221, -0.1605, 0.1227, -0.1594, 0.1231);
		Draw.bezierVertex(-0.1587, 0.1235, -0.1579, 0.1238, -0.1572, 0.1242);
		Draw.bezierVertex(-0.1561, 0.1247, -0.155, 0.1253, -0.1538, 0.1258);
		Draw.bezierVertex(-0.153, 0.1262, -0.1522, 0.1265, -0.1515, 0.1269);
		Draw.bezierVertex(-0.1504, 0.1273, -0.1492, 0.1278, -0.148, 0.1284);
		Draw.bezierVertex(-0.1473, 0.1288, -0.1464, 0.1291, -0.1456, 0.1295);
		Draw.bezierVertex(-0.1444, 0.13, -0.1434, 0.1305, -0.1422, 0.131);
		Draw.bezierVertex(-0.1413, 0.1313, -0.1404, 0.1316, -0.1396, 0.132);
		Draw.bezierVertex(-0.1385, 0.1325, -0.1374, 0.133, -0.1362, 0.1335);
		Draw.bezierVertex(-0.1354, 0.1339, -0.1345, 0.1342, -0.1336, 0.1346);
		Draw.bezierVertex(-0.1324, 0.1351, -0.1313, 0.1354, -0.1301, 0.1359);
		Draw.bezierVertex(-0.1292, 0.1363, -0.1282, 0.1366, -0.1273, 0.137);
		Draw.bezierVertex(-0.1262, 0.1375, -0.125, 0.1379, -0.1238, 0.1384);
		Draw.bezierVertex(-0.1229, 0.1388, -0.122, 0.1391, -0.121, 0.1395);
		Draw.bezierVertex(-0.1198, 0.1398, -0.1187, 0.1403, -0.1174, 0.1407);
		Draw.bezierVertex(-0.1164, 0.1411, -0.1154, 0.1414, -0.1145, 0.1417);
		Draw.bezierVertex(-0.1133, 0.1421, -0.112, 0.1426, -0.1108, 0.143);
		Draw.bezierVertex(-0.1099, 0.1433, -0.1089, 0.1437, -0.1079, 0.1439);
		Draw.bezierVertex(-0.1066, 0.1443, -0.1054, 0.1447, -0.1042, 0.1452);
		Draw.bezierVertex(-0.1032, 0.1455, -0.1022, 0.1458, -0.1013, 0.1462);
		Draw.bezierVertex(-0.1, 0.1466, -0.0987, 0.147, -0.0975, 0.1474);
		Draw.bezierVertex(-0.0965, 0.1477, -0.0955, 0.1479, -0.0945, 0.1482);
		Draw.bezierVertex(-0.0933, 0.1486, -0.0919, 0.149, -0.0906, 0.1494);
		Draw.bezierVertex(-0.0896, 0.1497, -0.0887, 0.15, -0.0877, 0.1503);
		Draw.bezierVertex(-0.0863, 0.1507, -0.0851, 0.1511, -0.0837, 0.1514);
		Draw.bezierVertex(-0.0827, 0.1517, -0.0817, 0.1519, -0.0808, 0.1521);
		Draw.bezierVertex(-0.0794, 0.1525, -0.078, 0.1528, -0.0766, 0.1532);
		Draw.bezierVertex(-0.0756, 0.1535, -0.0746, 0.1537, -0.0736, 0.154);
		Draw.bezierVertex(-0.0722, 0.1544, -0.0707, 0.1547, -0.0692, 0.1551);
		Draw.bezierVertex(-0.0683, 0.1553, -0.0674, 0.1556, -0.0664, 0.1558);
		Draw.bezierVertex(-0.0648, 0.1562, -0.0633, 0.1564, -0.0617, 0.1567);
		Draw.bezierVertex(-0.0608, 0.1569, -0.06, 0.1571, -0.0591, 0.1573);
		Draw.bezierVertex(-0.0573, 0.1577, -0.0556, 0.158, -0.0538, 0.1584);
		Draw.bezierVertex(-0.0531, 0.1585, -0.0523, 0.1587, -0.0517, 0.1588);
		Draw.bezierVertex(-0.0467, 0.1598, -0.0417, 0.1605, -0.0366, 0.1613);
		Draw.bezierVertex(-0.036, 0.1614, -0.0354, 0.1615, -0.0348, 0.1616);
		Draw.bezierVertex(-0.0328, 0.1619, -0.031, 0.1622, -0.029, 0.1624);
		Draw.bezierVertex(-0.0281, 0.1625, -0.0272, 0.1626, -0.0263, 0.1627);
		Draw.bezierVertex(-0.0246, 0.1629, -0.0229, 0.1631, -0.0213, 0.1633);
		Draw.bezierVertex(-0.0203, 0.1634, -0.0192, 0.1635, -0.0183, 0.1636);
		Draw.bezierVertex(-0.0167, 0.1638, -0.0151, 0.1639, -0.0136, 0.1641);
		Draw.bezierVertex(-0.0125, 0.1642, -0.0114, 0.1643, -0.0103, 0.1644);
		Draw.bezierVertex(-0.0087, 0.1645, -0.0072, 0.1646, -0.0057, 0.1647);
		Draw.bezierVertex(-0.0045, 0.1648, -0.0034, 0.1648, -0.0022, 0.1649);
		Draw.bezierVertex(-0.0008, 0.165, 0.0008, 0.1651, 0.0022, 0.1651);
		Draw.bezierVertex(0.0034, 0.1652, 0.0046, 0.1652, 0.0058, 0.1652);
		Draw.bezierVertex(0.0072, 0.1653, 0.0087, 0.1653, 0.0103, 0.1653);
		Draw.bezierVertex(0.0114, 0.1653, 0.0127, 0.1653, 0.0139, 0.1654);
		Draw.bezierVertex(0.0153, 0.1654, 0.0168, 0.1654, 0.0184, 0.1654);
		Draw.bezierVertex(0.0195, 0.1654, 0.0208, 0.1654, 0.022, 0.1654);
		Draw.bezierVertex(0.0234, 0.1654, 0.0249, 0.1654, 0.0264, 0.1653);
		Draw.bezierVertex(0.0276, 0.1653, 0.0288, 0.1652, 0.0301, 0.1652);
		Draw.bezierVertex(0.0315, 0.1652, 0.033, 0.1651, 0.0346, 0.165);
		Draw.bezierVertex(0.0358, 0.1649, 0.037, 0.1649, 0.0383, 0.1648);
		Draw.bezierVertex(0.0397, 0.1647, 0.0412, 0.1646, 0.0428, 0.1646);
		Draw.bezierVertex(0.044, 0.1645, 0.0453, 0.1644, 0.0466, 0.1643);
		Draw.bezierVertex(0.048, 0.1642, 0.0495, 0.164, 0.0511, 0.1639);
		Draw.bezierVertex(0.0523, 0.1638, 0.0536, 0.1637, 0.0549, 0.1635);
		Draw.bezierVertex(0.0563, 0.1633, 0.0579, 0.1632, 0.0594, 0.163);
		Draw.bezierVertex(0.0606, 0.1629, 0.0619, 0.1627, 0.0632, 0.1625);
		Draw.bezierVertex(0.0647, 0.1623, 0.0662, 0.1621, 0.0678, 0.1619);
		Draw.bezierVertex(0.069, 0.1617, 0.0703, 0.1615, 0.0716, 0.1613);
		Draw.bezierVertex(0.0731, 0.1611, 0.0747, 0.1608, 0.0762, 0.1605);
		Draw.bezierVertex(0.0774, 0.1604, 0.0787, 0.1602, 0.0799, 0.1599);
		Draw.bezierVertex(0.0814, 0.1596, 0.083, 0.1593, 0.0846, 0.159);
		Draw.bezierVertex(0.0858, 0.1588, 0.087, 0.1585, 0.0883, 0.1583);
		Draw.bezierVertex(0.0898, 0.158, 0.0915, 0.1576, 0.0931, 0.1572);
		Draw.bezierVertex(0.0942, 0.1569, 0.0954, 0.1567, 0.0967, 0.1564);
		Draw.bezierVertex(0.0983, 0.1561, 0.1001, 0.1557, 0.1018, 0.1552);
		Draw.bezierVertex(0.1028, 0.1549, 0.104, 0.1546, 0.1051, 0.1543);
		Draw.bezierVertex(0.1069, 0.1538, 0.1089, 0.1533, 0.1107, 0.1527);
		Draw.bezierVertex(0.1117, 0.1524, 0.1126, 0.1522, 0.1136, 0.152);
		Draw.bezierVertex(0.1164, 0.1512, 0.1192, 0.1503, 0.1221, 0.1494);
		Draw.bezierVertex(0.1221, 0.1494, 0.1263, -0.0532, 0.1853, -0.2253);
		Draw.bezierVertex(0.1929, -0.2472, 0.2151, -0.2796, 0.2227, -0.2903);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.0634, -0.6137);
		Draw.bezierVertex(-0.0294, -0.6089, -0.0207, -0.6038, -0.0047, -0.5943);
		Draw.bezierVertex(0.0002, -0.5915, 0.0057, -0.5883, 0.0127, -0.5846);
		Draw.bezierVertex(0.0407, -0.5697, 0.0844, -0.5622, 0.0979, -0.5602);
		Draw.bezierVertex(0.0998, -0.5468, 0.0947, -0.5353, 0.0947, -0.5352);
		Draw.vertex(0.0937, -0.5327);
		Draw.vertex(0.0948, -0.5304);
		Draw.bezierVertex(0.0953, -0.5294, 0.1079, -0.5066, 0.1546, -0.4681);
		Draw.vertex(0.1539, -0.4557);
		Draw.bezierVertex(0.2009, -0.4177, 0.2298, -0.3896, 0.2391, -0.3552);
		Draw.vertex(0.2392, -0.3552);
		Draw.bezierVertex(0.2364, -0.3778, 0.2144, -0.4251, 0.1613, -0.4679);
		Draw.vertex(0.1613, -0.4679);
		Draw.vertex(0.1613, -0.4679);
		Draw.bezierVertex(0.1121, -0.5076, 0.0999, -0.5326, 0.0999, -0.5326);
		Draw.bezierVertex(0.0999, -0.5326, 0.1069, -0.5479, 0.1027, -0.5649);
		Draw.bezierVertex(0.1027, -0.5649, 0.0478, -0.5723, 0.0155, -0.5894);
		Draw.bezierVertex(-0.0167, -0.6063, -0.0171, -0.6135, -0.0713, -0.6202);
		Draw.bezierVertex(-0.0713, -0.6202, -0.0706, -0.6185, -0.0697, -0.6156);
		Draw.bezierVertex(-0.0683, -0.6149, -0.0661, -0.6142, -0.0634, -0.6137);
		Draw.endShape();
	}
	
	function Arm_Front() {
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(-0.2767, 0.2334);
		Draw.vertex(-0.2862, 0.2548);
		Draw.bezierVertex(-0.2875, 0.2576, -0.2873, 0.2607, -0.287, 0.2639);
		Draw.bezierVertex(-0.2854, 0.28, -0.2909, 0.2926, -0.2934, 0.3013);
		Draw.bezierVertex(-0.2958, 0.31, -0.3012, 0.3189, -0.3057, 0.318);
		Draw.bezierVertex(-0.3086, 0.3173, -0.3117, 0.3176, -0.3145, 0.3189);
		Draw.bezierVertex(-0.3213, 0.3225, -0.3269, 0.3187, -0.3304, 0.3146);
		Draw.bezierVertex(-0.3332, 0.3113, -0.3375, 0.3096, -0.3418, 0.3101);
		Draw.bezierVertex(-0.3495, 0.3108, -0.3554, 0.3067, -0.3589, 0.3032);
		Draw.bezierVertex(-0.3614, 0.3007, -0.3649, 0.2993, -0.3685, 0.2995);
		Draw.bezierVertex(-0.3823, 0.3003, -0.389, 0.2903, -0.3917, 0.2843);
		Draw.bezierVertex(-0.3929, 0.2816, -0.3933, 0.2787, -0.3927, 0.276);
		Draw.bezierVertex(-0.39, 0.2632, -0.3817, 0.2522, -0.3775, 0.2474);
		Draw.bezierVertex(-0.376, 0.2456, -0.3729, 0.2422, -0.3652, 0.2387);
		Draw.bezierVertex(-0.3575, 0.2352, -0.357, 0.2336, -0.3532, 0.2284);
		Draw.vertex(-0.3374, 0.195);
		Draw.bezierVertex(-0.3337, 0.1871, -0.3236, 0.1847, -0.3166, 0.1899);
		Draw.vertex(-0.2811, 0.2167);
		Draw.bezierVertex(-0.2758, 0.2206, -0.274, 0.2275, -0.2767, 0.2334);
		Draw.endShape();
		
		Draw.fill("#191919");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.2582, -0.0697);
		Draw.bezierVertex(-0.2915, -0.0327, -0.313, 0.0803, -0.313, 0.0803);
		Draw.bezierVertex(-0.3207, 0.1426, -0.3502, 0.2116, -0.3502, 0.2116);
		Draw.bezierVertex(-0.3374, 0.2647, -0.2769, 0.2447, -0.2769, 0.2447);
		Draw.bezierVertex(-0.2527, 0.1586, -0.216, 0.0614, -0.205, 0.0532);
		Draw.bezierVertex(-0.1939, 0.045, -0.0932, 0.07, -0.0932, 0.07);
		Draw.bezierVertex(0.0532, 0.1077, 0.0678, 0.015, 0.0678, 0.015);
		Draw.bezierVertex(0.0813, -0.0719, 0, -0.0713, 0, -0.0713);
		Draw.bezierVertex(0, -0.0713, -0.2383, -0.0918, -0.2582, -0.0697);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(-0.3486, 0.217);
		Draw.bezierVertex(-0.3483, 0.218, -0.3479, 0.2188, -0.3476, 0.2198);
		Draw.bezierVertex(-0.3474, 0.2202, -0.3473, 0.2206, -0.3471, 0.221);
		Draw.bezierVertex(-0.3466, 0.2221, -0.3462, 0.223, -0.3457, 0.224);
		Draw.bezierVertex(-0.3454, 0.2246, -0.345, 0.2252, -0.3447, 0.2259);
		Draw.bezierVertex(-0.3445, 0.2263, -0.3443, 0.2266, -0.3441, 0.227);
		Draw.bezierVertex(-0.3428, 0.2292, -0.3413, 0.2313, -0.3397, 0.2331);
		Draw.bezierVertex(-0.3397, 0.2331, -0.3397, 0.2331, -0.3397, 0.2331);
		Draw.bezierVertex(-0.3042, 0.1551, -0.2834, 0.0169, -0.2734, -0.0093);
		Draw.bezierVertex(-0.2635, -0.0354, -0.2534, -0.0504, -0.2347, -0.0628);
		Draw.bezierVertex(-0.2098, -0.0792, -0.1721, -0.0798, -0.1716, -0.0799);
		Draw.bezierVertex(-0.2147, -0.0801, -0.2509, -0.0777, -0.2582, -0.0696);
		Draw.bezierVertex(-0.2915, -0.0326, -0.313, 0.0804, -0.313, 0.0804);
		Draw.bezierVertex(-0.3207, 0.1427, -0.3502, 0.2117, -0.3502, 0.2117);
		Draw.bezierVertex(-0.3498, 0.2132, -0.3494, 0.2146, -0.349, 0.2159);
		Draw.bezierVertex(-0.3489, 0.2162, -0.3487, 0.2166, -0.3486, 0.217);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0293, 0.0583);
		Draw.bezierVertex(0.0171, 0.0662, 0.0063, 0.0743, -0.0186, 0.0787);
		Draw.bezierVertex(0.0586, 0.0735, 0.0678, 0.015, 0.0678, 0.015);
		Draw.bezierVertex(0.0813, -0.0719, 0, -0.0713, 0, -0.0713);
		Draw.bezierVertex(0, -0.0713, -0.001, -0.0714, -0.0028, -0.0715);
		Draw.vertex(-0.0028, -0.0715);
		Draw.vertex(-0.0028, -0.0715);
		Draw.bezierVertex(0.0151, -0.0658, 0.0353, -0.0589, 0.047, -0.0443);
		Draw.bezierVertex(0.0588, -0.0297, 0.0599, -0.0013, 0.0577, 0.0117);
		Draw.bezierVertex(0.0556, 0.0247, 0.048, 0.0462, 0.0293, 0.0583);
		Draw.endShape();
		
		Draw.fill("#FFF800");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.2769, 0.2447);
		Draw.bezierVertex(-0.2758, 0.2408, -0.2746, 0.2369, -0.2735, 0.2329);
		Draw.bezierVertex(-0.2766, 0.2346, -0.2793, 0.2354, -0.2806, 0.2358);
		Draw.bezierVertex(-0.2847, 0.2371, -0.3073, 0.2412, -0.3233, 0.2323);
		Draw.bezierVertex(-0.3313, 0.2278, -0.3397, 0.2192, -0.3425, 0.2085);
		Draw.bezierVertex(-0.3434, 0.2049, -0.3441, 0.2011, -0.3443, 0.1965);
		Draw.bezierVertex(-0.3479, 0.206, -0.3504, 0.2116, -0.3504, 0.2116);
		Draw.bezierVertex(-0.3374, 0.2646, -0.2769, 0.2447, -0.2769, 0.2447);
		Draw.endShape();
	}
	
	function Hair() {
		Draw.fill("#F2304D");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0976, -0.048);
		Draw.bezierVertex(0.0976, -0.048, -0.0084, -0.1705, -0.1774, -0.0769);
		Draw.bezierVertex(-0.3465, 0.0168, 0.0976, -0.048, 0.0976, -0.048);
		Draw.endShape();
		
		Draw.fill("#FF2400");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0792, 0.0604);
		Draw.bezierVertex(0.0962, 0.0437, 0.1669, -0.1162, -0.0176, -0.0874);
		Draw.bezierVertex(-0.0176, -0.0874, 0.1065, -0.0499, 0.0273, 0.0255);
		Draw.bezierVertex(-0.0519, 0.1009, 0.0621, 0.0771, 0.0792, 0.0604);
		Draw.endShape();
		
		Draw.fill("#EF4552");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.2839, 0.3745);
		Draw.bezierVertex(-0.2874, 0.3845, -0.2911, 0.3971, -0.2954, 0.4112);
		Draw.bezierVertex(-0.2997, 0.4254, -0.3045, 0.441, -0.3096, 0.4576);
		Draw.bezierVertex(-0.3325, 0.5163, -0.3354, 0.6004, -0.3943, 0.6315);
		Draw.bezierVertex(-0.3663, 0.6035, -0.3551, 0.5567, -0.3635, 0.5162);
		Draw.bezierVertex(-0.3635, 0.5349, -0.3719, 0.5567, -0.3859, 0.566);
		Draw.bezierVertex(-0.4533, 0.5972, -0.487, 0.672, -0.5348, 0.7249);
		Draw.bezierVertex(-0.487, 0.6396, -0.4293, 0.5515, -0.4277, 0.4475);
		Draw.bezierVertex(-0.4276, 0.4413, -0.4277, 0.4352, -0.428, 0.4289);
		Draw.bezierVertex(-0.4364, 0.4414, -0.4421, 0.4569, -0.4483, 0.4718);
		Draw.bezierVertex(-0.4505, 0.4768, -0.4525, 0.4817, -0.4547, 0.4867);
		Draw.bezierVertex(-0.48, 0.5469, -0.5052, 0.6088, -0.5684, 0.6252);
		Draw.bezierVertex(-0.5317, 0.6042, -0.5087, 0.5648, -0.4894, 0.5205);
		Draw.bezierVertex(-0.4872, 0.5156, -0.4851, 0.5106, -0.483, 0.5056);
		Draw.bezierVertex(-0.4817, 0.5021, -0.4806, 0.4987, -0.4792, 0.4954);
		Draw.bezierVertex(-0.4779, 0.4921, -0.4766, 0.4887, -0.4753, 0.4854);
		Draw.bezierVertex(-0.4616, 0.4569, -0.4504, 0.4227, -0.4359, 0.3931);
		Draw.bezierVertex(-0.434, 0.3892, -0.4319, 0.3854, -0.4299, 0.3816);
		Draw.bezierVertex(-0.4257, 0.3742, -0.4214, 0.3671, -0.4167, 0.3604);
		Draw.bezierVertex(-0.4222, 0.3637, -0.4277, 0.367, -0.4333, 0.3703);
		Draw.bezierVertex(-0.4361, 0.372, -0.4389, 0.3737, -0.4417, 0.3754);
		Draw.bezierVertex(-0.4454, 0.3779, -0.4488, 0.3808, -0.4521, 0.3839);
		Draw.bezierVertex(-0.4556, 0.3878, -0.459, 0.3916, -0.4622, 0.3953);
		Draw.bezierVertex(-0.4655, 0.3991, -0.4688, 0.4028, -0.4719, 0.4065);
		Draw.bezierVertex(-0.476, 0.4119, -0.4915, 0.4326, -0.5093, 0.4507);
		Draw.bezierVertex(-0.5009, 0.4413, -0.493, 0.414, -0.4916, 0.4105);
		Draw.bezierVertex(-0.4891, 0.4036, -0.4864, 0.3968, -0.4834, 0.39);
		Draw.bezierVertex(-0.4815, 0.3862, -0.4795, 0.3825, -0.4773, 0.379);
		Draw.bezierVertex(-0.4729, 0.3719, -0.468, 0.3654, -0.4616, 0.3598);
		Draw.bezierVertex(-0.4585, 0.357, -0.4137, 0.3272, -0.3976, 0.2948);
		Draw.bezierVertex(-0.3919, 0.2834, -0.386, 0.2716, -0.3828, 0.2575);
		Draw.bezierVertex(-0.4223, 0.2481, -0.4595, 0.3139, -0.4979, 0.3416);
		Draw.bezierVertex(-0.4924, 0.3354, -0.4867, 0.3291, -0.4812, 0.3235);
		Draw.bezierVertex(-0.4788, 0.3202, -0.4765, 0.3168, -0.4741, 0.3134);
		Draw.bezierVertex(-0.4672, 0.303, -0.4603, 0.2926, -0.4506, 0.2841);
		Draw.bezierVertex(-0.4474, 0.2805, -0.4441, 0.277, -0.4408, 0.2735);
		Draw.bezierVertex(-0.4342, 0.2667, -0.4271, 0.2604, -0.4194, 0.2553);
		Draw.bezierVertex(-0.4157, 0.2527, -0.412, 0.2502, -0.4084, 0.2477);
		Draw.bezierVertex(-0.3791, 0.2271, -0.3538, 0.2008, -0.338, 0.1641);
		Draw.bezierVertex(-0.3324, 0.1454, -0.3296, 0.1173, -0.3097, 0.1038);
		Draw.bezierVertex(-0.3097, 0.1038, -0.3108, 0.0876, -0.3072, 0.0645);
		Draw.bezierVertex(-0.2964, -0.0051, -0.2423, -0.1377, 0.0177, -0.0852);
		Draw.bezierVertex(0.0177, -0.0852, 0.0815, -0.0847, 0.0884, 0.0056);
		Draw.bezierVertex(0.0976, 0.1299, -0.1847, 0.092, -0.2839, 0.3745);
		Draw.endShape();
		
		Draw.fill("#E03870");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.2733, 0.3303);
		Draw.bezierVertex(-0.2733, 0.3303, -0.2816, 0.3396, -0.292, 0.354);
		Draw.bezierVertex(-0.3023, 0.3684, -0.3149, 0.3875, -0.3235, 0.407);
		Draw.bezierVertex(-0.3382, 0.4633, -0.3356, 0.5251, -0.3441, 0.5813);
		Draw.bezierVertex(-0.3273, 0.5345, -0.3073, 0.4883, -0.3062, 0.437);
		Draw.bezierVertex(-0.3049, 0.4153, -0.302, 0.3979, -0.2985, 0.3839);
		Draw.bezierVertex(-0.2883, 0.3419, -0.2733, 0.3303, -0.2733, 0.3303);
		Draw.endShape();
		
		Draw.fill("#F451A3");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3136, 0.2767);
		Draw.bezierVertex(-0.3136, 0.2767, -0.3219, 0.2873, -0.3319, 0.3042);
		Draw.bezierVertex(-0.3421, 0.3214, -0.3514, 0.3394, -0.3578, 0.3583);
		Draw.bezierVertex(-0.3606, 0.3698, -0.3662, 0.3822, -0.3662, 0.3947);
		Draw.bezierVertex(-0.3634, 0.4477, -0.3718, 0.4976, -0.3999, 0.5412);
		Draw.bezierVertex(-0.369, 0.4944, -0.3438, 0.4384, -0.3429, 0.3804);
		Draw.bezierVertex(-0.3419, 0.3517, -0.3346, 0.3258, -0.3275, 0.307);
		Draw.bezierVertex(-0.3204, 0.2883, -0.3136, 0.2767, -0.3136, 0.2767);
		Draw.endShape();
		
		Draw.fill("#E0223D");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3409, 0.3745);
		Draw.bezierVertex(-0.3662, 0.4321, -0.3494, 0.4913, -0.3494, 0.5505);
		Draw.bezierVertex(-0.3494, 0.5068, -0.3354, 0.4664, -0.3476, 0.4246);
		Draw.bezierVertex(-0.3487, 0.4143, -0.3479, 0.4003, -0.3409, 0.3745);
		Draw.endShape();
		
		Draw.fill("#F456B8");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.0236, 0.0338);
		Draw.bezierVertex(-0.0073, -0.0819, -0.0737, -0.0497, -0.0737, -0.0497);
		Draw.bezierVertex(-0.109, -0.0253, -0.1206, 0.008, -0.1206, 0.008);
		Draw.bezierVertex(-0.1349, 0.0269, -0.165, 0.0503, -0.165, 0.0503);
		Draw.bezierVertex(-0.1847, 0.0742, -0.1533, 0.0938, -0.1533, 0.0938);
		Draw.vertex(-0.0236, 0.0338);
		Draw.endShape();
		
		Draw.fill("#FC636B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3986, 0.2434);
		Draw.bezierVertex(-0.3831, 0.2047, -0.3663, 0.1643, -0.3476, 0.131);
		Draw.bezierVertex(-0.333, 0.1046, -0.3225, 0.0869, -0.3202, 0.0725);
		Draw.bezierVertex(-0.3148, 0.0369, -0.2909, -0.0172, -0.2666, -0.057);
		Draw.bezierVertex(-0.2423, -0.0969, -0.1801, -0.0886, -0.1801, -0.0886);
		Draw.bezierVertex(-0.222, -0.0487, -0.2798, 0.0143, -0.2798, 0.0143);
		Draw.bezierVertex(-0.2805, 0.0499, -0.3004, 0.1065, -0.3004, 0.1065);
		Draw.bezierVertex(-0.3047, 0.1149, -0.313, 0.1274, -0.323, 0.1415);
		Draw.bezierVertex(-0.3331, 0.1556, -0.3448, 0.1715, -0.3561, 0.1866);
		Draw.bezierVertex(-0.3783, 0.2169, -0.3986, 0.2434, -0.3986, 0.2434);
		Draw.endShape();
		
		Draw.fill("#FF7F5C");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.2733, 0.0313);
		Draw.bezierVertex(-0.2844, 0.051, -0.3065, 0.0712, -0.3065, 0.0712);
		Draw.bezierVertex(-0.2892, 0.0451, -0.2911, 0.0392, -0.2837, 0.0011);
		Draw.bezierVertex(-0.2597, -0.1215, -0.1333, -0.0971, -0.1333, -0.0971);
		Draw.bezierVertex(-0.2111, -0.027, -0.2623, 0.0115, -0.2733, 0.0313);
		Draw.endShape();
		
		Draw.fill("#EA433B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.1206, -0.0923);
		Draw.bezierVertex(-0.145, -0.1199, -0.179, -0.1016, -0.179, -0.1016);
		Draw.bezierVertex(-0.2596, -0.0505, -0.2732, 0.2283, -0.2732, 0.2283);
		Draw.bezierVertex(-0.2732, 0.2283, -0.2387, 0.1484, -0.2273, 0.1031);
		Draw.bezierVertex(-0.1882, -0.0541, -0.1039, -0.0884, -0.1039, -0.0884);
		Draw.vertex(-0.1206, -0.0923);
		Draw.endShape();
		
		Draw.fill("#FC636B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.4147, 0.5895);
		Draw.bezierVertex(-0.3888, 0.563, -0.3775, 0.5505, -0.3635, 0.5162);
		Draw.bezierVertex(-0.3607, 0.5427, -0.3752, 0.5647, -0.3896, 0.5766);
		Draw.bezierVertex(-0.403, 0.5876, -0.4147, 0.5895, -0.4147, 0.5895);
		Draw.endShape();
		
		Draw.fill("#FC636B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.4012, 0.6461);
		Draw.bezierVertex(-0.3775, 0.6128, -0.3608, 0.5722, -0.3635, 0.5162);
		Draw.bezierVertex(-0.3536, 0.5464, -0.3516, 0.5768, -0.3676, 0.6172);
		Draw.bezierVertex(-0.3739, 0.6334, -0.4012, 0.6461, -0.4012, 0.6461);
		Draw.endShape();
		
		Draw.fill("#E0223D");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3289, 0.248);
		Draw.bezierVertex(-0.3469, 0.2811, -0.3835, 0.2852, -0.4094, 0.3065);
		Draw.bezierVertex(-0.4131, 0.3096, -0.4165, 0.313, -0.4197, 0.3169);
		Draw.bezierVertex(-0.4173, 0.3126, -0.4145, 0.3088, -0.4114, 0.3053);
		Draw.bezierVertex(-0.4084, 0.3018, -0.405, 0.2985, -0.4016, 0.2955);
		Draw.bezierVertex(-0.3806, 0.2775, -0.3534, 0.267, -0.3396, 0.2388);
		Draw.bezierVertex(-0.3294, 0.2235, -0.3062, 0.207, -0.2919, 0.1996);
		Draw.bezierVertex(-0.2776, 0.1922, -0.2722, 0.1936, -0.2974, 0.2144);
		Draw.bezierVertex(-0.2972, 0.2143, -0.315, 0.2265, -0.3289, 0.248);
		Draw.endShape();
		
		Draw.fill("#E0223D");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3716, 0.3879);
		Draw.bezierVertex(-0.3803, 0.426, -0.3915, 0.4634, -0.414, 0.4945);
		Draw.bezierVertex(-0.3999, 0.5039, -0.3887, 0.4945, -0.3831, 0.482);
		Draw.bezierVertex(-0.3775, 0.4603, -0.3747, 0.4415, -0.3737, 0.4194);
		Draw.bezierVertex(-0.3711, 0.4012, -0.3716, 0.3879, -0.3716, 0.3879);
		Draw.endShape();
		
		Draw.fill("#F99964");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3626, 0.2811);
		Draw.bezierVertex(-0.3742, 0.2942, -0.385, 0.3071, -0.3963, 0.3182);
		Draw.bezierVertex(-0.4076, 0.3292, -0.4195, 0.3386, -0.4336, 0.3448);
		Draw.bezierVertex(-0.4361, 0.3465, -0.4387, 0.348, -0.4413, 0.3496);
		Draw.bezierVertex(-0.4442, 0.3509, -0.447, 0.3523, -0.4496, 0.3541);
		Draw.bezierVertex(-0.4522, 0.3559, -0.4547, 0.3576, -0.457, 0.3597);
		Draw.bezierVertex(-0.4631, 0.3661, -0.4688, 0.3727, -0.4743, 0.3794);
		Draw.bezierVertex(-0.4771, 0.3828, -0.4797, 0.3862, -0.4822, 0.3897);
		Draw.bezierVertex(-0.4856, 0.3955, -0.4893, 0.4019, -0.4927, 0.4085);
		Draw.bezierVertex(-0.4943, 0.4118, -0.496, 0.4152, -0.4977, 0.4187);
		Draw.bezierVertex(-0.5011, 0.4321, -0.5076, 0.4396, -0.5104, 0.4521);
		Draw.bezierVertex(-0.5021, 0.4458, -0.4987, 0.4349, -0.4924, 0.427);
		Draw.bezierVertex(-0.4903, 0.4244, -0.488, 0.4215, -0.4859, 0.419);
		Draw.bezierVertex(-0.4818, 0.4142, -0.4774, 0.4093, -0.4732, 0.406);
		Draw.bezierVertex(-0.469, 0.4026, -0.4661, 0.3989, -0.4626, 0.3953);
		Draw.bezierVertex(-0.4591, 0.3917, -0.4555, 0.388, -0.4521, 0.3841);
		Draw.bezierVertex(-0.4497, 0.3821, -0.4473, 0.3802, -0.4447, 0.3784);
		Draw.bezierVertex(-0.4423, 0.3767, -0.4396, 0.3749, -0.437, 0.3733);
		Draw.bezierVertex(-0.4343, 0.3717, -0.4315, 0.3699, -0.4289, 0.3682);
		Draw.bezierVertex(-0.4209, 0.3627, -0.4132, 0.3565, -0.406, 0.3493);
		Draw.bezierVertex(-0.3938, 0.3379, -0.383, 0.3241, -0.3746, 0.3068);
		Draw.bezierVertex(-0.366, 0.2917, -0.3626, 0.2811, -0.3626, 0.2811);
		Draw.endShape();
		
		Draw.fill("#F99964");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3831, 0.2576);
		Draw.bezierVertex(-0.3652, 0.2309, -0.3614, 0.2106, -0.3516, 0.1942);
		Draw.bezierVertex(-0.3705, 0.2093, -0.3813, 0.222, -0.3999, 0.2377);
		Draw.bezierVertex(-0.4036, 0.2408, -0.4074, 0.2439, -0.4112, 0.2469);
		Draw.bezierVertex(-0.4249, 0.2544, -0.4358, 0.2657, -0.446, 0.278);
		Draw.bezierVertex(-0.4494, 0.2821, -0.4527, 0.2863, -0.4561, 0.2906);
		Draw.bezierVertex(-0.4631, 0.3006, -0.4701, 0.3095, -0.4771, 0.3179);
		Draw.bezierVertex(-0.4795, 0.3206, -0.4932, 0.3354, -0.4982, 0.3418);
		Draw.bezierVertex(-0.4927, 0.3387, -0.4628, 0.3052, -0.4555, 0.2967);
		Draw.bezierVertex(-0.4519, 0.2933, -0.4482, 0.2898, -0.4443, 0.287);
		Draw.bezierVertex(-0.4251, 0.2728, -0.3831, 0.2576, -0.3831, 0.2576);
		Draw.endShape();
		
		Draw.fill("#F99964");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.4032, 0.3667);
		Draw.bezierVertex(-0.4124, 0.3719, -0.4201, 0.3787, -0.4273, 0.3864);
		Draw.bezierVertex(-0.4297, 0.389, -0.432, 0.3917, -0.4344, 0.3945);
		Draw.bezierVertex(-0.4398, 0.4016, -0.4453, 0.409, -0.4506, 0.4168);
		Draw.bezierVertex(-0.4532, 0.4207, -0.4763, 0.4651, -0.4996, 0.5357);
		Draw.bezierVertex(-0.5133, 0.5771, -0.5295, 0.6141, -0.5685, 0.6253);
		Draw.bezierVertex(-0.5488, 0.6222, -0.5292, 0.6128, -0.5151, 0.5973);
		Draw.bezierVertex(-0.4871, 0.5661, -0.4765, 0.5238, -0.4596, 0.4858);
		Draw.bezierVertex(-0.4574, 0.4811, -0.4553, 0.4764, -0.4529, 0.4718);
		Draw.bezierVertex(-0.4478, 0.4633, -0.445, 0.454, -0.4367, 0.4456);
		Draw.bezierVertex(-0.4336, 0.4415, -0.4303, 0.4376, -0.4267, 0.4338);
		Draw.bezierVertex(-0.4073, 0.3964, -0.4032, 0.3667, -0.4032, 0.3667);
		Draw.endShape();
		
		Draw.fill("#FF7697");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.394, 0.4165);
		Draw.bezierVertex(-0.4477, 0.5162, -0.4646, 0.6377, -0.5348, 0.725);
		Draw.bezierVertex(-0.4674, 0.6471, -0.3888, 0.5536, -0.4022, 0.4382);
		Draw.bezierVertex(-0.3985, 0.4243, -0.394, 0.4165, -0.394, 0.4165);
		Draw.endShape();
		
		Draw.fill("#E0223D");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.2152, -0.0571);
		Draw.bezierVertex(-0.2501, -0.0314, -0.2826, 0.1047, -0.2826, 0.1047);
		Draw.bezierVertex(-0.2934, 0.1317, -0.3008, 0.2937, -0.3008, 0.2937);
		Draw.vertex(-0.2628, 0.1276);
		Draw.bezierVertex(-0.2521, 0.0234, -0.2152, -0.0571, -0.2152, -0.0571);
		Draw.endShape();
		
		Draw.fill("#F451A3");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0132, 0.007);
		Draw.bezierVertex(0.0759, -0.1184, -0.0751, -0.0652, -0.0751, -0.0652);
		Draw.bezierVertex(0.039, -0.0866, 0.0132, 0.007, 0.0132, 0.007);
		Draw.endShape();
		
		Draw.fill("#FF4D6F");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.394, 0.4165);
		Draw.bezierVertex(-0.4252, 0.4414, -0.4252, 0.4913, -0.4393, 0.5287);
		Draw.bezierVertex(-0.4309, 0.5101, -0.4225, 0.4913, -0.4196, 0.4727);
		Draw.bezierVertex(-0.4141, 0.5038, -0.4112, 0.5318, -0.4168, 0.563);
		Draw.bezierVertex(-0.4027, 0.5412, -0.3972, 0.5132, -0.4054, 0.4842);
		Draw.bezierVertex(-0.4063, 0.4466, -0.394, 0.4165, -0.394, 0.4165);
		Draw.endShape();
		
		Draw.fill("#FFD37B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.4189, 0.3854);
		Draw.bezierVertex(-0.4213, 0.3885, -0.4236, 0.3916, -0.4259, 0.3949);
		Draw.bezierVertex(-0.4281, 0.3981, -0.4303, 0.4015, -0.4324, 0.4048);
		Draw.bezierVertex(-0.4478, 0.4291, -0.4562, 0.4571, -0.4716, 0.4817);
		Draw.bezierVertex(-0.4734, 0.4852, -0.4753, 0.4885, -0.4771, 0.4919);
		Draw.bezierVertex(-0.4807, 0.4986, -0.484, 0.5054, -0.4866, 0.5124);
		Draw.bezierVertex(-0.4887, 0.5168, -0.4908, 0.5211, -0.493, 0.5254);
		Draw.bezierVertex(-0.5122, 0.5642, -0.5344, 0.6001, -0.5685, 0.6253);
		Draw.bezierVertex(-0.5028, 0.6167, -0.485, 0.5507, -0.4639, 0.4894);
		Draw.bezierVertex(-0.4619, 0.4838, -0.46, 0.4782, -0.458, 0.4729);
		Draw.bezierVertex(-0.4478, 0.4539, -0.4422, 0.429, -0.4282, 0.4146);
		Draw.bezierVertex(-0.4269, 0.4105, -0.4256, 0.4067, -0.4245, 0.4032);
		Draw.bezierVertex(-0.421, 0.3928, -0.4189, 0.3854, -0.4189, 0.3854);
		Draw.endShape();
		
		Draw.fill("#FFD37B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.5104, 0.4521);
		Draw.bezierVertex(-0.5089, 0.4425, -0.495, 0.4118, -0.4935, 0.4084);
		Draw.bezierVertex(-0.4903, 0.4017, -0.4868, 0.3952, -0.4825, 0.3893);
		Draw.bezierVertex(-0.4801, 0.3855, -0.4774, 0.3819, -0.4747, 0.3784);
		Draw.bezierVertex(-0.4691, 0.3715, -0.463, 0.3649, -0.4559, 0.3592);
		Draw.bezierVertex(-0.4524, 0.3571, -0.4486, 0.3552, -0.4442, 0.3534);
		Draw.bezierVertex(-0.4396, 0.3509, -0.4349, 0.3482, -0.4303, 0.3456);
		Draw.bezierVertex(-0.4257, 0.343, -0.4213, 0.3402, -0.417, 0.3374);
		Draw.bezierVertex(-0.4067, 0.3303, -0.3969, 0.3223, -0.3878, 0.3129);
		Draw.bezierVertex(-0.3977, 0.3315, -0.4131, 0.3433, -0.4299, 0.3535);
		Draw.bezierVertex(-0.4341, 0.3561, -0.4384, 0.3586, -0.4426, 0.3611);
		Draw.bezierVertex(-0.4464, 0.363, -0.4498, 0.3653, -0.453, 0.368);
		Draw.bezierVertex(-0.4606, 0.3748, -0.4666, 0.3832, -0.4722, 0.3921);
		Draw.bezierVertex(-0.4749, 0.3965, -0.4775, 0.4011, -0.4801, 0.4058);
		Draw.bezierVertex(-0.4818, 0.4101, -0.484, 0.4134, -0.4859, 0.4169);
		Draw.bezierVertex(-0.4879, 0.4204, -0.4902, 0.4234, -0.4924, 0.4265);
		Draw.bezierVertex(-0.4962, 0.4316, -0.5012, 0.4384, -0.5056, 0.4454);
		Draw.bezierVertex(-0.5086, 0.4498, -0.5104, 0.4521, -0.5104, 0.4521);
		Draw.endShape();
		
		Draw.fill("#FF5A81");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3814, 0.3243);
		Draw.bezierVertex(-0.3774, 0.3074, -0.3662, 0.3013, -0.355, 0.295);
		Draw.bezierVertex(-0.3354, 0.2794, -0.327, 0.2514, -0.3129, 0.2296);
		Draw.bezierVertex(-0.3185, 0.2607, -0.3297, 0.2919, -0.3568, 0.3042);
		Draw.bezierVertex(-0.3699, 0.3068, -0.3814, 0.3243, -0.3814, 0.3243);
		Draw.endShape();
		
		Draw.fill("#FF7697");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3662, 0.3236);
		Draw.bezierVertex(-0.381, 0.3312, -0.386, 0.347, -0.3906, 0.3632);
		Draw.bezierVertex(-0.3952, 0.3795, -0.4008, 0.3927, -0.4119, 0.4061);
		Draw.bezierVertex(-0.3978, 0.3911, -0.383, 0.3802, -0.3777, 0.3554);
		Draw.bezierVertex(-0.3761, 0.3333, -0.3662, 0.3236, -0.3662, 0.3236);
		Draw.endShape();
		
		Draw.fill("#FFD37B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3516, 0.1943);
		Draw.bezierVertex(-0.3695, 0.2144, -0.3887, 0.2333, -0.4093, 0.2496);
		Draw.bezierVertex(-0.4127, 0.2523, -0.4162, 0.255, -0.4195, 0.2577);
		Draw.bezierVertex(-0.4272, 0.2632, -0.4343, 0.2693, -0.441, 0.276);
		Draw.bezierVertex(-0.4443, 0.2793, -0.4476, 0.2827, -0.4508, 0.2861);
		Draw.bezierVertex(-0.4591, 0.2952, -0.4667, 0.3053, -0.4744, 0.3149);
		Draw.bezierVertex(-0.477, 0.3182, -0.4796, 0.3214, -0.4821, 0.3245);
		Draw.bezierVertex(-0.487, 0.3293, -0.4926, 0.3355, -0.4982, 0.3418);
		Draw.bezierVertex(-0.4953, 0.3384, -0.4721, 0.3066, -0.4589, 0.2844);
		Draw.bezierVertex(-0.4565, 0.2805, -0.43, 0.2452, -0.4169, 0.2339);
		Draw.bezierVertex(-0.3855, 0.2069, -0.353, 0.1693, -0.3287, 0.1409);
		Draw.bezierVertex(-0.3149, 0.1255, -0.3042, 0.1133, -0.3042, 0.1133);
		Draw.bezierVertex(-0.3042, 0.1133, -0.314, 0.1311, -0.3247, 0.1501);
		Draw.bezierVertex(-0.3355, 0.1692, -0.3474, 0.1896, -0.3516, 0.1943);
		Draw.endShape();
		
		Draw.fill("#FFD37B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.5347, 0.725);
		Draw.bezierVertex(-0.5022, 0.6625, -0.4617, 0.5973, -0.4336, 0.5287);
		Draw.bezierVertex(-0.4252, 0.5879, -0.4757, 0.6284, -0.4959, 0.6794);
		Draw.bezierVertex(-0.5164, 0.7044, -0.5347, 0.725, -0.5347, 0.725);
		Draw.endShape();
		
		Draw.fill("#F6CFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0626, -0.0406);
		Draw.bezierVertex(0.0597, -0.0593, 0.0218, -0.0676, -0.022, -0.0591);
		Draw.bezierVertex(-0.0657, -0.0506, -0.0989, -0.0286, -0.096, -0.01);
		Draw.bezierVertex(-0.0931, 0.0087, -0.0552, 0.017, -0.0114, 0.0085);
		Draw.bezierVertex(0.0323, 0, 0.0655, -0.022, 0.0626, -0.0406);
		Draw.endShape();
		
		Draw.fill("#FFD37B");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3679, 0.5731);
		Draw.bezierVertex(-0.3831, 0.6098, -0.4027, 0.6409, -0.4196, 0.6752);
		Draw.bezierVertex(-0.4112, 0.6596, -0.4028, 0.6503, -0.3925, 0.6391);
		Draw.bezierVertex(-0.3785, 0.6239, -0.3685, 0.6017, -0.3679, 0.5731);
		Draw.endShape();
		
		Draw.fill("#FF7697");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3562, 0.2415);
		Draw.bezierVertex(-0.3562, 0.2415, -0.3473, 0.2019, -0.3228, 0.1764);
		Draw.bezierVertex(-0.3104, 0.1637, -0.3022, 0.1426, -0.2972, 0.1247);
		Draw.bezierVertex(-0.292, 0.1068, -0.2899, 0.092, -0.2899, 0.092);
		Draw.bezierVertex(-0.2899, 0.092, -0.2936, 0.1348, -0.3092, 0.1712);
		Draw.bezierVertex(-0.3144, 0.1833, -0.3215, 0.1942, -0.3291, 0.204);
		Draw.bezierVertex(-0.3558, 0.2383, -0.3562, 0.2415, -0.3562, 0.2415);
		Draw.endShape();
		
		Draw.fill("#F94230");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3395, 0.1228);
		Draw.bezierVertex(-0.3663, 0.1361, -0.3804, 0.1704, -0.3888, 0.2016);
		Draw.bezierVertex(-0.3804, 0.1767, -0.3635, 0.161, -0.3435, 0.1464);
		Draw.bezierVertex(-0.3435, 0.1464, -0.3217, 0.1378, -0.3044, 0.0944);
		Draw.bezierVertex(-0.3044, 0.0944, -0.3141, 0.1147, -0.3395, 0.1228);
		Draw.endShape();
		
		Draw.fill("#E03870");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3303, 0.4285);
		Draw.bezierVertex(-0.3303, 0.4285, -0.334, 0.4124, -0.3336, 0.3912);
		Draw.bezierVertex(-0.3332, 0.3701, -0.3289, 0.3438, -0.3136, 0.3229);
		Draw.bezierVertex(-0.3059, 0.3124, -0.3003, 0.2983, -0.2961, 0.2832);
		Draw.bezierVertex(-0.2837, 0.2378, -0.2848, 0.1823, -0.2848, 0.1823);
		Draw.bezierVertex(-0.2848, 0.1823, -0.2679, 0.2601, -0.2898, 0.3092);
		Draw.bezierVertex(-0.3009, 0.3338, -0.3092, 0.3501, -0.3156, 0.3669);
		Draw.bezierVertex(-0.3223, 0.3838, -0.327, 0.4013, -0.3303, 0.4285);
		Draw.endShape();
		
		Draw.fill("#FF7697");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.2769, -0.0309);
		Draw.bezierVertex(-0.2769, -0.0309, -0.294, 0.0015, -0.3059, 0.036);
		Draw.bezierVertex(-0.3111, 0.0516, -0.3222, 0.0709, -0.3319, 0.0864);
		Draw.bezierVertex(-0.3416, 0.102, -0.35, 0.1137, -0.35, 0.1137);
		Draw.bezierVertex(-0.35, 0.1137, -0.3368, 0.1014, -0.3226, 0.0829);
		Draw.bezierVertex(-0.3154, 0.0736, -0.3081, 0.0629, -0.302, 0.0513);
		Draw.bezierVertex(-0.2958, 0.0396, -0.2924, 0.0269, -0.289, 0.0147);
		Draw.bezierVertex(-0.2769, -0.0284, -0.2769, -0.0309, -0.2769, -0.0309);
		Draw.endShape();
		
		Draw.fill("#FF9CB8");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.2333, -0.06);
		Draw.bezierVertex(-0.2539, -0.0268, -0.2681, 0.0078, -0.2861, 0.0414);
		Draw.bezierVertex(-0.2783, 0.0254, -0.2754, 0.0126, -0.2719, -0.0029);
		Draw.bezierVertex(-0.2672, -0.0239, -0.2551, -0.0449, -0.2333, -0.06);
		Draw.endShape();
		
		Draw.fill("#F451A3");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.1143, -0.0538);
		Draw.bezierVertex(-0.1143, -0.0538, -0.1578, -0.0273, -0.1683, 0.007);
		Draw.bezierVertex(-0.1787, 0.0414, -0.2033, 0.0604, -0.2033, 0.0604);
		Draw.bezierVertex(-0.2033, 0.0604, -0.1577, 0.0218, -0.1479, -0.0028);
		Draw.bezierVertex(-0.138, -0.0274, -0.1143, -0.0538, -0.1143, -0.0538);
		Draw.endShape();
		
		Draw.fill("#EF5952");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.1317, -0.0771);
		Draw.bezierVertex(-0.1317, -0.0771, -0.1666, -0.0818, -0.2019, -0.0146);
		Draw.bezierVertex(-0.2371, 0.0527, -0.2147, 0.0854, -0.2534, 0.1207);
		Draw.bezierVertex(-0.2534, 0.1207, -0.2268, 0.0661, -0.2248, 0.0197);
		Draw.bezierVertex(-0.2229, -0.0267, -0.1608, -0.0958, -0.1317, -0.0771);
		Draw.endShape();
	}
	
	function Head() {
		Draw.fill("#FFD3B6");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4807, -0.3652);
		Draw.bezierVertex(0.4621, -0.1673, 0.4102, -0.0746, 0.3673, -0.0427);
		Draw.bezierVertex(0.2813, 0.0213, 0.1622, 0.0365, 0.1035, 0.0406);
		Draw.bezierVertex(0.0304, 0.0456, -0.0043, 0.0549, -0.1938, -0.0434);
		Draw.bezierVertex(-0.2446, -0.0696, -0.2762, -0.1026, -0.3096, -0.1456);
		Draw.bezierVertex(-0.402, -0.2648, -0.3355, -0.4166, -0.3355, -0.4166);
		Draw.bezierVertex(-0.1708, -0.6328, 0.0371, -0.6123, 0.0371, -0.6123);
		Draw.bezierVertex(0.4047, -0.6129, 0.4807, -0.3652, 0.4807, -0.3652);
		Draw.endShape();
		
		Draw.fill("#E2AB9C");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.1059, -0.0003);
		Draw.bezierVertex(-0.4774, -0.295, -0.174, -0.5427, -0.174, -0.5427);
		Draw.vertex(-0.2005, -0.5433);
		Draw.bezierVertex(-0.2454, -0.5145, -0.292, -0.4738, -0.3355, -0.4167);
		Draw.bezierVertex(-0.3355, -0.4167, -0.402, -0.2648, -0.3096, -0.1457);
		Draw.bezierVertex(-0.2763, -0.1027, -0.2446, -0.0697, -0.1938, -0.0435);
		Draw.bezierVertex(-0.1599, -0.0258, -0.131, -0.0116, -0.1059, -0.0003);
		Draw.vertex(-0.1059, -0.0003);
		Draw.endShape();
		
		Draw.fill("#E0B2A0");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.3448, -0.3114);
		Draw.bezierVertex(-0.3828, -0.3842, -0.3978, -0.3155, -0.3978, -0.3155);
		Draw.bezierVertex(-0.4008, -0.2964, -0.4021, -0.2805, -0.4021, -0.2671);
		Draw.bezierVertex(-0.4022, -0.2538, -0.4011, -0.2431, -0.3992, -0.2344);
		Draw.bezierVertex(-0.3953, -0.2168, -0.3887, -0.2074, -0.383, -0.2011);
		Draw.bezierVertex(-0.3568, -0.1717, -0.3359, -0.2068, -0.3359, -0.2068);
		Draw.bezierVertex(-0.359, -0.2579, -0.3448, -0.3114, -0.3448, -0.3114);
		Draw.endShape();
		
		Draw.fill("#CEA284");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.361, -0.3077);
		Draw.bezierVertex(-0.361, -0.3077, -0.383, -0.3375, -0.3885, -0.3007);
		Draw.bezierVertex(-0.3985, -0.2326, -0.36, -0.2118, -0.3524, -0.215);
		Draw.bezierVertex(-0.3449, -0.2183, -0.3563, -0.2513, -0.3644, -0.266);
		Draw.bezierVertex(-0.3699, -0.2763, -0.35, -0.2913, -0.361, -0.3077);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.3313, -0.2985);
		Draw.bezierVertex(0.3313, -0.1833, 0.271, -0.1913, 0.271, -0.1913);
		Draw.bezierVertex(0.2307, -0.201, 0.2522, -0.2771, 0.2522, -0.2771);
		Draw.vertex(0.2955, -0.2934);
		Draw.vertex(0.3313, -0.2985);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.0435, -0.2824);
		Draw.bezierVertex(-0.0149, -0.3496, -0.1468, -0.3577, -0.1468, -0.3577);
		Draw.vertex(-0.0936, -0.3466);
		Draw.vertex(-0.1372, -0.3474);
		Draw.bezierVertex(-0.0936, -0.3466, -0.0404, -0.325, -0.0404, -0.325);
		Draw.bezierVertex(-0.1004, -0.3416, -0.1269, -0.3372, -0.1269, -0.3372);
		Draw.bezierVertex(0.0159, -0.3117, 0.0435, -0.2824, 0.0435, -0.2824);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(-0.0097, -0.2313);
		Draw.bezierVertex(-0.011, -0.2263, -0.0126, -0.2224, -0.0142, -0.2192);
		Draw.bezierVertex(-0.0173, -0.2131, -0.0231, -0.2094, -0.0295, -0.2097);
		Draw.bezierVertex(-0.1311, -0.2136, -0.1234, -0.2931, -0.1234, -0.2931);
		Draw.bezierVertex(-0.12, -0.3249, -0.1078, -0.3344, -0.1078, -0.3344);
		Draw.bezierVertex(-0.0641, -0.3338, -0.0257, -0.3157, -0.0257, -0.3157);
		Draw.bezierVertex(-0.0201, -0.3051, -0.0157, -0.2947, -0.0125, -0.2861);
		Draw.bezierVertex(-0.0061, -0.2687, -0.0048, -0.2493, -0.0097, -0.2313);
		Draw.endShape();
		
		Draw.fill("#D83616");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0155, -0.3435);
		Draw.bezierVertex(0.0178, -0.3528, 0.0316, -0.3744, 0.0181, -0.3784);
		Draw.bezierVertex(-0.0089, -0.3862, -0.1247, -0.4277, -0.1247, -0.4277);
		Draw.bezierVertex(-0.0793, -0.3604, 0.0155, -0.3435, 0.0155, -0.3435);
		Draw.endShape();
		
		Draw.fill("#D83616");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.2777, -0.3493);
		Draw.bezierVertex(0.3492, -0.3742, 0.3612, -0.3684, 0.3612, -0.3684);
		Draw.vertex(0.3313, -0.352);
		Draw.bezierVertex(0.3313, -0.352, 0.2972, -0.3357, 0.2729, -0.3211);
		Draw.bezierVertex(0.2611, -0.314, 0.2333, -0.311, 0.2333, -0.311);
		Draw.bezierVertex(0.2235, -0.3356, 0.2282, -0.3436, 0.2282, -0.3436);
		Draw.bezierVertex(0.2572, -0.3424, 0.2777, -0.3493, 0.2777, -0.3493);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.1158, -0.0727);
		Draw.vertex(0.1225, -0.0719);
		Draw.bezierVertex(0.1242, -0.0991, 0.0524, -0.0956, 0.0524, -0.0956);
		Draw.vertex(0.0529, -0.092);
		Draw.bezierVertex(0.1239, -0.0917, 0.1158, -0.0727, 0.1158, -0.0727);
		Draw.endShape();
		
		Draw.fill("#FF5629");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4538, -0.493);
		Draw.bezierVertex(0.4782, -0.4804, 0.4922, -0.4511, 0.4922, -0.4511);
		Draw.bezierVertex(0.4858, -0.5157, 0.3527, -0.5604, 0.3527, -0.5604);
		Draw.bezierVertex(0.4128, -0.5501, 0.449, -0.5189, 0.449, -0.5189);
		Draw.bezierVertex(0.4217, -0.5582, 0.2703, -0.633, 0.1544, -0.6396);
		Draw.bezierVertex(0.0689, -0.6443, -0.0558, -0.6909, -0.1839, -0.6292);
		Draw.bezierVertex(-0.2479, -0.5983, -0.3475, -0.4981, -0.3641, -0.4563);
		Draw.bezierVertex(-0.39, -0.3907, -0.3863, -0.34, -0.3863, -0.34);
		Draw.bezierVertex(-0.3702, -0.3985, -0.3503, -0.4402, -0.3503, -0.4402);
		Draw.bezierVertex(-0.3503, -0.4402, -0.4217, -0.2791, -0.3568, -0.1182);
		Draw.bezierVertex(-0.3568, -0.1182, -0.37, -0.2786, -0.3166, -0.4031);
		Draw.bezierVertex(-0.3166, -0.4031, -0.3585, -0.3372, -0.3223, -0.1765);
		Draw.bezierVertex(-0.3223, -0.1765, -0.3119, -0.3425, -0.2829, -0.4213);
		Draw.bezierVertex(-0.2829, -0.4213, -0.2841, -0.3577, -0.3004, -0.2596);
		Draw.bezierVertex(-0.3004, -0.2596, -0.2675, -0.4611, -0.1759, -0.4977);
		Draw.bezierVertex(-0.1759, -0.4977, -0.2461, -0.4493, -0.2551, -0.2953);
		Draw.bezierVertex(-0.2551, -0.2953, -0.2331, -0.3571, -0.1839, -0.4377);
		Draw.bezierVertex(-0.1526, -0.4889, -0.1058, -0.5054, -0.065, -0.5477);
		Draw.bezierVertex(-0.065, -0.5477, -0.1118, -0.4845, -0.1041, -0.398);
		Draw.bezierVertex(-0.1041, -0.398, -0.1034, -0.4895, -0.0089, -0.5386);
		Draw.bezierVertex(-0.0089, -0.5386, -0.0089, -0.4811, -0.0234, -0.4368);
		Draw.bezierVertex(-0.0234, -0.4368, 0.0309, -0.4978, 0.0262, -0.5758);
		Draw.bezierVertex(0.0262, -0.5758, 0.0683, -0.5485, 0.072, -0.5056);
		Draw.bezierVertex(0.072, -0.5056, 0.0731, -0.4455, 0.1609, -0.3564);
		Draw.bezierVertex(0.1609, -0.3564, 0.1286, -0.4003, 0.1266, -0.4367);
		Draw.bezierVertex(0.1244, -0.4732, 0.1506, -0.4746, 0.1262, -0.558);
		Draw.bezierVertex(0.1262, -0.558, 0.1605, -0.5235, 0.1999, -0.4976);
		Draw.bezierVertex(0.2325, -0.4761, 0.2546, -0.4196, 0.2658, -0.3717);
		Draw.bezierVertex(0.2658, -0.3717, 0.2636, -0.4373, 0.2556, -0.4587);
		Draw.bezierVertex(0.2294, -0.5284, 0.2153, -0.5135, 0.1644, -0.5687);
		Draw.bezierVertex(0.1644, -0.5687, 0.2578, -0.5593, 0.3057, -0.5047);
		Draw.bezierVertex(0.3057, -0.5047, 0.3864, -0.4127, 0.3972, -0.3025);
		Draw.bezierVertex(0.3972, -0.3025, 0.4248, -0.4519, 0.3178, -0.5303);
		Draw.bezierVertex(0.3178, -0.5303, 0.4244, -0.483, 0.504, -0.3117);
		Draw.bezierVertex(0.5039, -0.3119, 0.5073, -0.4574, 0.4538, -0.493);
		Draw.endShape();
		
		Draw.fill("#420870");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.0336, -0.2215);
		Draw.bezierVertex(-0.065, -0.2257, -0.0913, -0.2487, -0.0913, -0.2487);
		Draw.bezierVertex(-0.0759, -0.2613, -0.0796, -0.2863, -0.0796, -0.2863);
		Draw.bezierVertex(-0.0548, -0.2922, -0.025, -0.2929, -0.025, -0.2929);
		Draw.bezierVertex(-0.0213, -0.2818, -0.0177, -0.2771, -0.0182, -0.2503);
		Draw.bezierVertex(-0.0187, -0.2235, -0.0336, -0.2215, -0.0336, -0.2215);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3125, -0.2787);
		Draw.vertex(0.2559, -0.2597);
		Draw.bezierVertex(0.2451, -0.2295, 0.2559, -0.2258, 0.2559, -0.2258);
		Draw.bezierVertex(0.2849, -0.2449, 0.2694, -0.2522, 0.2694, -0.2522);
		Draw.vertex(0.3125, -0.2787);
		Draw.endShape();
		
		Draw.fill("#420870");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3214, -0.2812);
		Draw.bezierVertex(0.3125, -0.2239, 0.2742, -0.2002, 0.2742, -0.2002);
		Draw.bezierVertex(0.254, -0.2049, 0.2593, -0.2221, 0.2593, -0.2221);
		Draw.bezierVertex(0.2864, -0.2356, 0.2818, -0.2522, 0.2818, -0.2522);
		Draw.vertex(0.3214, -0.2812);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.1093, -0.3021);
		Draw.bezierVertex(-0.1177, -0.2648, -0.0987, -0.2535, -0.0987, -0.2535);
		Draw.bezierVertex(-0.0737, -0.2884, -0.0954, -0.2895, -0.0954, -0.2895);
		Draw.bezierVertex(-0.0793, -0.2951, -0.0355, -0.2962, -0.0355, -0.2962);
		Draw.vertex(-0.1093, -0.3021);
		Draw.endShape();
		
		Draw.fill("#000000");
		Draw.beginShape();
		Draw.vertex(0.2148, -0.2578);
		Draw.bezierVertex(0.2604, -0.311, 0.3641, -0.3182, 0.3641, -0.3182);
		Draw.vertex(0.3223, -0.3091);
		Draw.vertex(0.3565, -0.31);
		Draw.bezierVertex(0.3223, -0.3091, 0.2805, -0.2918, 0.2805, -0.2918);
		Draw.bezierVertex(0.3275, -0.3052, 0.3484, -0.3019, 0.3484, -0.3019);
		Draw.bezierVertex(0.2363, -0.2811, 0.2148, -0.2578, 0.2148, -0.2578);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.184, -0.6292);
		Draw.bezierVertex(-0.248, -0.5983, -0.3476, -0.4981, -0.3642, -0.4563);
		Draw.bezierVertex(-0.3901, -0.3907, -0.3864, -0.34, -0.3864, -0.34);
		Draw.bezierVertex(-0.3703, -0.3985, -0.3504, -0.4402, -0.3504, -0.4402);
		Draw.bezierVertex(-0.3504, -0.4402, -0.4218, -0.2791, -0.3569, -0.1182);
		Draw.bezierVertex(-0.3569, -0.1182, -0.3702, -0.2669, -0.321, -0.3927);
		Draw.bezierVertex(-0.3329, -0.3609, -0.3522, -0.3088, -0.3224, -0.1765);
		Draw.bezierVertex(-0.3224, -0.1765, -0.312, -0.3425, -0.283, -0.4213);
		Draw.bezierVertex(-0.283, -0.4213, -0.2842, -0.3577, -0.3005, -0.2596);
		Draw.bezierVertex(-0.3005, -0.2596, -0.2908, -0.3188, -0.2674, -0.3789);
		Draw.bezierVertex(-0.2893, -0.5529, -0.1545, -0.6296, -0.0785, -0.6587);
		Draw.bezierVertex(-0.1129, -0.6552, -0.1482, -0.6464, -0.184, -0.6292);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.1384, -0.507);
		Draw.bezierVertex(-0.1384, -0.507, -0.1611, -0.5044, -0.176, -0.4978);
		Draw.bezierVertex(-0.176, -0.4978, -0.2462, -0.4494, -0.2552, -0.2954);
		Draw.bezierVertex(-0.2552, -0.2954, -0.2259, -0.468, -0.1384, -0.507);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.0651, -0.5478);
		Draw.vertex(-0.0678, -0.5439);
		Draw.bezierVertex(-0.0774, -0.5291, -0.1108, -0.4722, -0.1042, -0.3981);
		Draw.bezierVertex(-0.105, -0.4947, -0.0475, -0.5556, -0.0475, -0.5556);
		Draw.bezierVertex(-0.0576, -0.5489, -0.0651, -0.5478, -0.0651, -0.5478);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(-0.009, -0.5387);
		Draw.bezierVertex(-0.009, -0.5387, -0.009, -0.4812, -0.0235, -0.4369);
		Draw.bezierVertex(-0.0093, -0.4583, 0.0077, -0.5433, 0.0077, -0.5433);
		Draw.bezierVertex(-0.0043, -0.5422, -0.009, -0.5387, -0.009, -0.5387);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.0851, -0.4979);
		Draw.bezierVertex(0.072, -0.5602, 0.0261, -0.5759, 0.0261, -0.5759);
		Draw.bezierVertex(0.0261, -0.5759, 0.0682, -0.5486, 0.0719, -0.5057);
		Draw.bezierVertex(0.0719, -0.5057, 0.073, -0.4456, 0.1608, -0.3565);
		Draw.bezierVertex(0.1328, -0.3935, 0.0981, -0.4357, 0.0851, -0.4979);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.224, -0.4846);
		Draw.bezierVertex(0.2086, -0.5063, 0.1261, -0.5581, 0.1261, -0.5581);
		Draw.bezierVertex(0.1261, -0.5581, 0.1604, -0.5236, 0.1998, -0.4977);
		Draw.bezierVertex(0.2324, -0.4762, 0.2545, -0.4197, 0.2657, -0.3718);
		Draw.bezierVertex(0.2617, -0.4135, 0.2395, -0.4628, 0.224, -0.4846);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.2685, -0.5349);
		Draw.vertex(0.2685, -0.5349);
		Draw.bezierVertex(0.282, -0.5268, 0.2949, -0.5169, 0.3055, -0.5048);
		Draw.bezierVertex(0.3055, -0.5048, 0.3862, -0.4128, 0.397, -0.3026);
		Draw.bezierVertex(0.384, -0.4843, 0.2685, -0.5349, 0.2685, -0.5349);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3312, -0.523);
		Draw.bezierVertex(0.3624, -0.5043, 0.4414, -0.4462, 0.5038, -0.3119);
		Draw.bezierVertex(0.4817, -0.4272, 0.3702, -0.5006, 0.3312, -0.523);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4922, -0.4512);
		Draw.bezierVertex(0.4858, -0.5158, 0.3527, -0.5604, 0.3527, -0.5604);
		Draw.bezierVertex(0.3527, -0.5604, 0.4704, -0.5048, 0.4922, -0.4512);
		Draw.endShape();
		
		Draw.fill("#EF5656");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3527, -0.5604);
		Draw.bezierVertex(0.4128, -0.5501, 0.449, -0.5189, 0.449, -0.5189);
		Draw.bezierVertex(0.449, -0.5189, 0.403, -0.5691, 0.3527, -0.5604);
		Draw.endShape();
	}
};
