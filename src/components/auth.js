import { auth } from "../model/firebaseDB";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const registerNewUser = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setEmail('')
            setPassword('')
        } catch (error) {
            console.error(error)
        }
    }

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error)
            alert('wrong password')
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error)
        }
    }


    return (
        <div>
            {
                auth.currentUser &&
                <div> {auth.currentUser.email}
                    <Link to="/"><button onClick={logOut}>Sign Out</button></Link>
                </div>

            }   {
                !auth?.currentUser &&
                <div>
                    <input type={"email"} placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} />
                    <input type={"password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <Link to="/"><button onClick={signIn}> Sign In </button></Link>
                </div>
            }
        </div>
    )
}

export { Auth }