class Board {
    constructor(Context) {
        this.Context = Context;

        this.HEX_SIDES = 6;
        this.HEX_SIZE = 20;
        this.ANGLE_30 = 30 * (180 / Math.PI);
        this.START_X = 25;
        this.START_Y = 25;
        this.RADIANS_30 = 30 * (Math.PI / 180);

        this.ROW_MAP = [
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
        ]

        Object.freeze(this);
    }

    initialize() {
        let Xcenter = this.START_X;
        let Ycenter = this.START_Y;
        for (let i = 0; i < this.ROW_MAP.length; i++) {
            this.drawRow(Xcenter, Ycenter, this.ROW_MAP[i]);

            Xcenter =  i % 2 === 0 ? this.START_X + 34 : this.START_X;

            Ycenter += 20;
        }
    }

    drawRow(X, Y, piecesArray) {

        for (let i = 0; i < piecesArray.length; i++) {
            if(piecesArray[i]) this.drawPolygon(X, Y, { sides: this.HEX_SIDES, size: this.HEX_SIZE });
            X += 69;
        }
    }

    drawPolygon(X, Y, { sides, size, radians }) {
        const _rotateBy = radians || 0;
        const _sides = sides || 6;
        const _size = size || 20;

        this.Context.beginPath();
        this.Context.moveTo(
            X + _size * Math.cos(0 + _rotateBy),
            Y + _size * Math.sin(0 + _rotateBy)
        );

        for (let i = 1; i <= _sides; i += 1) {
            this.Context.lineTo(
                X + _size * Math.cos((i * 2 * Math.PI / _sides) + _rotateBy),
                Y + _size * Math.sin((i * 2 * Math.PI / _sides) + _rotateBy)
            );
        }

        this.Context.strokeStyle = "#000000";
        this.Context.lineWidth = 1;
        this.Context.stroke();
    }
}

window.onload = () => {
    const ctx = document.getElementById('board').getContext('2d');
    const GameBoard = new Board(ctx);
    GameBoard.initialize();
};

//setInterval(draw, 10);