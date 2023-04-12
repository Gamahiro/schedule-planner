import { useState } from "react";
import { deleteTask, updateTask } from "../model/firebaseDB";

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



    const [taskTitle, setTaskTitle] = useState(props.task.taskTitle);
    const [taskTime, setTaskTime] = useState(props.task.taskTime);
    const [taskDescr, setTaskDescr] = useState(props.task.taskDescr);
    const [taskDay, setTaskDay] = useState(props.task.taskDay);
    const [taskCompleted, setTaskCompleted] = useState(props.task.taskCompleted);

    const toggleComplete = (e) => {
        setTaskCompleted(e.target.checked)
        props.tasksUpdate();
        updateTask({
            id: props.task.id,
            taskTitle: taskTitle,
            taskDescr: taskDescr,
            taskDay: taskDay,
            taskTime: taskTime,
            taskCompleted: !taskCompleted
        })
        props.tasksUpdate();
    }

    const handleTaskName = (e) => {
        setTaskTitle(e.target.value);
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

    const handleTaskCompleted = (e) => {
        setTaskCompleted(e.target.checked)

    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.tasksUpdate();
        updateTask({
            id: props.task.id,
            taskTitle: taskTitle,
            taskDescr: taskDescr,
            taskDay: taskDay,
            taskTime: taskTime,
            taskCompleted: taskCompleted
        })
        toggleEdit();
        props.tasksUpdate();
    }

    if (edit) {
        return (
            <div>
                <form
                    style={{ width: "100%" }}
                    className="task"
                    onSubmit={handleSubmit}
                >
                    <input
                        type={"time"}
                        style={{}}
                        defaultValue={props.task.taskTime}
                        onChange={handleTaskTime}
                        name={'time'}
                    ></input>
                    
                    <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <span>complete?</span>
                        <input
                            type={"checkbox"}
                            onChange={handleTaskCompleted}
                            checked={taskCompleted}
                            name={'completed'}

                        />
                        </div>
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
                        <option value="0">Sunday</option>
                    </select>
                    <div style={{display: "flex", justifyContent: "space-around"}}>
                        <button className="material-symbols-outlined" type={"submit"}>done</button>
                        <button className="material-symbols-outlined" onClick={toggleEdit}>close</button>
                        <button
                        className="button"
                        style={{ backgroundColor: "red" }}
                        onClick={() => deleteTask(props.task.id)}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }

    else if (!edit) {
        return (
            <div
                className="task">
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "0.1em outset var(--border-color)" }}>
                    <div style={{ textAlign: "center", textDecoration: "underline" }}>{props.task.taskTime}</div>
                    <span className="material-symbols-outlined expandbtn" onClick={toggleEdit}>edit_note</span>
                </div>
                <div>
                    <input
                        type={"checkbox"}
                        checked={taskCompleted}
                        onChange={toggleComplete}
                        name={'submitComplete'}
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

export { Task }