import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";


const Main = () => {
    const location = useLocation()
    const isNavbarFootShow = location.pathname === '/login' || location.pathname === '/register'

    return (
        <div>
            {isNavbarFootShow || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isNavbarFootShow || <Footer></Footer>}
        </div>
    );
};

export default Main;