export default class DrawWidgetTasks {
    constructor(parentElement, data = []) {
        this.element = parentElement;
        this.data = data;
        this.init();
    }

    init() {
        this.drawWidget();
    }

    drawWidget() {
        this.widget = document.createElement('div');
        this.widget.classList.add('widget');
        this.widget.innerHTML = `<div class="block-title-widget">
            <h2 class="title-widget">Tasks</h2>
            </div>
            <div class="block-widget-body">
            <div class="block-project-select">
                <div class="block-select-project disable">
                </div>
                <div class="task-item widget-body-head">
                    <div class="block-project-name">
                        <h3 class="project-name">Project:</h3>
                    </div>
                    <div class="block-project-selected">
                        <p class="project-selected widget-project-selected">none</p>
                    </div>
                </div>
            </div>
            <ul class="tasks-list">
            </ul>
            </div>`;
        this.element.appendChild(this.widget);
        this.taskList = this.widget.querySelector('.tasks-list');
        this.blockSelectProject = this.widget.querySelector('.block-select-project');
        this.widgetProjectSelected = this.widget.querySelector('.widget-project-selected');
        this.drawProjectListBlock(this.data);

    }

    drawProjectListBlock(data) {
        this.blockSelectProject.innerHTML = `<div class="block-select-project-title">
        <h3 class="project-name">Project:</h3>
    </div>
    <div class="block-select-project-list">
        <div class="block-project-selected">
            <p class="project-selected popup-project-selected">none</p>
        </div>
        <ul class="block-select-list">
        </ul>
    </div>`;
    this.drawSelectList = this.blockSelectProject.querySelector('.block-select-list');
    this.popupProjectSelected = this.blockSelectProject.querySelector('.popup-project-selected');
    this.drawProjectLists(data.projects);
    }

    drawProjectLists(data) {
        this.drawSelectList.innerHTML = '';
        for(let i of data) {
            if(+this.popupProjectSelected.dataset.idProject === +i.id) {
                continue;
            }
            this.drawProjectItem(i);
        }
    }

    drawProjectItem(data) {
        const li = document.createElement('li');
        li.classList.add('block-select-item');
        li.textContent = data.name;
        li.dataset.idProject = data.id
        this.drawSelectList.appendChild(li);
    }


    selectProject(data) {
        const currentProject = this.data.projects.find( item => item.id === data);
        this.popupProjectSelected.dataset.idProject = currentProject.id;
        this.popupProjectSelected.textContent = currentProject.name;
        this.drawProjectLists(this.data.projects);
        this.blockSelectProject.classList.add('disable');
        console.log(this.widgetProjectSelected);
        this.widgetProjectSelected.dataset.idProject = currentProject.id;
        this.widgetProjectSelected.textContent = currentProject.name;
        this.drawTasks(currentProject.tasks);
    }

    drawTasks(data) {
        this.taskList.textContent = '';
        for(let i of data) {
            this.drawTask(i);
        }
    }

    drawTask(data) {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.innerHTML = `<div class="task-item">
            <div class="block-status-task">
            </div>
            <div class="block-project-name">
                <h3 class="project-name">AppStore Publication</h3>
            </div>
        </div>`;
        this.taskList.appendChild(li);
        li.dataset.taskId = data.div;
        const projectName = li.querySelector('.project-name');
        projectName.textContent = data.name;
        const blockStatusTask = li.querySelector('.block-status-task');
        if (data.done === true) {
            blockStatusTask.classList.add('complete');
        } else {
            blockStatusTask.classList.remove('complete');
        }
    }

    getVisiablePopup() {
        this.blockSelectProject.classList.remove('disable');
    }

    getDisablePopup() {
        this.blockSelectProject.classList.add('disable');
    }
}