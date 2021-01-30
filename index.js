const HEX_SIDES = 6;
const HEX_SIZE = 20;
const HEX_PIECES = 5;
const ANGLE_30 = 30 * (180 / Math.PI);
const RADIANS_30 = 30 * (Math.PI / 180);

class Board {
    constructor(Context) {
        this.Context = Context;
        Object.freeze(this);
    }
    
    initialize() {
        // hexagon
        let Xcenter = 25, Ycenter = 25;
        
        for (let i = 0; i < HEX_PIECES; i++) {
            this.drawHexPiece(Xcenter, Ycenter, RADIANS_30);

            Xcenter += 40;  
        }
    
    }

    polygon(X, Y) { 

        this.Context.beginPath();
        this.Context.moveTo (
            X + HEX_SIZE * Math.cos(0), 
            Y + HEX_SIZE *  Math.sin(0)
        );
    
        for (let i = 1; i <= HEX_SIDES; i += 1) {
            this.Context.lineTo (
                X + HEX_SIZE * Math.cos(i * 2 * Math.PI / HEX_SIDES), 
                Y + HEX_SIZE * Math.sin(i * 2 * Math.PI / HEX_SIDES)
            );
        }
    
        this.Context.strokeStyle = "#000000";
        this.Context.lineWidth = 1;
        this.Context.stroke();
    }
    
    drawHexPiece(X, Y, radians) {
        const _rotateBy = radians || 0;
    
        this.Context.beginPath();
        this.Context.moveTo(
            X + HEX_SIZE * Math.cos(0 + _rotateBy),
            Y + HEX_SIZE * Math.sin(0 + _rotateBy)
        );
    
        for (let i = 1; i <= HEX_SIDES; i += 1) {
            this.Context.lineTo(
                X + HEX_SIZE * Math.cos((i * 2 * Math.PI / HEX_SIDES) + _rotateBy),
                Y + HEX_SIZE * Math.sin((i * 2 * Math.PI / HEX_SIDES) + _rotateBy)
            );
        }
    
        this.Context.strokeStyle = "#000000";
        this.Context.lineWidth = 1;
        this.Context.stroke();
    }
}

function draw() {


}

window.onload = () => {
    const ctx = document.getElementById('board').getContext('2d');
    const GameBoard = new Board(ctx);
    GameBoard.initialize();
 };

//setInterval(draw, 10);