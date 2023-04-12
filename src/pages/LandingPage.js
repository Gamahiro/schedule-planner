import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Auth } from "../components/auth"
import { RegisterForm } from "../components/RegisterForm"
import { auth } from "../model/firebaseDB"
import leaves from "../assets/leaves-6975462.svg"




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
        <div className="landingpage-container" style={{ height: "100%", width: "100%", backgroundImage: `url(${leaves})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>
            <div className="landingpage-content">
                <div>
                    <h1 style={{ textAlign: "center" }}>Schedule Planner</h1>
                    <div>We aim to give you the best experience for creating and tracking a schedule.</div>
                </div>


                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3em", marginBottom: "1em" }}>
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