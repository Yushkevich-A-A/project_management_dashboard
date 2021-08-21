export default class DrawWidgetState {
    constructor(parentElement, data = []) {
        this.element = parentElement;
        this.data = data;
        this.init();
    }

    init() {
        this.drawWidget();
        this.drawProjects(this.data.projects);
    }

    drawWidget() {
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        this.widget.innerHTML = `<div class="block-title-widget">
            <h2 class="title-widget">Stats</h2>
            </div>
            <div class="block-widget-body">
            <div class="state-block widget-body-head">
                <div class="block-project-name">
                <h3 class="project-name">Project</h3>
                </div>
                <div class="block-project-info">
                <p class="project-info project-info-head">Open</p>
                </div>
            </div>
            <ul class="tasks-list">
            </ul>
            </div>`;
        this.element.appendChild(this.widget);
        this.taskList = this.widget.querySelector('.tasks-list');
    }

    drawProjects(data) {
        for (let i of data) {
            this.drawProject(i);
        }
    }

    drawProject(data) {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.innerHTML = `<div class="state-block">
        <div class="block-project-name">
          <h3 class="project-name"></h3>
        </div>
        <div class="block-project-info">
          <p class="project-info project-info-list"></p>
        </div>
        </div>`;
        this.taskList.appendChild(li);
        li.dataset.idProject = data.id;
        const projectName = li.querySelector(".project-name");
        projectName.textContent = data.name;
        const projectInfoList = li.querySelector(".project-info-list");
        projectInfoList.textContent = this.getAmountCurrentTasks(data.tasks);
    }

    getAmountCurrentTasks(data) {
        return data.filter(item => item.done === false).length;
    }

    redrawAmountCurrentTasks(data) {
        const currentElement = this.widget.querySelector(`[data-id-project="${data.id}"]`);
        const projectInfoList = currentElement.querySelector(".project-info-list");
        projectInfoList.textContent = this.getAmountCurrentTasks(data.tasks);
    }
}