import React, { useState } from 'react';
import logo from '../../../assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [open, setOpen] = useState(true);
    const handleMenu = () => {
        setOpen(!open)
    }
    
    return (
        <div className='mt-0 lg:mt-[50px] mb-14 2xl:mx-0 p-4 w-full ease-in duration-300 relative'>
            <div className='container mx-auto'>
                <div className='uppercase flex justify-between items-center'>
                    <div>
                        <NavLink
                            to='/'
                            className='flex justify-center items-center gap-2'
                        >
                            <img className='w-14 h-11' src={logo} alt="logo" />
                            <h1 className='font-semibold text-xl sm:text-2xl'>Tripmates</h1>
                        </NavLink>
                    </div>
                    <div className='font-medium text-[18px] hidden lg:block'>
                        <ul className='flex items-center space-x-8'>
                            <li>
                                <NavLink
                                    to='/discover'
                                    className=''
                                >
                                    Discover
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    className=''
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/destination'
                                    className=''
                                >
                                    Destination
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/tour'
                                    className=''
                                >
                                    Tour
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden lg:block'>
                        <ul className='flex items-center space-x-8'>
                            <li>
                                <NavLink
                                    to='/login'
                                    className='font-medium text-[18px]'
                                >
                                    Log-in
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/registration'
                                    className='capitalize text-[18px] px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-md text-white'
                                >
                                    Open Account
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* menu icon */}
                    <div onClick={handleMenu} className='block lg:hidden'>
                        {
                            open ?
                                <AiOutlineMenu size={25} className='font-semibold'></AiOutlineMenu>
                                :
                                <AiOutlineClose size={25} className='font-semibold'></AiOutlineClose>
                        }
                    </div>

                    {/* mobile menu */}
                    <div className={open ? 'lg:hidden flex justify-center items-center absolute top-[92px] bottom-0 -right-[-100%] w-full h-screen text-center ease-in duration-300 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-md overflow-hidden z-10 text-white' : 'lg:hidden flex justify-center items-center absolute top-[92px] bottom-0 right-0 w-full h-screen text-center ease-in duration-300 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-md overflow-hidden z-10 text-white'}>
                        <ul className='flex flex-col justify-center items-center py-10 gap-4 font-medium text-[18px]'>
                            <li>
                                <NavLink
                                    to='/discover'
                                    className=''
                                >
                                    Discover
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/about'
                                    className=''
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/destination'
                                    className=''
                                >
                                    Destination
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/tour'
                                    className=''
                                >
                                    Tour
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/login'
                                    className='font-medium text-[18px]'
                                >
                                    Log-in
                                </NavLink>
                            </li>
                            <li className='mt-4'>
                                <NavLink
                                    to='/registration'
                                    className='capitalize text-[18px] px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-md border'
                                >
                                    Open Account
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {
                handleMenu
            }
        </div>
    );
};

export default Header;