import React from "react";
import { Card } from "./card";

const DailySchedule = (props) => {

    

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentDaysTasks = [];

    if(props.tasks === undefined) return;
    props.tasks.forEach(element => {
        if (element.taskDay === currentDay) currentDaysTasks.push(element)
        else return
    });

    return (
        <div>
            <Card tasks={currentDaysTasks} day={currentDay} allTasks={props.tasks} taskRef={props.taskRef} getTasks={props.getTasks} deleteTask={props.deleteTask} updateTask={props.updateTask} />
        </div>
    )

}

export { DailySchedule }