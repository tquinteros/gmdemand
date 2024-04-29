"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState } from 'react'

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header id='header' className='sticky top-0 z-[999] bg-white'>
            <nav className='flex py-3 md:px-16 lg:px-24 px-3 justify-between items-center'>
                <Image onClick={handleLogoClick} className='cursor-pointer hover:opacity-75 duration-300' src="/logo.png" alt="logo" width={250} height={250} />
                <div>
                    <Image onClick={handleMenuClick} className='cursor-pointer hover:opacity-75 duration-300' src="/menu.svg" alt="menu" width={24} height={24} />
                </div>
                <AnimatePresence>
                    {
                        showMenu && (
                            <motion.div
                                initial={{ opacity: 0, x: 300 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 300 }}
                                transition={{ duration: 0.6 }}
                                className='w-[300px] h-[95vh] absolute right-0 top-[3.10rem] bg-white'>
                                <ul className='flex px-4 flex-col items-center justify-center h-[95vh] gap-12'>
                                    <a href="#solutions" className='cursor-pointer hover:opacity-75 duration-300 text-2xl'>Solutions</a>
                                    <div className='h-0.5 bg-black w-full'></div>
                                    <a href="#clients" className='cursor-pointer hover:opacity-75 duration-300 text-2xl'>Clients</a>
                                    <div className='h-0.5 bg-black w-full'></div>
                                    <a href="#works" className='cursor-pointer hover:opacity-75 duration-300 text-2xl'>Works</a>
                                    <div className='h-0.5 bg-black w-full'></div>
                                    <a href="#pricing" className='cursor-pointer hover:opacity-75 duration-300 text-2xl'>Pricing</a>
                                    <div className='h-0.5 bg-black w-full'></div>
                                    <a href="#faq" className='cursor-pointer hover:opacity-75 duration-300 text-2xl'>FAQ&apos;s</a>
                                    <div className='h-0.5 bg-black w-full'></div>
                                </ul>
                            </motion.div>
                        )
                    }
                </AnimatePresence>
            </nav>
        </header>
    )
}

export default Header