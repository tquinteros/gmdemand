import Image from 'next/image'
import React from 'react'

const GmText = () => {
    return (
        <div className='relative acumin'>
            <div className='max-w-5xl z-50 relative mx-auto'>
                <h3 className='md:text-6xl text-4xl p-4 md:p-0 leading-tight text-center'><span className='font-bold'>GM</span> is a creative studio specialized in 
                <span className='font-bold'> building brands</span> and delivering <span className='font-bold'>high-quality designs fast</span> </h3>
            </div>
            <Image className='absolute -top-16 hidden xl:block' src="/gmtext.png" alt="gmtext" width={260} height={260} />
        </div>
    )
}

export default GmText