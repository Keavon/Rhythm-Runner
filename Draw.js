var Draw = {};

Draw.startOfShape = false;
Draw.doFill = false;
Draw.doStroke = false;
Draw.moveX = 0;
Draw.moveY = 0;
Draw.scaleFactor = 1;
Draw.globalOffsetX = 0;
Draw.globalOffsetY = 0;

Draw.offset = function(x, y) {
	Draw.moveX = x;
	Draw.moveY = y;
};

Draw.addOffset = function(x, y) {
	Draw.moveX += x;
	Draw.moveY += y;
};

Draw.globalOffset = function(x, y) {
	Draw.globalOffsetX = x;
	Draw.globalOffsetY = y;
};

Draw.scale = function(scale) {
	Draw.scaleFactor = scale;
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
	Main.context.fillRect((x - Draw.globalOffsetX + Draw.moveX) * Draw.scaleFactor, (y + Draw.moveY) * Draw.scaleFactor + Draw.globalOffsetY, w * Draw.scaleFactor, h * Draw.scaleFactor);
};

Draw.beginShape = function() {
	Main.context.beginPath();
	Draw.startOfShape = true;
};

Draw.vertex = function(x, y) {
	if (Draw.startOfShape) Main.context.moveTo((x - Draw.globalOffsetX + Draw.moveX) * Draw.scaleFactor, (y + Draw.moveY) * Draw.scaleFactor + Draw.globalOffsetY);
	else Main.context.lineTo((x - Draw.globalOffsetX + Draw.moveX) * Draw.scaleFactor, (y + Draw.moveY) * Draw.scaleFactor + Draw.globalOffsetY);
	Draw.startOfShape = false;
};

Draw.bezierVertex = function(c1x, c1y, c2x, c2y, x, y) {
	Main.context.bezierCurveTo((c1x - Draw.globalOffsetX + Draw.moveX) * Draw.scaleFactor, (c1y + Draw.moveY) * Draw.scaleFactor + Draw.globalOffsetY, (c2x - Draw.globalOffsetX + Draw.moveX) * Draw.scaleFactor, (c2y + Draw.moveY) * Draw.scaleFactor + Draw.globalOffsetY, (x - Draw.globalOffsetX + Draw.moveX) * Draw.scaleFactor, (y + Draw.moveY) * Draw.scaleFactor + Draw.globalOffsetY);
	Draw.startOfShape = false;
};

Draw.endShape = function() {
	Main.context.fill();
};

Draw.debugHitbox = function(width, height) {
	Draw.fill("rgba(255, 0, 255, 0.25)");
	Draw.rect(0, 0, width, height);
};
