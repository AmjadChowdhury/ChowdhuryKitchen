import { useContext } from "react";
import { Authcontext } from "../Providers/AuthProvider";


const useAuth = () => {
    const userInfo = useContext(Authcontext)
    return userInfo;
};

export default useAuth;