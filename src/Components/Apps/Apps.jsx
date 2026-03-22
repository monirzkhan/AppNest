import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../AppCard/AppCard';
import { Link } from 'react-router';

const Apps = () => {
    const appData = useLoaderData();
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (e) => {
        e.preventDefault();
    }

    const handleOnChange = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    }

    const filteredApps = appData.filter(app =>
        app.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        app.companyName.toLowerCase().includes(searchValue.toLowerCase())
    );
   
    return (
        <div>
            <div className='text-center py-10'>
                <h1 className='font-extrabold text-5xl '>Our All Applications</h1>
                <p className='italic text-lg py-4 text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between py-4 px-20'>
                <div className='font-bold text-2xl'><h1>({filteredApps.length}) Apps Found</h1></div>
                <div>
                    <form onSubmit={handleSearch} className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" name='search' defaultValue={searchValue} onChange={handleOnChange} placeholder="Search Apps" />
                    </form>

                </div>
            </div>
            <div className='grid lg:grid-cols-4  gap-8 w-11/12 mx-auto'>
                {filteredApps.length > 0 ?
                    filteredApps.map(app => < AppCard key={app.id} app={app}></AppCard>)
                    :
                    <div className="col-span-4 text-center  py-10 space-y-4">
                        <div className='flex justify-center'>
                            <img src="/src/assets/App-Error.png" alt="" />
                        </div>
                        <h1 className="text-5xl font-bold text-gray-500">
                            OPPS!! APP NOT FOUND
                        </h1>
                        <p>The App you are requesting is not found on our system.  please try another apps</p>
                        <Link to={'/'} className='btn btn-lg btn-secondary text-white'>Go Back</Link>

                    </div>
                }
            </div>
        </div>
    );
};

export default Apps;