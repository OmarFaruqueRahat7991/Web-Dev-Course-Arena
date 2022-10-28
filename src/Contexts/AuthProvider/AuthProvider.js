import React, { createContext, useEffect, useState } from 'react';
import {  getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.config';



export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);


    const providerLogIn = (provider) => {
        return signInWithPopup(auth,provider);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log('inside auth state changed', currentUser);
            // if(currentUser === null || currentUser.emailVerified){
            // }
            setUser(currentUser);
            // setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }
    ,[])


   

    const authInfo = { user, providerLogIn};


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;