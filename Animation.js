var Animation = {};

Animation.get = function(frame, keyframes, duration) {
	frame -= Math.floor(frame / duration) * duration;
	var curve;
	
	for (var i = 0; i < keyframes.length; i++) {
		if (keyframes[i][1].x <= frame && keyframes[i + 1][1].x >= frame) {
			curve = [
				{x: keyframes[i][1].x, y: keyframes[i][1].y},
				{x: keyframes[i][2].x, y: keyframes[i][2].y},
				{x: keyframes[i + 1][0].x, y: keyframes[i + 1][0].y},
				{x: keyframes[i + 1][1].x, y: keyframes[i + 1][1].y}
			];
		}
	}
	if (!curve) console.log("Error finding keyframe in animation");
	
	var roots = cardano(curve, frame);
	var yValue = getBezier(roots[0], curve[0].y, curve[1].y, curve[2].y, curve[3].y);
	return yValue;
	
	function getBezier(t, a, b, c, d) {
		var result =
		a *                      Math.pow(1 - t, 3) +
		b * 3 *          t     * Math.pow(1 - t, 2) +
		c * 3 * Math.pow(t, 2) *         (1 - t)    +
		d *     Math.pow(t, 3);
		return result;
	}
	
	// Cardano's algorithm, based on http://www.trans4mind.com/personal_development/mathematics/polynomials/cubicAlgebra.htm
	function cardano(curve, xValue) {
		// Align curve with the intersecting line:
		var aligned = curve.map(function(v) {
			return { x: -v.y, y: v.x - xValue };
		});
		
		// And rewrite from [a(1-t)^3 + 3bt(1-t)^2 + 3c(1-t)t^2 + dt^3] form
		var pa = aligned[0].y;
		var pb = aligned[1].y;
		var pc = aligned[2].y;
		var pd = aligned[3].y;
		
		// To [t^3 + at^2 + bt + c] form:
		var d = (-pa + 3 * pb - 3 * pc + pd);
		var a = (3 * pa - 6 * pb + 3 * pc) / d;
		var b = (-3 * pa + 3 * pb) / d;
		var c = pa / d;
		
		// Then, determine p and q:
		var p = (3 * b - a * a) / 3;
		var p3 = p / 3;
		var q = (2 * a * a * a - 9 * a * b + 27 * c) / 27;
		var q2 = q / 2;
		
		// And determine the discriminant:
		var discriminant = q2 * q2 + p3 * p3 * p3;
		
		// And some reserved variables
		var u1, v1, x1, x2, x3;
		
		// If the discriminant is negative, use polar coordinates to get around square roots of negative numbers
		if (discriminant < 0) {
			var mp3 = -p / 3;
			var mp33 = mp3 * mp3 * mp3;
			var r = Math.sqrt(mp33);
			
			// Compute cosphi corrected for IEEE float rounding:
			var t = -q / (2 * r);
			var cosphi = t < -1 ? -1 : t > 1 ? 1 : t;
			var phi = Math.acos(cosphi);
			var crtr = crt(r);
			var t1 = 2 * crtr;
			x1 = t1 * Math.cos(phi / 3) - a / 3;
			x2 = t1 * Math.cos((phi + Math.PI * 2) / 3) - a / 3;
			x3 = t1 * Math.cos((phi + 2 * Math.PI * 2) / 3) - a / 3;
			return [x1, x2, x3];
		} else if (discriminant === 0) {
			u1 = q2 < 0 ? crt(-q2) : -crt(q2);
			x1 = 2 * u1 - a / 3;
			x2 = -u1 - a / 3;
			return [x1, x2];
		} else {
			// One real root, and two imaginary roots
			var sd = Math.sqrt(discriminant);
			u1 = crt(-q2 + sd);
			v1 = crt(q2 + sd);
			x1 = u1 - v1 - a / 3;
			return [x1];
		}
	}
	
	function crt(v) {
		if (v < 0) return -Math.pow(-v, 1 / 3);
		return Math.pow(v, 1 / 3);
	}
};
