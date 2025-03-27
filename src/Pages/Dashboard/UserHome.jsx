import useAuth from "../../Hooks/useAuth";


const UserHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h1>Welcome, <span>
                {
                   user ? user?.displayName : 'back'
                }
                </span></h1>
        </div>
    );
};

export default UserHome;