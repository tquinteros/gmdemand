"use client"

import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';

const SubMenu = () => {

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className='bottom-16 fixed z-[9999] w-[50%] md:w-[40%] lg:w-[35%] left-1/2 -translate-x-1/2'>
            <div className='absolute inset-0 bg-[#B990ED] blur-2xl rounded-full'></div>
            <div className='flex items-center justify-between md:gap-12 relative text-white bg-black rounded-full px-8 py-4'>
                <div className='flex gap-2 items-center cursor-pointer hover:opacity-75 duration-300' onClick={handleLogoClick}>
                    <h3 className='text-3xl'>GM</h3>
                    <div className='w-0.5 h-10 ml-3 bg-white hidden md:block'></div>
                </div>
                <div className='w-0.5 h-10 block md:hidden bg-white'></div>
                <Image src='/menu.svg' alt='menu' width={36} height={36} className='block md:hidden cursor-pointer hover:opacity-75 filter invert duration-300' />
                <div className='md:flex-1 md:justify-between md:flex hidden'>
                    <Link to="solutions" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-xl'>Solutions</Link>
                    <Link to="clients" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-xl'>Clients</Link>
                    <Link to="works" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-xl'>Works</Link>
                    <Link to="pricing" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-xl'>Pricing</Link>
                    <Link to="faq" spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-xl'>FAQ&apos;s</Link>
                </div>
            </div>
        </div>
    );
}

export default SubMenu;