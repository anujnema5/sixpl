import app from "../config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app);

export default async function signIn(email, password) {
    let res = null,
        error = null;
    try {
        res = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
        error = e;
    }

    return { res, error };
}