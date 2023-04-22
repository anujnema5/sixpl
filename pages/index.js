import Head from 'next/head'
import Layout from '../components/nav/layout'
import Image from 'next/image'
import Link from 'next/link'
import HomeHero from '../components/misc/homeHero'
import ServicesSection from '../components/misc/servicesSection'
import QuickFacts from '../components/misc/quickFacts'

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
        <QuickFacts />
      </main>
    </Layout>
    
  )
}

export default Home

