
const TaskForm = (props) => {


    return (
        <form className="taskForm">
            <fieldset className="taskFieldset">
                <legend>New Task</legend>
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

                <input type={"submit"}></input>
            </fieldset>

        </form>
    )

}

export { TaskForm }