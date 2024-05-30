import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'

interface PricingCardProps {
    title: string
    price: string
    features: string[]
    color: string
    mostPopular?: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, color, mostPopular }) => {
    return (
        <div className={`flex pt-14 px-8 pb-4 ${mostPopular && 'card-shadow'} relative rounded-2xl bg-[#F5F5F5] flex-col`}>
            {
                mostPopular && (
                    <div className='absolute -top-8 left-1/2 shadow-xl z-50 -translate-x-1/2 w-full bg-white rounded-2xl px-4 py-2 flex'>
                        <Image src='/mostpopular.png' className='absolute -top-2 -left-2' width={75} height={75} alt='Star' />
                        <span className='text-[#95F214] nextfont uppercase text-center w-full text-2xl'>most popular!</span>
                    </div>
                )
            }
            <div className='flex nextfont flex-col items-center'>
                <span
                    style={{ color: color }}
                    className={`text-3xl`}>{title}</span>
                <span
                    style={{ color: color }}
                    className={`text-3xl`}>{price}</span>
            </div>
            <div className='acumin h-[21rem] w-[19rem] flex flex-col mt-6 rounded-lg mx-auto'>
                <div className='flex flex-col gap-2'>
                    {
                        features.map((feature, index) => (
                            <div key={index} className='flex items-center'>
                                <span className='mr-3 text-xs'>■</span>
                                <span className='text-xl'>{feature}</span>
                            </div>
                        ))
                    }
                </div>
                <Button
                    style={{ backgroundColor: color }}
                    className={`px-0 mt-auto w-full ${title === "PRO" && 'gradient-button'}`}>GET STARTED</Button>
            </div>
        </div>
    )
}

export default PricingCard