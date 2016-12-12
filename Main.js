var Main = {};

Main.initialize = function() {
	Main.context = document.getElementsByTagName("canvas")[0].getContext("2d");
	Main.screen = "menu";
	Main.resize();
	Main.redraw();
	Menu.load();
};

Main.resize = function() {
	Main.context.canvas.width = document.documentElement.clientWidth;
	Main.context.canvas.height = document.documentElement.clientHeight;
};

Main.redraw = function() {
	if (Main.screen === "menu") Menu.render();
	else if (Main.screen === "stage") Scene.render();
	
	requestAnimationFrame(Main.redraw);
};

addEventListener("DOMContentLoaded", Main.initialize);
addEventListener("resize", Main.resize);
