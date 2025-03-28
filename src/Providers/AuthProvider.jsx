import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const Authcontext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState('')
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,currentUser=> {
            setUser(currentUser)
            if(currentUser){
                //get token and store client...
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res => {
                    if(res.data.token){
                        setLoading(false)
                        localStorage.setItem('access_token',res.data.token)
                    }
                })
            }
            else{
                //TOdo: Remove token(if token stored in the client side: LS, caching, in memory)
                localStorage.removeItem('access_token')
                setLoading(false)
            }
            console.log('current',currentUser)
        })
        return () => {
            return unSubscribe()
        }
    },[axiosPublic])

    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (name,photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser,{
            displayName: name, photoURL: photo
        })
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut,
        updateUser
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