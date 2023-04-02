import React, { useState } from "react";
import { TaskForm } from "./taskForm";

const Task = (props) => {

    const [expand, setExpand] = useState(false);
    const toggleExpand = (e) => {
        setExpand(!expand);
        if(e.target.textContent === 'expand_more') {
            e.target.textContent = 'expand_less';
        } 
        else if (e.target.textContent === 'expand_less') {
            e.target.textContent = 'expand_more';
        }
    }


    console.log(props)
    return (
        <div
            className="task">
            <div style={{ textAlign: "center", textDecoration: "underline" }}>{props.task.taskTime}</div>
            <div>
                <input 
                type={"checkbox"}
                onChange={props.task.toggleCompleted}
                 />
                <span>{props.task.taskTitle}</span>
            </div>
            {
                expand &&
                <div style={{ textAlign: "center" }}>{props.task.taskDescr}</div>
            }
            <div
                className="material-symbols-outlined expandbtn"
                style={{ display: "flex", justifyContent: "center" }}
                onClick={toggleExpand}
            >expand_more</div>
        </div>
    )
}



const Card = (props) => {

    const [popup, setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(!popup);
    }

    const getDay = (day) => {
        if (day === 1) return 'Monday';
        else if (day === 2) return 'Tuesday'
        else if (day === 3) return 'Wednesday'
        else if (day === 4) return 'Thursday'
        else if (day === 5) return 'Friday'
        else if (day === 6) return 'Saturday'
        else if (day === 7) return 'Sunday'

    }



    return (
        <div className="card-container">
            <div className="card-title"> {getDay(props.day)} </div>

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
            <div
                style={{ textAlign: "center", cursor: "pointer", userSelect: "none" }}
                onClick={togglePopup}>+</div>
        </div>
    )


}

export { Card }