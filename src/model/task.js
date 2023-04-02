

function TaskObj(taskTitle, taskTime, taskDay, taskDescr, completed) {
    
    this.taskTitle = taskTitle;
    this.taskTime = taskTime;
    this.taskDay = taskDay;
    this.taskDescr = taskDescr;
    this.completed = completed;

    // create a setter for this, maybe change to object or class
/*     Object.defineProperty(this, 'toggleCompleted', {
        set() {
            this.completed = !this.completed;
        }
    }) 
 */
}

export {TaskObj}