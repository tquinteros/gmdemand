import Image from 'next/image'
import React from 'react'

const GmText = () => {
    return (
        <div className='relative acumin mt-48 md:mt-0 mb-48'>
            <div className='max-w-5xl relative mx-auto'>
                <h3 className='text-6xl leading-tight text-center'><span className='font-bold'>GM</span> is a creative studio specialized in 
                <span className='font-bold'> building brands</span> and delivering <span className='font-bold'>high-quality designs fast</span> </h3>
            </div>
            <Image className='absolute -top-16 hidden xl:block' src="/gmtext.png" alt="gmtext" width={260} height={260} />
        </div>
    )
}

export default GmText