import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivetRout from "./PrivetRout";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "book/:id",
        element: <BookService />,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element: (
          <PrivetRout>
            <Bookings />,
          </PrivetRout>
        ),
      },
    ],
  },
]);

export default Routes;
