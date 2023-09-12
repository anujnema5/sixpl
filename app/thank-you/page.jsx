import { genPageMetaData } from 'app/seo'
import React from 'react'

export const metadata = genPageMetaData({title : "Thank You for Interest in SixPL Services!", 
description: "Sixpl's Thank you"})

function page() {
    return (
        <div className='flex flex-col'>
            <div className=' flex flex-col text-gray-700 items-center border shadow-lg rounded-lg border-gray-200 mx-auto md:my-20 px-8 py-10'>
                <div className=' text-2xl font-semibold py-4 text-indigo-500'>Thank you for your interest in SixPL Services!</div>
                <div className=' text-xl py-2'>Our team will get in touch with you shortly.</div>
                <div className=' text-base py-2'>USA Office Timings: Monday-Friday (9:00am - 5:00pm EDT)</div>
                <div className=' text-base py-2'>India Office Timings: Monday-Friday (9:30am - 6:30pm IST)</div>
            </div>
        </div>
    )
}

export default page