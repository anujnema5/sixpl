import React from 'react'
import Image from 'next/image'

const clients = ({heading}) => {
    return (
        <div className='bg-indigo-50/30 relative'>
            <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-slate-500 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-slate-100">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
        </svg>
            <div className="flex flex-col">
                <div className="flex flex-col px-4 py-8 items-center text-center">
                    {/* <div className="lg:text-[2.3rem] sm:text-3xl text-2xl font-[500] py-4 text-slate-600">Some of Our Clients</div> */}
                    <h2 className="lg:text-lg text-base font-semibold leading-8 tracking-tight text-indigo-600">Our Clients</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-[1.7rem]">
                    Transformative Collaboration: Clients we have worked with
          </p>
                    {/* <div className="lg:text-[1.4rem] sm:text-lg py-2 text-slate-600">{heading}</div> */}
                </div>
                <div>
                    <div className="flex flex-col py-4 lg:flex-row items-center justify-center">
                        <div><Image className='' src="/images/clients-logos/ministry-of-ayush-logo-400-200.svg" width={300} height={150} /></div>
                        <div><Image src="/images/clients-logos/tech-mahindra-logo-400-200.svg" width={300} height={150} /></div>
                        <div><Image src="/images/clients-logos/oyo-logo-400-200.svg" width={300} height={150} /></div>
                        <div><Image src="/images/clients-logos/exide-life-insurance-logo-400-200.svg" width={300} height={150} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default clients