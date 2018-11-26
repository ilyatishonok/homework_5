export default class CropResizer {
    constructor(onChange) {
        this.element = document.createElement('input');
        this.element.type = 'range';

        this.element.addEventListener('change', onChange);
    }

    setRanges(min, max) {
        this.element.max = max;
        this.element.min = min;
    }
}