

function taskObj(taskTitle, taskTime, taskDay, taskDescr, completed) {
    
    this.taskTitle = taskTitle;
    this.taskTime = taskTime;
    this.taskDay = taskDay;
    this.taskDescr = taskDescr;
    this.completed = completed;

}

export {taskObj}