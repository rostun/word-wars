const HEX_SIDES = 6;
const HEX_SIZE = 20;
const HEX_PIECES = 5;
const ANGLE_30 = 30 * (180 / Math.PI);
const RADIANS_30 = 30 * (Math.PI / 180);

let ctx;

window.onload = () => {
   ctx = document.getElementById('board').getContext('2d');
   createBoard();
};

function draw() {

}

function polygon(X, Y) { 

    ctx.beginPath();
    ctx.moveTo (
        X + HEX_SIZE * Math.cos(0), 
        Y + HEX_SIZE *  Math.sin(0)
    );

    for (let i = 1; i <= HEX_SIDES; i += 1) {
        ctx.lineTo (
            X + HEX_SIZE * Math.cos(i * 2 * Math.PI / HEX_SIDES), 
            Y + HEX_SIZE * Math.sin(i * 2 * Math.PI / HEX_SIDES)
        );
    }

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.stroke();
}

function drawHexPiece(X, Y, radians) {
    const _rotateBy = radians || 0;

    ctx.beginPath();
    ctx.moveTo(
        X + HEX_SIZE * Math.cos(0 + _rotateBy),
        Y + HEX_SIZE * Math.sin(0 + _rotateBy)
    );

    for (let i = 1; i <= HEX_SIDES; i += 1) {
        ctx.lineTo(
            X + HEX_SIZE * Math.cos((i * 2 * Math.PI / HEX_SIDES) + _rotateBy),
            Y + HEX_SIZE * Math.sin((i * 2 * Math.PI / HEX_SIDES) + _rotateBy)
        );
    }

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.stroke();
}
function createBoard() {
    // hexagon
    let Xcenter = 25, Ycenter = 25;
    
    drawHexPiece(Xcenter, Ycenter, RADIANS_30);
    
    for (let i = 0; i < HEX_PIECES; i++) {
        Xcenter += i * 10;
        Ycenter += i * 10;    
    }

}
//setInterval(draw, 10);