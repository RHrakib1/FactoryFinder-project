import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../../Firebase/Firebase.config';

export const createContextUser = createContext(null);

const Authentication = ({ children }) => {
    const [user, setuser] = useState(null);

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                return result; // Return the result so it can be used in the calling function
            })
            .catch(error => {
                console.log(error.message);
                throw error; // Rethrow the error to be handled in the calling function
            });
    };

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                return result; // Return the result so it can be used in the calling function
            })
            .catch(error => {
                console.log(error.message);
                throw error; // Rethrow the error to be handled in the calling function
            });
    };

    const logoutUser = () => {
        return signOut(auth); // Ensure this returns the promise as well
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, current => {
            setuser(current);
            console.log("Current user: ", current);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const dataShare = { registerUser, loginUser, logoutUser, user };
    return (
        <createContextUser.Provider value={dataShare}>
            {children}
        </createContextUser.Provider>
    );
};

export default Authentication;
