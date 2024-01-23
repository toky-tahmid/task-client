import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Home/Home";
import CountriesDetails from "../Layout/Countries/CountriesDetails";
import Error from "../Layout/Error/Error";
import Login from "../Layout/Login/Login";
import Register from "../Layout/Register/Register";
import Dashboard from "../DashBoard/Dashboard";


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
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }
      
      
    ],
  },
]);

export default router;
