import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaCalendar, FaEnvelope, FaPaypal } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart()
  return (
    <div className="flex">
      <div className="w-1/6 bg-orange-600 min-h-screen text-white">
        <ul className="menu">
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
