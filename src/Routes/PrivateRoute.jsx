
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";


const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth()
    const location = useLocation()
    
    if(loading){
        return <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;