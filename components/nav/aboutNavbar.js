import React from 'react'
import Link from 'next/link'

const aboutNavbar = ({ highlight }) => {
    return (
        <div className=' bg-white border px-8 py-5 rounded-xl flex gap-2 justify-center items-center shadow-lg'>
            {/* <Link
        type="button"
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Button text
      </Link> */}
            <Link className={`py-2 font-medium underline-offset-4 hover:text-text-gray-300 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${highlight === "about" ? "bg-indigo-600 text-gray-100 px-4 rounded-md" : "bg-indigo-400 px-4 rounded-md py-2"}`} href='/about-us'>Company Overview</Link>

            <Link className={`py-2 font-medium underline-offset-4 hover:text-text-gray-300 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${highlight === "founder" ? "bg-indigo-600 text-gray-100 px-4 rounded-md" : "bg-indigo-400 px-4 rounded-md py-2"}`} href='/about-us/saket-kumar-singh'>Founder</Link>
        </div>
    )
}

export default aboutNavbar