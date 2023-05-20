import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SingUp from "../pages/singup/SingUp";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AddToy from "../pages/addToy/AddToy";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/addToy',
                element:<PrivateRoute><AddToy/></PrivateRoute>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/singup',
                element:<SingUp/>
            }
        ]
    }
])
export default router;