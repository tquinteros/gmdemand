import Image from 'next/image'
import React from 'react'

interface SolutionsCardProps {
    number: number
    title: string
    description: string
    image: string
}


const SolutionsCard = ({ number, title, description, image }: SolutionsCardProps) => {
    return (
        <div className='flex my-8 flex-col items-center justify-center'>
            <div className='relative flex items-center justify-center w-36 h-36 bg-white rounded-full'>
                <Image src={image} width={number === 2 ? 132 : 100} height={100} alt={title} />
            </div>
            <div className='mt-10 flex flex-col gap-3 items-center'>
                <div className='flex justify-center items-center bg-black w-8 h-8 rounded-full'>
                    <h3 className='text-white nextfont text-lg pb-0.5 font-bold'>{number}</h3>
                </div>
                <h4 className='uppercase text-lg nextfont'>{title}</h4>
                <div className='max-w-[250px]'>
                    <p className='text-center md:text-lg acumin text-md'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SolutionsCard