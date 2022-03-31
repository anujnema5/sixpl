import Head from 'next/head'
import Layout from '../components/nav/layout'
import Image from 'next/image'
import Link from 'next/link'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>SixPL - IT Services | Blockchain | Digital Marketing | Content</title>
        <meta name="description" content="SixPL is a global provider of IT, Blockchain, Digital Marketing & Content Writing Services. Established in 2012, SixPL has offices in USA and India."/>
        <meta name="image" property='og:image' content='/og-images/sixpl-home.jpg' />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name='twitter:title' content='SixPL - IT Services | Blockchain | Digital Marketing | Content'/>
        
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <div className="flex flex-col items-center justify-center text-center font-serif text-gray-700">
            <div className="flex flex-col flex-wrap items-center justify-center">
              <div className="text-3xl p-4">Results Speak Louder than Promises</div>
              <div className="p-2"><p className="text-xl p-2">Check Our Latest Results</p></div>
            </div>            
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="flex flex-col py-4 lg:w-1/2">
                <div><Image priority src="/images/portfolio/coding-icon-3.svg" width={60} height={60} /></div>
                <div><h2 className="py-2 px-4 text-lg">An EdTech startup built a complex yet fast application using ReactJS, NextJS, Tailwind CSS, PostgreSQL in 21 Days</h2></div>
                <div className="py-4"><Link href="/portfolio/it/web-app-edtech-company-reactjs-nextjs-psql-heroku"><a className="py-1 px-4 text-xl border rounded-md bg-sptheme-lightgreen text-white">Find Out How</a></Link></div>
              </div>
              <div className="flex flex-col py-4 lg:w-1/2">
                <div><Image className="p-2" priority src="/images/portfolio/blockchain-icon.svg" height={60} width={60} /></div>
                <div><h2 className="py-2 px-4 text-lg">A blockchain-based infrastructure platform created a white paper & launched successful ICO through community based marketing efforts</h2></div>
                <div className="py-4"><Link href="/portfolio/blockchain/technical-white-paper-blockchain-infrastructure-platform"><a className="py-1 px-4 text-xl border rounded-md bg-sptheme-lightgreen text-white">Find Out How</a></Link></div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center">
             
              <div className="flex flex-col py-4 lg:w-1/2">
                <div><Image priority src="/images/portfolio/digital-marketing-icon.svg" height={60} width={60} /></div>
                <div><h2 className="py-2 px-4 text-lg">A small real estate dealer got 19 site visits and 4 bookings in a month through FB/Insta lead generation campaign</h2></div>
                <div className="py-4"><Link href="/portfolio/digital-marketing/lead-generation-campaign-real-estate-hyderabad"><a className="py-1 px-4 text-xl border rounded-md bg-sptheme-lightgreen text-white">Find Out How</a></Link></div>
              </div>
             
              <div className="flex flex-col py-4 lg:w-1/2">
                <div><Image priority src="/images/portfolio/content-icon-2.svg" height={60} width={60} /></div>
                <div><h2 className="py-2 px-4 text-lg">A resume builder platform grabbed top ranking on Google through 2000 comprehensive blogs in just 2 months</h2></div>
                <div className="py-4"><Link href="/portfolio/content/content-writing-marketing-resume-builder"><a className="py-1 px-4 text-xl border rounded-md bg-sptheme-lightgreen text-white">Find Out How</a></Link></div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center px-4 py-10">
              <div><Link href="/contact-us"><a className="px-6 py-2 lg:text-2xl rounded-2xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white hover:from-pink-500 hover:to-yellow-500 ring-offset-4">Start Getting Results Now</a></Link></div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col text-center font-serif bg-slate-700 text-white ">
            <div className="flex flex-col text-white font-serif p-4 rounded-lg">
              <div className="text-4xl pt-4 ">Our Services</div>
              <div className="text-xl p-4">Designed for Modern Web</div>
            </div>
            <div className="flex flex-col w-full lg:px-16 py-8 font-serif">
              <div className="lg:flex">
                <div className="flex flex-col p-2 lg:w-1/2 border-4 rounded-xl lg:h-96 justify-center ">
                  <div className="text-2xl">IT Services</div>
                  <div className="text-lg px-8 py-4">Build Powerful, Fast Applications and Websites using React, NextJS, Tailwind CSS, Express, NodeJS, & PSQL/NoSQL tech stack.</div>
                  <div className="flex justify-center">
                    <div className="p-1"><Link href="/services/it"><a className="bg-sptheme-lightgreen text-white py-1 px-4 text-lg rounded-md hover:bg-emerald-800">Learn More</a></Link></div>
                    <div className="p-1"><Link href="/pricing"><a className=" bg-gray-400 text-black py-1 px-4 text-lg rounded-md hover:bg-zinc-50">Contact Us</a></Link></div>
                  </div>
                </div>
                <div className="flex flex-col p-2 lg:w-1/2 border-4 rounded-xl lg:h-96 justify-center ">
                  <div className="text-2xl">Blockchain</div>
                  <div className="text-lg px-8 py-4">Start your next web3 project from scratch or get technical/marketing whitepaper, community management or marketing advisory services.</div>
                  <div className="flex justify-center">
                    <div className="p-1"><Link href="/services/crypto"><a className="bg-sptheme-lightgreen text-white py-1 px-4 text-lg rounded-md hover:bg-emerald-800">Learn More</a></Link></div>
                    <div className="p-1"><Link href="/pricing"><a className=" bg-gray-400 text-black py-1 px-4 text-lg rounded-md hover:bg-zinc-50">Contact Us</a></Link></div>
                  </div>
                </div>
              </div>
              <div className="lg:flex">
                <div className="flex flex-col p-2 lg:w-1/2 border-4 rounded-xl lg:h-96 justify-center ">
                  <div className="text-2xl">Digital Marketing</div>
                  <div className="text-lg px-8 py-4">Be visible to people who are looking to buy your offerings and generate more leads at a lower cost within a set timeframe</div>
                  <div className="flex justify-center">
                    <div className="p-1"><Link href="/services/digital-marketing"><a className="bg-sptheme-lightgreen text-white py-1 px-4 text-lg rounded-md hover:bg-emerald-800">Learn More</a></Link></div>
                    <div className="p-1"><Link href="/pricing"><a className=" bg-gray-400 text-black py-1 px-4 text-lg rounded-md hover:bg-zinc-50">Contact Us</a></Link></div>
                  </div>
                </div>
                <div className="flex flex-col p-2 lg:w-1/2 border-4 rounded-xl lg:h-96 justify-center">
                  <div className="text-2xl">Content</div>
                  <div className="text-lg px-8 py-4">Tell your unique story in a compelling way! Connect with your audience at different stages of the buying journey and boost your marketing ROI.</div>
                  <div className="flex justify-center">
                    <div className="p-1"><Link href="/services/content"><a className="bg-sptheme-lightgreen text-white py-1 px-4 text-lg rounded-md hover:bg-emerald-800">Learn More</a></Link></div>
                    <div className="p-1"><Link href="/pricing"><a className=" bg-gray-400 text-black py-1 px-4 text-lg rounded-md hover:bg-zinc-50">Contact Us</a></Link></div>
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
                <div className="px-4 py-2 text-6xl text-emerald-700">9</div>
                <div className="px-4 py-2 text-xl text-zinc-700">Years</div>
              </div>
              <div className="p-2 flex flex-col justify-center">
                <div className="px-4 py-2 text-6xl text-emerald-700">25</div>
                <div className="px-4 py-2 text-xl text-zinc-700">Countries</div>
              </div>
              <div className="p-2 flex flex-col justify-center">
                <div className="px-4 py-2 text-6xl text-emerald-700">1423</div>
                <div className="px-4 py-2 text-xl text-zinc-700">Clients</div>
              </div>
              <div className="p-2 flex flex-col justify-center">
                <div className="px-4 py-2 text-6xl text-emerald-700">2189</div>
                <div className="px-4 py-2 text-xl text-zinc-700">Projects</div>
              </div>
            </div>
            <div className="py-4 md:flex justify-center">
              <div className="py-2"><Link href="/contact-us"><a className="px-4 py-2 underline underline-offset-4 text-lg hover:text-xl">Contact Us</a></Link></div>
              <div className="py-2"><Link href="/about-us"><a className="px-4 py-2 text-lg bg-emerald-600 text-white hover:bg-teal-600 hover:text-xl rounded-md">Read Our Story</a></Link></div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
    
  )
}

export default Home

