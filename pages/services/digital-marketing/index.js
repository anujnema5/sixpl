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
                        <div className="">
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
                                                            </svg></div>
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
                        <div className="bg-slate-200">
                            <div>Section 3</div>

                        </div>
                        <div className="bg-slate-300">
                            <div>Section 4</div>
                        </div>
                        <div className="bg-slate-400">
                            <div>Section 5</div>
                        </div>
                        <div className="bg-slate-500">
                            <div>Section 6</div>
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