import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { AppContext } from '../Root/Root';
import InstalledCard from './InstalledCard';
import { Link, useLoaderData } from 'react-router';
import { getInstalledApps } from '../../Utilities/localstorage';

const Installation = () => {
    const apps=useLoaderData();
    const [installed, setInstalled]=useContext(AppContext);
    const [sort, setSort]=useState('');

    useEffect(() => {
           
            const installedApps = getInstalledApps();
            // const convertedInstalledApps = installedApps.map(id => parseInt(id));
            const myInstallAppList = apps.filter(app => installedApps.includes(app.id));
            setInstalled(myInstallAppList);
        }, [apps])

    const handleSort=(type)=>{
        setSort(type);
        if(type==='High to Low'){
            const sortByHighToLow=[...installed].sort((a,b)=>b.downloads-a.downloads);
            setInstalled(sortByHighToLow);
        }
        if(type==='Low to High'){
            const sortByLowToHigh=[...installed].sort((a,b)=>a.downloads-b.downloads);
            setInstalled(sortByLowToHigh);
        }
    }
    
    
    return (
        <div className='py-10 lg:px-20 px-8 '>
          <div className='border-b-2 border-accent'>
              <div className='text-center py-4'>
                <h1 className='font-extrabold lg:text-5xl text-2xl '>Your Installed Apps</h1>
                <p className='italic text-lg py-4 text-gray-500'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='flex justify-between py-4 lg:px-8 px-4 items-center'>
                <div className='font-bold lg:text-2xl text-lg'><h1>({installed?.length}) Apps Found</h1></div>
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By Size: {sort? sort:''}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li ><a onClick={()=>handleSort('High to Low')}>High to Low</a></li>
                        <li onClick={()=>handleSort('Low to High')}><a>Low to High</a></li>
                    </ul>
                </div>
            </div>
          </div>
          <div className='py-4'>
            {
               installed.length>0? installed.map(card=><InstalledCard key={card.id} card={card}></InstalledCard>)
               : 
                <div className="col-span-4 text-center  py-10 space-y-4">
                        <div className='flex justify-center'>
                            <img src="https://i.ibb.co.com/TdKqq6V/App-Error.png" alt="" />
                        </div>
                        <h1 className="lg:text-5xl text-xl font-bold text-gray-500">
                            OPPS!! NO APPS INSTALLED
                        </h1>
                        <p>The App you are requesting is not installed.  please try to install apps first.</p>
                        <Link to={'/apps'} className='btn btn-lg btn-secondary text-white'>Go Back</Link>

                    </div>
                
            }
          </div>
        </div>
    );
};

export default Installation;