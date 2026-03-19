import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='md:px-2 sm:px-2 '>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;