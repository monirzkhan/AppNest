import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='py-20'>
            <div className=' flex justify-center'>
            <img src="https://i.ibb.co.com/YBGR1F8G/error-404.png" className='shadow-2xl p-4 hover:scale-105 transition-all duration-500 hover:-rotate-2' alt="" />
           
        </div>
         <div className='text-center py-10 flex justify-center gap-2'>
            <Link to={'/'} className='btn btn-secondary text-white'>Go Home</Link>
            <Link to={'/apps'} className='btn btn-secondary text-white'>Browse Apps</Link>
         </div>
        </div>
    );
};

export default ErrorPage;