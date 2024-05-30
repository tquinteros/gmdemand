import { testimonials } from '@/data/testimonials'
import Image from 'next/image'
import React from 'react'

const ClientsTemplate = () => {
    return (
        <section id="clients" className='min-h-screen relative'>
            <div className=''>
                <h2 className='text-5xl md:text-6xl mb-8 text-center nextfont uppercase'>Our happy clients:</h2>
            </div>
            <div className='p-4 md:p-0'>
                <div className='grid grid-cols-12 p-5 container mx-auto bg-[#F5F5F5] gap-8'>
                    <div className='col-span-12 md:col-span-6 flex flex-col gap-8 pt-8 rounded-lg bg-white'>
                        <h3 className='text-4xl px-10'>Working with GM has been a game-changer for our projects. Their exceptional quality of work combined with their incredibly fast turnaround time makes them the best design agency.</h3>
                        <div className='mt-auto flex justify-between pl-10'>
                            <div className='flex justify-end pb-6 flex-col'>
                                <h3 className='text-lg text-[#B990ED] font-extrabold'>KIM CURRIER</h3>
                                <div className='max-w-48'>
                                    <h3 className='text-lg italic acumin max-w-sm'>Head of Marketing Decentraland</h3>
                                </div>
                            </div>
                            <div className='relative'>
                                <Image src='/balls/clients/girl.png' width={240} height={240} className='z-10 relative' alt="KIM CURRIER" />
                                <Image src='/balls/clients/bg2.png' width={240} height={240} className='absolute bottom-0' alt="Background for KIM CURRIER" />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-12 md:pl-12 md:col-span-6 flex justify-center flex-col gap-6'>
                        {
                            testimonials.map((testimonial, index) => (
                                <div key={index} className='flex max-w-xl gap-2 md:gap-0 flex-col'>
                                    <h3 className='text-2xl acumin font-bold'>{testimonial.title}</h3>
                                    {/* <p className='text-lg acumin'>{testimonial.name} - {testimonial.company}</p> */}
                                    <p className='text-2xl acumin'>{testimonial.description}</p>
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