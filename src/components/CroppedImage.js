export default class CroppedImage {
    constructor() {
        this.element = document.createElement('img');
    }

    updateImage(imageData, width, height) {
        const canvas = document.createElement('canvas');

        canvas.height = height;
        canvas.width = width;

        const ctx = canvas.getContext('2d');
        ctx.putImageData(imageData, 0, 0);

        context.globalCompositeOperation = 'destination-in';
        context.beginPath();
        context.arc(width/2, height/2, height/2 - 1, 0, 2 * Math.PI);
        context.closePath();
        context.fill();

        this.element.src = canvas.toDataURL();
    }    
}