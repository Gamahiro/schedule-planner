import { useNavigate } from "react-router-dom"
import { Auth } from "../components/auth"
import { RegisterForm } from "../components/RegisterForm"
import { auth } from "../model/firebaseDB"




const LandingPage = () => {

    const navigate = useNavigate();

    auth.onAuthStateChanged(user => {
        if (user) {
            navigate('home');
        }
    })


    return (<>
    <div>Sign in</div>
        <Auth />
        <div>Or sign up</div>
        <RegisterForm />
        <div>We aim to give you the best experience for creating and tracking a schedule</div>
    </>)
}


export { LandingPage }