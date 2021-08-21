export default class DrawWidgetWrapper {
    constructor() {
        this.init();
    }

    init() {
        this.wrapperWidget = document.createElement('div');
        this.wrapperWidget.classList.add('wrapper-widgets');
        document.body.appendChild(this.wrapperWidget);
    }
}