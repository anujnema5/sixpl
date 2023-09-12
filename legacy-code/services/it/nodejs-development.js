import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Service from '../../../components/services/service'
import Layout from '../../../components/nav/layout'
import ContactFormVertical from '../../../components/forms/Contact-form-vertifical'
import Clients from '../../../components/services/clients';
import Services from '../../../components/services/Services'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import { services } from '../../../lib/data/services-details'

const nodeJs = {
    mainSection : services.nodejsDevelopment.mainSection,
    clients: services.nodejsDevelopment.clients,
    whyHireUs: services.nodejsDevelopment.whyHireUs,
    achievement: services.nodejsDevelopment.achievement,
    startProject: services.nodejsDevelopment.startProject,
    faq: services.nodejsDevelopment.faq
}


const NextJSDevelopmentPage = () => {
    return (
        <Layout>
            <Head>
                <title>Hire a Node JS Developer | Get Node JS Support - SixPL</title>
                <meta name="description" content="Build a Node JS Full Stack Progressive Web App Now. Hire a top Node JS Development Company and get reliable Node JS services & Deployment Solutions. SixPL"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/it/nextjs-development.jpg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Hire a Node JS Developer | Get Node JS Support - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/it/nodejs-development.jpg' />
                <meta name='twitter:description' content='Build a Node JS Full Stack Progressive Web App Now. Hire a top Node JS Development Company and get reliable Node JS services & Deployment Solutions. SixPL'/>
            </Head>
            <main>
                    <div className="flex flex-col">
                        <Service 
                        title={nodeJs.mainSection.title}
                        heading={nodeJs.mainSection.heading} 
                        subHeading={nodeJs.mainSection.subheading} 
                        headingCall={nodeJs.mainSection.headingCall}
                        tags={nodeJs.mainSection.tags}
                        />
                        <Clients heading={nodeJs.clients.heading}/>
                        <Services whyHireUs={nodeJs.whyHireUs}/>
                        <Flex achievement={nodeJs.achievement}/>
                        <FAQs faqs={nodeJs.faq}/>
                    </div>
            </main>
        </Layout>
    )
}
export default NextJSDevelopmentPage