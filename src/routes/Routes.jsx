import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SingUp from "../pages/singup/SingUp";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AddToy from "../pages/addToy/AddToy";
import PrivateRoute from "./PrivateRoute";
import AllToy from "../pages/allToy/AllToy";
import Toy from "../pages/allToy/Toy";
import MyToys from "../pages/myToy/MyToys";
import UpdateToy from "../pages/myToy/UpdateToy";
import Blogs from "../pages/blogs/Blogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: "/myToy",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/allToy",
        element: <AllToy />,
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "/toys/:id",
        element: (
          <PrivateRoute>
            <Toy />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/toys/${params.id}`
          ),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy />,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/toys/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
export default router;
