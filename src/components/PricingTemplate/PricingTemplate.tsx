import { dataPricing } from '@/data/pricing'
import React from 'react'
import PricingCard from '../PricingCard/PricingCard'
import Button from '../Button/Button'
import Image from 'next/image'

const PricingTemplate = () => {
    return (
        <section id='pricing' className='min-h-screen relative'>
            <div className=''>
                <h2 className='text-[64px] acumin font-extrabold mt-4 -mb-2 text-center'>Great Design</h2>
                <h2 className='text-[64px] acumin font-extrabold text-center'>Subscription for Startups</h2>
                {/* <p className='text-2xl text-center max-w-xl mx-auto'>Our team previously worked for Meta, Microsoft, Coca-Cola, Cartoon-Network, LG, Levi&apos;s</p> */}
            </div>
            <div className='flex flex-col p-4 md:p-0 md:flex-row md:flex-wrap container mx-auto justify-center gap-20 md:gap-10 mt-16'>
                {
                    dataPricing.map((pricing) => (
                        <PricingCard mostPopular={pricing.mostPopular} color={pricing.color} key={pricing.title} title={pricing.title} price={pricing.price} features={pricing.features} />
                    ))
                }
            </div>
            <div className='flex justify-center mt-10'>
                <Button className='w-[22rem] px-0 bg-primary-purple'>BOOK A CALL</Button>
            </div>
            <Image src='/balls/pricing/ball1.png' className='-z-50 absolute left-0 -top-32 hidden xl:block' width={260} height={260} alt="Ball 1" />
            <Image src='/balls/pricing/ball2.png' className='-z-40 absolute right-0 top-16 hidden xl:block' width={160} height={160} alt="Ball 1" />
            <Image src='/balls/pricing/ball3.png' className='-z-50 absolute -right-0 -top-64 hidden xl:block' width={400} height={400} alt="Ball 1" />
        </section>
    )
}

export default PricingTemplate