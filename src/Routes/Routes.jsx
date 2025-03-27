import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItems from "../Pages/Dashboard/UpdateItems";
import Payment from "../Pages/Dashboard/Payment";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome";
import ErrorElement from "../Pages/ErrorElement/ErrorElement";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorElement/>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element: <Menu></Menu>
        },
        {
          path: "/order/:category",
          element: <Order></Order>
        },
        {
          path: "/login",
          element: <LogIn></LogIn>
        },
        {
          path: "/register",
          element: <Register></Register>
        }
      ]
    },
    {
      path: "dashboard",
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        {
          path: 'userHome',
          element: <UserHome/>
        },
        {
          path: "cart",
          element: <Cart></Cart>
        },
        {
          path: "payment",
          element: <Payment></Payment>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory/>
        },

        //admin route
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome/></AdminRoute>
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers/></AdminRoute>
        },
        {
          path: 'addItems',
          element: <AdminRoute><AddItems/></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems/></AdminRoute>
        },
        {
          path: `updateItem/:id`,
          element: <AdminRoute><UpdateItems/></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);