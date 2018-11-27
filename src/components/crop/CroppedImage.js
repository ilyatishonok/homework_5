import Element from '../element/Element.js';

export default class CroppedImage extends Element {
    constructor() {
        super();
        
        this.element = document.createElement('img');
    }

    updateImage(imageData, width, height) {
        const canvas = document.createElement('canvas');

        canvas.height = height;
        canvas.width = width;

        const ctx = canvas.getContext('2d');
        ctx.putImageData(imageData, 0, 0);

        ctx.globalCompositeOperation = 'destination-in';
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, width / 2 - 1, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();

        this.element.src = canvas.toDataURL();
    }    
}