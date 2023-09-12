import Head from 'next/head'

import Service from '../../../components/services/service'
import Layout from '../../../components/nav/layout'
import ContactFormVertical from '../../../components/forms/Contact-form-vertifical'
import Clients from '../../../components/services/clients';
import Services from '../../../components/services/Services'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import { services } from '../../../lib/data/services-details'

const resumeWriting = {
    mainSection: services.resumeWriting.mainSection,
    clients: services.resumeWriting.clients,
    whyHireUs: services.resumeWriting.whyHireUs,
    achievement: services.resumeWriting.achievement,
    startProject: services.resumeWriting.startProject,
    faq: services.resumeWriting.faq
}


const ResumeWritingPage = () => {
    return (
        <Layout>
            <Head>
                <title>Resume Writing Services | Professional Resume Writers</title>
                <meta name="description" content="Best resume writing services from professional resume writers. Resume designing helps you craft a perfect resume for your dream job. Resume help. SixPL"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/content/resume-writing-services.jpeg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Resume Writing Services | Professional Resume Writers'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/content/resume-writing-services.jpeg' />
                <meta name='twitter:description' content='Best resume writing services from professional resume writers. Resume designing helps you craft a perfect resume for your dream job. Resume help. SixPL'/>
            </Head>
            <main>
                <div>
                    {/* <div className="flex flex-col ">
                        <div className=' relative'>
                            <Image priority src='/images/dm-icons/top-background.svg' layout='fill' objectFit='cover' objectPosition='left' quality={100}  />
                            <div className=' relative z-10 flex flex-col text-white'>
                                <div>
                                    <div className="flex flex-col px-4 py-8 items-center text-center">
                                        <h1 className="text-4xl py-4">Grab Your Dream Job With a Perfect Resume</h1>
                                        <p className="text-2xl py-2">Showcase Your Experience, Skills, & Expertise in a Compelling Way</p>
                                    </div>
                                </div>
                            <div>
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 px-4 py-14">
                                        <div className="pb-4 text-center text-3xl">Hire #1 Resume Writing Company</div>
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
                                                            <div className="py-2 text-2xl">Quick Support</div>
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
                                                            <div className="py-2 text-2xl">Resume Writing & Designing Services</div>
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
                                                            <div className="py-2 text-2xl">Reflects Your Personality</div>
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
                                                            <div className="py-2 text-2xl">Single & Multi-Page Formats</div>
                                                        </div>  
                                                    </div>   
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 px-4 py-14">
                                        <div className='text-gray-700'>
                                            <ContactFormVertical />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='  '>
                            <div className="flex flex-col ">
                                <div>
                                    <div className="flex flex-col px-4 py-8 items-center text-center ">
                                        <h2 className="text-3xl py-4 text-sptheme-darkgreen">Get More Interview Calls with an Outstanding Resume</h2>
                                        <p className="text-2xl py-2">Let our Expert writers showcase your professional credentials in an attractive way </p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col md:px-40">
                                        <div className="flex flex-col items-center lg:flex-row justify-center">
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24"  viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <circle cx="10" cy="10" r="7" />
                                                            <line x1="7" y1="10" x2="13" y2="10" />
                                                            <line x1="10" y1="7" x2="10" y2="13" />
                                                            <line x1="21" y1="21" x2="15" y2="15" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Resume for CXOs</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <circle cx="7" cy="5" r="2" />
                                                            <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                                                            <circle cx="17" cy="5" r="2" />
                                                            <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Resume Writing Services for Freshers</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <circle cx="10" cy="10" r="7" />
                                                            <path d="M21 21l-6 -6" />
                                                            <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                                            <path d="M10 13v1m0 -8v1" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Resume for Mid-Level Professionals</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center lg:flex-row justify-center">
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <rect x="3" y="5" width="18" height="14" rx="4" />
                                                            <path d="M10 9l5 3l-5 3z" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Resume Designing Services</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <line x1="10" y1="14" x2="21" y2="3" />
                                                            <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                                                        </svg>

                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Time Delivery </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Plagiarism Free</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center lg:flex-row justify-center">
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <rect x="4" y="4" width="16" height="16" rx="4" />
                                                            <circle cx="12" cy="12" r="3" />
                                                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">LinkedIn Profile</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5" />
                                                            <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
                                                            <path d="M16 7h4" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Letter of Recommendation (LOR)</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <rect x="4" y="4" width="16" height="16" rx="2" />
                                                            <line x1="8" y1="11" x2="8" y2="16" />
                                                            <line x1="8" y1="8" x2="8" y2="8.01" />
                                                            <line x1="12" y1="16" x2="12" y2="11" />
                                                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Clear Career Objective</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center lg:flex-row justify-center">
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Resume Writing for All Industries</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275" />
                                                            <path d="M11.683 12.317l5.759 -5.759" />
                                                            <circle cx="5.5" cy="5.5" r="1.5" />
                                                            <circle cx="18.5" cy="5.5" r="1.5" />
                                                            <circle cx="18.5" cy="18.5" r="1.5" />
                                                            <circle cx="8.5" cy="15.5" r="4.5" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700">Resume Writing for International Job Applicants</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="flex flex-col items-center text-center p-2">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                                                    <div className="py-2 text-2xl text-gray-700">Keywords Optimized</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="py-10  bg-slate-900">
                                    <div className="p-4 flex flex-col justify-center text-center">
                                        <div className="px-2 py-10 text-3xl text-white">Delivering Superior Content Writing Services Since 2012</div>
                                        <div className="py-4 px-2 lg:flex lg:justify-around">
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-mono">10</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Years</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-sans">23</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Industries</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-8 py-2 text-6xl text-sky-300 font-sans">26</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Countries</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-sans">1100+</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Clients</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-sans">13m</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Words</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 px-4 py-14">
                                    <div className="pb-4 text-center text-3xl text-sptheme-darkgreen">Start Your Custom Resume Writing Project in 4 Easy Steps</div>
                                    <div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M12 16v-8l-2 2" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Share Your Requirements</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2 ">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M10 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Mutually Decide the Budgeting</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M13 16v-8l-4 6h5" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Start the Project</div>
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
                        <div className="bg-slate-700">
                            <div>
                                <div className="flex flex-col px-4 py-8  items-center text-center">
                                    <div className="text-3xl py-4 text-white">Frequently Asked Questions</div>
                                    <div className="text-xl py-2xl text-white">Read some common questions related to our services and their answers</div>
                                </div>   
                            </div>
                            <div>
                                <div className='lg:px-40 py-10  '>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Can I use the same resume for multiple jobs?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>The answer is Yes and No, both. Based on the companies you apply for, it may vary. If you want to apply for identical jobs in the same industry, you may go ahead and use the same resume. However, if the jobs or industry patterns vary, it is highly recommended to customize resume to match with the specific industry.</div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Do you help with proofreading/editing my existing resume?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>Yes, you may share your current resume with us for proofreading and betterment. We will edit and modify it with the help of our expert resume writers. </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Will my resume be the same as any other candidate in the industry who might avail of your services too?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            Definitely not. We understand how important it is to stand out in a crowd and that is something that sets us apart. We draft each resume differently catering to the needs and aims of a particular candidate. Even though a resume is not the only criteria for selection and personal interviews have a major role to play in the process, we do make sure each resume is unique and candidate-specific.
                                        </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>What are your total years of experience in this field?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            We have been helping candidates grow in their careers with the most efficiently drafted resumes since 2012.
                                        </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Can you share any sample resumes?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            Yes, you may send request for the same and we would be happy to help you with sample resumes.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div> */}
                    <div className="flex flex-col">
                    <Service
                        title={resumeWriting.mainSection.title}
                        heading={resumeWriting.mainSection.heading}
                        subHeading={resumeWriting.mainSection.subheading}
                        headingCall={resumeWriting.mainSection.headingCall}
                        tags={resumeWriting.mainSection.tags}
                    />
                    <Clients heading={resumeWriting.clients.heading} />
                    <Services whyHireUs={resumeWriting.whyHireUs} />
                    <Flex achievement={resumeWriting.achievement} />
                    <FAQs faqs={resumeWriting.faq} />
                </div>
                </div>
            </main>
        </Layout>
    )
}
export default ResumeWritingPage