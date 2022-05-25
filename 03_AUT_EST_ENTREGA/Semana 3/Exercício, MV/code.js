var canvas = document.getElementById('canvas');
var test = document.getElementById('test');
var ctx = canvas.getContext('2d');

function drawDot(color, x, y) {
    ctx.fillStyle = color;
    ctx.fillRect(x - 2, y - 2, 4, 4);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawDot("red", obj.pos, obj.height);
    drawDot("white", obj.start, obj.height);
    drawDot("green", obj.dest, obj.height);

    ctx.fillText("x = " + obj.pos.toFixed(5), 20, 400);
    ctx.fillText("v = " + obj.velocity.toFixed(5), 20, 420);
    ctx.fillText("distance traveled: " + (obj.pos - obj.start).toFixed(2), 20, 440);
}

var obj = {
    start: 10,
    height: 200,
    stopDist: 300,
    dest: 500,
    lastTime: new Date().getTime(),
    velocity: 0.05,
    destVelocity: 0.01,
    pos: undefined,
    acceleration: undefined
};

function frame() {
    var t = new Date().getTime(),
        tDelta = t - obj.lastTime;
    obj.lastTime = t;

    obj.pos += obj.velocity * tDelta;
    if (obj.velocity > obj.destVelocity) {
        obj.velocity += obj.acceleration * tDelta;
    }

    draw();

    setTimeout(frame, 1);
}

function start() {
    var v0 = obj.velocity,
        vf = obj.destVelocity,
        x0 = obj.start,
        xf = x0 + obj.stopDist,
        vDelta = vf - v0;

    obj.pos = x0;
    obj.acceleration = (2 * v0 * vDelta + vDelta * vDelta) / (2 * (xf - x0));

    frame();
}

start();