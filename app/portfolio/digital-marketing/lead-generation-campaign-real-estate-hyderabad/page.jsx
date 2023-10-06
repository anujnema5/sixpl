import Link from 'next/link'


const page = () => {
    return (
            <main>
                <div className=' lg:mx-52'>
                    <div className=' flex flex-col my-10 mx-4 py-4 '>
                        <div>
                            <div className='py-10 px-4'>
                                <h1 className=' text-3xl text-indigo-800 font-semibold text-center'>Lead Generation Campaign for a Small Real Estate Firm in Hyderabad</h1>
                            </div>
                            <div className='px-4'>
                                <p className='text-gray-800 text-center'>Portfolio {">"} Digital Marketing Services</p>
                            </div>
                        </div>
                        <div className=' flex flex-col lg:mx-40'>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-indigo-700 font-medium'>Overview</h2>
                                <p className=' text-lg mt-1'>A real estate brokerage firm saw a 600% of Return on Ad Spend in the very first month of the campaign </p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-indigo-700 font-medium'>Client</h2>
                                <p className=' text-lg mt-1'>A small real estate brokerage firm in Hyderabad catering to local residential apartments market.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-indigo-700 font-medium'>Industry</h2>
                                <p className=' text-lg mt-1'>Real Estate, Residential Housing</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-indigo-700 font-medium'>Project Goal</h2>
                                <p className=' text-lg mt-1'>To generate leads of first time home buyers in Hyderabad who can afford flats worth more than 65 lakhs. </p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-indigo-700 font-medium'>Our Solution</h2>
                                <p className=' text-lg mt-1'>
                                    Since the client didn't have a website and wanted to target audiences based on certain traits, we used Facebook lead generation campaign to maximize response.
                                </p>
                                <ol className=' list-outside pl-8 py-4 text-lg mt-1'>
                                    <li>Precise Targeting - We did precise targeting and created several custom and lookalike audiences.</li>
                                    <li>Attention Grabbing Creative - A good design is the lifeline of any Facebook campaign. We came up with eye-catchy design to grab attention.</li>
                                    <li>Ad Copy - Compelling ad copy to maximize the impact</li>
                                    <li>Campaign Maintenance - Facebook works best when the campaigns are tweaked and maintained regularly. So, periodically we optimized the campaign to deliver maximum ROI. </li>
                                </ol>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-indigo-700 font-medium'>Tech/Tools Used</h2>
                                <p className=' text-lg mt-1'>
                                    Google Doc, Snagit, Adobe Illustrator
                                </p>
                                
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-indigo-700 font-medium'>Tangible Results</h2>
                                <p className=' text-lg mt-1'>In a limited budget, we received the following results in the very first month of the campaign:</p>
                                <ol className=' list-outside list-disc pl-8 py-4 text-lg mt-1'>
                                    <li>No of Leads - 123</li>
                                    <li>Site Visits - 19</li>
                                    <li>Final Bookings - 4</li>
                                    <li>Return on Ad Spend ~ 600% </li>
                                </ol>

                            </div>
                        
                            <div className='flex flex-row flex-1 justify-center px-4 pt-4'>
                                <Link className='rounded-md bg-indigo-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500' href="/contact-us">Start Your Project Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}
export default page