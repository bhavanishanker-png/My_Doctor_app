import React, { useContext, useState } from "react";
import { assets } from "../assets/assets_frontend/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/Context";

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(AppContext);
    

    return (
        <div className="flex items-center justify-between text-sm py-4 px-6 md:px-12 border-b border-gray-300 shadow-sm">

            <img className="w-36 cursor-pointer" src={assets.logo} alt="Logo" onClick={() => navigate('/')} />


            <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                {['/', '/doctors', '/about', '/contact'].map((path, index) => (
                    <NavLink to={path} key={index} className="relative group">
                        <li className=" hidden:block py-1">{path.slice(1).toUpperCase() || 'HOME'}</li>
                        <hr className="border-none outline-none  h-0.5 bg-blue-500 w-3/5 m-auto hidden"></hr>
                    </NavLink>
                ))}
            </ul>

            <button onClick={() => setShowMenu(!showMenu)} className="md:hidden text-gray-700 focus:outline-none z-10">
                <img className="w-6" src={assets.menu_icon} alt="Menu" />
            </button>

            {showMenu && (
                <ul className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-b-lg p-6 md:hidden flex flex-col gap-6 font-medium">
                    {['/', '/doctors', '/about', '/contact'].map((path, index) => (
                        <NavLink to={path} key={index} onClick={() => setShowMenu(false)}>
                            <li className="py-1 text-center text-gray-700 hover:text-blue-500">{path.slice(1).toUpperCase() || 'HOME'}</li>
                        </NavLink>
                    ))}
                </ul>
            )}


            <div className="flex items-center gap-4">
                {isAuthenticated ? (
                    <div className="relative group cursor-pointer flex items-center gap-2">
                        <img className="w-8 h-8 rounded-full shadow-md" src={assets.profile_pic} alt="Profile" />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />

                        <div className="absolute right-0 w-48 bg-white rounded-lg shadow-lg hidden group-hover:flex flex-col gap-3 p-4">
                            <p className="text-gray-600 hover:text-blue-500 cursor-pointer" onClick={() => navigate("my-profile")}>My Profile</p>
                            <p className="text-gray-600 hover:text-blue-500 cursor-pointer" onClick={() => navigate("my-appointments")}>My Appointments</p>
                            <p
                                className="text-gray-600 hover:text-blue-500 cursor-pointer"
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    setIsAuthenticated(false)
                
                                    navigate("/login");
                                }}
                            >
                                Logout
                            </p>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate("login")} className="bg-primary text-white px-6 py-2 rounded-full font-light shadow hover:bg-blue-600 transition duration-300 hidden md:block">
                        Create Account
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
