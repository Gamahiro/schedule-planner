import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from "../model/firebaseDB";

const RegisterForm = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [user, setUser] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        try {
        } catch (error) {

        }
    }

    const handleConfirmPassword = (e) => {
        if (e.target.value === password) {
            setConfirmPassword(true);
        }
        else if (e.target.value !== password) {
            setConfirmPassword(false);
        }
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (confirmPassword === false) {
            console.log('password doesnt match')
        }
        else {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                await signInWithEmailAndPassword(auth, email, password);
                await sendEmailVerification(auth.currentUser);
                await updateProfile(auth.currentUser, { displayName: name });
                setUser(auth.currentUser);
                console.log(user)
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <form autoComplete="on">
            <fieldset className="taskFieldset">
                <input onChange={handleEmail} type="email" placeholder="E-mail" />
                <input onChange={handleName} type={"text"} placeholder="Username" />
                <input onChange={handlePassword} type={"password"} placeholder="Password" />
                <input onChange={handleConfirmPassword} type={"password"} placeholder="Confirm Password" />
                <button onClick={(e) => {
                    handleSubmit(e);
                    navigate('/');
                }}>Register</button>
            </fieldset>
        </form>
    )


}


export { RegisterForm }