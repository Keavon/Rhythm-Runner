function Hexagon(x, y) {
	Component.call(this, x, y, 1, 1);
	this.solid = false;
	this.color = Math.random() * 360;
}

// Extend Component
Hexagon.prototype = Object.create(Component.prototype);
Hexagon.prototype.constructor = Hexagon;

Hexagon.prototype.draw = function() {
	var w = 1;
	var h = 1;
	var angledTopOffset = 0.2;
	var spinSpeed = 2;
	
	var toDraw = [];
	var top = [];
	
	var self = this;
	
	for (var i = 0; i < 6; i++) {
		var t = new Date().getTime() / 1000 * spinSpeed;
		var x1 = Math.sin(i * Math.PI / 3 + t) * w / 2;
		var x2 = Math.sin((i + 1) * Math.PI / 3 + t) * w / 2;
		var z = -Math.cos((2 * i * Math.PI + Math.PI + 6 * t) / 6);
		var topOffset1 = 0;
		var topOffset2 = 0;
		if (i === 0) {
			topOffset1 = 0;
			topOffset2 = angledTopOffset;
		}
		if (i === 1) {
			topOffset1 = -angledTopOffset;
			topOffset2 = 0;
		}
		if (i === 2) {
			topOffset1 = -angledTopOffset;
			topOffset2 = -angledTopOffset;
		}
		if (i === 3) {
			topOffset1 = 0;
			topOffset2 = -angledTopOffset;
		}
		if (i === 4) {
			topOffset1 = angledTopOffset;
			topOffset2 = 0;
		}
		if (i === 5) {
			topOffset1 = angledTopOffset;
			topOffset2 = angledTopOffset;
		}
		
		toDraw.push({
			p1: {x: x1, y: topOffset2 - h},
			p2: {x: x2, y: topOffset1 - h},
			p3: {x: x2, y: 0},
			p4: {x: x1, y: 0},
			z: z
		});
		
		top.push({x: x1, y: topOffset2 - h});
	}
	
	toDraw.push({
		z: 0,
		points: top
	});
	
	toDraw.sort(function(a, b) {
		if (a.z < b.z) return 1;
		if (a.z > b.z) return -1;
		return 0;
	});
	
	Draw.push();
	Draw.translate(this.width / 2, this.height);
	
	toDraw.forEach(function(poly) {
		var shade = Math.round((1 - (poly.z + 1) / 2) * 50);
		Draw.fill("hsl(" + self.color + ", 100%, " + shade + "%)");
		
		if (poly.points) {
			Draw.beginShape();
			Draw.vertex(poly.points[0].x, poly.points[0].y);
			Draw.vertex(poly.points[1].x, poly.points[1].y);
			Draw.vertex(poly.points[2].x, poly.points[2].y);
			Draw.vertex(poly.points[3].x, poly.points[3].y);
			Draw.vertex(poly.points[4].x, poly.points[4].y);
			Draw.vertex(poly.points[5].x, poly.points[5].y);
			Draw.endShape();
		} else {
			Draw.beginShape();
			Draw.vertex(poly.p1.x, poly.p1.y);
			Draw.vertex(poly.p2.x, poly.p2.y);
			Draw.vertex(poly.p3.x, poly.p3.y);
			Draw.vertex(poly.p4.x, poly.p4.y);
			Draw.endShape();
		}
	});
	
	Draw.pop();
};
