import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import Error from "../Layout/Error/Error";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import Dashboard from "../DashBoard/Dashboard";
import AddHomes from "../DashBoard/AddHomes/AddHomes";
import AllHomes from "../DashBoard/AllHomes/AllHomes";
import HomesUpdate from "../DashBoard/AllHomes/HomesUpdate";
import HousesDetails from "../Layout/Houses/HousesDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://task-pro-server-psi.vercel.app/allData")
      },
      {
        path: "/houseDetails/:id",
        element: <HousesDetails></HousesDetails>,
        loader:({params})=>fetch(`https://task-pro-server-psi.vercel.app/allData/${params?.id}`)
        
      },
      
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
      
        path: "/dashboard/addHomes",
        element: <AddHomes></AddHomes>,
      
    },
      {
      
        path: "/dashboard/allHomes",
        element: <AllHomes></AllHomes>,
        // loader: () => fetch("https://task-pro-server-psi.vercel.app/allData")
      
    },
      {
      
        path: "/dashboard/homeUpdated/:id",
        element: <HomesUpdate></HomesUpdate>,
        // loader: () => fetch("https://task-pro-server-psi.vercel.app/allData")
        loader:({ params })=>fetch(`https://task-pro-server-psi.vercel.app/allData/${params?.id}`)
      
    },

  ]
  }

]);

export default router;
