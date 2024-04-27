"use client"
import React, { useState } from 'react';
import { faqs } from '@/data/faqs';

const FaqsTemplate = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className='bg-[#3a3a3a] pt-12 text-white'>
            <div className='container mb-8 mx-auto'>
                <h3 className='text-3xl'>FAQ</h3>
            </div>
            <div className='grid grid-cols-12 container mx-auto'>
                <div className='flex md:col-span-7 col-span-12 flex-col gap-8'>
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <div
                                className='flex justify-between items-center border-b border-white py-2 cursor-pointer'
                                onClick={() => handleToggle(index)}
                            >
                                <h4>{faq.question}</h4>
                            </div>
                            {openIndex === index && <p className='py-2 border-b border-white '>{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FaqsTemplate;