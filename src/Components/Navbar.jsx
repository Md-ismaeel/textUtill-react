import { NavLink, useLocation } from "react-router-dom";
import "../Components/Navbar.css";
import { dataContext } from "../Context/Context";
import { useContext, useEffect, useState } from "react";


export const Navbar = () => {

    const location = useLocation();
    const [activeLink, setActiveLink] = useState('');
    const { state, dispatch } = useContext(dataContext);
    console.log(state.isDarkMode);

    useEffect(() => {
        setActiveLink(location.pathname)
    }, [location])

    const toggleDarkMode = (e) => {
        dispatch({ type: 'isDarkMode', payload: !state.isDarkMode })

    }

    return (
        <div className={`w-full flex justify-between px-7 py-3 ${state.isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
            <ul className="w-1/2 flex justify-stat gap-5 items-center text-lg">

                <li className="text-2xl text-cyan-500">
                    <NavLink to="/">TextUtils
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/" className={activeLink === "/" ? 'text-yellow-400' : ""}>Home</NavLink>
                </li>

                <li>
                    <NavLink to="/about" className={activeLink === "/about" ? 'text-yellow-400' : ""}>About Us</NavLink>
                </li>

                <li>
                    <NavLink to="/contact" className={activeLink === "/contact" ? 'text-yellow-400' : ""}>contact Us</NavLink>
                </li>

            </ul>

            <div className="w-1/2 text-lg flex justify-end items-center">

                <div className="flex w-full justify-end items-center">
                    <label className="relative inline-block w-11 h-4 justify-center items-center mr-1">
                        <input
                            type="checkbox"
                            onChange={toggleDarkMode}
                            // checked={isDarkMode}
                            className="opacity-0 h-0 w-0" />
                        <span className="slider round"></span>
                        {/* <span className={`slider ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></span> */}
                    </label>
                    <span>Enable dark Mode</span>
                </div>
            </div>

        </div>
    );
} 