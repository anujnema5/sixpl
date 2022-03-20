import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

import Layout from '../../components/nav/layout'

const FounderPage = () => {
    return(
        <Layout>
            <Head>
                <title>Saket Kumar Singh - The Founder of SixPL</title>
            </Head>
            <div className=' flex justify-center'>
                <div className='flex flex-col lg:flex-row m-4 lg:m-20 lg:px-14 font-serif'>
                    <div className=' flex flex-col bg-gray-100 py-4 font-serif rounded-xl'>
                        <Link href='/about-us'><a className='py-2 px-4 text-lg underline underline-offset-4 hover:text-sky-700'>Company Overview</a></Link>
                        <Link href='/about-us/saket-kumar-singh'><a className='py-2 px-4 text-lg underline underline-offset-4 hover:text-sky-700 text-sky-700'>The Founder</a></Link>

                    </div>
                    <div className=' px-4 flex flex-col rounded-xl border-2'>
                        <div className=' flex flex-col items-center font-serif'>
                            <div className=' mt-8'><h1 className=' text-4xl p-4 font-serif text-sptheme-darkgreen'>Saket Kumar Singh</h1></div>
                            <div><p className='text-2xl text-gray-700 pb-8'>The Founder - SixPL</p></div>
                            <Image className=' rounded-full bg-slate-400 ' priority src="/images/about/Saket Kumar Singh.png" height={250} width={250} />
                        </div>
                        <div className=' text-lg p-2 font-serif max-w-2xl mt-10'>
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
                            <h2 className='text-2xl text-gray-700 text-center font-serif p-4'>Watch My Journey</h2>
                        </div>
                        <div className='p-4' >
                            <iframe className=' aspect-video' width="100%" height="100%" src="https://www.youtube.com/embed/qQ_QALUcjt0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        
                    </div>

                </div>
            </div>
        </Layout>
    )
}
export default FounderPage