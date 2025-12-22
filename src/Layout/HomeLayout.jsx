import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const HomeLayout = () => {

    return (
        <div>
            <nav className='w-full border-b sticky top-0 z-50 bg-base-100'>
                <div className='w-11/12 mx-auto'>
                    <Navbar />
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;