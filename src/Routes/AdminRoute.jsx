import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading ] = useAdmin()
    const {user,loading} = useAuth()
    const location = useLocation()

    if(loading || isAdminLoading){
        return <div className="flex w-full flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate to="/login" state={{from: location}}></Navigate>
};

AdminRoute.propTypes = {
    children: PropTypes.node
}

export default AdminRoute;