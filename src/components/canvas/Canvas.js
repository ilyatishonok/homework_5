import Element from '../element/Element.js';

export default class Canvas extends Element {
    constructor() {
        super();

        this.element = document.createElement('canvas');
        this.ctx = this.element.getContext('2d');

        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);

        this._initListeners();
    }

    setCanvasSize(width, height) {
        this.element.width = width;
        this.element.height = height;
    }

    _initListeners() {
        this.element.addEventListener('mousedown', this.onMouseDown);
        this.element.addEventListener('mousemove', this.onMouseMove);
        this.element.addEventListener('mouseup', this.onMouseUp);
        this.element.addEventListener('mouseleave', this.onMouseLeave);
    }

    onMouseMove() {}

    onMouseUp() {}

    onMouseDown() {}

    onMouseLeave() {}

    draw() {}
}