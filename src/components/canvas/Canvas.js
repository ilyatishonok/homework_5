export default class Canvas {
    constructor() {
        this.element = document.createElement('canvas');
        this.ctx = element.getContext('2d');

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    setCanvasSize(width, height) {
        this.element.width = width;
        this.element.height = height;
    }

    onMouseMove() {}

    onMouseUp() {}

    onMouseDown() {}

    onMouseLeave() {}

    draw() {}
}