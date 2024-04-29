import Image from 'next/image'
import React from 'react'
import Button from '../Button/Button'
import { solutions } from '@/data/solutions'
import SolutionsCard from '../SolutionsCard/SolutionsCard'

const SolutionsTemplate = () => {
    return (
        <section id='solutions' className='min-h-screen p-4 md:p-0 relative'>
            <div className='mt-20 acumin md:mt-48'>
                <h2 className='text-5xl mt-4 mb-4 text-center'>We provide clients with</h2>
                <h2 className='text-5xl font-bold mb-8 text-center'>end to end solutions</h2>
            </div>
            <div className='bg-[#F5F5F5] md:mt-28 container mx-auto flex justify-center md:gap-36 md:flex-row flex-wrap flex-col  rounded-xl'>
                {
                    solutions.map((solution, index) => (
                        <SolutionsCard key={index} {...solution} />
                    ))
                }
            </div>
            <div className='flex justify-center mt-8'>
                <Button className='w-full md:w-[22rem] px-0 bg-primary-purple'>SEE PLANS</Button>
            </div>
            <Image src='/balls/solutions/cucumber.png' className='-z-40 absolute right-0 -top-24 hidden xl:block' width={250} height={250} alt="Cucumber 1" />
            <Image src='/balls/solutions/flower.png' className='absolute left-0 -top-16 hidden xl:block' width={320} height={320} alt="Flower 1" />
        </section>
    )
}

export default SolutionsTemplate