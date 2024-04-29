import { testimonials } from '@/data/testimonials'
import Image from 'next/image'
import React from 'react'

const ClientsTemplate = () => {
    return (
        <section id="clients" className='min-h-screen relative'>
            <div className=''>
                <h2 className='text-5xl md:text-6xl font-bold mb-8 text-center uppercase'>Check our happy clients:</h2>
            </div>
            <div className='p-4 md:p-0'>
                <div className='grid grid-cols-12 px-4 container mx-auto py-12 bg-[#F5F5F5] gap-8'>
                    <div className='col-span-12 md:col-span-6 flex flex-col gap-8 pt-8 rounded-lg bg-white'>
                        <h3 className='text-4xl px-10'>”Lorem ipsum dolor sit amet quo prosit ipsum dolor sit amet lorem ipsum dolor sit amet quo prosit ipsum dolor sit amet”</h3>
                        <div className='mt-auto flex justify-between pl-10'>
                            <div className='flex justify-end pb-6 flex-col'>
                                <h3 className='text-lg font-extrabold'>NAME LASTNAME -</h3>
                                <h3 className='text-lg font-extrabold'>COMPANY</h3>
                            </div>
                            <div className='relative'>
                                <Image src='/balls/clients/guy.png' width={280} height={280} className='z-10 relative' alt="Cucumber 1" />
                                <Image src='/balls/clients/bgguy.png' width={280} height={280} className='absolute bottom-0' alt="Cucumber 1" />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 md:pl-12 md:col-span-6 flex justify-center flex-col gap-6'>
                        {
                            testimonials.map((testimonial, index) => (
                                <div key={index} className='flex gap-2 md:gap-0 flex-col'>
                                    <h3 className='text-2xl'>{testimonial.title}</h3>
                                    <p className='text-lg font-extrabold uppercase'>{testimonial.name} - {testimonial.company}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <Image src='/balls/clients/clients1.png' className='absolute right-4 -top-64 hidden xl:block' width={400} height={400} alt="Cucumber 1" />
        </section>
    )
}

export default ClientsTemplate