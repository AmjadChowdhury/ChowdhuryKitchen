import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Providers/AuthProvider";
import userProfile from "../../assets/others/profile.png";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";
import './Navbar.css'


const Navbar = () => {
  const { user, logOut } = useContext(Authcontext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: `LogOut successfully`,
        });
      })
      .catch((error) => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "error",
          title: `${error.message}`,
        });
      });
  };
  const navItems = (
    <>
    
        <NavLink to="/"><li className="text-xs mx-3 border-none lg:text-sm font-bold mb-2 lg:mb-0">Home</li></NavLink>
      

  
        <NavLink to="/menu"><li className="text-xs mx-3 border-none lg:text-sm  font-bold mb-2 lg:mb-0">Our Menu</li></NavLink>
      

     
        <NavLink to="/order/salad"><li className="text-xs mx-3 border-none lg:text-sm  font-bold mb-2 lg:mb-0">Order</li></NavLink>
     

     
        <NavLink to="/login"><li className="text-xs mx-3 border-none lg:text-sm  font-bold mb-2 lg:mb-0">Login</li></NavLink>
     

        {/*       
        <NavLink to="/register"><li className="text-xs mx-3 border-none lg:text-sm  font-bold mb-2 lg:mb-0">Sign Up</li></NavLink> */}
     

    
        {isAdmin ? (
          <NavLink to="Dashboard/adminHome"><li className="text-xs mx-3 border-none lg:text-sm  font-bold mb-2 lg:mb-0">Dashboard</li></NavLink>
        ) : (
          <NavLink to="Dashboard/userHome"><li className="text-xs mx-3 border-none lg:text-sm  font-bold mb-2 lg:mb-0">Dashboard</li></NavLink>
        )}
     
      
        <NavLink to="/dashboard/cart">
        <li className="text-xs lg:mx-3 border-none lg:text-sm  font-bold mb-2 lg:mb-0">
            <p className="-mt-2 px-2 border-2  border-white  flex justify-start"><FaCartShopping className="text-lg"/><span className="badge badge-secondary">{cart.length}</span></p>
          </li>
        </NavLink>
    
    </>
  );
  return (
    <div className="navbar fixed z-10  text-white bg-[#D1A054]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#D1A054]"
          >
            {navItems}
          </ul>
        </div>
        <a className=" text-white text-base font-extrabold shadow-sm shadow-black rounded-lg px-1"><span className="text-black">Chowdhury{" ' "}s</span> Kitchen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{navItems}</ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to="/dashboard/userHome" className="avatar">
          <div className="w-12 h-12 rounded-full border-2">
            <img src={`${user ? user?.photoURL : userProfile}`} />
          </div>
        </Link>
        <div>
          {user ? (
            <button className="btn text-xs font-bold text-[#D1A054]
               hover:text-[#D1A054] border-2 border-gray-100  bg-black hover:bg-black" onClick={handleLogOut}>
              logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn text-xs font-bold text-[#D1A054]
               hover:text-[#D1A054] border-2 border-gray-100  bg-black hover:bg-black">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
