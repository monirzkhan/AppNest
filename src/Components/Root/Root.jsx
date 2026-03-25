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
                <div className="h-screen flex flex-col justify-center items-center gap-6">
                    <img
                        src="https://i.ibb.co.com/qSvMvkh/logo.png"
                        className="h-28 animate-spin"
                        alt="Loading"
                    />
                    <p className="text-3xl font-bold text-gray-600 tracking-wide">
                        Loading...
                    </p>
                </div>
            ) : (

                <AppContext.Provider value={[installed, setInstalled]}>
                    <Outlet />
                    <ToastContainer />
                </AppContext.Provider>

            )}

            <Footer />
        </div>
    );
};

export default Root;