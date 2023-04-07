import React from "react";

const Header = () => {


    return (
        <div className="header-container">
            <ul>
                <li className="button"><img alt="logo"/></li>
                <li className="button">Daily Tasks</li>
                <li className="button">Create Schedule</li>
                <li className="button">About Us</li>
                <li className="button">Settings</li>
            </ul>
        </div>
    )
}

export { Header }