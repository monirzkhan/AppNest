import { Download, Star, ThumbsUp } from 'lucide-react';
import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { AppContext } from '../Root/Root';
import { toast } from 'react-toastify';
import { addAppToLS, getInstalledApps } from '../../Utilities/localstorage';

const AppDetails = () => {
    const [installed, setInstalled] = useContext(AppContext)
    const appDetailsData = useLoaderData();

    const { id, title, image, description, downloads, reviews, ratingAvg, companyName, size, ratings } = appDetailsData;
    const isAlreadyInstalled = installed.some(installed => installed.id === id);

    const barData = [...ratings].reverse()

    useEffect(() => {

        const installedAppsIds = getInstalledApps();
           if (installedAppsIds.includes(id)) {
            setInstalled(prev => {
                const exists = prev.some(app => app.id === id);
                if (!exists) {
                    return [...prev, appDetailsData];
                }
                return prev;
            });
        }
        

    }, [appDetailsData])

    const handleInstall = (installData) => {
        if (isAlreadyInstalled) {
            toast.error("Already Installed!");
            return;
        }

        setInstalled(prev => [...prev, installData]);

        addAppToLS(installData.id);
        toast.success(`Wow!!! ${title} App Installed Successfully`);
    }

    return (
        <div className='py-10 sm:px-10 px-4'>
            <div className='sm:flex justify-center border-b-1 border-accent pb-8   '>
                <div className='py-8 px-20 sm:py-8 sm:px-4'>
                    <img src={image} className='lg:h-48 md:h-30 shadow-2xl rounded-box' alt="" />
                </div>

                <div>
                    <div className='border-b-2 border-accent ml-20 pb-4'>
                        <h1 className='font-bold text-2xl'>{title}</h1>
                        <p><span className='font-semibold mb-4'>Developed By</span> <span className='italic text-xl text-primary'>{companyName}</span></p>
                    </div>
                    <div>
                        <div className=' flex justify-center'>
                            <div className="stats md:stats-horizontal lg:stats-horizontal my-8 text-center  lg:px-20 ">

                                <div className="stat">
                                    <div className="stat-figure  flex justify-center items-center ">

                                        <div className='space-y-2 '>
                                            <Download className='size-8 ml-7'></Download>
                                            <div className="stat-title text-xl"> Downloads</div>
                                            <div className="stat-value"><p>
                                                {new Intl.NumberFormat('en-US', {
                                                    notation: 'compact',
                                                }).format(downloads)}
                                            </p></div>

                                        </div>


                                    </div>


                                </div>

                                <div className="stat">
                                    <div className="stat-figure  flex justify-center items-center ">

                                        <div className='space-y-2 '>
                                            <Star className='size-8 ml-10'></Star>
                                            <div className="stat-title text-xl"> Total Reviews</div>
                                            <div className="stat-value"><p>
                                                {new Intl.NumberFormat('en-US', {
                                                    notation: 'compact',
                                                }).format(reviews)}
                                            </p></div>

                                        </div>


                                    </div>
                                </div>

                                <div className="stat">
                                    <div className="stat-figure  flex justify-center items-center">

                                        <div className='space-y-2'>
                                            <ThumbsUp className='size-8 ml-14'></ThumbsUp>

                                            <div className="stat-title text-xl "> Average Ratings</div>
                                            <div className="stat-value">{ratingAvg}</div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-20'>
                        <Link onClick={() => handleInstall(appDetailsData)}

                            className='btn shadow-xl hover:shadow-2xl sm:btn-xl skeleton bg-secondary
                         btn-secondary text-white'
                            disabled={isAlreadyInstalled}>
                            {
                                isAlreadyInstalled
                                    ? 'Installed'
                                    : `Install Now (${size}MB)`
                            }
                        </Link>
                    </div>
                </div>

            </div>
            <div className='border-b-1 border-accent pb-8'>
                <h1 className='font-bold text-4xl py-4'>Ratings</h1>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={barData}
                        layout="vertical"
                        margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" />
                        <Tooltip />
                        <Legend />

                        <Bar dataKey="count" fill="#10b981" radius={[0, 6, 6, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div>

                <h1 className='font-bold text-4xl py-4 '>Description</h1>
                <p className='text-justify'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;