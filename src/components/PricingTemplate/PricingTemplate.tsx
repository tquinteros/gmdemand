import { dataPricing } from '@/data/pricing'
import React from 'react'
import PricingCard from '../PricingCard/PricingCard'
import Button from '../Button/Button'
import Image from 'next/image'

const PricingTemplate = () => {
    return (
        <div className='min-h-screen relative'>
            <div className='mt-16 md:mt-32'>
                <h2 className='text-5xl font-extrabold mt-4 mb-4 text-center'>Affordable Design</h2>
                <h2 className='text-5xl font-extrabold mb-8 text-center'>Subscription for Startups</h2>
                <p className='text-2xl text-center max-w-xl mx-auto'>Our team previously worked for Meta, Microsoft, Coca-Cola, Cartoon-Network, LG, Levi&apos;s</p>
            </div>
            <div className='flex flex-col md:flex-row md:flex-wrap container mx-auto justify-center gap-10 mt-16'>
                {
                    dataPricing.map((pricing) => (
                        <PricingCard color={pricing.color} key={pricing.title} title={pricing.title} price={pricing.price} features={pricing.features} />
                    ))
                }
            </div>
            <div className='flex justify-center mt-8'>
                <Button className='w-[22rem] px-0 bg-primary-purple'>BOOK A CALL</Button>
            </div>
            <Image src='/balls/pricing/ball1.png' className='-z-50 absolute left-0 -top-32 hidden xl:block' width={260} height={260} alt="Ball 1" />
            <Image src='/balls/pricing/ball2.png' className='-z-40 absolute right-0 top-40 hidden xl:block' width={140} height={140} alt="Ball 1" />
            <Image src='/balls/pricing/ball3.png' className='-z-50 absolute -right-0 -top-32 hidden xl:block' width={400} height={400} alt="Ball 1" />
        </div>
    )
}

export default PricingTemplate