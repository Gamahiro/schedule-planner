

class TaskObj {
    constructor(taskTitle, taskTime, taskDay, taskDescr) {
        this.taskTitle = taskTitle;
        this.taskTime = taskTime;
        this.taskDay = taskDay;
        this.taskDescr = taskDescr;
        this.completed = false;
    }

    set setTaskTitle(title) {
        return this.taskTitle = title;
    }

    get getTaskTitle() {
        return this.taskTitle;
    }

    set setTaskTime(time) {
        return this.taskTime = time;
    }

    get getTaskTime() {
        return this.taskTime;
    }

    set setTaskDay(day) {
        return this.taskDay = day;
    }

    get getTaskDay() {
        return this.taskDay;
    }

    set setTaskDescr(descr) {
        return this.taskDescr = descr;
    }

    get getTaskDescr() {
        return this.taskDescr;
    }

    get getCompleted() {
        return this.completed
    }

    set setCompleted(boolean) {
        return this.completed = boolean
    }

}

export { TaskObj }