import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const brands = [
    '/brands/microsoft.svg',
    '/brands/facebook.svg',
    '/brands/roland.svg',
    '/brands/xbox.svg',
    '/brands/levis.svg',
    '/brands/disney.svg',
    '/brands/lg.svg',
    '/brands/coca.svg',
    '/brands/turner.svg',
]

const BrandsList = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className='mt-auto mb-20 hidden md:block md:relative'>
            <div className='absolute inset-0 bg-[#B990ED] blur-2xl rounded-full'></div>
            <div className='flex flex-wrap relative gap-8 bg-black rounded-full px-10 py-3'>
                {
                    brands.map((brand, index) => (
                        <Image width={96} height={96} key={index} src={brand} alt={brand} className='' />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default BrandsList