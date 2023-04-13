import { DailySchedule } from "../components/dailySchedule";
import './dailySchedule.css';


const DailyTasks = (props) => {

    

    return (
        <DailySchedule tasks={props.tasks} tasksUpdate={props.tasksUpdate} />
    )
}

export { DailyTasks }