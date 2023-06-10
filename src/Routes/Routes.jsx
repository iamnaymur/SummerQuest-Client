import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import HomePage from "../Pages/HomePage";
import DashBoard from "../Layout/DashBoard";
import Instructors from "../Pages/Instructors";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Dashboard/Admin/ManageUsers";
import ManageClasses from "../Dashboard/Admin/ManageClasses";
import SelectedClasses from "../Dashboard/Student/SelectedClasses";
import EnrolledClasses from "../Dashboard/Student/EnrolledClasses";
import AddClass from "../Dashboard/Instructor/AddClass";
import MyClass from "../Dashboard/Instructor/MyClass";
import FeedBack from "../Dashboard/Admin/FeedBack";
import ApprovedClasses from "../Pages/ApprovedClasses";
import Payment from "../Dashboard/Student/Payment";
import PaymentHistory from "../Dashboard/Student/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage";
// import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/approvedClasses",
        element: <ApprovedClasses></ApprovedClasses>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      // admin dashboard
      {
        path: "/dashboard/manage-users",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      // student dashboard
      {
        path: "/dashboard/selected-classes",
        element: <SelectedClasses></SelectedClasses>,
      },
      {
        path: "/dashboard/enrolled-classes",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/classData/${params.id}`),
      },
      {
        path: "/dashboard/payment/payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      // instructor dashboard
      {
        path: "/dashboard/add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "/dashboard/my-class",
        element: <MyClass></MyClass>,
      },
      {
        path: "/dashboard/class/feedback/:id",
        element: <FeedBack></FeedBack>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/class/feedback/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
