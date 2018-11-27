import CropCanvas from '../canvas/CropCanvas.js';
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

        container.style.display = 'none';

        const croppedImageDOMElement = croppedImage.getDOMElement();

        container.appendChild(canvas.getDOMElement());
        container.appendChild(croppedImage.getDOMElement());
    }

    onImageLoad(image) {
        const { canvas } = this;

        canvas.setSizes(image.width, image.height);

        this.cropResizer.setRanges(1, Math.min(canvas.element.height / 2, canvas.element.width / 2));
        
        canvas.setImage(image);
        canvas.moveCropArea(canvas.element.width / 2, canvas.element.height / 2);
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