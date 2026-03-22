import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet, useNavigate, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div className='md:px-2 sm:px-2 '>
            <Navbar />
            {navigation.state === "loading" ? (
                <div className="h-screen flex flex-col justify-center items-center gap-4">
                    <span className="loading loading-ring loading-lg text-secondary"></span>
                    <p className="text-2xl font-semibold text-gray-500">Loading Apps...</p>
                </div>
            ) : (
                <Outlet />
            )}

            <Footer />
        </div>
    );
};

export default Root;