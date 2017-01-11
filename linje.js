var canvas;
var ctx;
var xgl;
var ygl;

function init(){
	var touchzone = document.getElementById("mycanvas");
	touchzone.addEventListener("touchmove",opdaterCanvas, false);
	touchzone.addEventListener("touchend",end,false);
	ctx = touchzone.getContext("2d");
	mycanvas.width = mycanvas.width;
	ctx.fillStyle="yellow";
	ctx.fillRect(0,0,mycanvas.width,mycanvas.height);
}

function opdaterCanvas(){
	var touchzone = document.getElementById("mycanvas");
	var ctx = touchzone.getContext("2d");
	var x =event.touches[0].pageX;
	var y = event.touches[0].pageY
	ctx.lineTo(x,y);
	ctx.stroke();
}



function end(e) {
	e.preventDefault();
}