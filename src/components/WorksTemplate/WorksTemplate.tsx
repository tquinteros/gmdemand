import Image from 'next/image'
import React from 'react'
import Button from '../Button/Button'
import WorksCard from '../WorksCard/WorksCard'

const WorksTemplate = () => {
    return (
        <div className='min-h-screen mt-20 md:mt-0 relative'>
            <div className=''>
                <h2 className='text-6xl font-bold mb-8 text-center uppercase'>Check our latest work</h2>
            </div>
            <div className='p-4 md:p-0'>
                <div className='bg-[#F5F5F5] md:mt-10 px-4 grid grid-cols-12 gap-8 py-8 justify-items-center container mx-auto rounded-xl'>
                    <WorksCard src='/balls/works/decentraland.png' />
                    <WorksCard src="/balls/works/mvmf.png" />
                    <WorksCard src="/balls/works/indiesquare.png" />
                    <WorksCard src="/balls/works/venture.png" />
                    <WorksCard src="/balls/works/mod.png" />
                    <WorksCard src="/balls/works/indiesquare.png" />
                </div>
            </div>
            <div className='flex justify-center mt-12'>
                <Button className='w-full md:w-[22rem] mx-4 md:mx-0 bg-primary-purple'>SEE MORE WORK</Button>
            </div>
            <Image src='/balls/works/pin.png' className='-z-40 absolute right-0 -top-48 hidden xl:block' width={320} height={320} alt="Cucumber 1" />
        </div>
    )
}

export default WorksTemplate