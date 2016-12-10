function Barrier(x, y) {
	Component.call(this, x, y, 1, 2);
	this.solid = false;
}

// Extend Component
Barrier.prototype = Object.create(Component.prototype);
Barrier.prototype.constructor = Barrier;

Barrier.prototype.draw = function() {
	Right();
	Left();
	
	function Left() {
		Draw.fill("#222222");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0, 0);
		Draw.vertex(0, 2);
		Draw.vertex(0.3664, 2);
		Draw.vertex(0.3664, 0.7863);
		Draw.bezierVertex(0.2668, 0.7369, 0.1982, 0.6341, 0.1982, 0.5152);
		Draw.bezierVertex(0.1982, 0.3963, 0.2668, 0.2936, 0.3663, 0.2441);
		Draw.vertex(0.3663, 0);
		Draw.vertex(0, 0);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4525, 0.3267);
		Draw.vertex(0.4525, 0);
		Draw.vertex(0.3663, 0);
		Draw.vertex(0.3663, 0.2202);
		Draw.bezierVertex(0.2545, 0.2712, 0.1768, 0.3841, 0.1768, 0.5152);
		Draw.bezierVertex(0.1768, 0.6464, 0.2546, 0.7593, 0.3664, 0.8103);
		Draw.vertex(0.3664, 2);
		Draw.vertex(0.4526, 2);
		Draw.vertex(0.4526, 0.7037);
		Draw.bezierVertex(0.3685, 0.6825, 0.3061, 0.6062, 0.3061, 0.5152);
		Draw.bezierVertex(0.3061, 0.4243, 0.3684, 0.3479, 0.4525, 0.3267);
		Draw.endShape();
		
		Draw.fill("#ED2224");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.3275, 0.5152);
		Draw.bezierVertex(0.3275, 0.4213, 0.4024, 0.3448, 0.4956, 0.3426);
		Draw.vertex(0.4956, 0);
		Draw.vertex(0.4525, 0);
		Draw.vertex(0.4525, 0.2604);
		Draw.bezierVertex(0.3323, 0.2828, 0.2413, 0.3883, 0.2413, 0.5152);
		Draw.bezierVertex(0.2413, 0.6422, 0.3323, 0.7477, 0.4525, 0.77);
		Draw.vertex(0.4525, 2);
		Draw.vertex(0.4956, 2);
		Draw.vertex(0.4956, 0.6879);
		Draw.bezierVertex(0.4024, 0.6855, 0.3275, 0.6092, 0.3275, 0.5152);
		Draw.endShape();
		
		Draw.fill("#222222");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.4957, 2);
		Draw.vertex(0.5, 2);
		Draw.vertex(0.5, 0.688);
		Draw.bezierVertex(0.4985, 0.688, 0.4972, 0.6879, 0.4957, 0.6879);
		Draw.vertex(0.4957, 2);
		Draw.endShape();
		
		Draw.fill("#222222");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.5, 0.3424);
		Draw.vertex(0.5, 0);
		Draw.vertex(0.4957, 0);
		Draw.vertex(0.4957, 0.3425);
		Draw.bezierVertex(0.4972, 0.3425, 0.4985, 0.3424, 0.5, 0.3424);
		Draw.endShape();
	}
	
	function Right() {
		Draw.fill("#222222");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(1, 0);
		Draw.vertex(1, 2);
		Draw.vertex(0.6336, 2);
		Draw.vertex(0.6336, 0.7863);
		Draw.bezierVertex(0.7332, 0.7369, 0.8018, 0.6341, 0.8018, 0.5152);
		Draw.bezierVertex(0.8018, 0.3963, 0.7332, 0.2936, 0.6337, 0.2441);
		Draw.vertex(0.6337, 0);
		Draw.vertex(1, 0);
		Draw.endShape();
		
		Draw.fill("#FFFFFF");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.5475, 0.3267);
		Draw.vertex(0.5475, 0);
		Draw.vertex(0.6337, 0);
		Draw.vertex(0.6337, 0.2202);
		Draw.bezierVertex(0.7455, 0.2712, 0.8232, 0.3841, 0.8232, 0.5152);
		Draw.bezierVertex(0.8232, 0.6464, 0.7454, 0.7593, 0.6336, 0.8103);
		Draw.vertex(0.6336, 2);
		Draw.vertex(0.5474, 2);
		Draw.vertex(0.5474, 0.7037);
		Draw.bezierVertex(0.6315, 0.6825, 0.6939, 0.6062, 0.6939, 0.5152);
		Draw.bezierVertex(0.6939, 0.4243, 0.6316, 0.3479, 0.5475, 0.3267);
		Draw.endShape();
		
		Draw.fill("#ED2224");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.6725, 0.5152);
		Draw.bezierVertex(0.6725, 0.4213, 0.5976, 0.3448, 0.5044, 0.3426);
		Draw.vertex(0.5044, 0);
		Draw.vertex(0.5475, 0);
		Draw.vertex(0.5475, 0.2604);
		Draw.bezierVertex(0.6677, 0.2828, 0.7587, 0.3883, 0.7587, 0.5152);
		Draw.bezierVertex(0.7587, 0.6422, 0.6677, 0.7477, 0.5475, 0.77);
		Draw.vertex(0.5475, 2);
		Draw.vertex(0.5044, 2);
		Draw.vertex(0.5044, 0.6879);
		Draw.bezierVertex(0.5976, 0.6855, 0.6725, 0.6092, 0.6725, 0.5152);
		Draw.endShape();
		
		Draw.fill("#222222");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.5043, 2);
		Draw.vertex(0.5, 2);
		Draw.vertex(0.5, 0.688);
		Draw.bezierVertex(0.5015, 0.688, 0.5028, 0.6879, 0.5043, 0.6879);
		Draw.vertex(0.5043, 2);
		Draw.endShape();
		
		Draw.fill("#222222");
		Draw.noStroke();
		Draw.beginShape();
		Draw.vertex(0.5, 0.3424);
		Draw.vertex(0.5, 0);
		Draw.vertex(0.5043, 0);
		Draw.vertex(0.5043, 0.3425);
		Draw.bezierVertex(0.5028, 0.3425, 0.5015, 0.3424, 0.5, 0.3424);
		Draw.endShape();
	}
	
};
