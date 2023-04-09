import React from "react";
import { Card } from "./card";

const DailySchedule = (props) => {
    

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentDayTasks = [];
    
    if(props.tasks === undefined) return;
    props.tasks.forEach(element => {
        if (element.taskDay === currentDay) currentDayTasks.push(element)
        else return
    });

    return (
        <div>
            <Card dayTasks={currentDayTasks} day={currentDay} tasks={props.tasks} tasksUpdate={props.tasksUpdate} />
        </div>
    )

}

export { DailySchedule }