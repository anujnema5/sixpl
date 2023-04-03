import Head from 'next/head'
import Layout from '../components/nav/layout'
import Image from 'next/image'
import Link from 'next/link'
import HomeHero from '../components/misc/homeHero'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>SixPL - IT Services | Blockchain | Digital Marketing | Content</title>
        <meta name="description" content="SixPL is a global provider of IT, Blockchain, Digital Marketing & Content Writing Services. Established in 2012, SixPL has offices in USA and India."/>
        <meta name="image" property='og:image' content='https://www.sixpl.com/og-images/sixpl-home.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name='twitter:title' content='SixPL - IT Services | Blockchain | Digital Marketing | Content'/>
        <meta name='twitter:image' content='https://www.sixpl.com/og-images/sixpl-home.jpg' />
        <meta name='twitter:description' content='SixPL is a global provider of IT, Blockchain, Digital Marketing & Content Writing Services. Established in 2012, SixPL has offices in USA and India.'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeHero />
        <div>
          <div className="flex flex-col text-center font-serif bg-slate-700 text-white ">
            <div className="flex flex-col text-white font-serif p-4 rounded-lg">
              <div className="text-4xl pt-4 ">Our Services</div>
              <div className="text-xl p-4">Designed for Modern Web</div>
            </div>
            <div className="flex flex-col w-full lg:px-16 py-8 font-serif">
              <div className="lg:flex">
                <div className="flex flex-col p-2 lg:w-1/2 border-4 rounded-xl lg:h-96 justify-center ">
                  <div className="text-2xl">IT</div>
                  <div className="text-lg px-8 py-4">Build Powerful, Fast Applications and Websites using React, NextJS, Tailwind CSS, Express, NodeJS, & PSQL/NoSQL tech stack.</div>
                  <div className="flex justify-center">
                    <div className="p-1"><Link className="bg-sptheme-lightgreen text-white py-1 px-4 text-lg rounded-md hover:bg-emerald-800" href="/services">Learn More</Link></div>
                    <div className="p-1"><Link className=" bg-gray-400 text-black py-1 px-4 text-lg rounded-md hover:bg-zinc-50" href="/contact-us">Contact Us</Link></div>
                  </div>
                </div>
                <div className="flex flex-col p-2 lg:w-1/2 border-4 rounded-xl lg:h-96 justify-center ">
                  <div className="text-2xl">Blockchain</div>
                  <div className="text-lg px-8 py-4">Start your next web3 project from scratch or get technical/marketing whitepaper, community management or marketing advisory services.</div>
                  <div className="flex justify-center">
                    <div className="p-1"><Link className="bg-sptheme-lightgreen text-white py-1 px-4 text-lg rounded-md hover:bg-emerald-800" href="/services">Learn More</Link></div>
                    <div className="p-1"><Link className=" bg-gray-400 text-black py-1 px-4 text-lg rounded-md hover:bg-zinc-50" href="/contact-us">Contact Us</Link></div>
                  </div>
                </div>
              </div>
              <div className="lg:flex">
                <div className="flex flex-col p-2 lg:w-1/2 border-4 rounded-xl lg:h-96 justify-center ">
                  <div className="text-2xl">Digital Marketing</div>
                  <div className="text-lg px-8 py-4">Be visible to people who are looking to buy your offerings and generate more leads at a lower cost within a set timeframe</div>
                  <div className="flex justify-center">
                    <div className="p-1"><Link className="bg-sptheme-lightgreen text-white py-1 px-4 text-lg rounded-md hover:bg-emerald-800" href="/services">Learn More</Link></div>
                    <div className="p-1"><Link className=" bg-gray-400 text-black py-1 px-4 text-lg rounded-md hover:bg-zinc-50" href="/contact-us">Contact Us</Link></div>
                  </div>
                </div>
                <div className="flex flex-col p-2 lg:w-1/2 border-4 rounded-xl lg:h-96 justify-center">
                  <div className="text-2xl">Content</div>
                  <div className="text-lg px-8 py-4">Tell your unique story in a compelling way! Connect with your audience at different stages of the buying journey and boost your marketing ROI.</div>
                  <div className="flex justify-center">
                    <div className="p-1"><Link className="bg-sptheme-lightgreen text-white py-1 px-4 text-lg rounded-md hover:bg-emerald-800" href="/services">Learn More</Link></div>
                    <div className="p-1"><Link className=" bg-gray-400 text-black py-1 px-4 text-lg rounded-md hover:bg-zinc-50" href="/contact-us">Contact Us</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 font-serif bg-sky-100">
          <div className="p-4 flex flex-col justify-center text-center">
            <div className="p-2 text-2xl text-gray-700">Quick Facts About SixPL</div>
            <div className="py-4 px-2 lg:flex lg:justify-around">
              <div className="p-2 flex flex-col justify-center">
                <div className="px-4 py-2 text-6xl text-emerald-700">10</div>
                <div className="px-4 py-2 text-xl text-zinc-700">Years</div>
              </div>
              <div className="p-2 flex flex-col justify-center">
                <div className="px-4 py-2 text-6xl text-emerald-700">23</div>
                <div className="px-4 py-2 text-xl text-zinc-700">Countries</div>
              </div>
              <div className="p-2 flex flex-col justify-center">
                <div className="px-4 py-2 text-6xl text-emerald-700">1610</div>
                <div className="px-4 py-2 text-xl text-zinc-700">Clients</div>
              </div>
              <div className="p-2 flex flex-col justify-center">
                <div className="px-4 py-2 text-6xl text-emerald-700">2420</div>
                <div className="px-4 py-2 text-xl text-zinc-700">Projects</div>
              </div>
            </div>
            <div className="py-4 md:flex justify-center">
              <div className="py-2"><Link className="px-4 py-2 underline underline-offset-4 text-lg hover:text-xl" href="/contact-us">Contact Us</Link></div>
              <div className="py-2"><Link className="px-4 py-2 text-lg bg-emerald-600 text-white hover:bg-teal-600 hover:text-xl rounded-md" href="/about-us">Read Our Story</Link></div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
    
  )
}

export default Home

