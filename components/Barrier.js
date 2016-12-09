function Barrier(x, y) {
	Component.call(this, x, y - 1, 0.5, 1);
}

// Extend Component
Barrier.prototype = Object.create(Component.prototype);
Barrier.prototype.constructor = Barrier;

Barrier.prototype.draw = function(draw) {
	draw.offset(this.x, this.y);
	Right();
	Left();
	draw.offset(0, 0);
	
	function Right() {
		draw.fill("#222222");
		draw.beginShape();
		draw.vertex(0.50108, 0);
		draw.vertex(0.50108, 1);
		draw.vertex(0.317495, 1);
		draw.vertex(0.317495, 0.39315800000000006);
		draw.bezierVertex(0.367399, 0.368462, 0.40172800000000003, 0.317051, 0.40172800000000003, 0.2576);
		draw.bezierVertex(0.40172800000000003, 0.19814900000000002, 0.36739800000000006, 0.146739, 0.317495, 0.122043);
		draw.vertex(0.317495, 0);
		draw.vertex(0.50108, 0);
		draw.endShape();
		
		draw.fill("#FFFFFF");
		draw.beginShape();
		draw.vertex(0.274298, 0.163345);
		draw.vertex(0.274298, 0);
		draw.vertex(0.317494, 0);
		draw.vertex(0.317494, 0.110107);
		draw.bezierVertex(0.37353600000000003, 0.135589, 0.412526, 0.19202300000000003, 0.412526, 0.2576);
		draw.bezierVertex(0.412526, 0.32317700000000005, 0.37353600000000003, 0.37961100000000003, 0.317494, 0.40509300000000004);
		draw.vertex(0.317494, 1);
		draw.vertex(0.274298, 1);
		draw.vertex(0.274298, 0.351856);
		draw.bezierVertex(0.316489, 0.341254, 0.34773200000000004, 0.303081, 0.34773200000000004, 0.257601);
		draw.bezierVertex(0.34773200000000004, 0.212121, 0.316489, 0.17394700000000002, 0.274298, 0.163345);
		draw.endShape();
		
		draw.fill("#FF0000");
		draw.beginShape();
		draw.vertex(0.33693300000000004, 0.2576);
		draw.bezierVertex(0.33693300000000004, 0.210611, 0.299412, 0.172411, 0.2527, 0.17126100000000002);
		draw.vertex(0.2527, 0);
		draw.vertex(0.274298, 0);
		draw.vertex(0.274298, 0.130222);
		draw.bezierVertex(0.33451500000000006, 0.141386, 0.38012999999999997, 0.19415, 0.38012999999999997, 0.2576);
		draw.bezierVertex(0.38012999999999997, 0.32105, 0.334516, 0.373814, 0.274298, 0.384978);
		draw.vertex(0.274298, 1);
		draw.vertex(0.2527, 1);
		draw.vertex(0.2527, 0.34393900000000005);
		draw.bezierVertex(0.299412, 0.342789, 0.33693300000000004, 0.30459, 0.33693300000000004, 0.2576);
		draw.endShape();
		
		draw.fill("#222222");
		draw.beginShape();
		draw.vertex(0.2527, 1);
		draw.vertex(0.25054, 1);
		draw.vertex(0.25054, 0.343993);
		draw.bezierVertex(0.251264, 0.343993, 0.25198, 0.34395600000000004, 0.2527, 0.343938);
		draw.vertex(0.2527, 1);
		draw.endShape();
		
		draw.fill("#222222");
		draw.beginShape();
		draw.vertex(0.25054, 0.171207);
		draw.vertex(0.25054, 0);
		draw.vertex(0.2527, 0);
		draw.vertex(0.2527, 0.171262);
		draw.bezierVertex(0.25198, 0.171244, 0.251264, 0.171207, 0.25054, 0.171207);
	}
	
	function Left() {
		draw.fill("#222222");
		draw.beginShape();
		draw.vertex(0, 0);
		draw.vertex(0, 1);
		draw.vertex(0.183585, 1);
		draw.vertex(0.183585, 0.39315800000000006);
		draw.bezierVertex(0.133681, 0.368462, 0.099352, 0.317051, 0.099352, 0.2576);
		draw.bezierVertex(0.099352, 0.19814900000000002, 0.133682, 0.146739, 0.183585, 0.122043);
		draw.vertex(0.183585, 0);
		draw.vertex(0, 0);
		draw.endShape();
		
		draw.fill("#FFFFFF");
		draw.beginShape();
		draw.vertex(0.226782, 0.163345);
		draw.vertex(0.226782, 0);
		draw.vertex(0.183586, 0);
		draw.vertex(0.183586, 0.110107);
		draw.bezierVertex(0.12754300000000002, 0.13559, 0.08855299999999999, 0.19202300000000003, 0.08855299999999999, 0.2576);
		draw.bezierVertex(0.08855299999999999, 0.32317700000000005, 0.12754300000000002, 0.37961100000000003, 0.183585, 0.40509300000000004);
		draw.vertex(0.183585, 1);
		draw.vertex(0.226781, 1);
		draw.vertex(0.226781, 0.351856);
		draw.bezierVertex(0.18459, 0.341254, 0.153347, 0.303081, 0.153347, 0.257601);
		draw.bezierVertex(0.153347, 0.212121, 0.18459, 0.17394700000000002, 0.226782, 0.163345);
		draw.endShape();
		
		draw.fill("#FF0000");
		draw.beginShape();
		draw.vertex(0.16414700000000002, 0.2576);
		draw.bezierVertex(0.16414700000000002, 0.210611, 0.201668, 0.172411, 0.24838000000000002, 0.17126100000000002);
		draw.vertex(0.24838000000000002, 0);
		draw.vertex(0.226782, 0);
		draw.vertex(0.226782, 0.130222);
		draw.bezierVertex(0.16656400000000002, 0.141386, 0.12095000000000002, 0.19415, 0.12095000000000002, 0.2576);
		draw.bezierVertex(0.12095000000000002, 0.32105, 0.16656400000000002, 0.373814, 0.226782, 0.384978);
		draw.vertex(0.226782, 1);
		draw.vertex(0.24838000000000002, 1);
		draw.vertex(0.24838000000000002, 0.34393900000000005);
		draw.bezierVertex(0.201668, 0.342789, 0.16414700000000002, 0.30459, 0.16414700000000002, 0.2576);
		draw.endShape();
		
		draw.fill("#222222");
		draw.beginShape();
		draw.vertex(0.24838000000000002, 1);
		draw.vertex(0.25054000000000004, 1);
		draw.vertex(0.25054000000000004, 0.343993);
		draw.bezierVertex(0.249816, 0.343993, 0.24910000000000002, 0.34395600000000004, 0.24838000000000002, 0.343938);
		draw.vertex(0.24838000000000002, 1);
		draw.endShape();
		
		draw.fill("#222222");
		draw.beginShape();
		draw.vertex(0.25054, 0.171207);
		draw.vertex(0.25054, 0);
		draw.vertex(0.24838, 0);
		draw.vertex(0.24838, 0.171262);
		draw.bezierVertex(0.24910000000000002, 0.171244, 0.249816, 0.171207, 0.25054, 0.171207);
		draw.endShape();
	}
};
