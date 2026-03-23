import React from 'react';
import { useContext } from 'react';

import { AppContext } from '../Root/Root';

const Installation = () => {
    const [installed, setInstalled]=useContext(AppContext)
    console.log(installed);
    
    return (
        <div className='py-10 lg:px-20 px-8 '>
          <div className='border-b-2 border-accent'>
              <div className='text-center py-4'>
                <h1 className='font-extrabold text-5xl '>Your Installed Apps</h1>
                <p className='italic text-lg py-4 text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between py-4 lg:px-8 px-4 items-center'>
                <div className='font-bold text-2xl'><h1>({installed.length}) Apps Found</h1></div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Size</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a>High to Low</a></li>
                        <li><a>Low to High</a></li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Installation;