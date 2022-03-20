import Head from 'next/head'
import Link from 'next/link'


import Layout from '../../../components/nav/layout'

const ContentResumeNowPage = () => {
    return (
        <Layout>
            <Head>
                <title>SixPL Portfolio - Content Writing & Marketing Services for a Leading Resume Builder Platform</title>
            </Head>
            <main>
                <div className=' lg:mx-52'>
                    <div className=' flex flex-col my-10 mx-4 py-4 font-serif'>
                        <div>
                            <div className='py-10 px-4'>
                                <h1 className=' text-3xl text-sptheme-darkgreen text-center'>Content Writing & Marketing Services for a Leading Resume Builder Platform</h1>
                            </div>
                            <div className='px-4'>
                                <p className='text-gray-600 text-center'>Portfolio {">"} Content Services</p>
                            </div>
                        </div>
                        <div className=' flex flex-col lg:mx-40'>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Overview</h2>
                                <p className=' text-lg'>SixPL team delivered a 2000 SEO-friendly high quality blogs in 2 months.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Client</h2>
                                <p className=' text-lg'>A popular UK-based SaaS platfom that enables job seekers to create perfect resume in minutes. </p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Industry</h2>
                                <p className=' text-lg'>Software-as-a-service (SAAS), IT, Human Resources</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Project Goal</h2>
                                <p className=' text-lg'>To research relevant keywords and write high-quality SEO-friendly blogs to attract more traffic from search engines  </p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Our Solution</h2>
                                <p className=' text-lg'>
                                    We deployed a team of 30 writers, 5 editors and 2 digital marketers to complete the project within stipulated timeline.
                                </p>
                                <ol className=' list-outside pl-8 py-4 text-lg'>
                                    <li>Keyword Research - Our team analyzed keywords based on relevance, purchase intent, monthly search volume and competition and finalized top 5 keywords for every blog. </li>
                                    <li>Project Delivery Process - We worked with the client to design a project delivery process to meet the volume requirements within given timelines. </li>
                                    <li>Editing & Proofreading - We adopted 3-level editing & proofreading strategy to deliver ready-to-publish articles.</li>
                                    <li>SEO checks - We performed SEO checks to ensure that the content meets all the requirements of on-page seo. This ensures that after a little push, the articles start ranking on Google.  </li>
                                </ol>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Tech/Tools Used</h2>
                                <p className=' text-lg'>
                                    Google Keyword Planner, SEM Rush, Google Doc, Grammarly.
                                </p>
                                
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Tangible Results</h2>
                                <p className=' text-lg'>We delivered 2000 articles in 65 days. Today, these articles attract more than 2.4 million month global visitors.</p>
                                <ol className='list-disc list-outside pl-8 py-4 text-lg'>
                                    <li>658 Articles ranking among top three results on Google and Bing for relevant keywords</li>
                                    <li>Around 400 articles rank on the first page of Google for relevant searches </li>
                                    <li>Another 850 articles rank on the first two pages of SERP for intended keywords</li>
                                </ol>
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
export default ContentResumeNowPage