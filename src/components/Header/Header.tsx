"use client"
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import Button from '../Button/Button'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const handleCloseMenu = () => {
        setShowMenu(false);
    }

    const closeMenuOnOutsideClick = (e: MouseEvent) => {
        if (
            menuRef.current &&
            e.target instanceof Node &&
            !menuRef.current.contains(e.target)
        ) {
            setShowMenu(false);
        }
    };

    const handleEscapeKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        if (showMenu) {
            document.addEventListener("click", closeMenuOnOutsideClick);
            document.addEventListener("keydown", handleEscapeKey);
        } else {
            document.removeEventListener("click", closeMenuOnOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        }
        return () => {
            document.removeEventListener("click", closeMenuOnOutsideClick);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [showMenu]);

    return (
        <header id='header' className='sticky top-0 z-[999] bg-white'>
            <nav className='flex py-3 md:px-6 lg:px-10 xl:px-14 px-3 justify-between items-center'>
                <Image onClick={handleLogoClick} className='cursor-pointer hover:opacity-75 duration-300' src="/logo.png" alt="logo" width={250} height={250} />
                <div>
                    <Image onClick={handleMenuClick} className='cursor-pointer hover:opacity-75 duration-300' src="/menu.svg" alt="menu" width={24} height={24} />
                </div>
                <AnimatePresence>
                    {
                        showMenu && (
                            <motion.div
                                ref={menuRef}
                                initial={{ opacity: 0, y: -300 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, x: 300 }}
                                transition={{ duration: 0.6 }}
                                className='w-[300px] border-2 border-black h-[70vh] lg:h-[100vh] absolute right-0 z-[99999] top-[3.10rem] bg-white overflow-hidden'>
                                <ul className='flex px-4 flex-col items-center h-full justify-evenly'>
                                    <Link onClick={handleCloseMenu} to="solutions" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-2xl'>How it works</Link>
                                    <div className='h-0.5 bg-black w-full'></div>
                                    <Link onClick={handleCloseMenu} to="clients" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-2xl'>Benefits</Link>
                                    <div className='h-0.5 bg-black w-full'></div>
                                    <Link onClick={handleCloseMenu} to="works" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-2xl'>Service</Link>
                                    <div className='h-0.5 bg-black w-full'></div>
                                    <Link onClick={handleCloseMenu} to="pricing" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-2xl'>Pricing</Link>
                                    <div className='h-0.5 bg-black w-full'></div>
                                    <Link onClick={handleCloseMenu} to="faq" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-2xl'>FAQ&apos;s</Link>
                                    <div className='h-0.5 bg-black w-full'></div>
                                    <Button onClick={() => console.log("this is juanfer")} className='bg-black lg:hidden block text-white border border-[#444247] w-full px-4' size='md'>GET STARTED</Button>
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