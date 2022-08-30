import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/nav/layout'

const AboutUsIndexPage = () => {
    return (
        <Layout>
            <Head>
                <title>SixPL - Company Overview</title>
            </Head>
            <main>
                <div className='flex justify-center'>
                    <div className=' flex flex-col font-serif justify-center items-center'>
                        <div className='flex flex-col lg:flex-row m-4 lg:m-20 lg:px-14 font-serif'>
                            <div className=' flex flex-col bg-gray-100 py-4 font-serif rounded-xl'>
                                <Link href='/about-us'><a className='py-2 px-4 text-lg underline underline-offset-4 hover:text-sky-700 text-sky-700'>Company Overview</a></Link>
                                <Link href='/about-us/saket-kumar-singh'><a className='py-2 px-4 text-lg underline underline-offset-4 hover:text-sky-700 '>The Founder</a></Link>
                            </div>
                            <div className='flex flex-col justify-center items-center px-4 lg:px-14 border-2 rounded-xl max-w-2xl'>
                                
                                    <div><h1 className=' text-3xl text-gray-700 py-4'>Company Overview</h1></div>
                                    <small className='pb-4'>Information updated on Aug 31, 2022</small>
                                    <table className=' text-lg max-w-2xl'>
                                        <thead>
                                            <th></th>
                                            <th></th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className='pr-4 py-2'>Established</td>
                                                <td className='pl-4 py-2'>May 16, 2012</td>
                                            </tr>
                                            <tr>
                                                <td className='pr-4 py-2'>Founder</td>
                                                <td className='pl-4 py-2'>Saket Kumar Singh</td>
                                            </tr>
                                            <tr>
                                                <td className='pr-4 py-2'>Clients</td>
                                                <td className='pl-4 py-2'>1610</td>
                                            </tr>
                                            <tr>
                                                <td className='pr-4 py-2'>Projects</td>
                                                <td className='pl-4 py-2'>2420</td>
                                            </tr>
                                            <tr>
                                                <td className='pr-4 py-2'>Client Retention Rate</td>
                                                <td className='pl-4 py-2'>75%</td>
                                            </tr>
                                            <tr>
                                                <td className='pr-4 py-2'>Headquarters</td>
                                                <td className='pl-4 py-2'>16192 Coastal Highway, Lewes, Delaware, 19958</td>
                                            </tr>
                                            <tr>
                                                <td className='pr-4 py-2'>Delivery Center</td>
                                                <td className='pl-4 py-2'>M 138, 2nd Floor, Connaught Place, New Delhi, 110001</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                
                            </div>  
                        </div>
                        <div className='flex flex-col m-4 px-4 lg:mx-20 lg:px-24 font-serif max-w-5xl text-xl text-gray-700'>
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
                                <span className='text-4xl font-serif text-sky-900'>2021</span> &nbsp; Commenced Web3 development, including full-stack blockchain-based product development, smart contracts development, etc
                            </p>
                            <p className='py-4'>
                                <span className='text-4xl font-serif text-sky-900'>2019</span> &nbsp; Launched NodeJS-based web application development services
                            </p>
                            <p className='py-4'>
                                <span className='text-4xl font-serif text-sky-900'>2017</span> &nbsp; Introduced blockchain-based services, including ICO marketing and community management services
                            </p>
                            <p className='py-4'>
                                <span className='text-4xl font-serif text-sky-900'>2016</span> &nbsp; Launched New tech vertical offering web development services, especially Wordpress development
                            </p>
                            <p className='py-4'>
                                <span className='text-4xl font-serif text-sky-900'>2014</span> &nbsp; Introduced Digital Marketing Services such as search engine optimization, pay-per-click advertising, and social media marketing services
                            </p>
                            <p className='py-4'>
                                <span className='text-4xl font-serif text-sky-900'>2012</span> &nbsp; Established with a vision to provide content development services in six hours
                            </p>
                            <div className=' flex justify-center'>
                                <div className=' flex flex-col items-center justify-center py-2 px-10 my-10 bg-sptheme-darkgreen text-white max-w-lg rounded-lg sm:text-2xl hover:bg-slate-300 hover:text-slate-800 '>
                                    <Link href="/contact-us">Explore Possibilities</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </Layout>
    )
}
export default AboutUsIndexPage