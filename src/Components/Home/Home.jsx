import { Download, Play, Star } from 'lucide-react';
import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../AppCard/AppCard';


const Home = () => {
    const appData = useLoaderData();

    return (
        <div>
            {/* Apps Banner  */}
            <div className="hero bg-base-200 px-2 pt-20">
                <div className="hero-content text-center">
                    <div className="">
                        <div className=''>
                            <h1 className="text-5xl font-bold">We Build <br /><span className='text-secondary'>Productive</span> Apps</h1>
                            <p className="py-6 italic sm:mx-10 md:mx-20 mx-2">
                                At AppNest , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact
                            </p>
                        </div>
                        <div className='flex gap-4 justify-center py-6'>
                            <Link to={'https://play.google.com/store/games?hl=en'} target='blank'>
                                <button className="btn md:text-xl text-white btn-secondary sm:px-4 sm:py-4 md:px-6 md:py-6">
                                    <img width={'40px'} src="https://img.icons8.com/?size=96&id=rZwnRdJyYqRi&format=png" alt="" />Google Play</button>
                            </Link>
                            <Link to={'https://www.apple.com/app-store/'} target='blank'>
                                <button className="btn md:text-xl text-white btn-secondary sm:px-4 sm:py-4 md:px-6 md:py-6">
                                    <img width={'40px'} src="https://img.icons8.com/?size=160&id=FY7tVsFoeON4&format=png" alt="" />App Store</button>
                            </Link>

                        </div>
                        <div className='flex justify-center pt-20 -mb-4'>
                            <img src="/src/assets/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* States */}
            <div className=' lg:py-10 py-4 bg-secondary '>
                <h1 className=' text-xl lg:text-4xl  text-white text-center font-bold'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-center'>
                    <div className="stats stats-vertical lg:stats-horizontal my-8 text-center  lg:px-20 ">

                        <div className="stat">
                            <div className="stat-figure  flex justify-center items-center text-white">

                                <div className=''>
                                    <div className="stat-title"> Total Downloads</div>
                                    <div className="stat-value">29.9M</div>
                                    <div className="stat-desc">21% more than last month</div>
                                </div>
                                <Download />

                            </div>


                        </div>

                        <div className="stat">
                            <div className="stat-figure  flex justify-center items-center text-white ">

                                <div className=''>
                                    <div className="stat-title"> Total Reviews</div>
                                    <div className="stat-value">906K</div>
                                    <div className="stat-desc">46% more than last month</div>
                                </div>

                                <Star />
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure  flex justify-center items-center text-white">

                                <div className=''>
                                    <div className="stat-title"> Active Apps</div>
                                    <div className="stat-value">132+</div>
                                    <div className="stat-desc">31 more will Launch</div>
                                </div>

                                <Play />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trending Apps  */}
           <div className='bg-base-800'>
             <div className='text-center py-10'>
                <h1 className='font-bold text-4xl '>Trending Apps</h1>
                <p className='italic text-lg py-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid lg:grid-cols-4  gap-8 w-11/12 mx-auto'>
                {
                    appData.slice(0,8).map(app=><AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
           </div>
        </div>
    );
};

export default Home;