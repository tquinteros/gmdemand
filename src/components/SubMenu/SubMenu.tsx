"use client"

import { subMenuItems } from '@/data/submenu';
import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';
import Button from '../Button/Button';

const SubMenu = () => {

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className='bottom-16 fixed z-[9999] left-1/2 -translate-x-1/2'>
            <div className='absolute inset-0 bg-primary-green blur-md opacity-75 rounded-full'></div>
            <div className='flex border border-[#444247] relative text-white bg-black rounded-full pr-2 py-2'>
                <div className='flex items-center justify-between md:gap-12 relative text-white bg-black rounded-full px-12'>
                    <div className='w-0.5 h-10 block md:hidden bg-white'></div>
                    <Image src='/menu.svg' alt='menu' width={36} height={36} className='block md:hidden cursor-pointer hover:opacity-75 filter invert duration-300' />
                    <div className='md:flex-1 md:gap-12 md:justify-between md:flex hidden'>
                        {
                            subMenuItems.map((item, index) => (
                                <Link key={index} to={item.to} spy={true} smooth={true} offset={-70} duration={500} className='cursor-pointer hover:opacity-75 duration-300 text-xl'>{item.label}</Link>
                            ))
                        }
                    </div>
                </div>
                <Button onClick={() => console.log("this is juanfer")} className='bg-primary-green border border-[#444247] px-4' size='xl'>GET STARTED</Button>
            </div>
        </div>
    );
}

export default SubMenu;