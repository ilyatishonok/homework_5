import Shape from './Shape';

export default class CropCircle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        
        this.radius = radius;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
    }

    resize(size) {
        this.radius = size;
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    isUnderPointer(x, y) {
        return Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2) < Math.pow(this.radius, 2);
    }
}