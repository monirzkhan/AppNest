import {React, createContext, useState} from 'react';
import Navbar from '../Header/Navbar';
import {Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

export const AppContext= createContext('');

const Root = () => {
    const navigation = useNavigation();
    const [installed, setInstalled]=useState([])

    return (
        <div className='md:px-2 sm:px-2 '>
            <Navbar />
            {navigation.state === "loading" ? (
                <div className="h-screen flex flex-col justify-center items-center gap-4">
                    <span className="loading loading-ring loading-lg text-secondary"></span>
                    <p className="text-2xl font-semibold text-gray-500">Loading Apps...</p>
                </div>
            ) : (
                <AppContext value={[installed, setInstalled]}>
                    <Outlet />
                    <ToastContainer />
                </AppContext>
            )}

            <Footer />
        </div>
    );
};

export default Root;