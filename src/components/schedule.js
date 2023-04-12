import React, { useEffect } from "react";
import { Card } from "./card";


const Schedule = (props) => {



    let day1 = [];
    let day2 = [];
    let day3 = [];
    let day4 = [];
    let day5 = [];
    let day6 = [];
    let day0 = [];



    if (props.tasks === undefined) return;
    props.tasks.forEach(element => {
        if (element.taskDay === 0) day0.push(element)
        else if (element.taskDay === 1) day1.push(element)
        else if (element.taskDay === 2) day2.push(element)
        else if (element.taskDay === 3) day3.push(element)
        else if (element.taskDay === 4) day4.push(element)
        else if (element.taskDay === 5) day5.push(element)
        else if (element.taskDay === 6) day6.push(element)
    });




    return (
        <div className="schedule-container">

            <Card dayTasks={day1} day={1} tasks={props.tasks} tasksUpdate={props.tasksUpdate} />
            <Card dayTasks={day2} day={2} tasks={props.tasks} tasksUpdate={props.tasksUpdate} />
            <Card dayTasks={day3} day={3} tasks={props.tasks} tasksUpdate={props.tasksUpdate} />
            <Card dayTasks={day4} day={4} tasks={props.tasks} tasksUpdate={props.tasksUpdate} />
            <Card dayTasks={day5} day={5} tasks={props.tasks} tasksUpdate={props.tasksUpdate} />
            <Card dayTasks={day6} day={6} tasks={props.tasks} tasksUpdate={props.tasksUpdate} />
            <Card dayTasks={day0} day={0} tasks={props.tasks} tasksUpdate={props.tasksUpdate} />
        </div>
    )

}

export { Schedule }