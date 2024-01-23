import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import CountriesDetails from "../Layout/Countries/CountriesDetails";
import Error from "../Layout/Error/Error";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import Dashboard from "../DashBoard/Dashboard";
import AddHomes from "../DashBoard/AddHomes/AddHomes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/allData")
      },
      {
        path: "/countriesDetails/:id",
        element: <CountriesDetails></CountriesDetails>,
        loader:({params})=>fetch(`http://localhost:5000/countriesDetails/${params?.id}`)
      },
      {
        path: "/countriesDetails",
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
      
    }]
  }

]);

export default router;
