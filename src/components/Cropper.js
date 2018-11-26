import CropCanvas from './canvas/CropCanvas';
import CroppedImage from './CroppedImage';
import CropResizer from './CropResizer';

export default class Cropper {
    constructor(container) {
        this.container = container;
        
        const croppedImage = new CroppedImage();

        this.croppedImageElement = croppedImage.getElement();
        this.canvas = new CropCanvas(this.croppedImage);

        this._init();
    }

    _init() {
        const { container, canvas, cropCircleSizeChangeInput, _initListeners } = this; 

        container.style.display = 'none';
        container.appendChild(canvas);
        container.appendChild(radiusChangeInput);
        cropCircleSizeChangeInput.type = 'range';

        _initListeners();
    }

    _initListeners() {
        cropCircleSizeChangeInput.addEventListener('change', event => {
            cropCircle.resize(event.target.value);
            draw();
        });
    }

    onImageLoad(image) {
        const { canvas } = this;

        canvas.setSize(image.naturalWidth, image.naturalHeight);

        canvas.move(canvas.width / 2, canvas.height / 2);
        canvas.setImage(image);
    }

    show() {
        this.container.style.display = 'block';
    }

    hide() {
        this.container.style.display = 'none';
    }
}