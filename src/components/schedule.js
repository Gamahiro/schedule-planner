import React from "react";
import { Card } from "./card";

const Schedule = (props) => {

    return (
        <div className="schedule-container">
            <Card
                title="Monday"
                task="Appointment"
            />
            <Card
                title="Tuesday"
                task="Chill"
            />

            <Card
                title="Wednesday"
                task="Chill"
            />

            <Card
                title="Thursday"
                task="Chill"
            />

            <Card
                title="Friday"
                task="Chill"
            />

            <Card
                title="Saturday"
                task="Chill"
            />

            <Card
                title="Sunday"
                task="Chill"
            />
        </div>
    )

}

export { Schedule }