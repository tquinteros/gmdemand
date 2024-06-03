import Image from 'next/image'
import React from 'react'

interface WorksCardProps {
    src: string
}

const WorksCard: React.FC<WorksCardProps> = ({ src }) => {
    return (
        <Image className='lg:col-span-4 hover:opacity-75 duration-300 md:col-span-6 col-span-12 rounded-3xl w-full' src={src} width={320} height={320} alt={src} />
    )
}

export default WorksCard