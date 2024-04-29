"use client"
import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import BrandsList from '../BrandsList/BrandsList'
import DotsHero from '../DotsHero/DotsHero'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {

    const [heroHeight, setHeroHeight] = useState<string>('100vh');

    useEffect(() => {
        const headerElement = document.getElementById('header');
        if (headerElement) {
            const headerHeight = headerElement.clientHeight;
            setHeroHeight(`calc(100vh - 50px)`);
            console.log('Altura del header:', headerHeight);
        }
    }, []);

    return (
        <div className={`relative text-white md:max-h-screen flex justify-center flex-col items-center`}
            style={{
                backgroundImage: `url(/background.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: heroHeight,
            }}
        >
            <div className='h-full flex flex-col items-center my-16 md:my-0 md:mt-48'>
                <div>
                    <h2 className='text-6xl font-bold text-center uppercase'>ONE SINGLE PLAN FOR ALL YOUR</h2>
                    <h2 className='text-6xl font-bold mt-4 mb-8 text-center uppercase'>DESIGN & CONTENT NEEDS.</h2>
                </div>
                <p className='text-2xl text-center'>We specialize in building brands and delivering high-quality designs fast. </p>
                <Button className='md:mb-28 mb-16 mt-8 w-96 bg-primary-green' size='sm'>SEE PLANS</Button>
                <DotsHero />
            </div>
            <BrandsList />
            <Image src='/balls/ball1.png' className='absolute right-0 hidden xl:block' width={380} height={380} alt="Ball 1" />
            <Image src='/balls/ball2.png' className='absolute right-0 -top-12 hidden xl:block' width={380} height={380} alt="Ball 1" />
            <Image src='/balls/figure1.png' className='absolute right-0 bottom-0 hidden xl:block' width={380} height={380} alt="Ball 1" />
            <Image src='/balls/ball3.png' className='absolute left-0 -top-12 hidden xl:block' width={200} height={200} alt="Ball 1" />
            <Image src='/balls/ball4.png' className='absolute left-0 top-28 hidden xl:block' width={300} height={300} alt="Ball 1" />
            <Image src='/balls/ball5.png' className='absolute left-0 bottom-36 hidden xl:block' width={260} height={260} alt="Ball 1" />
            <Image src='/balls/ball6.png' className='absolute left-0 bottom-0 hidden xl:block' width={450} height={450} alt="Ball 1" />
        </div>
    )
}

export default Hero