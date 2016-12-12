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

Draw.scale = function(s) {
	Main.context.scale(s, s);
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

Draw.rect = function(x, y, w, h) {
	Main.context.fillRect(x, y, w, h);
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
