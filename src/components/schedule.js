import React from "react";
import { getTasks } from "../model/firebaseDB";
import { Card } from "./card";


const Schedule = (props) => {
let day1 = [];
let day2 = [];
let day3 = [];
let day4 = [];
let day5 = [];
let day6 = [];
let day7 = [];


console.log(props.tasks)

if(props.tasks === undefined) return;
    props.tasks.forEach(element => {
        if (element.taskDay === 1) day1.push(element)
        else if (element.taskDay === 2) day2.push(element)
        else if (element.taskDay === 3) day3.push(element)
        else if (element.taskDay === 4) day4.push(element)
        else if (element.taskDay === 5) day5.push(element)
        else if (element.taskDay === 6) day6.push(element)
        else if (element.taskDay === 7) day7.push(element)
    });




    return (
        <div className="schedule-container">

            <Card tasks={day1} day={1} allTasks={props.tasks} taskRef={props.taskRef} getTasks={props.getTasks}/>
            <Card tasks={day2} day={2} allTasks={props.tasks} taskRef={props.taskRef} getTasks={props.getTasks}/>
            <Card tasks={day3} day={3} allTasks={props.tasks} taskRef={props.taskRef} getTasks={props.getTasks}/>
            <Card tasks={day4} day={4} allTasks={props.tasks} taskRef={props.taskRef} getTasks={props.getTasks}/>
            <Card tasks={day5} day={5} allTasks={props.tasks} taskRef={props.taskRef} getTasks={props.getTasks}/>
            <Card tasks={day6} day={6} allTasks={props.tasks} taskRef={props.taskRef} getTasks={props.getTasks}/>
            <Card tasks={day7} day={7} allTasks={props.tasks} taskRef={props.taskRef} getTasks={props.getTasks}/>
        </div>
    )

}

export { Schedule }