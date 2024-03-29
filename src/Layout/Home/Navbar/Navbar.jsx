
import { Link } from "react-router-dom";

const NavBar = () => {
 

    const navOptions = <>
        <li className="text-xl font-semibold"><Link to="/">Home</Link></li>
        <li className="text-xl font-semibold"><Link to="/dashboard">DashBoard</Link></li>
        <li className="text-xl font-semibold"><Link to="/login">Login</Link></li>
        
    </>

    return (
        <>
            <div className="navbar bg-opacity-30 w-full bg-gray-200 text-black flex justify-center items-center">
    <div className="navbar-start">
        <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {navOptions}
            </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">House Sell & Buy</a>
    </div>
    <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {navOptions}
        </ul>
    </div>
</div>

        </>
    );
};

export default NavBar;