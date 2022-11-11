import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
import Register from "../../Pages/Register/Register";
import Slider from "../../Pages/Slider/Slider";
import Login from "../../Pages/Login/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Service from "../../Pages/Services/Service";
import ServiceCard from "../../Pages/Services/ServiceCard";
import Orders from "../../Pages/Orders/Orders";
import ExtraServices from "../../Pages/ExtraServices/ExtraServices";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <ServiceCard></ServiceCard>,
        loader: ({ params }) =>
          fetch(
            `https://anik-photography-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            {" "}
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/slider",
        element: <Slider></Slider>,
      },
      {
        path: "/extraServices",
        element: <ExtraServices></ExtraServices>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
