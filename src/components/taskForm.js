import { addDoc } from "firebase/firestore";
import React from "react";
import { TaskObj } from "../model/task";


const TaskForm = (props) => {


    const [taskName, setTaskName] = React.useState('');
    const [taskTime, setTaskTime] = React.useState('');
    const [taskDescr, setTaskDescr] = React.useState('');

    const handleTaskName = (e) => {
        setTaskName(e.target.value)
    }

    const handleTaskTime = (e) => {
        setTaskTime(e.target.value)
    }

    const handleTaskDescr = (e) => {
        setTaskDescr(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.togglePopup();
        try {
        await addDoc(props.taskRef, {
            taskTitle: taskName,
            taskTime: taskTime,
            taskDay: props.day,
            taskDescr: taskDescr,
            taskCompleted: false
        })
        } catch (error) {
            console.error(error)
        }
        props.getTasks();

    }

    return (
        <form className="taskForm" onSubmit={handleSubmit}>
            <fieldset className="taskFieldset">
                <legend>New Task</legend>
                <div
                    style={{ alignSelf: "flex-end", color: "red", width: "1em", textAlign: "center", cursor: "pointer", userSelect: "none" }}
                    onClick={props.togglePopup}
                >x</div>
                <p>
                    <label htmlFor="taskName">Task: </label>
                    <input type={"text"} name={"taskName"} id={"taskName"} onChange={handleTaskName}></input>
                </p>

                <p>
                    <label htmlFor={"taskTime"}>Time: </label>
                    <input type={"time"} min={"00:00"} max={"23:59"} id={"taskTime"} onChange={handleTaskTime}></input>
                </p>

                <p>
                    <label htmlFor={"taskDescr"}>Description: </label>
                    <textarea id="taskDescr" type={""} onChange={handleTaskDescr}></textarea>
                </p>

                <input className="button" type={"submit"}></input>
            </fieldset>

        </form>
    )

}

export { TaskForm }