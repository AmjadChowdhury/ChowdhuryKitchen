import { FaAd, FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaBook, FaCalendar, FaEnvelope, FaList, FaPaypal, FaUtensils } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {
  const [cart] = useCart()
  const [isAdmin] = useAdmin()
  console.log(isAdmin)
  return (
    <div className="flex">
      <div className="w-1/6 bg-yellow-600 min-h-screen text-white">
        <ul className="menu">
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              <FaUtensils></FaUtensils>
              Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaList></FaList>
              Manage Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaBook></FaBook>
              Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
              <FaUser></FaUser>
              All Users
            </NavLink>
          </li>
            </> :
            <>
            <li>
            <NavLink to="/dashboard/home">
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
              <FaPaypal></FaPaypal>
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaBook></FaBook>
              My Booking
            </NavLink>
          </li>
            </>
          }
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
            <NavLink to="/contact">
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="w-5/6 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
