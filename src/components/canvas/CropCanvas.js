import Canvas from './Canvas.js';
import CropCircle from './CropCircle.js';

export default class CropCanvas extends Canvas {
    constructor(croppedImage) {
        super();

        this.cropCircle = new CropCircle(
            this.element.width / 2,
            this.element.height / 2, 
            0
        );

        this.image = null;
        this.isCropCircleMoving = false;
        this.croppedImage = croppedImage;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.element.width, this.element.height);
        this.ctx.drawImage(this.image, 0, 0);
        this.cropCircle.draw(this.ctx);
    }

    onMouseMove(event) {
        if (this.isCropCircleMoving) {
            this.cropCircle.move(event.offsetX, event.offsetY);

            this.draw();
            this.updateCroppedImage();
        }
    }

    onMouseUp() {
        this.isCropCircleMoving = false;
    }

    onMouseDown(event) {
        if (this.cropCircle.isUnderPointer(event.offsetX, event.offsetY)) {
            this.cropCircle.setMouseDownOffset(event.offsetX, event.offsetY);
            this.isCropCircleMoving = true;
        }
    }

    onMouseLeave() {
        this.isCropCircleMoving = false;
    }

    resizeCropArea(size) {
        this.cropCircle.resize(size);
        this.draw();
        this.updateCroppedImage();
    }

    moveCropArea(x, y) {
        this.cropCircle.move(x, y);
        this.draw();
        this.updateCroppedImage();
    }

    updateCroppedImage() {
        const { x, y, radius } = this.cropCircle;
        const imageData = this.ctx.getImageData(x - radius, y - radius, radius * 2, radius * 2);

        this.croppedImage.updateImage(imageData, radius * 2, radius * 2);
    }

    setImage(image) {
        this.image = image;
        
        this.resizeCropArea(Math.min(image.height / 4, image.width / 4));
        this.updateCroppedImage();
        this.draw();
    }

    setSizes(width, height) {
        this.element.width = width;
        this.element.height = height;
    }

    _isMovingAllowed(event) {
    }
}