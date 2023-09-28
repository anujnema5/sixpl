import Image from 'next/image'
import React from 'react'

function CareerBanner({ title }) {
    return (
        <div className='w-[100vw] h-[50vh] bg-gray-950 relative scroll-smooth'>
            <Image src={'/images/career/careerBanner.jpg'} width={500} alt='career' height={700} className='object-cover bg-no-repeat w-[100%] h-[100%]' />

            <div className='absolute w-[100%] h-[100%] bg-black/60 top-0 left-0 flex flex-col items-center justify-center gap-5'>

                <h1 className='text-white lg:text-5xl text-4xl my-0'>Six<span className='text-indigo-500'>PL</span></h1>

                <h2 className='my-0 text-white/90 font-bold lg:text-3xl text-xl'>{title}<span className='text-red-500'>@ SixPL</span> </h2>

            </div>
        </div>
    )
}

export default CareerBanner