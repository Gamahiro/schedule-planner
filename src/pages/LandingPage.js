import { Auth } from "../components/auth"
import { RegisterForm } from "../components/RegisterForm"




const LandingPage = () => {



    return (<>
    <div>Sign in</div>
        <Auth />
        <div>Or sign up</div>
        <RegisterForm />
        <div>We aim to give you the best experience for creating and tracking a schedule</div>
    </>)
}


export { LandingPage }