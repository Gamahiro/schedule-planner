import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

const signIn = async (auth, email, password) => {

    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error)
    }
}

const signUp = async (auth, email, password, name) => {
    await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(auth.currentUser);
    await updateProfile(auth.currentUser, { displayName: name });
    await signInWithEmailAndPassword(auth, email, password);

}

export {signIn, signUp}