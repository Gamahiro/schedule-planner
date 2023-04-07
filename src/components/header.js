import React, { useState } from "react";
import { ThemeContext, themes } from "../model/toggleDarkmode";

const Header = () => {

    const [darkMode, setDarkMode] = useState(true)

    return (
        <div className="header-container">
            <ul>
                <li className="button"><img alt="logo"/></li>
                <li className="button">Daily Tasks</li>
                <li className="button">Create Schedule</li>
                <li className="button">About Us</li>
                <li className="button">
                    <ThemeContext.Consumer>
                        {({ changeTheme }) => (
                            <button
                            onClick={() => {
                                setDarkMode(!darkMode);
                                changeTheme(darkMode ? themes.light : themes.dark)
                            }}
                            >
                                <i className="material-symbols-outlined">{darkMode ? 'light_mode' : 'dark_mode'}</i>

                            </button>
                        )}
                    </ThemeContext.Consumer>
                </li>
            </ul>
        </div>
    )
}

export { Header }