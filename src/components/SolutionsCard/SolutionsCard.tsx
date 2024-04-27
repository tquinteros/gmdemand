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
                <Image src={image} width={100} height={100} alt={title} />
            </div>
            <div className='mt-10 flex flex-col gap-3 items-center'>
                <div className='flex justify-center items-center bg-black w-8 h-8 rounded-full'>
                    <h3 className='text-white text-lg font-bold'>{number}</h3>
                </div>
                <h4 className='uppercase text-lg font-bold'>{title}</h4>
                <div className='max-w-xs'>
                    <p className='text-center text-sm'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default SolutionsCard