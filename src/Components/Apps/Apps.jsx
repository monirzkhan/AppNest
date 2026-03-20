import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../AppCard/AppCard';

const Apps = () => {
    const appData = useLoaderData();
    return (
        <div>
            <div className='text-center py-10'>
                <h1 className='font-extrabold text-5xl '>Our All Applications</h1>
                <p className='italic text-lg py-4 text-gray-500'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex justify-between py-4 px-20'>
                <div className='font-bold text-2xl'><h1>({appData.length}) Apps Found</h1></div>
                <div>
                    <label className="input">
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
                        <input type="search" required placeholder="Search Apps" />
                    </label>
                </div>
            </div>
            <div className='grid lg:grid-cols-4  gap-8 w-11/12 mx-auto'>
                {
                    appData.map(app => < AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default Apps;