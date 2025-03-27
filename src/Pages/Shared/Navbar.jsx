import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Providers/AuthProvider";
import userProfile from "../../assets/others/profile.png";
import Swal from "sweetalert2";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";

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
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>

      <li>
        <NavLink to="/order/salad">Order</NavLink>
      </li>

      <li>
        <NavLink to="/login">LogIn</NavLink>
      </li>

      <li>
        <NavLink to="/register">Register</NavLink>
      </li>

      <li>
        {isAdmin ? (
          <NavLink to="Dashboard/adminHome">Dashboard</NavLink>
        ) : (
          <NavLink to="Dashboard/userHome">Dashboard</NavLink>
        )}
      </li>
      <li>
        <NavLink to="/dashboard">
          <div className="flex items-center rounded-lg gap-1 p-1 bg-black">
            <FaCartShopping/>
            <p className="badge badge-secondary">{cart.length}</p>
          </div>
        </NavLink>
      </li>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">ChowdhuryKitchen</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src={`${user ? user?.photoURL : userProfile}`} />
          </div>
        </div>
        <div>
          {user ? (
            <button className="btn" onClick={handleLogOut}>
              logout
            </button>
          ) : (
            <Link to="/login">
              <button className="btn">Log In</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
