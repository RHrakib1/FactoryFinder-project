
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { createContextUser } from '../Authentication/Authentication';
const Navbar = () => {
    const { user, logoutUser, newprofile } = useContext(createContextUser)
    console.log('console hbe hooooooooooolllllllllooooooooooo:;;;;;', user);

    const hendlelogoutuser = () => {
        logoutUser()
    }
    const linkClass = 'text-2xl font-bold ml-3';

    const link =
        <>
            <NavLink className={({ isActive }) => isActive ? `${linkClass} text-green-500` : linkClass} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${linkClass} text-green-500` : linkClass} to='about'>About</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${linkClass} text-green-500` : linkClass} to='/service'>Service</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${linkClass} text-green-500` : linkClass} to='/contact'>Contact</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${linkClass} text-green-500` : linkClass} to='/profile'>Update Profile</NavLink>
        </>
    return (
        <div className="navbar bg-base-100 flex justify-between items-center">
            <a className="lg:text-4xl text-xl font-bold">FactoryFinder</a>
            <div className="hidden lg:flex items-center space-x-4">
                {link}
            </div>
            <div className="flex items-center">
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
                <div className="dropdown dropdown-end ml-4">

                    {
                        user ? <>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Profile"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div></> :
                            <>
                                <NavLink to='/login'><button className='btn btn-ghost text-xl'>Login</button></NavLink>
                            </>
                    }

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                {user?.displayName || 'this is found'}
                            </a>
                        </li>
                        <button onClick={hendlelogoutuser}><li><a>Logout</a></li></button>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Navbar;