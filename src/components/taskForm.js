import React from "react";
import { taskObj } from "../model/task";

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

    const handleSubmit = (e) => {
        e.preventDefault();
        let newTask = new taskObj(taskName, taskTime, props.day, taskDescr, false);
        props.setTasks([...props.tasks, newTask]);
    }

    return (
        <form className="taskForm" onSubmit={handleSubmit}>
            <fieldset className="taskFieldset">
                <legend>New Task</legend>
                <div style={{ alignSelf: "flex-end", color: "red", width: "1em", textAlign: "center" }}>x</div>
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