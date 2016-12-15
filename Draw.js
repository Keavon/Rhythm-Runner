var Draw = {};

Draw.startOfShape = false;
Draw.doFill = false;
Draw.doStroke = false;

Draw.pushPose = function(x, y, r) {
	Draw.push();
	Main.context.translate(x, -y);
	Main.context.rotate(-r);
};

Draw.popPose = function() {
	Draw.pop();
};

Draw.push = function() {
	Main.context.save();
};

Draw.pop = function() {
	Main.context.restore();
};

Draw.translate = function(x, y) {
	Main.context.translate(x, y);
};

Draw.rotate = function(r) {
	Main.context.rotate(r);
};

Draw.scale = function(x, y) {
	y = y || x;
	Main.context.scale(x, y);
};

Draw.fill = function(color) {
	Main.context.fillStyle = color;
	Draw.doFill = true;
};

Draw.noFill = function() {
	Main.context.fillStyle = "transparent";
	Draw.doFill = false;
};

Draw.stroke = function(color) {
	Main.context.strokeStyle = color;
	Draw.doStroke = true;
};

Draw.noStroke = function() {
	Main.context.strokeStyle = "transparent";
	Draw.doStroke = false;
};

Draw.strokeWeight = function(weight) {
	Main.context.strokeWidth = weight;
};

Draw.opacity = function(alpha) {
	Main.context.globalAlpha = alpha;
};

Draw.image = function(image, x, y, w, h) {
	if (w && h) Main.context.drawImage(image, x, y, w, h);
	else Main.context.drawImage(image, x, y);
};

Draw.rect = function(x, y, w, h) {
	Main.context.fillRect(x, y, w, h);
};

Draw.ellipse = function(x, y, w, h) {
	h = h || 0;
	w /= 2;
	h /= 2;
	h = h || w;
	
	Main.context.save();
	Main.context.beginPath();
	Main.context.translate(x - w, y - h);
	Main.context.scale(w, h);
	Main.context.arc(1, 1, 1, 0, 2 * Math.PI, false);
	Main.context.restore();
	Main.context.fill();
};

Draw.beginShape = function() {
	Main.context.beginPath();
	Draw.startOfShape = true;
};

Draw.vertex = function(x, y) {
	if (Draw.startOfShape) Main.context.moveTo(x, y);
	else Main.context.lineTo(x, y);
	Draw.startOfShape = false;
};

Draw.bezierVertex = function(c1x, c1y, c2x, c2y, x, y) {
	Main.context.bezierCurveTo(c1x, c1y, c2x, c2y, x, y);
	Draw.startOfShape = false;
};

Draw.endShape = function() {
	Main.context.closePath();
	Main.context.fill();
};

Draw.debugHitbox = function(width, height) {
	Draw.fill("rgba(255, 0, 255, 0.25)");
	Draw.rect(0, 0, width, height);
};
