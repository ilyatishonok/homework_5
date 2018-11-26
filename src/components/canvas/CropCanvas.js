import Canvas from './Canvas';
import CropCircle from './CropCircle';

export default class CropCanvas extends Canvas {
    constructor() {
        super();

        const INITIAL_CROP_CIRCLE_SIZE = 20;

        this.cropCircle = new CropCircle(
            this.element.width / 2,
            this.element.height / 2, 
            INITIAL_CROP_CIRCLE_SIZE
        );

        this.image = null;
        this.isCropCircleMoving = false;
        this.croppedImage = this.croppedImage;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.element.width, this.element.height);
        this.ctx.drawImage(this.image, 0, 0);
        this.cropCircle.draw(this.ctx);
    }

    onMouseMove(event) {
        if (this.isCropCircleMoving) {
            this.cropCircle.move(event.offsetX, event.offsetY);

            this.updateCroppedImage();
        }
    }

    onMouseUp() {
        this.isCropCircleMoving = false;
    }

    onMouseDown(event) {
        if (this.cropCircle.isUnderPointer(event.offsetX, event.offsetY)) {
            this.isCropCircleMoving = true;
        }
    }

    onMouseLeave() {
        this.isCropCircleMoving = false;
    }

    resizeCropArea(size) {
        this.cropCircle.resize(size);
        this.updateImage();
        this.draw();
    }

    moveCropArea(x, y) {
        this.cropCircle.move(x, y);
        this.updateImage()
        this.draw();
    }

    updateCroppedImage() {
        const { x, y, radius } = this.cropCircle;
        const imageData = this.ctx.getImageData(x - radius, y - radius, radius * 2, radius * 2);

        this.croppedImage.updateImage(imageData, radius * 2, radius * 2);
    }

    setImage(image) {
        this.image = image;
       
        this.updateCroppedImage();
        this.draw();
    }
}