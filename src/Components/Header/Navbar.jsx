import { Github, House, MonitorDown, Play } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/apps'}>Apps</NavLink></li>
                        <li><NavLink to={'/installation'}>Installation</NavLink></li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-2xl text-primary"><span>
                    <img src="/src/assets/logo.png" width={'30px'} alt="" />
                </span>AppNest</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-4 text-xl">
                    <li><NavLink to={'./'}><span><House></House></span>Home</NavLink></li>
                    <li><NavLink to={'/apps'}><Play></Play>Apps</NavLink></li>
                    <li><NavLink to={'/installation'}><MonitorDown></MonitorDown>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary text-white"><span><Github></Github></span>Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;