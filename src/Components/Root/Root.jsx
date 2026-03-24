import { React, createContext, useState } from 'react';
import Navbar from '../Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import { ToastContainer } from 'react-toastify';

export const AppContext = createContext('');

const Root = () => {
    const navigation = useNavigation();
    const [installed, setInstalled] = useState([])

    return (
        <div className='md:px-2 sm:px-2 '>
            <Navbar />
            {navigation.state === "loading" ? (
                <div className="h-screen flex  justify-center items-center gap-6">
                    <img src="/src/assets/logo.png" className="h-32 animate-spin"
                        alt="Loading" />
                    <p className="text-6xl font-Extrabold text-gray-600 tracking-wide">Loading...</p>
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