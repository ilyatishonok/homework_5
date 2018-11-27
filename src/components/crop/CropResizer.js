import Element from '../element/Element.js';

export default class CropResizer extends Element {
    constructor(onChange) {
        super();
        
        this.element = document.createElement('input');
        this.element.type = 'range';

        this.element.addEventListener('change', onChange);
        this.element.addEventListener('input', onChange);
    }

    setRanges(min, max) {
        this.element.max = max;
        this.element.min = min;
    }
}