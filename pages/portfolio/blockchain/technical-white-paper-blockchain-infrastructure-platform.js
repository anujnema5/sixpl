import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'

const WhitePaperPortfolioPage = () => {
    return (
        <Layout>
            <Head>
                <title>SixPL Portfolio - Technical White Paper & ICO Advisory for Blockchain-based Startup</title>
            </Head>
            <main>
                <div className=' lg:mx-52'>
                    <div className=' flex flex-col my-10 mx-4 py-4 font-serif'>
                        <div>
                            <div className='py-10 px-4'>
                                <h1 className=' text-3xl text-sptheme-darkgreen text-center'>A Technical ICO White Paper & ICO Advisory Services for Blockchain-based Infrastructure Platform for Developers</h1>
                            </div>
                            <div className='px-4'>
                                <p className='text-gray-600 text-center'>Portfolio {">"} Blockchain Services</p>
                            </div>
                        </div>
                        <div className=' flex flex-col lg:mx-40'>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Overview</h2>
                                <p className=' text-lg'>SixPL team delivered a 40-pages high-level technical white paper in record 21 days. The team also worked closely worked with the clients to make the ICO successful.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Client</h2>
                                <p className=' text-lg'>A leading next-generation Integrated and Distributed Ledger Technology infrastructure platform powered by blockchain technology.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Industry</h2>
                                <p className=' text-lg'>Platform-as-a-service (PAAS), Blockchain, IT</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Project Goal</h2>
                                <p className=' text-lg'>To research, conceptualize, write and design a technical and persuasive ICO white paper. The white paper was used to attract more tokenholders for ICO and help developers understand the technical details of the platform. </p>
                                <p className=' text-lg'>After completion of white paper, the next goal is to reach a $30m hard-cap in ICO.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Our Solution</h2>
                                <p className=' text-lg'>
                                    We deployed five resources to develop the white paper in close collaboration with the client. Post that, our community managers assisted in making the ICO proces successful. The breakup is given below:
                                </p>
                                <ol className=' list-outside pl-8 py-4 text-lg'>
                                    <li>Project Owner - To coordinate with the client and ensure the incorporation of constantly evolving blockchain industry (and therefore the clients projects).</li>
                                    <li>Blockchain Subject Matter Expert - To understand the application of blockchain in the project and guide the writers accordingly.</li>
                                    <li>Technical Writers - Two technical writers for drafting, editing and proofreading the content.</li>
                                    <li>Visual Designer - To beautify the design and make the overall whitepaper more appealing to the target audience.</li>
                                    <li>Community Managers - Our community managers works 24x7 to handke queries of potential tokenholders. They also energized the community through their vigorous discussion around crypto investment and regulations.</li>
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
                                <p className=' text-lg'>A 40-pages, well-designed high-level technical white paper which included ecosystem, application of blockchain, tokenomics, custom blockchain products, services, streaming platform details, other core function of the platform.</p>

                            </div>
                        
                            <div className='flex flex-row flex-1 justify-center px-4 py-10'>
                                <Link href="/contact-us"><a className='text-xl text-center py-2 px-6 bg-gradient-to-r from-sptheme-darkgreen to-sptheme-lightgreen text-white rounded-3xl hover:text-orange-400 hover:bg-gradient-to-r hover:from-sptheme-lightgreen hover:to-sptheme-darkgreen '>Start Your Project Now</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default WhitePaperPortfolioPage