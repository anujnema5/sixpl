import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/nav/layout'
import ContactFormVertical from '../components/forms/contact-form-vertifical'

const ContactUsPage = () => {
    return(
        <Layout>
            <Head>
                <title>SixPL - Contact Us</title>
            </Head>
            <main>
                <div>
                    <div className="flex flex-col font-serif">
                        <div className=' flex flex-col'>
                            <div>
                                <div className="flex flex-col px-4 py-8 items-center text-center">
                                    <h1 className="text-4xl py-4">Contact Us to Start Your Project Now</h1>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col lg:flex-row justify-center ">
                                    <div className="px-10 py-14">
                                        <div className="pb-4 text-center text-3xl">Ways to Connect</div>
                                        <div>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col">
                                                    <div className='px-4 py-2'>
                                                        <div className="flex flex-row flex-1 items-center text-center p-2">
                                                            <div className="px-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 stroke-sptheme-darkgreen' viewBox="0 0 24 24" strokeWidth="1" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                                                </svg>
                                                            </div>
                                                            <div className='flex flex-col font-sans text-lg'>
                                                                <Link href="tel:+17795452612"><a className='py-1 px-2'>US: +1 779 545 2612</a></Link>
                                                                <Link href="tel:+919318464366"><a className='py-1 px-2'>IN: +91 9318484366</a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <div className="flex flex-row items-center text-center p-2 ">
                                                            <div className="px-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 stroke-sptheme-darkgreen' viewBox="0 0 24 24" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                                                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <Link href="https://api.whatsapp.com/send?phone=919318463840"><a className=' text-lg px-2'>Click to Chat</a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <div className="flex flex-row items-center text-center p-2 ">
                                                            <div className="px-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 stroke-sptheme-darkgreen' viewBox="0 0 24 24" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1 -5.953 5.953a9 9 0 0 1 -11.253 -11.253a4.5 4.5 0 0 1 5.953 -5.954a8.987 8.987 0 0 1 2.65 -.396z" />
                                                                <path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4 -1.187 4 -2.5c0 -1.503 -1.927 -2.5 -4 -2.5s-4 -.997 -4 -2.5c0 -1.313 1.095 -2.5 4 -2.5c1.642 0 3.5 .5 4 2.5" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <Link href="skype:sixpl.com?chat "><a className=' text-xl px-2'>sixpl.com</a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <div className="flex flex-row items-center text-center p-2 ">
                                                            <div className="px-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 stroke-sptheme-darkgreen' viewBox="0 0 24 24" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <Link href="https://t.me/saketsp"><a className=' text-xl px-2'>sixplsp</a></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <div className="flex flex-row p-2 ">
                                                            <div className="px-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 stroke-sptheme-darkgreen' viewBox="0 0 24 24" strokWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <circle cx="12" cy="11" r="3" />
                                                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                                                </svg>
                                                            </div>
                                                            <div className='px-2'>
                                                                <h2 className='text-2xl font-serif text-gray-700 font-semibold'>USA Headquarter</h2>
                                                                <p>SixPL</p>
                                                                <p>16192 Coastal Highway</p>
                                                                <p>Lewes, DE 19958</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='px-4 py-2'>
                                                        <div className="flex flex-row p-2 ">
                                                            <div className="px-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 stroke-sptheme-darkgreen' viewBox="0 0 24 24" strokWidth="1" fill='none' strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                    <circle cx="12" cy="11" r="3" />
                                                                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                                                                </svg>
                                                            </div>
                                                            <div className='px-2'>
                                                                <h2 className='text-2xl font-serif text-gray-700 font-semibold'>India Development Center</h2>
                                                                <p>SixPL</p>
                                                                <p>M 138, 2nd Floor, Connaught Place</p>
                                                                <p>New Delhi, India, 110001</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 px-10 py-14">
                                        <div className='text-gray-700'>
                                            <ContactFormVertical />
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
export default ContactUsPage