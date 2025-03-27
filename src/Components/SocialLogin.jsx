
import useAuth from '../Hooks/useAuth'
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const SocialLogin = () => {
    const {googleSignIn} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                name: result.user.displayName,
                email: result.user.email
            }
            axiosPublic.post('/users',userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/')
            })
        })
    }
    return (
        <div>
            <div className='flex justify-center'>
                <button onClick={handleGoogleSignIn} className="text-2xl">
                    <FcGoogle/>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;