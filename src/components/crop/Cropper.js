import CropCanvas from './CropCanvas.js';
import CroppedImage from './CroppedImage.js';
import CropResizer from './CropResizer.js';

export default class Cropper {
    constructor(container) {
        this.container = container;
        
        this.onCropResizerChange = this.onCropResizerChange.bind(this);

        this.croppedImage = new CroppedImage();
        this.canvas = new CropCanvas(this.croppedImage);
        this.cropResizer = new CropResizer(this.onCropResizerChange);

        this._init();
    }

    _init() {
        const { container, canvas, croppedImage } = this; 

        container.classList.add('crop-container');

        const imageWrapper = document.createElement('div');
        const canvasWrapper = document.createElement('div');
        canvasWrapper.classList.add('crop-canvas-wrapper');
        imageWrapper.classList.add('cropped-image-wrapper');

        imageWrapper.appendChild(croppedImage.getDOMElement());
        canvasWrapper.appendChild(canvas.getDOMElement());

        container.style.display = 'none';

        container.appendChild(canvasWrapper);
        container.appendChild(imageWrapper);
    }

    onImageLoad(image) {
        const { canvas, cropResizer } = this;

        cropResizer.setRanges(1, 75);
        canvas.setImage(image);
    }

    onCropResizerChange(event) {
        this.canvas.resizeCropArea(event.target.value);
    }

    show() {
        this.container.style.display = '';
    }

    hide() {
        this.container.style.display = 'none';
    }
}