/*
 * Todo: complete path check box (line mode)
 */
// Colors
var black = 'rgb(0,0,0)'
var white = 'rgb(255,255,255)'

var canvas = document.getElementById('workspace');
var ctx = canvas.getContext('2d');
ctx.fillstyle = black;

startCanvas();

var mouse = {x : 0, y : 0};
var start = {x : 0, y : 0};
canvas.addEventListener('mousemove', function(e) {
    mouse.x = e.pageX - this.offsetLeft;
    mouse.y = e.pageY - this.offsetTop;
}, false);

ctx.lineWidth = 3;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#00CC99';

canvas.addEventListener('mousedown', function(e){
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    start.x = mouse.x;
    start.y = mouse.y;
    canvas.addEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseup', function() {
    ctx.lineTo(start.x, start.y);
    ctx.stroke();
    ctx.fillStyle = '#00CC99';
    ctx.fill();
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);

var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};

function startCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(25, canvas.height - 25, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(canvas.width - 25, 25, 4, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
}

function clearCanvas() {
    startCanvas();
}

function toggleDraw() {

}