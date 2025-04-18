import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://chowdhury-kitchen-server.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()
    // request interceptors to add authorization header for every secure call to API..
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access_token')
        console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function(error){
        return Promise.reject(error)
    })

    // intercepts 401 and 403 status...
    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async (error) => {
        const status = error.response.status
        if(status === 401 || status === 403){
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error);
      });


    return axiosSecure
};

export default useAxiosSecure;