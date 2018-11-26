export default class Shape {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getCoords() {
        return {
            x,
            y,
        };
    }
    
    draw() {}
    resize() {}
    move() {}
    isUnderPointer() {}
}