import React, { useState } from "react";
import { TaskForm } from "./taskForm";
import { Task } from "./Task";

// task component


//card component
const Card = (props) => {



    const [popup, setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(!popup);
    }

    const getDay = (day) => {
        
        if (day === 0) return 'Sunday';
        else if (day === 1) return 'Monday';
        else if (day === 2) return 'Tuesday';
        else if (day === 3) return 'Wednesday';
        else if (day === 4) return 'Thursday';
        else if (day === 5) return 'Friday';
        else if (day === 6) return 'Saturday';

    }

    const sortedTasks = props.dayTasks.sort(function (a, b) {
        return a.taskTime.localeCompare(b.taskTime)
    })

    return (
        <div className="card-container">
            <div className="card-title"> {getDay(props.day)} </div>

            {
                popup &&
                <TaskForm tasks={props.tasks} day={props.day} tasksUpdate={props.tasksUpdate} togglePopup={togglePopup}></TaskForm>
            }

            <div className="card-content">
                {
                    sortedTasks.map((element, index) => {
                        return (
                            <Task key={index} task={element} tasksUpdate={props.tasksUpdate}/>
                        )
                    })
                }
            </div>
            <div
                style={{ textAlign: "center", cursor: "pointer", userSelect: "none" }}
                onClick={togglePopup}>+</div>
        </div>
    )


}

export { Card }