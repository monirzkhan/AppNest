import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div className='px-10'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;