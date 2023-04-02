import React, { useState } from "react";
import { TaskForm } from "./taskForm";

const Task = (props) => {
    return (
        <div className="task">
            <div style={{ textAlign: "center", textDecoration: "underline" }}>{props.task.taskTime}</div>
            <input type={"checkbox"} />
            <span>{props.task.taskTitle}</span>
        </div>
    )
}



const Card = (props) => {

    const [popup, setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(!popup);
    }




    return (
        <div className="card-container">
            <div className="card-title"> Day </div>

            {
                popup &&          
                <TaskForm tasks={props.allTasks} setTasks={props.setTasks} day={props.day} togglePopup={togglePopup}></TaskForm>               
            }

            <div className="card-content">
                {
                    props.tasks.map((element, index) => {
                        return (
                            <Task key={index} task={element} />
                        )
                    })
                }
            </div>
            <div style={{ textAlign: "center" }} onClick={togglePopup}>+</div>
        </div>
    )


}

export { Card }