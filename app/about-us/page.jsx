import React from 'react'
import AboutNavbar from '@/components/nav/aboutNavbar'
import Link from 'next/link'
import { genPageMetaData } from 'app/seo'
import siteMetadata from '@/utils/siteMetadata';

export const metadata = genPageMetaData({ title: `Company Overview ${siteMetadata.headerTitle}`, description: "About us - Sixpl" });

function page() {
    return (
        <React.Fragment>
            <div className='flex justify-center '>
                <div className=' flex flex-col lg:w-8/12'>
                    <div className='flex flex-col lg:flex-row m-4 lg:m-20 lg:px-14'>
                        <div className='w-full'>
                            <AboutNavbar highlight="about" />
                            <div className='mt-4 px-3 -mb-14'>
                                <div className=" bg-white shadow-lg sm:rounded-xl">
                                    <div className="px-4 py-6 sm:px-6">
                                        <h3 className="text-base font-semibold leading-7 text-gray-800/90">Company Overview</h3>
                                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Information updated on Aug 31, 2022</p>
                                    </div>
                                    <div className="border-t border-gray-100">
                                        <dl className="divide-y divide-gray-100">
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-800/90">Established</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">May 16, 2012</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-800/90">Founder</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Saket Kumar Singh</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-800/90">Client</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">1610</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-800/90">Client Retention Rate</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">75%</dd>
                                            </div>
                                            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-800/90">Headquarters</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                    16192 Coastal Highway, Lewes, Delaware, 19958
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col m-4 px-4 lg:mx-20 lg:px-24 text-xl text-gray-700'>
                        <p className=' py-4 text-4xl text-slate-700 '>
                            <strong>Redefine Your Growth Story</strong>
                        </p>
                        <p className='py-4'>
                            SixPL LLC supports the growth transformation of startups and SMEs through performance-focused digital solutions.
                            Software development, digital marketing, content development, and blockchain-based offerings enable our clients to achieve superior business growth in a short span.
                            Time-bound, outcome-oriented, and innovative solutions accelerate revenue growth and exceptional performance.
                        </p>
                        <p className='py-4'>
                            Established in 2012 and headquartered in Delaware, USA, the company has helped 1600+ entrepreneurs and business owners supercharge their businesses.
                            Our subject matter experts have solved marketing and tech challenges in 25 industries from 23 countries across the globe.
                            No matter which geographical region or industry you operate in, our experts will devise a sound growth strategy and execute it with razor-sharp precision to boost the top line and the bottom line.
                        </p>
                        <p className='py-4 text-4xl text-slate-700'>
                            <strong>Key Milestones</strong>
                        </p>
                        <p className='py-4'>
                            <span className='text-4xl  text-sky-900'>2021</span> &nbsp; Commenced Web3 development, including full-stack blockchain-based product development, smart contracts development, etc
                        </p>
                        <p className='py-4'>
                            <span className='text-4xl  text-sky-900'>2019</span> &nbsp; Launched NodeJS-based web application development services
                        </p>
                        <p className='py-4'>
                            <span className='text-4xl  text-sky-900'>2017</span> &nbsp; Introduced blockchain-based services, including ICO marketing and community management services
                        </p>
                        <p className='py-4'>
                            <span className='text-4xl  text-sky-900'>2016</span> &nbsp; Launched New tech vertical offering web development services, especially Wordpress development
                        </p>
                        <p className='py-4'>
                            <span className='text-4xl  text-sky-900'>2014</span> &nbsp; Introduced Digital Marketing Services such as search engine optimization, pay-per-click advertising, and social media marketing services
                        </p>
                        <p className='py-4'>
                            <span className='text-4xl  text-sky-900'>2012</span> &nbsp; Established with a vision to provide content development services in six hours
                        </p>
                        <div className='mx-auto mb-5'>

                            <Link href="/contact-us"
                                type="button"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Explore Possibilities
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default page