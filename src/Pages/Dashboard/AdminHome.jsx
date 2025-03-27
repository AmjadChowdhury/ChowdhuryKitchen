import useAuth from '../../Hooks/useAuth'
import useAdmin from '../../Hooks/useAdmin'
const AdminHome = () => {
    const {user} = useAuth()
    const [isAdmin] = useAdmin()
    
    return (
        <div>
            <h1>Welcome, <span>
                {
                   isAdmin ? user?.displayName : 'back'
                }
                </span></h1>
        </div>
    );
};

export default AdminHome;