import { addDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { tasksCollectionRef } from "../model/firebaseDB";


const TaskForm = (props) => {


    const [taskName, setTaskName] = React.useState('');
    const [taskTime, setTaskTime] = React.useState('');
    const [taskDescr, setTaskDescr] = React.useState('');
    const [allDays, setAllDays] = React.useState(false);

    const handleTaskName = (e) => {
        setTaskName(e.target.value)
    }

    const handleTaskTime = (e) => {
        setTaskTime(e.target.value)
    }

    const handleTaskDescr = (e) => {
        setTaskDescr(e.target.value)
    }

    const handleTaskAllDays = () => {
        setAllDays(!allDays);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        props.togglePopup();

        if(allDays) {
            try {
                for (let index = 0; index < 7; index++) {
                    await addDoc(tasksCollectionRef, {
                        taskTitle: taskName,
                        taskTime: taskTime,
                        taskDay: index,
                        taskDescr: taskDescr,
                        taskCompleted: false
                    })  
                }
            } catch (error) {
                console.error(error)
            }
            setAllDays(false)
        }

        if(!allDays) {
        try {
        await addDoc(tasksCollectionRef, {
            taskTitle: taskName,
            taskTime: taskTime,
            taskDay: props.day,
            taskDescr: taskDescr,
            taskCompleted: false
        })
        } catch (error) {
            console.error(error)
        }
}
props.tasksUpdate();
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

                <p>
                    <label htmlFor={"taskAllDays"}>Every day?</label>
                    <input type={"checkbox"} onChange={handleTaskAllDays}></input>

                </p>

                <input className="button" type={"submit"}></input>
            </fieldset>

        </form>
    )

}

export { TaskForm }