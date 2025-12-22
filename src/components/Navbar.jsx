import React, { useState } from 'react';
import userProfile from "../../src/assets/react.svg"
import { NavLink } from 'react-router';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { IoExitOutline } from "react-icons/io5";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const links = (
        <ul className="flex gap-6">
            <li>
                <NavLink to="/" className="text-secondary">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile" className="text-secondary">
                    My Profile
                </NavLink>
            </li>
            <li>
                <NavLink to="/subscription" className="text-secondary">
                    My Subscriptions
                </NavLink>
            </li>
        </ul>
    );

    return (
        <div className='relative'>
            <div className='flex items-center justify-between h-16'>
                <div>
                    <h3 className='text-xl font-bold text-[#E17100]'>TheCrate</h3>
                </div>
                <div className='hidden md:flex'>
                    {links}
                </div>
                <div className='hidden md:flex'>
                    <img
                        src={userProfile}
                        alt=""
                        className='w-9 h-9 rounded-full border border-primary'
                    />
                </div>

                <div className='md:hidden'>
                    <button
                        onClick={() => setOpen(!open)}
                    >
                        {
                            open ? < RxCross2 size={30} />

                                : <RxHamburgerMenu size={30} />

                        }
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden mt-4 bg-white rounded-lg shadow p-4 space-y-4">
                    {/* Links */}
                    <div className="space-y-2">
                        <NavLink className="text-secondary block px-3 py-2 rounded bg-base-200 ">
                            Home
                        </NavLink>
                        <NavLink className="block px-3 py-2 text-secondary">
                            My Profile
                        </NavLink>
                        <NavLink className="block px-3 py-2 text-secondary">
                            My Subscriptions
                        </NavLink>
                    </div>

                    {/* User info */}
                    <div className="flex items-center gap-3 pt-4 ">
                        <img
                            src={userProfile}
                            className="w-10 h-10 rounded-full border"
                        />
                        <div>
                            <p className="font-medium">Google User</p>
                            <p className="text-sm text-gray-500">user@gmail.com</p>
                        </div>
                    </div>

                    {/* Logout */}
                    <button className="w-full mt-3 py-2 bg-base-200 rounded">
                        Logout
                    </button>
                </div>
            )}

        </div>
    );
};

export default Navbar;