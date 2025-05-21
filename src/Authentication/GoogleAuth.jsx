import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./googleAuthRoot";
import { useEffect } from "react";


 export const ContextNews = createContext(null)

const GoogleAuth = ({ children }) => {

    //Get user for useSteate
    const [user, setUser] = useState(null) 
    console.log(user)



    //fro google auth popup
    const googlePopup = (provider) => {
        return signInWithPopup(auth, provider)
    }

    //for github atuh popup
    const githubPopup = (provider) => {
        return signInWithPopup(auth, provider)

    }

    //create userCredential
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword( auth, email, password)
    }

    //log in exite user
    const loginUser = (email, password) => {
        return  signInWithEmailAndPassword(auth, email, password)
    }

    //log out user
    const logOut = () => {
        return signOut(auth)
    }

    //Get the currently signed-in user
    useEffect(() => {
       const unSuscribe = onAuthStateChanged(auth, (user) => {
            console.log(user)
            setUser(user)
        })
        return () => {
            unSuscribe()
        }

    } ,[])


    const name = 'raihan hossen';
    
    const data = {
        name,
        user,
        setUser, 
        googlePopup,
        githubPopup, 
        createUser, 
        loginUser, 
        logOut,
    }

    return (
        <ContextNews.Provider value={data}>
            {children}
        </ContextNews.Provider>
    );
};

export default GoogleAuth;