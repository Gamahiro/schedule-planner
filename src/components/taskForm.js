import React from "react";
import { taskObj } from "../model/task";

const TaskForm = (props) => {

    function submitNewTask(e) {
        e.preventDefault();
        let newTask = new taskObj()

    }

    return (
        <form className="taskForm" onSubmit={this.submitNewTask}>
            <fieldset className="taskFieldset">
                <legend>New Task</legend>
                <div style={{alignSelf: "flex-end", color: "red", width: "1em", textAlign: "center"}}>x</div>
                <p>
                    <label htmlFor="taskName">Task: </label>
                    <input type={"text"} name={"taskName"} id={"taskName"}></input>
                </p>

                <p>
                    <label htmlFor={"taskTime"}>Time: </label>
                    <input type={"time"} min={"00:00"} max={"23:59"} id={"taskTime"}></input>
                </p>

                <p>
                    <label htmlFor={"taskDescr"}>Description: </label>
                    <textarea id="taskDescr" type={""}></textarea>
                </p>

                <input className="button" type={"submit"}></input>
            </fieldset>

        </form>
    )

}

export { TaskForm }