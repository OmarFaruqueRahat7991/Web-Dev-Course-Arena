import React, { createContext, useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const [loading,setLoading] = useState(true);


    const providerLogIn = (provider) => {
        return signInWithPopup(auth,provider);
    }

    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const logInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('inside auth state changed', currentUser);
            // if(currentUser === null || currentUser.emailVerified){
            // }
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }
    ,[])


   

    const authInfo = { user, providerLogIn , logOut , createUser,logInUser,loading};


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;