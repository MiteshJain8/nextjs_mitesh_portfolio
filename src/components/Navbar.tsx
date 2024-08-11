"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const toggleNav = () => setNav(!nav);
    const closeNav = () => setNav(false);

    const navLinks = [
        { path: '#', title: 'Home' },
        { path: '#about', title: 'About Me' },
        { path: '#projects', title: 'Projects' },
        { path: '#contact', title: 'Contact Me' },
    ];

    const menuVariants = {
        hidden: {
            opacity: 0,
            x: '-100%',
            transition: {
                duration: 0.5,
            },
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className='text-white/80 pt-6'>
            <div className='hidden md:flex items-center px-4 py-2 mx-auto md:justify-center'>
                <ul className='flex flex-row p-3 mt-3 space-x-8 bg-black/80 rounded-3xl fixed z-50'>
                    {navLinks.map((link, index) => (
                        <li  key={index} className='inline-block mx-4 text-lg font-bold text-white/80 cursor-pointer group'>
                            <Link href={link.path}>
                                <p>{link.title}</p>
                                <div className='relative'>
                                <div className='absolute w-2/3 h-1 transition-all duration-300 ease-out bg-green-500 rounded-full group-hover:w-full'></div>
                                </div>
                            </Link>
                        </li>
                    ))}
                    
                </ul>
            </div>

            <div onClick={toggleNav} className='md:hidden absolute top-5 right-5 border rounded text-white/80 p-2 z-50 text-3xl'>
                {nav ? <AiOutlineClose/> : <AiOutlineMenu/>}
            </div>

            <motion.div
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/90 z-40 ${nav ? 'block' : 'hidden'}`}
                variants={menuVariants}
                initial='hidden'
                animate={nav ? 'visible' : 'hidden'}
            >
                <ul className='flex flex-col justify-center items-center h-full'>
                    {navLinks.map((link, index) => (
                        <li key={index} className='py-6 text-4xl'>
                            <Link href={link.path} onClick={closeNav}>
                                {link.title}
                            </Link>
                        </li>
                    ))}
                    <li className='py-6 text-4xl'>
                        <a href='#Contact' onClick={closeNav}>
                            Contact Me
                        </a>
                    </li>
                </ul>
            </motion.div>

            <motion.div
            >
            </motion.div>
        </div>
    );
};

export default Navbar;