import { FacebookIcon, Instagram, Linkedin, Mail, X, Youtube } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer >
            <footer className="footer lg:px-15 sm:footer-horizontal md:footer-horizontal bg-secondary border-b-1 border-white text-white p-10">
                <nav className='w-80 lg:w-96 ' >
                    <div className='flex  items-center justify-around gap-2 '>
                        <img src="https://i.ibb.co.com/qSvMvkh/logo.png" alt="" className='h-16  lg:h-20' />
                        <h1 className='font-bold text-2xl lg:text-4xl '>AppNext</h1>
                    </div>
                    <div className=''>
                        <p className='text-justify '>
                            <b>AppNest</b> iis a smart platform to discover, explore, and install quality apps with ease. We offer a clean interface, fast performance, and trusted app listings. From productivity to entertainment, everything is in one place. Our focus is simplicity, security, and a smooth experience for every user. </p>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Useful Links</h6>
                    <a href='/' className="link link-hover">Home</a>
                    <a href='/apps 'className="link link-hover">Apps</a>
                    <a href='/installation' className="link link-hover">Installation</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form className=''>
                    <div>
                        <h6 className="footer-title">Newsletter</h6>
                        <fieldset className="w-80">
                            <label>Enter your email address</label>
                            <div className="join">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item" />
                                <button className="btn btn-primary join-item text-white">Subscribe</button>
                            </div>
                        </fieldset>
                        <div className='flex items-center py-4 space-x-4'>
                            <Link><FacebookIcon></FacebookIcon></Link>
                            <Link><Instagram></Instagram></Link>
                            <Link> <Linkedin></Linkedin></Link>
                            <Link><Youtube></Youtube></Link>
                            <Link><Mail></Mail></Link>


                        </div>
                    </div>
                </form>
            </footer>
            <footer className='footer sm:footer-horizontal md:footer-horizontal bg-secondary flex justify-center text-white p-10 "'>
                <p className='text-center'>@2026, AppNest-All Rights Reserved</p>
            </footer>


        </footer>

    );
};

export default Footer;