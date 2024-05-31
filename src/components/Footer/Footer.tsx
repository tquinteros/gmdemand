import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'


const Footer = () => {
    return (
        <div className='bg-[#252323] text-white px-12 py-16'>
            <div className='flex-col md:gap-0 gap-4 md:flex-row flex md:justify-between md:items-center'>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center gap-2 cursor-pointer hover:opacity-75 duration-300'>
                        <span className='font-bold'>Our Work</span>
                        <Image src="/arrowfooter.svg" alt="Arrow" width={14} height={14} />
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer hover:opacity-75 duration-300'>
                        <span className='font-bold'>How it works</span>
                        <Image src="/arrowfooter.svg" alt="Arrow" width={14} height={14} />
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer hover:opacity-75 duration-300'>
                        <span className='font-bold'>About us</span>
                        <Image src="/arrowfooter.svg" alt="Arrow" width={14} height={14} />
                    </div>
                </div>
                <div className=''>
                    <Button className='md:w-96 w-full bg-primary-green' size='lg'>CONTACT US!</Button>
                </div>
            </div>
            <hr className='my-8' />
            <div className='flex-col md:gap-0 gap-4 md:flex-row flex md:justify-between md:items-center'>
                <div>
                    <Image src="/logofooter.png" alt="Logo" width={320} height={320} />
                </div>
                <div className='flex justify-center md:justify-start gap-8'>
                    <Image className='hover:opacity-75 duration-300 cursor-pointer' src="/social/instagram.svg" alt="Socials" width={56} height={56} />
                    <Image className='hover:opacity-75 duration-300 cursor-pointer' src="/social/mail.svg" alt="Socials" width={56} height={56} />
                    <Image className='hover:opacity-75 duration-300 cursor-pointer' src="/social/linkedin.svg" alt="Socials" width={56} height={56} />
                </div>
            </div>
            <div className='mt-4 text-center md:mt-0 md:text-start'>
                <span className='text-xl'>© <span className='font-bold'>2024</span></span>
            </div>
        </div>
    )
}

export default Footer