import Shape from '../canvas/shapes/Shape.js';

export default class CropCircle extends Shape {
    constructor(x, y, radius = 75) {
        super(x, y);
        
        this.radius = radius;
        this.offsetX = 0;
        this.offsetY = 0;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.setLineDash([5, 10]);
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }

    resize(size) {
        this.radius = size;
    }

    move(x, y) {
        this.x = x - this.offsetX;
        this.y = y - this.offsetY;
    }

    isUnderPointer(x, y) {
        return Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2) < Math.pow(this.radius, 2);
    }

    setMouseDownOffset(offsetX, offsetY) {
        this.offsetX = offsetX - this.x;
        this.offsetY = offsetY - this.y;
    }
}