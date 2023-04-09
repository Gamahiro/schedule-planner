import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { ThemeContext, themes } from "../model/toggleDarkmode";
import { Auth } from "../components/auth";

const Layout = () => {

    const [darkMode, setDarkMode] = useState(true)

    return (
        <>
        <div className="header-container">
            <ul>
                <li> <Link to="/" className="button"><img alt="logo/home"/></Link></li>
                <li> <Link to="/WeeklySchedule" className="button"> Weekly </Link> </li>
                <li> <Link to="/DailyTasks" className="button"> Daily Tasks</Link></li>
                <li>
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <div
                            style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                            className="button"
                            onClick={() => {
                                setDarkMode(!darkMode);
                                changeTheme(darkMode ? themes.light : themes.dark)
                            }}
                            >
                                <i className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</i>

                            </div>
                        )}
                    </ThemeContext.Consumer>
                </li>
                <li> <Auth /></li>
            </ul>
        </div>
        <Outlet />
        </>
    )
}

export { Layout }