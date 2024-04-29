"use client"
import React, { useState } from 'react';
import { faqs } from '@/data/faqs';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FaqsTemplate = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section id="faq" className='bg-[#3a3a3a] mt-20 md:mt-0 relative py-24 px-6 md:px-0 text-white'>
            <div className='container mb-8 mx-auto'>
                <h3 className='text-3xl'>FAQ</h3>
            </div>
            <div className='grid grid-cols-12 container mx-auto'>
                <div className='flex md:col-span-7 col-span-12 flex-col gap-8'>
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <motion.div
                                className='flex justify-between items-center border-b border-white py-2 cursor-pointer'
                                onClick={() => handleToggle(index)}
                            >
                                <h4 className='font-bold'>· {faq.question}</h4>
                            </motion.div>
                            {openIndex === index && (
                                <motion.p
                                    className='py-2 border-b border-white '
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {faq.answer}
                                </motion.p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Image src='/balls/faq/ball1.png' className='absolute -top-64 hidden xl:block' width={300} height={300} alt="Ball 1" />
            <Image src='/balls/faq/ball2.png' className='absolute -top-72 right-0 hidden xl:block' width={350} height={350} alt="Ball 1" />
            <Image src='/balls/faq/ball3.png' className='absolute top-12 right-16 hidden xl:block' width={240} height={240} alt="Ball 1" />
            {/* <Image src='/balls/faq/all.png' className='absolute top-12 right-0 hidden xl:block' width={600} height={600} alt="Ball 1" /> */}
        </section>
    );
};

export default FaqsTemplate;
