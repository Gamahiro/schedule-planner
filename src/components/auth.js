import { auth } from "../model/firebaseDB";
import { signOut } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../model/userAuthentication";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    //@todo make sign in update when user signs in, signs out or signs up


    const logOut = async () => {
        try {
            await signOut(auth);
            navigate('/LandingPage');

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            {
                auth?.currentUser &&
                <div>
                    <div> {auth.currentUser.email}
                    </div>
                    <button onClick={logOut}>Sign Out</button>
                </div>

            }   {
                !auth?.currentUser &&
                <div>
                    <form autoComplete="on">
                        <fieldset className="taskFieldset">
                            <input type={"email"} placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} />
                            <input type={"password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            <button className="button" onClick={() => {signIn(auth, email, password); navigate('/home')}}> Sign In </button>
                        </fieldset>
                    </form>
                </div>
            }
        </div>
    )
}

export { Auth }