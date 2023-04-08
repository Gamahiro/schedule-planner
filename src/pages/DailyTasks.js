import { DailySchedule } from "../components/dailySchedule"


const DailyTasks = (props) => {

    return (
        <DailySchedule tasks={props.tasks} tasksUpdate={props.tasksUpdate} />
    )
}

export { DailyTasks }