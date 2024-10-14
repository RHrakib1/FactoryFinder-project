import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

export const createContextUser = createContext(null);

const Authentication = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loadding, setlodding] = useState(true)
    console.log(loadding);

    // googleauthentication
    const googleProvider = new GoogleAuthProvider
    const googleauthentication = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })

    }
    // github authwentication 
    const githubProvider = new GithubAuthProvider()
    const githubauthentication = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const registerUser = (email, password) => {
        setlodding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginUser = (email, password) => {
        setlodding(true)
        return signInWithEmailAndPassword(auth, email, password)

    };

    const logoutUser = () => {
        setlodding(true)
        return signOut(auth);
    };
    const newprofile = () => {
        updateProfile(auth.currentUser, {
            displayName: 'Jane Q. user', photoURL: 'https://lh3.googleusercontent.com/a/ACg8ocJ_6dYQQu06F3_AVUsYzWZmQpIIIBEYffV2SaWDw99A5QDN6y-a=s288-c-no'
        })

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, current => {

            setuser(current);
            setlodding(false)

            console.log("Current user: ", current);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const dataShare = {
        registerUser,
        loginUser,
        logoutUser,
        newprofile,
        googleauthentication,
        githubauthentication,
        user,
        loadding
    };
    return (
        <createContextUser.Provider value={dataShare}>
            {children}
        </createContextUser.Provider>
    );
};

export default Authentication;
