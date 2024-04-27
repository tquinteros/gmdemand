import React from 'react'
import Button from '../Button/Button'

interface PricingCardProps {
    title: string
    price: string
    features: string[]
    color: string
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, color }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-col items-center'>
                <span 
                style={{ color: color }}
                className={`font-bold text-3xl`}>{title}</span>
                <span 
                style={{ color: color }}
                className={`font-bold text-3xl`}>{price}</span>
            </div>
            <div className='bg-[#F5F5F5] h-[22rem] w-[22rem] flex flex-col mt-6 pt-8 px-8 pb-4 rounded-lg mx-auto'>
                {
                    features.map((feature, index) => (
                        <div key={index} className='flex items-center'>
                            <span className='mr-4 text-xs'>■</span>
                            <span className='text-xl font-semibold'>{feature}</span>
                        </div>
                    ))
                }
                <Button 
                style={{ backgroundColor: color }}
                className={`px-0 mt-auto w-full ${title === "PRO" && 'gradient-button'}`}>GET STARTED</Button>
            </div>
        </div>
    )
}

export default PricingCard