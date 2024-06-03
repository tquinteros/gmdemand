import React from 'react'

const DotsHero = () => {
    return (
        <div className='flex flex-col justify-center md:grid md:grid-cols-12 md:justify-items-center gap-8 z-[999] md:gap-20'>
            <div className='flex items-center gap-3 col-span-12 md:col-span-4'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#95F214" />
                </svg>
                <p className=''>No hiring headaches</p>
            </div>
            <div className='flex items-center gap-3 col-span-12 md:col-span-4'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#95F214" />
                </svg>
                <p className=''>Fixed monthly rate</p>
            </div>
            <div className='flex items-center gap-3 col-span-12 md:col-span-4'>
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.5" cy="8.5" r="8.5" fill="#95F214" />
                </svg>
                <p className=''>Fast delivery</p>
            </div>
        </div>
    )
}

export default DotsHero