import React from "react";
import '../pages/dailySchedule.css';

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
            <h1>Happy {currentDate.toLocaleDateString('en-US', { weekday: 'long' })}</h1>
                {
                    
                    sortedTasks.map((element, index) => {
                        return (
                            <div className="task-daily">
                                <h3 className="task-title">{element.taskTitle} at {element.taskTime} </h3>
                                <div>{element.taskDescr}</div>
                            </div>
                            )
                    })
                }
            </div>
    )

}

export { DailySchedule }