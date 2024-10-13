import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const link = <>
        <NavLink className='text-2xl font-bold ml-3' to='/'>Home</NavLink>
        <NavLink className='text-2xl font-bold ml-3' to='about'>About</NavLink>
        <NavLink className='text-2xl font-bold ml-3' to='/service'>Service</NavLink>
    </>;

    return (
        <div className="navbar bg-base-100 flex justify-between items-center">
            {/* নেভবারের শুরুতে FactoryFinder */}
            <a className="text-4xl font-bold">FactoryFinder</a>

            {/* বড় স্ক্রিনের জন্য লিংকগুলো */}
            <div className="hidden lg:flex items-center space-x-4">
                {link}
            </div>

            {/* ডান পাশে প্রোফাইল ছবি এবং লিংকগুলো */}
            <div className="flex items-center">
                {/* ছোট স্ক্রিনে Dropdown */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>

                {/* প্রোফাইল ছবি */}
                <div className="dropdown dropdown-end ml-4">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Profile"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
