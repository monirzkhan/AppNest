import { Download,  Star, ThumbsUp } from 'lucide-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AppDetails = () => {
    const appDetailsData = useLoaderData();

    const { title, image, description, downloads,reviews,ratingAvg, companyName,size } = appDetailsData;
    return (
        <div className='py-10'>
            <div className='flex justify-center '>
                <div>
                    <img src={image} className='h-48 shadow-2xl rounded-box' alt="" />
                </div>

                <div>
                    <div className='border-b-2 border-accent ml-20 pb-4'>
                        <h1 className='font-bold text-2xl'>{title}</h1>
                        <p><span className='font-semibold mb-4'>Developed By</span> <span className='italic text-xl text-primary'>{companyName}</span></p>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <div className="stats stats-vertical lg:stats-horizontal my-8 text-center  lg:px-20 ">

                                <div className="stat">
                                    <div className="stat-figure  flex justify-center items-center ">

                                        <div className='space-y-2'>
                                            <Download className='size-8 ml-6'></Download>
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

                                        <div className='space-y-2'>
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
                                            <ThumbsUp className='size-8 ml-12'></ThumbsUp>
                                            
                                            <div className="stat-title text-xl "> Average Ratings</div>
                                            <div className="stat-value">{ratingAvg}</div>
                                            
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-20'>
                        <Link className=' btn shadow-xl hover:shadow-2xl btn-xl skeleton bg-secondary btn-secondary text-white'>Install Now <span>({size}MB)</span></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDetails;