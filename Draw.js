var Draw = {};

Draw.startOfShape = false;
Draw.doFill = false;
Draw.doStroke = false;
Draw.moveX = 0;
Draw.moveY = 0;
Draw.scaleFactor = 5;

Draw.offset = function(x, y) {
	Draw.moveX = x;
	Draw.moveY = y;
};

Draw.addOffset = function(x, y) {
	Draw.moveX += x;
	Draw.moveY += y;
};

Draw.pose = function(x, y, r, pivotX, pivotY) {
	Draw.resetPose();
	
	Draw.savedMoveX = Draw.moveX;
	Draw.savedMoveY = Draw.moveY;
	
	Main.context.translate((Draw.moveX + pivotX) * Draw.scaleFactor, (Draw.moveY - pivotY) * Draw.scaleFactor);
	Draw.offset(-pivotX + x, pivotY + y);
	
	r -= Math.floor(r / (Math.PI * 2)) * Math.PI * 2;
	Main.context.rotate(r);
};

Draw.resetPose = function() {
	Main.context.setTransform(1, 0, 0, 1, 0, 0);
	if (Draw.savedMoveX !== undefined) {
		Draw.moveX = Draw.savedMoveX;
		Draw.moveY = Draw.savedMoveY;
		Draw.savedMoveX = undefined;
		Draw.savedMoveY = undefined;
	}
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
	Main.context.fillRect((x + Draw.moveX) * Draw.scaleFactor, (y + Draw.moveY) * Draw.scaleFactor, w * Draw.scaleFactor, h * Draw.scaleFactor);
};

Draw.beginShape = function() {
	Main.context.beginPath();
	Draw.startOfShape = true;
};

Draw.vertex = function(x, y) {
	if (Draw.startOfShape) Main.context.moveTo((x + Draw.moveX) * Draw.scaleFactor, (y + Draw.moveY) * Draw.scaleFactor);
	else Main.context.lineTo((x + Draw.moveX) * Draw.scaleFactor, (y + Draw.moveY) * Draw.scaleFactor);
	Draw.startOfShape = false;
};

Draw.bezierVertex = function(c1x, c1y, c2x, c2y, x, y) {
	Main.context.bezierCurveTo((c1x + Draw.moveX) * Draw.scaleFactor, (c1y + Draw.moveY) * Draw.scaleFactor, (c2x + Draw.moveX) * Draw.scaleFactor, (c2y + Draw.moveY) * Draw.scaleFactor, (x + Draw.moveX) * Draw.scaleFactor, (y + Draw.moveY) * Draw.scaleFactor);
	Draw.startOfShape = false;
};

Draw.endShape = function() {
	Main.context.fill();
};

Draw.debugHitbox = function(width, height) {
	Draw.fill("rgba(255, 0, 255, 0.25)");
	Draw.rect(0, 0, width, height);
};
