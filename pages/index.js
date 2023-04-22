import Head from 'next/head'
import Layout from '../components/nav/layout'
import Image from 'next/image'
import Link from 'next/link'
import HomeHero from '../components/misc/homeHero'
import ServicesSection from '../components/misc/servicesSection'

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
        <ServicesSection />
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

