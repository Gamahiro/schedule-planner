import React from "react";
import { TaskForm } from "./taskForm";

const Task = (props) => {
    return (
        <div className="task">
        <div style={{textAlign: "center", textDecoration: "underline"}}>{props.task.taskTime}</div>
            <input type={"checkbox"} />
            <span>{props.task.taskTitle}</span>
        </div>
    )
}



const Card = (props) => {

    const createForm = () => {
           return (
            <TaskForm tasks={props.allTasks} setTasks={props.setTasks}></TaskForm>
           )

    }

    return (
        <div className="card-container">
            <div className="card-title"> Day </div>
            <div className="card-content">
                {
                    props.tasks.map((element, index) => {
                        return (
                            <Task key={index} task={element} />
                        )
                    })
                }
            </div>
            <div style={{textAlign: "center"}} onClick={createForm}>+</div>
        </div>
    )


}

export { Card }