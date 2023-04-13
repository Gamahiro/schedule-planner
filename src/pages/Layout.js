import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Auth } from "../components/auth";
import { auth } from "../model/firebaseDB";
import { ThemeContext, themes } from "../model/toggleDarkmode";
import './layout.css';

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
                    <li className="signedIn-container"> {auth?.currentUser?.displayName} <div 
                    onClick={async () => {await signOut(auth); navigate('/')}}
                    className='navbar-link'
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
            <div className="inner-body" >

                <ul className="navbar">
                    <li><Link className="navbar-link" to="/WeeklySchedule"> Weekly </Link></li>
                    <li><Link className="navbar-link" to="/DailyTasks"> Daily Tasks</Link></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="outlet-container">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export { Layout }