import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../../Firebase/Firebase.config';



export const createContextUser = createContext(null)
const Authentication = ({ children }) => {
    const [user, setuser] = useState(null)
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    const logoutUser = () => {
        signOut(auth)
    }
    useEffect(() => {
        onAuthStateChanged(auth, current => {
            setuser(current)
            console.log("objarb: ", current)
        })
    }, [])


    const dataShare = { registerUser, loginUser, logoutUser, user }
    return (
        <createContextUser.Provider value={dataShare}>
            {children}
        </createContextUser.Provider>
    );
};

export default Authentication;
