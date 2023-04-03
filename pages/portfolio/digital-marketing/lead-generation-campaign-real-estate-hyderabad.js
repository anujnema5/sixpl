import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'

const DM99ApartmentsPortfolioPage = () => {
    return (
        <Layout>
            <Head>
                <title>SixPL Portfolio - Lead Generation Campaign for a Small Real Estate Firm in Hyderabad</title>
            </Head>
            <main>
                <div className=' lg:mx-52'>
                    <div className=' flex flex-col my-10 mx-4 py-4 font-serif'>
                        <div>
                            <div className='py-10 px-4'>
                                <h1 className=' text-3xl text-sptheme-darkgreen text-center'>Lead Generation Campaign for a Small Real Estate Firm in Hyderabad</h1>
                            </div>
                            <div className='px-4'>
                                <p className='text-gray-600 text-center'>Portfolio {">"} Digital Marketing Services</p>
                            </div>
                        </div>
                        <div className=' flex flex-col lg:mx-40'>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Overview</h2>
                                <p className=' text-lg'>A real estate brokerage firm saw a 600% of Return on Ad Spend in the very first month of the campaign </p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Client</h2>
                                <p className=' text-lg'>A small real estate brokerage firm in Hyderabad catering to local residential apartments market.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Industry</h2>
                                <p className=' text-lg'>Real Estate, Residential Housing</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Project Goal</h2>
                                <p className=' text-lg'>To generate leads of first time home buyers in Hyderabad who can afford flats worth more than 65 lakhs. </p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Our Solution</h2>
                                <p className=' text-lg'>
                                    Since the client didn't have a website and wanted to target audiences based on certain traits, we used Facebook lead generation campaign to maximize response.
                                </p>
                                <ol className=' list-outside pl-8 py-4 text-lg'>
                                    <li>Precise Targeting - We did precise targeting and created several custom and lookalike audiences.</li>
                                    <li>Attention Grabbing Creative - A good design is the lifeline of any Facebook campaign. We came up with eye-catchy design to grab attention.</li>
                                    <li>Ad Copy - Compelling ad copy to maximize the impact</li>
                                    <li>Campaign Maintenance - Facebook works best when the campaigns are tweaked and maintained regularly. So, periodically we optimized the campaign to deliver maximum ROI. </li>
                                </ol>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Tech/Tools Used</h2>
                                <p className=' text-lg'>
                                    Google Doc, Snagit, Adobe Illustrator
                                </p>
                                
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Tangible Results</h2>
                                <p className=' text-lg'>In a limited budget, we received the following results in the very first month of the campaign:</p>
                                <ol className=' list-outside list-disc pl-8 py-4 text-lg'>
                                    <li>No of Leads - 123</li>
                                    <li>Site Visits - 19</li>
                                    <li>Final Bookings - 4</li>
                                    <li>Return on Ad Spend ~ 600% </li>
                                </ol>

                            </div>
                        
                            <div className='flex flex-row flex-1 justify-center px-4 py-10'>
                                <Link className='text-xl text-center py-2 px-6 bg-gradient-to-r from-sptheme-darkgreen to-sptheme-lightgreen text-white rounded-3xl hover:text-orange-400 hover:bg-gradient-to-r hover:from-sptheme-lightgreen hover:to-sptheme-darkgreen ' href="/contact-us">Start Your Project Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default DM99ApartmentsPortfolioPage