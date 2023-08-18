import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'
import { services } from '../../../lib/data/services-details'
import Service from '../../../components/services/service'
import Services from '../../../components/services/Services'
import Clients from '../../../components/services/clients'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import ContactFormVertical from '../../../components/forms/contact-form-vertifical'

const contentWriting = {
    mainSection: services.contentWriting.mainSection,
    clients: services.contentWriting.clients,
    whyHireUs: services.contentWriting.whyHireUs,
    achievement: services.contentWriting.achievement,
    package: services.contentWriting.package,
    faq: services.contentWriting.faq,
}

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
                    <div className="flex flex-col bg-indigo-50/50">
                        {/* <div className=' relative'>
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
                        </div> */}
                         <Service title={contentWriting.mainSection.heading}
                            heading={contentWriting.mainSection.heading}
                            subHeading={contentWriting.mainSection.subheading}
                            headingCall={contentWriting.mainSection.headingCall}
                            tags={contentWriting.mainSection.tags} 
                            description={contentWriting.mainSection.description}
                            />
                        <div className='bg-indigo-50/50'>
                            <div className="flex flex-col ">
                                <div>
                                    <div className="flex flex-col px-4 py-8 items-center text-center ">
                                        <h2 className="text-3xl py-4 text-gray-700 font-semibold">What makes SixPL the Best Content Writing Agency!</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col md:px-40">
                                        <div className="flex flex-col items-center lg:flex-row justify-center">
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52">
                                                <div className="px-7 mb-5 border border-gray-200 mx-auto rounded-lg flex flex-col justify-center items-center bg-indigo-50/50 shadow-2xl shadow-indigo-50 gap-4
                            hover:scale-105 ease-in-out duration-200 cursor-pointer lg:h-72">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 stroke-sptheme-darkgreen stroke-1"  viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <circle cx="10" cy="10" r="7" />
                                                            <line x1="7" y1="10" x2="13" y2="10" />
                                                            <line x1="10" y1="7" x2="10" y2="13" />
                                                            <line x1="21" y1="21" x2="15" y2="15" />
                                                        </svg>
                                                    </div>
                                                    <div className="text-2xl font-semibold text-gray-700">Certified Writers</div>
                                                    <div className='pt-2 pb-4 text-lg text-justify'>
                                                        <p className='text-gray-500 text-lg'>
                                                            Our certified and expert writers have a voracious appetite for reading and writing content. We deliver excellent quality write ups for every niche.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="px-7 mb-5 border border-gray-200 mx-auto rounded-lg flex flex-col justify-center items-center bg-indigo-50/50 shadow-2xl shadow-indigo-50 gap-4
                            hover:scale-105 ease-in-out duration-200 cursor-pointer lg:h-72">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1 hover:stroke-slate-600 hover:w-24 hover:h-24' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <circle cx="7" cy="5" r="2" />
                                                            <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                                                            <circle cx="17" cy="5" r="2" />
                                                            <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl font-semibold text-gray-700">Original Content</div>
                                                    <div className='pt-2 pb-4 text-lg text-justify'>
                                                        <p className='text-gray-500 text-lg'>
                                                            Don’t worry! We too hate copycats. We not only write plagiarism-free, original content but also craft compelling message that will inspire your audience.
                                                        </p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="px-4 py-4 lg:w-1/3 lg:h-52 ">
                                                <div className="px-7 mb-5 border border-gray-200 mx-auto rounded-lg flex flex-col justify-center items-center bg-indigo-50/50 shadow-2xl shadow-indigo-50 gap-4
                            hover:scale-105 ease-in-out duration-200 cursor-pointer lg:h-72">
                                                    <div className="py-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen ' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <circle cx="10" cy="10" r="7" />
                                                            <path d="M21 21l-6 -6" />
                                                            <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                                            <path d="M10 13v1m0 -8v1" />
                                                        </svg>
                                                    </div>
                                                    <div className="py-2 text-2xl text-gray-700 font-semibold">Tight Deadlines</div>
                                                    <div className=''>
                                                        <p className='text-gray-500 text-lg'>
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
                            {/* <div className="flex flex-col border-2 border-red-600 mt-32 lg:mx-24">
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
                            </div> */}

                            <div className='lg:mt-32 lg:-mb-14 '>
                            <Clients heading={contentWriting.clients.heading}/>
                            </div>
                        <Services whyHireUs={contentWriting.whyHireUs}/>
                        <div className='bg-indigo-50/50 rounded-2xl'>
                            <div className='flex flex-col -mt-10'>
                                <div>
                                    <div className="flex flex-col px-4 py-8 items-center text-center ">
                                        <h2 className="text-3xl py-4 text-gray-600 font-semibold">Content Writing Services</h2>
                                        <p className="text-base font-semibold leading-7 text-indigo-600">Hire Subject Matter Experts and Avail All Types of Writing Services</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col lg:flex-row mx-4 lg:mx-40 py-8 text-lg'>
                                        <div className='px-4 lg:px-10 text-justify lg:w-1/2'>
                                            <p className='text-gray-600 text-lg'>
                                                At SixPL, we create content to meet all your marketing, technical & academic needs. Our expert team of writers is equipped with robust knowledge about various domains. <br/>
                                                We are adept at delivering informative and high-quality articles. Our primal focus is on customer engagement and retention. We write pieces of content that provide an in-depth analysis, actionable insights, and valuable tips. <br/>
                                                Many of our blogs have been shared by thousands of users across various platforms. Some of them have also been published on Forbes, HuffPost, Entrepreneur, INC, and other prominent international publications. <br/>
                                            </p>
                                        </div>
                                        <div className='px-4 lg:px-8 text-justify lg:w-1/2'>
                                            <p className='text-lg text-gray-600'>
                                                Since inception, we have delivered more than 18 million words to 1400 clients from 23 countries around the world. Our customer retention rate is around 95%. 
                                                This is why 80% of our work has been accepted the very first time and never returned to us for revision. <br/><br/>
                                                We do have our fair share of failures too. In the past ten years, 54 pieces of content have been rejected by the clients. We have introspected and ensured that this number goes down in the next ten years.<br/>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className=' pb-8'>
                                    <div className="flex flex-col px-4 py-8 items-center text-center ">
                                        <h2 className="text-2xl py-4 text-gray-700 font-semibold">Our Approach</h2>
                                        <p className="text-base font-semibold leading-7 text-indigo-600">To ensure the quality of the content, we strictly adhere to the following approach:</p>
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
                                                    <p className='text-gray-700 text-lg'>
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
                                                    <p className='text-gray-700 text-lg'>
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
                                                    <p className='text-gray-700 text-lg'>
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
                                                    <p className='text-gray-700 text-lg'>
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
                                                    <p className='text-gray-700 text-lg'>
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
                                                    <p className='text-gray-700 text-lg'>
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
                                                    <p className='text-gray-700 text-lg'>
                                                        We strictly adhere to the deadline – no exceptions, no excuses, and no explanations
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Flex achievement={contentWriting.achievement}/>
                        <FAQs faqs={contentWriting.faq}/>
                    </div>
            </main>
        </Layout>
    )
}
export default ContentWritingPage