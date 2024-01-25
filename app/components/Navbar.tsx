'use client'

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from "react-icons/fa";

const Navbar = () => {

    const [ nav, setNav ] = useState(false);
    const toggleNav = () => {
        setNav(!nav);
    }

    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
                <Image src="/assets/Logo_fondo_blanco.png" alt="/" width={300} height={101.25}/>
                <div className='flex-grow'>
                    <ul className='hidden lg:flex justify-center'>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Inicio</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Nosotros</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Especialidades</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Equipo Dental</li>
                        </Link>
                        <Link href='/'>
                            <li className='ml-10 text-sm uppercase hover:border-b'>Contacto</li>
                        </Link>
                    </ul>
                </div>
                <div className="hidden lg:flex space-x-4">
                    <div
                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaFacebook/>
                    </div>
                    <div
                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaYoutube/>
                    </div>
                    <div
                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaInstagram/>
                    </div>
                    <div
                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedin/>
                    </div>
                </div>
                <div onClick={toggleNav} className='lg:hidden px-8'>
                    <AiOutlineMenu size={25}/>
                </div>

                {/* black overlay that covers the whole screen when sidebar is open */}
                <div className={nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                    {/* When the nav variable is true, it fills up 75% of the screen on small devices, 60% of the screen on medium devices and 45% on large devices. When nav is false, it seems to be hidden to the left of the screen (due to the style left: [-100%]). */}
                    <div className={
                        nav
                            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }>
                        <div>
                            <div className='flex w-full items-center justify-between'>
                                <Image src="/assets/Isotipo_T.png" alt="/" width={87} height={35}/>
                                <div onClick={toggleNav}
                                     className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                                    <AiOutlineClose/>
                                </div>
                            </div>
                            <div className='border-b border-gray-300 my-4'>
                                <p className='w-[85%] md:w-[90%] py-4'>nam aenean malorum eius</p>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col'>
                            <ul className='uppercase'>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>Inicio</li>
                                </Link>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>Nosotros</li>
                                </Link>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>Especialidades</li>
                                </Link>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>Equipo Dental</li>
                                </Link>
                                <Link href='/'>
                                    <li className='py-4 text-sm'>Contacto</li>
                                </Link>
                            </ul>
                        </div>
                        <div className='pt-40 w-3/4 absolute inset-x-[10%] bottom-10'>
                            <p className='uppercase tracking-widest text-[#2cd5c4]'>
                                alterum inani simul
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaFacebook/>
                                </div>
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaYoutube/>
                                </div>
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaInstagram/>
                                </div>
                                <div
                                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedin/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;