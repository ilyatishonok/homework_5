import Cropper from './components/crop/Cropper.js';
import FileUploader from './components/files/FileUploader.js';

export default class App {
    init() {
        const cropper = new Cropper(
            document.querySelector('.cropper')
        );

        new FileUploader(
            document.querySelector('.file-uploader-input'),
            cropper
        );
    }
}