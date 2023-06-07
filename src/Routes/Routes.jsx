import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Banner from "../Home/Banner";
import Login from '../Pages/Login'
import Registration from "../Pages/Registration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Registration></Registration>
      }

    ],
  },
]);
