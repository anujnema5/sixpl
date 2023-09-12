import Head from 'next/head'
import Service from '../../../components/services/service'
import Layout from '../../../components/nav/layout'
import ContactFormVertical from '../../../components/forms/Contact-form-vertifical'
import Clients from '../../../components/services/clients';
import Services from '../../../components/services/Services'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import { services } from '../../../lib/data/services-details'

const sopWriting = {
    mainSection: services.sopWriting.mainSection,
    clients: services.sopWriting.clients,
    whyHireUs: services.sopWriting.whyHireUs,
    achievement: services.sopWriting.achievement,
    startProject: services.sopWriting.startProject,
    faq: services.sopWriting.faq
}


const SOPWritingPage = () => {
    return (
        <Layout>
            <Head>
                <title>SOP Writing Services | Hire Best SOP Writers - SixPL</title>
                <meta name="description" content="Hire SOP writer or get Statement of Purpose writing services. Our SOP & LOR services deliver custom SOP for University of choice. Talk to SOP writers @SixPL now" />
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/content/sop-writing-services.jpeg' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:title' content='SOP Writing Services | Hire Best SOP Writers - SixPL' />
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/content/sop-writing-services.jpeg' />
                <meta name='twitter:description' content='Hire SOP writer or get Statement of Purpose writing services. Our SOP & LOR services deliver custom SOP for University of choice. Talk to SOP writers @SixPL now' />
            </Head>
            <main>
                {/* <div>
                    <div className="flex flex-col ">
                        <div className=' relative'>
                            <Image priority src='/images/dm-icons/top-background.svg' layout='fill' objectFit='cover' objectPosition='left' quality={100}  />
                            <div className=' relative z-10 flex flex-col text-white'>
                            <div>
                                <div className="flex flex-col px-4 py-8 items-center text-center">
                                    <h1 className="text-4xl py-4">Magnify The Chances Of Acceptance From Your Dream University Abroad</h1>
                                    <p className="text-2xl py-2">Well crafted Statement Of  Purpose (SOP) writing services designed to improve your chances of getting into that reputed educational institution of your choice</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 px-4 py-14">
                                        <div className="pb-4 text-center text-3xl">Hire Expert SOP Writers</div>
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
                                                            <div className="py-2 text-2xl">Customized SOP for Various Institutions</div>
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
                                                            <div className="py-2 text-2xl">Showcases Your Profile & Accomplishments</div>
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
                                                            <div className="py-2 text-2xl">Creative Approach to Stand Out among Other Applicants </div>
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
                                                            <div className="py-2 text-2xl">Adheres to Instituins' Specific Requirements</div>
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
                                        <h2 className="text-3xl py-4 text-sptheme-darkgreen">Come Across as the Most Deserving Candidate among Hundreds of Applicants</h2>
                                        <p className="text-2xl py-2">Get the most outstanding SOP written by professionals who know exactly what they need to deliver</p>
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
                                                    <div className="py-2 text-2xl text-gray-700">100% Plagiarism Free</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Customized SOP</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Refusal SOP</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Letter of Recommendation</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Timely Delivery</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Error Free</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Free Revisions, if needed</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Persuasive SOP Writing</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Qualified Writers</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Based on Students' Interest & Profile</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Excellent Acceptance Record</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Strict Adherence to Tight Deadlines</div>
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
                                    <div className="pb-4 text-center text-3xl text-sptheme-darkgreen">Start Your Custom SOP Writing Project in 4 Easy Steps</div>
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
                                                        <div className="py-2 text-2xl text-gray-700">SOP Requirements Analysis</div>
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
                                                        <div className="py-2 text-2xl text-gray-700">Decide Budgeting</div>
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
                                                        <div className="py-2 text-2xl text-gray-700">Send Your Resume/Profile</div>
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
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Why do I need to hire a professional SOP writer?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>An intelligently crafted SOP showcasing your personality, interests, goals and worth without overdoing it is crucial for your selection process. Professional and skilled writers have the experience of maintaining the right tone while inculcating all of it into your SOP. Hence, it is advised to rely on a professional SOP writer to project yourself in the best way giving you an edge over other candidates.</div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Will you write the entire SOP for me or I will have to share some write-up too?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>We will need you to share with us some of your basic details. We would understand from you your motivation behind selecting a specific program, your accomplishments that may enhance your chances of acceptance, your previous experience in the subject, the reason for your selecting the particular subject, your funding plans, your aim after the course completion etc. Based on these details and your personal and professional outlook we would take care of the rest by drafting the most suitable SOP for you. </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Can I use the same SOP for all universities?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            No. We would not encourage doing the same as every course, program or institute has different benchmarks and requirements. Each SOP needs to be crafted accordingly. Each subject and university will have different scopes for research and internship. Hence, we would highly recommend getting customized SOPs as per each course structure.
                                        </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Before going ahead, Can I see some SOP samples done by your team?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            Absolutely. If you wish to go through some of our previously drafted SOPs for other clients, we can share them with you as samples.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div> */}

                <div className="flex flex-col">
                    <Service
                        title={sopWriting.mainSection.title}
                        heading={sopWriting.mainSection.heading}
                        subHeading={sopWriting.mainSection.subheading}
                        headingCall={sopWriting.mainSection.headingCall}
                        tags={sopWriting.mainSection.tags}
                    />
                    <Clients heading={sopWriting.clients.heading} />
                    <Services whyHireUs={sopWriting.whyHireUs} />
                    <Flex achievement={sopWriting.achievement} />
                    <FAQs faqs={sopWriting.faq} />
                </div>
            </main>
        </Layout>
    )
}
export default SOPWritingPage