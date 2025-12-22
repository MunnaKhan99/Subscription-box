import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router"; // Changed to react-router-dom
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { AuthContext } from "../provider/AuthProvider";
import userIcon from "../assets/react.svg";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    // Helper to close mobile menu when a link is clicked
    const handleLinkClick = () => setOpen(false);

    // Standardized active link styles
    const navLinkStyles = ({ isActive }) =>
        `transition-colors duration-200 font-medium ${
            isActive ? "text-primary border-b-2 border-primary" : "text-gray-600 hover:text-primary"
        }`;

    return (
        <nav className="relative z-50 bg-white shadow-sm px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
                
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-primary italic">
                    TheCrate
                </Link>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8">
                    <li>
                        <NavLink to="/" className={navLinkStyles}>Home</NavLink>
                    </li>
                    {user && (
                        <>
                            <li>
                                <NavLink to="/profile" className={navLinkStyles}>My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/subscription" className={navLinkStyles}>My Subscriptions</NavLink>
                            </li>
                        </>
                    )}
                </ul>

                {/* Right Side Action Area */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <div className="relative group pt-1">
                            <div className="flex items-center gap-2 cursor-pointer">
                                <span className="hidden lg:block text-sm font-medium text-gray-700">
                                    {user.displayName || "User"}
                                </span>
                                <img
                                    src={user.photoURL || userIcon}
                                    alt="User Profile"
                                    className="w-9 h-9 rounded-full border-2 border-primary/20 object-cover"
                                />
                            </div>

                            {/* Hover Dropdown with a "bridge" to prevent accidental closing */}
                            <div className="absolute right-0 top-full pt-2 hidden group-hover:block w-40">
                                <div className="bg-white shadow-xl rounded-lg border border-gray-100 py-2">
                                    <button
                                        onClick={logOut}
                                        className="px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 w-full text-left transition-colors"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Link
                            to="/auth/login"
                            className="text-white bg-primary hover:bg-primary/90 px-6 py-2 rounded-lg font-semibold transition-all shadow-md active:scale-95"
                        >
                            Login
                        </Link>
                    )}

                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle Menu"
                    >
                        {open ? <RxCross2 size={26} /> : <RxHamburgerMenu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Slide-down */}
            {open && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b shadow-lg p-5 space-y-4 animate-in fade-in slide-in-from-top-2">
                    <NavLink to="/" onClick={handleLinkClick} className="block text-gray-700 font-medium">
                        Home
                    </NavLink>

                    {user ? (
                        <>
                            <NavLink to="/profile" onClick={handleLinkClick} className="block text-gray-700 font-medium">
                                My Profile
                            </NavLink>
                            <NavLink to="/subscription" onClick={handleLinkClick} className="block text-gray-700 font-medium">
                                My Subscriptions
                            </NavLink>
                            <hr className="border-gray-100" />
                            <button
                                onClick={() => { logOut(); handleLinkClick(); }}
                                className="block w-full text-left text-red-500 font-semibold"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/auth/login" onClick={handleLinkClick} className="block text-primary font-bold">
                            Login
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;