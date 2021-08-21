export default class WidgetController {
    constructor(state, tasks, data) {
        this.state = state;
        this.tasks = tasks;
        this.data = data;
        this.init();
    }

    init() {
        this.addListeners();
    }

    addListeners() {
        document.addEventListener('click', event => {
            if(event.target.closest('.project-selected')) {
                this.tasks.getVisiablePopup();
            }
            if(event.target.closest('.block-select-item')) {
                const index = event.target.closest('.block-select-item').dataset.idProject;
                console.log(index);
                this.tasks.selectProject(Number(index));
                this.tasks.getDisablePopup();
            }
        })
    }
}