import React, { useState } from "react";
import { TaskForm } from "./taskForm";

const Task = (props) => {

    const [expand, setExpand] = useState(false);
    const toggleExpand = (e) => {
        setExpand(!expand);
        if (e.target.textContent === 'expand_more') {
            e.target.textContent = 'expand_less';
        }
        else if (e.target.textContent === 'expand_less') {
            e.target.textContent = 'expand_more';
        }
    }

    const [edit, setEdit] = useState(false);

    const toggleEdit = () => {
        setEdit(!edit);
    }

    const toggleComplete = () => {
        return props.task.setCompleted = !props.task.getCompleted
    }

    const [taskName, setTaskName] = useState(props.task.taskName);
    const [taskTime, setTaskTime] = useState(props.task.taskTime);
    const [taskDescr, setTaskDescr] = useState(props.task.taskDescr);
    const [taskDay, setTaskDay] = useState(props.task.taskDay);

    const handleTaskName = (e) => {
        setTaskName(e.target.value);
    }

    const handleTaskTime = (e) => {
        setTaskTime(e.target.value);
    }

    const handleTaskDescr = (e) => {
        setTaskDescr(e.target.value);
    }

    const handleTaskDay = (e) => {
        setTaskDay(Number(e.target.value));
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.task.setTaskName = taskName;
        props.task.setTaskTime = taskTime;
        props.task.setTaskDescr = taskDescr;
        props.task.setTaskDay = taskDay;

        toggleEdit();
    }

    if (edit) {
        return (
            <form
            style={{width: "100%"}}
                className="task"
                onSubmit={handleSubmit}
            >
                <input
                    type={"time"}
                    style={{}}
                    defaultValue={props.task.getTaskTime}
                    onChange={handleTaskTime}
                    name={'time'}
                ></input>
                <div>
                    <input
                        type={"checkbox"}
                        onChange={toggleComplete}
                        defaultValue={props.task.completed}
                    name={'completed'}

                    />
                    <input
                        type={"text"}
                        defaultValue={props.task.taskTitle}
                        onChange={handleTaskName}
                    name={'name'}

                    ></input>

                </div>


                <textarea
                    style={{ textAlign: "center" }}
                    defaultValue={props.task.taskDescr}
                    onChange={handleTaskDescr}
                    name={'descr'}

                ></textarea>

                <select
                    name="day"
                    onChange={handleTaskDay}
                    defaultValue={props.task.taskDay}
                >
                    <option value="1">Monday</option>
                    <option value="2">Tuesday</option>
                    <option value="3">Wednesday</option>
                    <option value="4">Thursday</option>
                    <option value="5">Friday</option>
                    <option value="6">Saturday</option>
                    <option value="7">Sunday</option>
                </select>

                <button type={"submit"}>Edit</button>

            </form>
        )
    }

    else if (!edit) {
        return (
            <div
                className="task">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ textAlign: "center", textDecoration: "underline" }}>{props.task.taskTime}</div>
                    <span className="material-symbols-outlined expandbtn" onClick={toggleEdit}>edit_note</span>
                </div>
                <div>
                    <input
                        type={"checkbox"}
                        onChange={toggleComplete}
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