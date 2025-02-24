import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/Firebase.config";

export const Authcontext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser=> {
            setUser(currentUser)
            setLoading(false)
            console.log('current',currentUser)
        })
        return () => {
            return unSubscribe()
        }
    },[])

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;