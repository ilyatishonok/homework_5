export default class FileUploader {
    constructor(fileInput, cropper) {
        this.fileInput = fileInput;
        this.cropper = cropper;

        this.fileReader = new FileReader();

        this.onImageLoad = this.onImageLoad.bind(this);
        this.onFileChange = this.onFileChange.bind(this);

        this._init();
    }

    onImageLoad() {
        const newImage = new Image(60, 45);
        newImage.src = this.fileReader.result;
        this.fileInput.style.display = 'none';

        newImage.onload = this.cropper.onImageLoad.bind(this.cropper, newImage);
        this.cropper.show();
    }

    onFileChange() {
        const [ file ] = this.fileInput.files;

        if (file) {
            this.fileReader.readAsDataURL(file);
        }
    }

    _init() {
        this.fileInput.addEventListener('change', this.onFileChange);
        this.fileReader.addEventListener('load', this.onImageLoad);
    }
}