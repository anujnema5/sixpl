import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'
import ContactFormVertical from '../../../components/forms/contact-form-vertifical'

const ContentWritingPage = () => {
    return (
        <Layout>
            <Head>
                <title>Content Writing Services | Content Writing Agency - SixPL</title>
                <meta name="description" content="Hire #1 content writing agency. Get all types of content writing services. Hire content writers who are subject matter experts. 100% original content"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/content/content-writing-services.jpeg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Content Writing Services | Content Writing Agency - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/content/content-writing-services.jpeg' />
                <meta name='twitter:description' content='Hire #1 content writing agency. Get all types of content writing services. Hire content writers who are subject matter experts. 100% original content'/>
            </Head>
            <main>
                <div>
                    <div className="flex flex-col font-serif">
                        <div className=' relative'>
                            <Image priority src='/images/dm-icons/top-background.svg' layout='fill' objectFit='cover' objectPosition='left' quality={100}  />
                            <div className=' relative z-10 flex flex-col text-white'>
                            <div>
                                <div className="flex flex-col px-4 py-8 items-center text-center">
                                    <h1 className="text-4xl py-4">Hire #1 Content Writing Agency!</h1>
                                    <p className="text-2xl py-2">Avail a range of content writing services designed to meet your all content requirements.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 px-4 py-14 lg:py-2 ">
                                        <div className=" pt-16 py-8 text-center text-3xl">Get All Types of Content</div>
                                        <div>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col items-center lg:flex-row justify-center">
                                                    <div className="px-4 py-4 lg:h-52">
                                                        <div className="flex flex-col items-center p-2">
                
                                                            <div className="py-2 px-2 text-2xl">
                                                                An excellent content can make a significant difference to your business. Let us craft a message that captivates your audience and compel them to take a desired action. <br/><br/>
                                                                We are the only content writing agency in India with 15+ in-house writers. That is why 95% of our clients have placed multiple orders, and 80% of our work has been accepted very first time and never returned for revision. 
                                                            </div>
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
                            <div className="flex flex-col font-serif">
                                <div>
                                    <div className="flex flex-col px-4 py-8 items-center text-center ">
                                        <h2 className="text-3xl py-4 text-sptheme-darkgreen">What makes SixPL the Best Content Writing Agency!</h2>
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
                                                    <div className="py-2 text-2xl text-gray-700">Certified Writers</div>
                                                    <div className='pt-2 pb-4 text-lg text-justify'>
                                                        <p>
                                                            Our certified and expert writers have a voracious appetite for reading and writing content. We deliver excellent quality write ups for every niche.
                                                        </p>
                                                    </div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Original Content</div>
                                                    <div className='pt-2 pb-4 text-lg text-justify'>
                                                        <p>
                                                            Don’t worry! We too hate copycats. We not only write plagiarism-free, original content but also craft compelling message that will inspire your audience.
                                                        </p>
                                                    </div>
                                                    
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
                                                    <div className="py-2 text-2xl text-gray-700">Tight Deadlines</div>
                                                    <div className='pt-2 pb-4 text-lg text-justify'>
                                                        <p>
                                                            We can meet tight deadlines without compromising the quality. We are DOERS who can help you achieve the next milestone with super ease.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col font-serif mt-32 lg:mx-24">
                                <div className="flex flex-col px-4 py-8 items-center text-center bg-sptheme-lightgreen rounded-xl">
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
                        <div className='  '>
                            <div className="flex flex-col font-serif">
                                <div>
                                    <div className="flex flex-col px-4 py-8 items-center text-center ">
                                        <h2 className="text-3xl py-4 text-sptheme-darkgreen">Our Content Writing Services Include all Types of Content</h2>
                                        <p className="text-2xl py-2">Get in Touch with Us for any Other Content Writing Services Not Mentioned Here</p>
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
                                                    <div className="py-2 text-2xl text-gray-700">Copywriting</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Website Content</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Blogs</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Guest Posts</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Marketing Collaterals</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Sales Proposal</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Ad Copy</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Press Release</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Research Papers</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">White Paper</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Case Study</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Technical Documentations</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Product Manuals</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Course Curriculum</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Academic/Training Courses</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Movie/Video Scripts</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Fiction Writing</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Short Stories</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">News</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Editorials</div>
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
                                                    <div className="py-2 text-2xl text-gray-700">Statement of Purpose (SOP)</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-sky-50 rounded-2xl'>
                            <div className='flex flex-col font-serif'>
                                <div>
                                    <div className="flex flex-col px-4 py-8 items-center text-center ">
                                        <h2 className="text-3xl py-4 text-sptheme-darkgreen">Content Writing Services</h2>
                                        <p className="text-2xl py-2">Hire Subject Matter Experts and Avail All Types of Writing Services</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col lg:flex-row mx-4 lg:mx-40 py-8 text-lg'>
                                        <div className='px-4 lg:px-10 text-justify lg:w-1/2'>
                                            <p>
                                                At SixPL, we create content to meet all your marketing, technical & academic needs. Our expert team of writers is equipped with robust knowledge about various domains. <br/>
                                                We are adept at delivering informative and high-quality articles. Our primal focus is on customer engagement and retention. We write pieces of content that provide an in-depth analysis, actionable insights, and valuable tips. <br/>
                                                Many of our blogs have been shared by thousands of users across various platforms. Some of them have also been published on Forbes, HuffPost, Entrepreneur, INC, and other prominent international publications. <br/>
                                            </p>
                                        </div>
                                        <div className='px-4 lg:px-8 text-justify lg:w-1/2'>
                                            <p>
                                                Since inception, we have delivered more than 18 million words to 1400 clients from 23 countries around the world. Our customer retention rate is around 95%. 
                                                This is why 80% of our work has been accepted the very first time and never returned to us for revision. <br/><br/>
                                                We do have our fair share of failures too. In the past ten years, 54 pieces of content have been rejected by the clients. We have introspected and ensured that this number goes down in the next ten years.<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' pb-8'>
                                    <div className="flex flex-col px-4 py-8 items-center text-center ">
                                        <h2 className="text-2xl py-4 text-sptheme-darkgreen">Our Approach</h2>
                                        <p className="text-xl py-2">To ensure the quality of the content, we strictly adhere to the following approach:</p>
                                    </div>
                                    <div className='flex flex-col lg:flex-row text-lg text-justify text-gray-700 lg:mx-40 mx-4 lg:px-8'>
                                        <div className='flex flex-col lg:w-1/2 lg:px-8'>
                                            <div className='flex flex-row py-2 '>
                                                <div className='px-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className=' h-10 w-10 stroke-slate-700' viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <circle cx="12" cy="12" r="9" />
                                                        <line x1="15" y1="9" x2="9" y2="15" />
                                                        <polyline points="15 15 15 9 9 9" />
                                                    </svg>
                                                </div>
                                                <div className='px-2'>
                                                    <p>
                                                        We never outsource any part of the project. We have an in-house team which helps us maintain a high-level of control over the quality of service delivery
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row py-2'>
                                                <div className='px-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className=' h-10 w-10 stroke-slate-700' viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <circle cx="12" cy="12" r="9" />
                                                        <line x1="15" y1="9" x2="9" y2="15" />
                                                        <polyline points="15 15 15 9 9 9" />
                                                    </svg>
                                                </div>
                                                <div className='px-2'>
                                                    <p>
                                                        We share an outline of the content with the clients before getting started with the detailed draft
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row py-2'>
                                                <div className='px-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className=' h-10 w-10 stroke-slate-700' viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <circle cx="12" cy="12" r="9" />
                                                        <line x1="15" y1="9" x2="9" y2="15" />
                                                        <polyline points="15 15 15 9 9 9" />
                                                    </svg>
                                                </div>
                                                <div className='px-2'>
                                                    <p>
                                                        3-step editing process ensures impeccable output. In the first step, a writer proofreads the content; then we use an advanced proofreading software to spot the errors which usually go unnoticed by human proofreaders, and then in the final step, an experiened ediror edits & proofreads the content
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col lg:w-1/2 lg:px-8'>
                                            <div className='flex flex-row py-2'>
                                                <div className='px-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className=' h-10 w-10 stroke-slate-700' viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <circle cx="12" cy="12" r="9" />
                                                        <line x1="15" y1="9" x2="9" y2="15" />
                                                        <polyline points="15 15 15 9 9 9" />
                                                    </svg>
                                                </div>
                                                <div className='px-2'>
                                                    <p>
                                                        We Don’t make assumptions. We ask a lot of questions at the beginning of the project until we fully understand your exact requirements
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row py-2'>
                                                <div className='px-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className=' h-10 w-10 stroke-slate-700' viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <circle cx="12" cy="12" r="9" />
                                                        <line x1="15" y1="9" x2="9" y2="15" />
                                                        <polyline points="15 15 15 9 9 9" />
                                                    </svg>
                                                </div>
                                                <div className='px-2'>
                                                    <p>
                                                        As the project unfolds, the clients can see the progress on a real-time basis; the transparency helps us deliver high-quality content the very first time
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row py-2'>
                                                <div className='px-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className=' h-10 w-10 stroke-slate-700' viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <circle cx="12" cy="12" r="9" />
                                                        <line x1="15" y1="9" x2="9" y2="15" />
                                                        <polyline points="15 15 15 9 9 9" />
                                                    </svg>
                                                </div>
                                                <div className='px-2'>
                                                    <p>
                                                        Although the revision requests are minimal, we work on them to the full satisfaction of our clients
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='flex flex-row py-2'>
                                                <div className='px-2'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className=' h-10 w-10 stroke-slate-700' viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <circle cx="12" cy="12" r="9" />
                                                        <line x1="15" y1="9" x2="9" y2="15" />
                                                        <polyline points="15 15 15 9 9 9" />
                                                    </svg>
                                                </div>
                                                <div className='px-2'>
                                                    <p>
                                                        We strictly adhere to the deadline – no exceptions, no excuses, and no explanations
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="py-10 font-serif bg-slate-900">
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
                                    <div className="pb-4 text-center text-3xl text-sptheme-darkgreen">Start Your Custom Content Writing Project in 4 Easy Steps</div>
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
                                                        <div className="py-2 text-2xl text-gray-700">Tell us Your Requirements</div>
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
                                                        <div className="py-2 text-2xl text-gray-700">Finalize Budgeting</div>
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
                                                        <div className="py-2 text-2xl text-gray-700">Fill a Short Questionnaire</div>
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
                                    <div className="text-xl py-2 text-white">Read some common questions related to our services and their answers</div>
                                </div>   
                            </div>
                            <div>
                                <div className='lg:px-40 py-10 px-2 font-serif '>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>What kind of content can you write?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>We can write any type of content including website, blogs, white papers, technical writing, user manuals, user guides, academic content, training material, ebooks and any other type of content based on the requirements of the clients.</div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Can you write content for my Industry?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>Yes. We have several domain expert content consultants who write on a wide range of topics.</div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Where can I see samples of your work?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            You can either request the same via email or check a few samples at https://sixpl.com/content-writing-samples/. If you are looking for samples from particular industries, then you may request the same at sales@sixpl.com.
                                        </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>What if I don't like the content?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            We will make the required changes based on your feedback.
                                        </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>How do you ensure that content is 100% original?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            We use plagiarism detection applications such as Copyscape. With each delivery, we attach a report from Copyscape Premium.
                                        </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>What is your refund policy?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            Please Check our Refund Policy.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default ContentWritingPage