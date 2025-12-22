import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div >
            <nav className='w-full sticky top-0 z-50 bg-base-100'>
                <div className='w-11/12 mx-auto'>
                    <Navbar />
                </div>
            </nav>
            <main >
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;