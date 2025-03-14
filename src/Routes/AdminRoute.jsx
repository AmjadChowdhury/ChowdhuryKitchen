import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading ] = useAdmin()
    const {user,loading} = useAuth()
    const location = useLocation()

    if(loading || isAdminLoading){
        return <progress className="progress w-56"></progress>
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