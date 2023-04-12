import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Auth } from "../components/auth";
import { auth } from "../model/firebaseDB";
import { ThemeContext, themes } from "../model/toggleDarkmode";

const Layout = () => {

    const [darkMode, setDarkMode] = useState(true)

    const navigate = useNavigate();

    return (
        <>
            <nav className="header-container">
                <ul>
                    <li> <Link to="/" className="button">Home</Link></li>
                    <li>  </li>
                    <li> </li>
                    <li style={{border: '0.1em solid var(--border-color)', backgroundColor: "var(--bg-color)"}}> {auth?.currentUser?.displayName} <div 
                    onClick={async () => {await signOut(auth); navigate('/')}}
                    className='leftNavbarLink'
                    >Sign out</div> </li>
                    <li>
                        <ThemeContext.Consumer>
                            {({ changeTheme }) => (
                                <div
                                    style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%" }}
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
                </ul>
            </nav>
            <div style={{ display: "flex", justifyContent: "flex-start", width: "100%", height: "100%"}}>

                <ul className="leftNavbar">
                    <li><Link className="leftNavbarLink" to="/WeeklySchedule"> Weekly </Link></li>
                    <li><Link className="leftNavbarLink" to="/DailyTasks"> Daily Tasks</Link></li>
                    <li></li>
                    <li></li>
                </ul>
                <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export { Layout }