import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


const WhitePaperPortfolioPage = () => {
    return (
            <main>
                <div className=' lg:mx-52'>
                    <div className=' flex flex-col my-10 mx-4 py-4 '>
                        <div>
                            <div className='py-10 px-4'>
                                <h1 className=' text-3xl text-indigo-800 text-center font-medium'>A Technical ICO White Paper & ICO Advisory Services for Blockchain-based Infrastructure Platform for Developers</h1>
                            </div>
                            <div className='px-4'>
                                <p className='text-gray-600 text-center'>Portfolio {">"} Blockchain Services</p>
                            </div>
                        </div>
                        <div className=' flex flex-col lg:mx-40'>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Overview</h2>
                                <p className='text-lg mt-1'>SixPL team delivered a 40-pages high-level technical white paper in record 21 days. The team also worked closely worked with the clients to make the ICO successful.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Client</h2>
                                <p className=' text-lg mt-1'>A leading next-generation Integrated and Distributed Ledger Technology infrastructure platform powered by blockchain technology.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Industry</h2>
                                <p className=' text-lg mt-1'>Platform-as-a-service (PAAS), Blockchain, IT</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Project Goal</h2>
                                <p className=' text-lg mt-1'>To research, conceptualize, write and design a technical and persuasive ICO white paper. The white paper was used to attract more tokenholders for ICO and help developers understand the technical details of the platform. </p>
                                <p className=' text-lg mt-1'>After completion of white paper, the next goal is to reach a $30m hard-cap in ICO.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Our Solution</h2>
                                <p className=' text-lg mt-1'>
                                    We deployed five resources to develop the white paper in close collaboration with the client. Post that, our community managers assisted in making the ICO proces successful. The breakup is given below:
                                </p>
                                <ol className=' list-outside pl-8 py-4 text-lg mt-1'>
                                    <li>Project Owner - To coordinate with the client and ensure the incorporation of constantly evolving blockchain industry (and therefore the clients projects).</li>
                                    <li>Blockchain Subject Matter Expert - To understand the application of blockchain in the project and guide the writers accordingly.</li>
                                    <li>Technical Writers - Two technical writers for drafting, editing and proofreading the content.</li>
                                    <li>Visual Designer - To beautify the design and make the overall whitepaper more appealing to the target audience.</li>
                                    <li>Community Managers - Our community managers works 24x7 to handke queries of potential tokenholders. They also energized the community through their vigorous discussion around crypto investment and regulations.</li>
                                </ol>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Tech/Tools Used</h2>
                                <p className=' text-lg mt-1'>
                                    Google Doc, Snagit, Adobe Illustrator
                                </p>
                                
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium  text-indigo-700'>Tangible Results</h2>
                                <p className=' text-lg mt-1 mt-1'>A 40-pages, well-designed high-level technical white paper which included ecosystem, application of blockchain, tokenomics, custom blockchain products, services, streaming platform details, other core function of the platform.</p>

                            </div>
                        
                            <div className='flex flex-row flex-1 justify-center px-4 py-10'>
                                <Link className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500' href="/contact-us">Start Your Project Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}
export default WhitePaperPortfolioPage