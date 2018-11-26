import Cropper from './components/Cropper';
import FileUploader from './components/FileUploader';

export default class App {
    init() {
        const cropper = new Cropper(
            document.querySelector('.canvas-container')
        );

        new FileUploader(
            document.querySelector('.file-uploader-input'),
            cropper
        );
    }
}