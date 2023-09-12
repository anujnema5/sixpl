import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import AboutNavbar from '../../components/nav/aboutNavbar'

import Layout from '../../components/nav/layout'

const AboutUsIndexPage = () => {
    return (
        <Layout>
            <Head>
                <title>SixPL - Company Overview</title>
            </Head>
            <main className=''>
                <div className='flex justify-center w-full'>
                    <div className=' flex flex-col  lg:w-8/12 w-full sm:w-full'>
                        <div className='flex flex-col lg:flex-row m-4 lg:m-20 lg:px-14 '>
                                {/* <AboutNavbar highlight="founder"/> */}
                <div className='w-full '>
                    <AboutNavbar highlight="founder"/>
                    {/* <div className=' flex flex-col bg-gray-100 py-4 rounded-xl'>
                        <Link className='py-2 px-4 text-lg underline underline-offset-4 hover:text-sky-700' href='/about-us'>Company Overview</Link>
                        <Link className='py-2 px-4 text-lg underline underline-offset-4 hover:text-sky-700 text-sky-700' href='/about-us/saket-kumar-singh'>The Founder</Link>

                    </div> */}
                    <div className='flex flex-col rounded-xl border-t border-white my-2 w-full overflow-auto lg:shadow-lg sm:rounded-lg'>
                        <div className=' flex flex-col items-center'>
                            <div className=' mt-8'><h1 className=' text-4xl p-4 text-sptheme-darkgreen'>Saket Kumar Singh</h1></div>
                            <div><p className='text-2xl text-gray-700 pb-8'>The Founder - SixPL</p></div>
                            <Image className=' rounded-full bg-slate-400 ' priority src="/images/about/Saket Kumar Singh.png" height={250} width={250} />
                        </div>
                        <div className='mx-auto text-lg p-2 w-full px-5 mt-10'>
                            <p className='py-2'>
                                In 2010, I met with a severe accident and was forced to take a complete bed rest for two months. Bored to death, I created my first website using WordPress and wrote a simple blog. I applied basic SEO techniques to promote the site and used Google AdSense to monetize it.
                            </p>
                            <p className='py-2'>
                                It was my first encounter with Digital Marketing. The blog has withstood all Google algorithm updates. Even today, most of the pages rank on the first page of Google without making any efforts.
                            </p>
                            <p className='py-2'>
                                As soon as I recovered, I went ahead with regular life. I joined HDFC after completing my MBA from FORE School of Management.
                            </p>
                            <p className='py-2'>
                                In 2012, I spearheaded an innovative digital marketing campaign with massive success.
                            </p>
                            <p className='py-2'>
                                I started my digital marketing venture in July 2013. Since then, I have worked with more than 480 clients generating business worth more than $12m through various digital marketing campaigns such as PPC, Social Media, SEO, Email, Content and Affiliate marketing.

                                I have also trained 2000+ corporate professionals in digital and content marketing skills.
                            </p>
                            <p className='py-2'>
                                Work is my passion, the biggest source of joy and inspiration for me. Travel complements my work beautifully. I don’t wait for weekends or holidays to move out of town. Impulse traveling without any destination is the best thing that I have got from my entrepreneurial journey in addition to, of course, a stable income.
                            </p>
                            <p className='py-2'>
                                I have a fantastic team which supports me in delivering best quality work on time. However, I contribute significantly to all the projects to ensure best-in-class delivery. Also, I take responsibility for all the projects that we undertake.
                            </p>
                            
                        </div>
                        <div>
                            <h2 className='text-2xl text-gray-700 text-center p-4'>Watch My Journey</h2>
                        </div>
                        <div className='p-4' >
                            <iframe className=' aspect-video' width="100%" height="550px" src="https://www.youtube.com/embed/qQ_QALUcjt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        
                    </div>

                </div>
            </div>
                            </div>
                        </div>
                        <div className='flex flex-col m-4 px-4 lg:mx-20 lg:px-24 max-w-5xl text-xl text-gray-700'>
                            <div>

                        </div>
                    </div>
            </main>
        </Layout>
    )
}
export default AboutUsIndexPage


