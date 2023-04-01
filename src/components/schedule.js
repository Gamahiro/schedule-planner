import React from "react";
import { Card } from "./card";
import { TaskForm } from "./taskForm";

const Schedule = (props) => {
let day1 = [];
let day2 = [];
let day3 = [];
let day4 = [];
let day5 = [];
let day6 = [];
let day7 = [];



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

            <Card tasks={day1} />
            <Card tasks={day2} />
            <Card tasks={day3} />
            <Card tasks={day4} />
            <Card tasks={day5} />
            <Card tasks={day6} />
            <Card tasks={day7} />
            <TaskForm></TaskForm>
        </div>
    )

}

export { Schedule }