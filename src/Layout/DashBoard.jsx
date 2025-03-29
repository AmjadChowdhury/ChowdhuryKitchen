import { FaAd, FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import {
  FaArrowRightFromBracket,
  FaBook,
  FaEnvelope,
  FaList,
  FaPaypal,
  FaUtensils,
} from "react-icons/fa6";
import { FaBackward } from "react-icons/fa";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import "./DashBoard.css";
import { useState } from "react";


const DashBoard = () => {
  const [openDash,setOpenDash] = useState(false)
  const [cart] = useCart();
  const { logOut } = useAuth();
  const [isAdmin] = useAdmin();
  console.log(isAdmin);
  const navigate = useNavigate()
  const location = useLocation()

  const handleOpendash = () => {
    setOpenDash(true)
  }

  const handleBackToDash = () => {
    setOpenDash(!openDash)
  }
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Log out");
        location.pathname = "/"
        navigate('/',{state: {from: location}})
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex h-screen">
      <div className={`${openDash ? 'hidden lg:block' : 'block'}  w-1/2 lg:w-1/6 bg-[#D1A054] min-h-screen overflow-hidden text-white flex flex-col justify-between`}>
        <div>
          <h2 className="ml-2 text-base flex justify-center gap-1 shadow-sm shadow-black rounded-lg mt-4 font-extrabold">
            <span className="text-black">Chowdhury{" ' "}s</span>Kitchen
          </h2>
          <ul className="menu">
            {isAdmin ? (
              <>
                <li onClick={handleOpendash}>
                  <NavLink to="/dashboard/adminHome">
                    <span className="flex gap-2 items-center"><FaHome/>Admin Home</span>
                  </NavLink>
                </li>
                <li onClick={handleOpendash}>
                  <NavLink to="/dashboard/addItems">
                  <span className="flex gap-2 items-center"><FaUtensils/>Add Items</span>
                  </NavLink>
                </li>
                <li onClick={handleOpendash}>
                  <NavLink to="/dashboard/manageItems">
                  <span className="flex gap-2 items-center"><FaList/>Manage Items</span>
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/dashboard/bookings">
                  <span className="flex gap-2 items-center"><FaBook/>Manage Bookings</span>
                  </NavLink>
                </li> */}
                <li onClick={handleOpendash}>
                  <NavLink to="/dashboard/users">
                  <span className="flex gap-2 items-center"><FaUser/> All Users</span>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li onClick={handleOpendash}>
                  <NavLink to="/dashboard/userHome">
                  <span className="flex gap-2 items-center"><FaHome/>User Home</span>
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/dashboard/reservation">
                  <span className="flex gap-2 items-center"><FaCalendar/>Reservation</span>
                  </NavLink>
                </li> */}
                <li onClick={handleOpendash}>
                  <NavLink to="/dashboard/payment">
                  <span className="flex gap-2 items-center"><FaPaypal/>Payment</span>
                  </NavLink>
                </li>
                <li onClick={handleOpendash}>
                  <NavLink to="/dashboard/cart">
                  <span className="flex gap-2 items-center"><FaShoppingCart/>My Cart ({cart.length})</span>
                  </NavLink>
                </li>
                <li onClick={handleOpendash}>
                  <NavLink to="/dashboard/review">
                  <span className="flex gap-2 items-center"><FaAd/>Add Review</span>
                  </NavLink>
                </li>
                <li onClick={handleOpendash}>
                  <NavLink to="/dashboard/paymentHistory">
                  <span className="flex gap-2 items-center"><FaBook/>Payment History</span>
                  </NavLink>
                </li>
              </>
            )}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaSearch></FaSearch>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/contact">
                <FaEnvelope></FaEnvelope>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          className="btn mx-4 my-4 bg-black text-[#D1A054] border-none hover:opacity-90 flex items-center gap-2 text-lg"
          onClick={handleLogOut}
        >
          <FaArrowRightFromBracket />
          <span>Logout</span>
        </div>
      </div>
      <div className={`w-1/2 lg:w-5/6 p-1 lg:p-8 flex-1 overflow-y-auto`}>
        <button className="btn block lg:hidden  mt-2 text-[#D1A054] hover:text-white hover:border-none bg-black hover:bg-[#D1A054]" onClick={handleBackToDash}><FaBackward  className="text-2xl"/></button>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
