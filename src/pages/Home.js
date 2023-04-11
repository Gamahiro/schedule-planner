import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../model/firebaseDB";

//@todo solve useEffect async infinite loop >:@@@@@@@


const Home = (props) => {

    const [taskTitle, setTaskTitle] = useState(undefined);
    const [taskTime, setTaskTime] = useState(undefined);

    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const dayName = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
    const currentDaysTasks = [];

    const navigate = useNavigate();



    const getTitleTime = () => {
        if (props.tasks !== undefined) {
            props.tasks.map((element) => {
                if (element.taskDay !== currentDay) return null;
                return currentDaysTasks.push(element)
            })
            if(currentDaysTasks[0] !== undefined) {
                if (currentDaysTasks.length > 1) {
                    currentDaysTasks.sort((a, b) => a.taskTime - b.taskTime)
                } else {
                    setTaskTitle(currentDaysTasks[0].taskTitle)
                    setTaskTime(currentDaysTasks[0].taskTime)
                }
            } else return
            
        }
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                props.tasksUpdate();
                getTitleTime();
                console.log('tasks updated')
            } else {
                navigate('/');
            }
        })
    }, [])

    

/*     useEffect(() => {
        if(!auth.currentUser) {
            navigate('/LandingPage');
        } else {
            props.tasksUpdate();
            getTitleTime();
        }
        // eslint-disable-next-line
    }, []) */


    

    return (
        <div>
            <h2>Happy {dayName}, {auth.currentUser?.displayName}</h2>
            <div style={{display: "flex"}}>
                {
                    (taskTitle !== undefined) &&
                    <h3>Your first task of the day is: {taskTitle}&nbsp;</h3>
                }
                {
                    (taskTime !== undefined) &&
                    <>
                    <h3>at&nbsp;</h3>
                    <h3 style={{textDecoration: "underline"}}> {taskTime}</h3>
                    </>
                }
            </div>
        </div>
    );
}

export { Home }