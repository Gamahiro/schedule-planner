import { Schedule } from "../components/schedule"


const WeeklySchedule = (props) => {
    return (
        <Schedule tasks={props.tasks} tasksUpdate={props.tasksUpdate}/>

    )
}

export { WeeklySchedule }