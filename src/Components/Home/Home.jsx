import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div>
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
        </div>
    );
};

export default Home;