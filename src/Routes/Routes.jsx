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



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: "cart",
          element: <Cart></Cart>
        }
      ]
    }
  ]);