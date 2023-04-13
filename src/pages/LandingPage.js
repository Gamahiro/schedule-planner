import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "../components/auth"
import { RegisterForm } from "../components/RegisterForm"
import { auth } from "../model/firebaseDB"
import leaves from "../assets/leaves-6975462.svg"
import './landingPage.css'




const LandingPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                navigate('home');
            }
        })
    })



    return (
        <div className="landingpage-container" style={{  backgroundImage: `url(${leaves})` }}>
            <div className="landingpage-content">
                <div className="landingpage-text">
                    <h1>Schedule Planner</h1>
                    <div>We aim to give you the best experience for creating and tracking a schedule.</div>
                </div>


                <div className="login-container">
                    <div>
                        <div>Sign in</div>
                        <Auth />
                    </div>
                    <h1>OR</h1>
                    <div>
                        <div>Sign up</div>
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    )
}


export { LandingPage }