import React from "react";

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
            <div style={{textAlign: "center"}}>+</div>
        </div>
    )


}

export { Card }