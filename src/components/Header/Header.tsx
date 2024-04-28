"use client"
import Image from 'next/image'
import React from 'react'

const Header = () => {

    const handleLogoClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header id='header' className='sticky top-0 z-[999] bg-white'>
            <nav className='flex py-3 md:px-16 lg:px-24 px-3 justify-between items-center'>
                <Image onClick={handleLogoClick} className='cursor-pointer hover:opacity-75 duration-300' src="/logo.png" alt="logo" width={250} height={250} />
                <div>
                    <Image className='cursor-pointer hover:opacity-75 duration-300' src="/menu.svg" alt="menu" width={24} height={24} />
                </div>
            </nav>
        </header>
    )
}

export default Header