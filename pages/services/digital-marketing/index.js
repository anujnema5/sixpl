import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'
import ContactFormVertical from '../../../components/forms/contact-form-vertifical'



const DigitalMarketingIndexPage = () => {
    return(
        <Layout>
            <Head>
                <title>Digital Marketing Services</title>
            </Head>
            <main>
                <div>
                    <div className="flex flex-col font-serif">
                        <div>
                            <div className="flex flex-col px-4 py-8 bg-orange-400 items-center text-center">
                                <h1 className="text-4xl py-4 text-white">Generate More Leads at Lower Costs</h1>
                                <p className="text-2xl py-2">Avail a range of customized digital marketing services designed to win your prospects' trust</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 px-4 py-14">
                                    <div className="pb-4 text-center text-3xl text-slate-700">Hire #1 Digital Marketing Agency</div>
                                    <div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 24 24" strokeWidth="1" stroke="rgb(4,120,87,1)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M3 10l1 2h6" />
                                                                <path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z" />
                                                                <line x1="13" y1="9" x2="13" y2="6" />
                                                                <line x1="5" y1="6" x2="20" y2="6" />
                                                                <path d="M15 9.1v3.9h5.5" />
                                                                <line x1="15" y1="19" x2="15" y2="16" />
                                                                <line x1="19" y1="19" x2="11" y2="19" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">24*7 Instant Support</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2 ">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 24 24" strokeWidth="1" stroke="rgb(4,120,87,1)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                    <ellipse cx="16" cy="6" rx="5" ry="3" />
                                                                <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                                                <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                                                <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                                                <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                                                <path d="M5 15v1m0 -8v1" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">65% Increase in Conversion Rate</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 24 24" strokeWidth="1" stroke="rgb(4,120,87,1)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                                                <line x1="13" y1="7" x2="13" y2="7.01" />
                                                                <line x1="17" y1="7" x2="17" y2="7.01" />
                                                                <line x1="17" y1="11" x2="17" y2="11.01" />
                                                                <line x1="17" y1="15" x2="17" y2="15.01" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Build an Engaged Community around Your Brand</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 24 24" strokeWidth="1" stroke="rgb(4,120,87,1)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <circle cx="12" cy="5" r="2" />
                                                                <circle cx="5" cy="19" r="2" />
                                                                <circle cx="19" cy="19" r="2" />
                                                                <circle cx="12" cy="14" r="3" />
                                                                <line x1="12" y1="7" x2="12" y2="11" />
                                                                <line x1="6.7" y1="17.8" x2="9.5" y2="15.8" />
                                                                <line x1="17.3" y1="17.8" x2="14.5" y2="15.8" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Integrated Campaign across Multiple Platforms</div>
                                                    </div>  
                                                </div>   
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 px-4 py-14">
                                    <div className="py-14">
                                        <ContactFormVertical />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col font-serif">
                                <div className="flex flex-col px-4 py-8 bg-orange-400 items-center text-center">
                                    <div className="text-3xl py-4 text-white">Some of Our Clients</div>
                                    <div className="text-2xl py-2">From Solopreneurs to Industry Leaders & Governments - SixPL has partnered with Businesses of all Sizes</div>
                                </div>
                                <div>
                                    <div className="flex flex-col py-4 lg:flex-row items-center justify-center">
                                        <div><Image src="/images/clients-logos/ministry-of-ayush-logo-400-200.svg" width={300} height={150} /></div>
                                        <div><Image src="/images/clients-logos/tech-mahindra-logo-400-200.svg" width={300} height={150} /></div>
                                        <div><Image src="/images/clients-logos/oyo-logo-400-200.svg" width={300} height={150} /></div>
                                        <div><Image src="/images/clients-logos/exide-life-insurance-logo-400-200.svg" width={300} height={150} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col font-serif">
                                <div>
                                    <div className="flex flex-col px-4 py-8 bg-orange-400 items-center text-center">
                                        <h2 className="text-3xl py-4 text-white">Promote Your Brand where Customers Are</h2>
                                        <p className="text-2xl py-2">Let our Experts Maximize Responses from Every Marketing Channel</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col bg-cyan-50 md:px-40">
                                        <div className="flex flex-col items-center lg:flex-row justify-center">
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24"  viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <circle cx="10" cy="10" r="7" />
                                                            <line x1="7" y1="10" x2="13" y2="10" />
                                                            <line x1="10" y1="7" x2="10" y2="13" />
                                                            <line x1="21" y1="21" x2="15" y2="15" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Search Engine Optimization</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <circle cx="7" cy="5" r="2" />
                                                            <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                                                            <circle cx="17" cy="5" r="2" />
                                                            <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Social Media Optimization</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <circle cx="10" cy="10" r="7" />
                                                            <path d="M21 21l-6 -6" />
                                                            <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                                            <path d="M10 13v1m0 -8v1" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Google Ads</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center lg:flex-row justify-center">
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <rect x="3" y="5" width="18" height="14" rx="4" />
                                                            <path d="M10 9l5 3l-5 3z" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">YouTube Marketing</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <line x1="10" y1="14" x2="21" y2="3" />
                                                            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                                                        </svg>

                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Email Marketing</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Facebook Marketing</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center lg:flex-row justify-center">
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <rect x="4" y="4" width="16" height="16" rx="4" />
                                                            <circle cx="12" cy="12" r="3" />
                                                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Instagram Marketing</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5" />
                                                            <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
                                                            <path d="M16 7h4" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Content Marketing</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <rect x="4" y="4" width="16" height="16" rx="2" />
                                                            <line x1="8" y1="11" x2="8" y2="16" />
                                                            <line x1="8" y1="8" x2="8" y2="8.01" />
                                                            <line x1="12" y1="16" x2="12" y2="11" />
                                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">LinkedIn Marketing</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center lg:flex-row justify-center">
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Twitter Marketing</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
                                                            <path d="M11.683 12.317l5.759 -5.759" />
                                                            <circle cx="5.5" cy="5.5" r="1.5" />
                                                            <circle cx="18.5" cy="5.5" r="1.5" />
                                                            <circle cx="18.5" cy="18.5" r="1.5" />
                                                            <circle cx="8.5" cy="15.5" r="4.5" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Affiliate Marketing</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-600 stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8" />
                                                            <line x1="8" y1="6" x2="8" y2="18" />
                                                            <line x1="8" y1="12" x2="14" y2="12" />
                                                            <line x1="9" y1="3" x2="9" y2="6" />
                                                            <line x1="13" y1="3" x2="13" y2="6" />
                                                            <line x1="9" y1="18" x2="9" y2="21" />
                                                            <line x1="13" y1="18" x2="13" y2="21" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Blockchain & Crypto Marketing</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-zinc-200">
                            <div className='flex flex-col font-serif'>
                                <div>
                                    <div className="flex flex-col px-4 py-8 bg-orange-400 items-center text-center">
                                        <h2 className="text-3xl py-4 text-white">Predictable & Transparent Pricing Structure</h2>
                                        <p className="text-2xl py-2">Flexible pricing plans for all businesses</p>
                                        <p className="text-2xl py-2">Do you have specific requirements? Talk to us to get customized plan for your business.</p>
                                        <p className="text-2xl py-2 font-semibold">*GST(18%) will be applicable on all plans.</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col items-center lg:flex-row justify-center text-center py-14 lg:px-24'>
                                        <div className='flex flex-col lg:w-1/4 my-4 mx-0.5 border-2 hover:border-4 hover:border-sky-600 hover:rounded-xl'>
                                            <div className='flex flex-col items-center text-white'>
                                                <div className='p-2 bg-emerald-600 text-xl w-full rounded-t-lg'>Starter</div>
                                                <div className='pt-4 flex flex-row justify-center items-center w-full bg-slate-800'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 stroke-white stroke-2' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
                                                            <line x1="7" y1="9" x2="18" y2="9" />
                                                        </svg>
                                                    </div>
                                                    <div className='text-4xl font-sans'>35,000</div>
                                                </div>
                                                <div className='pb-4 text-sm w-full bg-slate-800'>per month</div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Social Media Optimization</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>8 Facebook Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>8 Instagram Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>8 LinkedIn Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>8 Twitter Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300 text-gray-400'>YouTube Posts</div>
                                                </div>
                                                <div className='bg-slate-100 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Search Engine Optimization</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>5 Keywords</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>All On-Page Features Included</div>
                                                    <div className='p-1 border-b-2 border-slate-300 font-semibold'>Off-Page SEO</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>5 Citations</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>40 Backlinks</div>
                                                </div>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Content Marketing</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>2 SEO Optimized Blogs</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Featured Image for Each Blog</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Each Blog Promoted on 6 Sites</div>
                                                    
                                                </div>
                                                <div className='bg-slate-100 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Email Marketing</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>500 Subscribers/Contacts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>1 Email Campaign</div>
                                                </div>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Paid Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300 text-gray-400'>Google Ads Campaign</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>1 Facebook/Instagram Paid Ad Campaign</div>
                                                    <div className='p-1 border-b-2 border-slate-300 text-gray-400'>LinkedIn Paid Campaign</div>
                                                    <div className='p-1 border-b-2 border-slate-300 text-gray-400'>Twitter Paid Campaign</div>
                                                </div>
                                            </div>
                                            <div className='w-full bg-sky-600 text-white text-2xl p-2 rounded-b-lg '><Link href="/contact-us"><a>Sign up</a></Link></div>
                                        </div>
                                        <div className='flex flex-col lg:w-1/4 my-4 mx-0.5 border-2 hover:border-4 hover:border-sky-600 hover:rounded-xl'>
                                            <div className='flex flex-col items-center text-white'>
                                                <div className='p-2 bg-emerald-600 text-xl w-full rounded-t-lg'>Standard</div>
                                                <div className='pt-4 flex flex-row justify-center items-center w-full bg-slate-800'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 stroke-white stroke-2' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
                                                            <line x1="7" y1="9" x2="18" y2="9" />
                                                        </svg>
                                                    </div>
                                                    <div className='text-4xl font-sans'>65,000</div>
                                                </div>
                                                <div className='pb-4 text-sm w-full bg-slate-800'>per month</div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Social Media Optimization</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>20 Facebook Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>20 Instagram Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>20 LinkedIn Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>20 Twitter Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>1 YouTube Post</div>
                                                </div>
                                                <div className='bg-slate-100 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Search Engine Optimization</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>10 Keywords</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>All On-Page Features Included</div>
                                                    <div className='p-1 border-b-2 border-slate-300 font-semibold'>Off-Page SEO</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>15 Citations</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>100 Backlinks</div>
                                                </div>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Content Marketing</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>4 SEO Optimized Blogs</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Featured Image for Each Blog</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Each Blog Promoted on 12 Sites</div>
                                                    
                                                </div>
                                                <div className='bg-slate-100 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Email Marketing</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>2000 Subscribers/Contacts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>2 Email Campaigns</div>
                                                </div>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Paid Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>1 Google Ads Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>2 Facebook/Instagram Paid Ad Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>2 LinkedIn Paid Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>2 Twitter Paid Campaigns</div>
                                                </div>
                                            </div>
                                            <div className='w-full bg-sky-600 text-white text-2xl p-2 rounded-b-lg '><Link href="/contact-us"><a>Sign up</a></Link></div>
                                        </div>
                                        <div className='flex flex-col lg:w-1/4 my-4 mx-0.5 border-2 hover:border-4 hover:border-sky-600 hover:rounded-xl'>
                                            <div className='flex flex-col items-center text-white'>
                                                <div className='p-2 bg-emerald-600 text-xl w-full rounded-t-lg'>Plus</div>
                                                <div className='pt-4 flex flex-row justify-center items-center w-full bg-slate-800'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 stroke-white stroke-2' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
                                                            <line x1="7" y1="9" x2="18" y2="9" />
                                                        </svg>
                                                    </div>
                                                    <div className='text-4xl font-sans'>85,000</div>
                                                </div>
                                                <div className='pb-4 text-sm w-full bg-slate-800'>per month</div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Social Media Optimization</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>30 Facebook Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>30 Instagram Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>30 LinkedIn Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>30 Twitter Posts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>4 YouTube Post</div>
                                                </div>
                                                <div className='bg-slate-100 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Search Engine Optimization</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>25 Keywords</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>All On-Page Features Included</div>
                                                    <div className='p-1 border-b-2 border-slate-300 font-semibold'>Off-Page SEO</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>25 Citations</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>250 Backlinks</div>
                                                </div>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Content Marketing</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>8 SEO Optimized Blogs</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Featured Image for Each Blog</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Each Blog Promoted on 32 Sites</div>
                                                    
                                                </div>
                                                <div className='bg-slate-100 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Email Marketing</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>5000 Subscribers/Contacts</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>4 Email Campaigns</div>
                                                </div>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Paid Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>5 Google Ads Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>5 Facebook/Instagram Paid Ad Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>5 LinkedIn Paid Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>5 Twitter Paid Campaigns</div>
                                                </div>
                                            </div>
                                            <div className='w-full bg-sky-600 text-white text-2xl p-2 rounded-b-lg '><Link href="/contact-us"><a>Sign up</a></Link></div>
                                        </div>
                                        <div className='flex flex-col lg:w-1/4 my-4 mx-0.5 border-2 hover:border-4 hover:border-sky-600 hover:rounded-xl'>
                                            <div className='flex flex-col items-center text-white'>
                                                <div className='p-2 bg-emerald-600 text-xl w-full rounded-t-lg'>Customized</div>
                                                <div className='pt-4 flex flex-row justify-center items-center w-full bg-slate-800'>
                                                    <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 stroke-white stroke-2' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
                                                            <line x1="7" y1="9" x2="18" y2="9" />
                                                        </svg>
                                                    </div>
                                                    <div className='text-4xl font-sans'>Custom</div>
                                                </div>
                                                <div className='pb-4 text-sm w-full bg-slate-800'>per month</div>
                                            </div>
                                            <div className='w-full'>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Social Media Optimization</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                </div>
                                                <div className='bg-slate-100 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Search Engine Optimization</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized On-Page Features</div>
                                                    <div className='p-1 border-b-2 border-slate-300 font-semibold'>Off-Page SEO</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                </div>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Content Marketing</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                    
                                                </div>
                                                <div className='bg-slate-100 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Email Marketing</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Customized</div>
                                                </div>
                                                <div className='bg-slate-200 p-2'>
                                                    <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>Paid Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Custom Google Ads Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Custom Facebook/Instagram Paid Ad Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Custom LinkedIn Paid Campaigns</div>
                                                    <div className='p-1 border-b-2 border-slate-300'>Custom Twitter Paid Campaigns</div>
                                                </div>
                                            </div>
                                            <div className='w-full bg-sky-600 text-white text-2xl p-2 rounded-b-lg '><Link href="/contact-us"><a>Sign up</a></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="py-10 font-serif bg-slate-900">
                                    <div className="p-4 flex flex-col justify-center text-center">
                                        <div className="px-2 py-10 text-3xl text-white">Delivering Superior Performance Since 2012</div>
                                        <div className="py-4 px-2 lg:flex lg:justify-around">
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-mono">12k</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Keywords</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-sans">$4m</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Ad Spend</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-8 py-2 text-6xl text-sky-300 font-sans">$60m</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Sales</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-sans">120m</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Community Members</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-sans">500m</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Emails</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 px-4 py-14">
                                    <div className="pb-4 text-center text-3xl text-slate-700">Start Your Custom Digital Marketing Project in 4 Easy Steps</div>
                                    <div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-700 stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M12 16v-8l-2 2" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Define Scope of Work</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2 ">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-700 stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M10 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Mutually Decide the Payment Terms</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-700 stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M12 12a2 2 0 1 0 -2 -2" />
                                                                <path d="M10 14a2 2 0 1 0 2 -2" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Provide Information - Fill a Questionnaire</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-emerald-700 stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M13 16v-8l-4 6h5" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Start the Project Immediately</div>
                                                    </div>  
                                                </div>   
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 px-4 py-14">
                                    <div className="py-14">
                                        <ContactFormVertical />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-600">
                            <div>Section 7</div>
                        </div>
                        <div className="bg-slate-700">
                            <div>Section 8</div>
                        </div>
                        <div className="bg-gray-200">
                            <div>Section 9</div>
                        </div>
                        <div className="bg-gray-300">
                            <div>Section 10</div>
                        </div>
                        <div className="bg-gray-400">
                            <div>Section 11</div>
                        </div>
                    </div>
                </div>
            </main>
            
        </Layout>
    )
}
export default DigitalMarketingIndexPage