import CropCanvas from './canvas/CropCanvas.js';
import CroppedImage from './CroppedImage.js';
import CropResizer from './CropResizer.js';

export default class Cropper {
    constructor(container) {
        this.container = container;
        
        const croppedImage = new CroppedImage();

        this.croppedImageElement = croppedImage.getElement();
        this.canvas = new CropCanvas(this.croppedImage);

        this.onCropResizerChange = this.onCropResizerChange.bind(this);

        this.cropResizer = new CropResizer(this.onCropResizerChange);

        this._init();
    }

    _init() {
        const { container, canvas, cropResizer, croppedImage } = this; 

        container.style.display = 'none';

        container.appendChild(canvas.element);
        container.appendChild(croppedImage);
        container.appendChild(cropResizer.element);
    }

    onImageLoad(image) {
        const { canvas } = this;

        canvas.setSize(image.naturalWidth, image.naturalHeight);

        this.cropResizer.setRanges(5, canvas.width/1.5);
        canvas.move(canvas.width / 2, canvas.height / 2);
        canvas.setImage(image);
    }

    onCropResizerChange(event) {
        this.canvas.resizeCropArea(event.target.value);
    }

    show() {
        this.container.style.display = 'block';

    }

    hide() {
        this.container.style.display = 'none';
    }
}