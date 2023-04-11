import { auth } from "../model/firebaseDB";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    //@todo make sign in update when user signs in, signs out or signs up


    const signIn = async (e) => {
        e.preventDefault()
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            console.error(error)
            alert('wrong password')
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
            navigate('/');

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
                            <button className="button" onClick={signIn}> Sign In </button>
                        </fieldset>
                    </form>
                </div>
            }
        </div>
    )
}

export { Auth }