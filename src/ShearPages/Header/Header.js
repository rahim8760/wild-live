import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import logo from '../../logo192.png'
const Header = () => {
    const {user, logOut, emailUser }=useContext(AuthContext)
    const handleLogOut= () =>{
        logOut()
    }
    const menuItems=<>
        <li><Link className='font-semibold' to='/home'>Home</Link></li>
        <li><Link className='font-semibold' to='/about'>About</Link></li>
        <li><Link className='font-semibold' to='/service'>Services</Link></li>
        <li><Link className='font-semibold' to='/blog'>Blog</Link></li>
        <>
            {
                user?.uid? 
                <>

                <li><Link className='font-semibold' to='/myreviews'>My Review</Link></li>
                <li><Link className='font-semibold' to='/login' onClick={handleLogOut}>Logout</Link></li>
                </>:
                <>
                <li><Link className='font-semibold' to='/login'>Login</Link></li>
                </>
            }
        </>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItems}
                </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Wild-Live</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex'>
                    {
                        user?.photoURL?<img title='name' className='w-5 h-5 mr-5' src={logo} alt="Something wrong" />:
                        <p className='mr-5'><FaUserAlt /></p>
                    }
                    <p className='mr-5'>{user?.displayName}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;