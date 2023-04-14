import React from "react";
import { Task } from "./Task"

const DailySchedule = (props) => {

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentDayTasks = [];

    if (props.tasks === undefined) return;
    props.tasks.forEach(element => {
        if (element.taskDay === currentDay) currentDayTasks.push(element)
        else return
    });

    const sortedTasks = currentDayTasks.sort(function (a, b) {
        return a.taskTime.localeCompare(b.taskTime)
    })


    return (
            
            <div>
            <h1>{currentDate.toLocaleDateString('en-US', { weekday: 'long' })}</h1>
                {
                    
                    sortedTasks.map((element, index) => {
                        return (
                            <div>
                                {element.taskTitle} at {element.taskTime}
                                <div>{element.taskDescr}</div>
                            </div>
                            )
                    })
                }
            </div>
    )

}

export { DailySchedule }