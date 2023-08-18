import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Service from '../../../components/services/service'
import Layout from '../../../components/nav/layout'
import ContactFormVertical from '../../../components/forms/contact-form-vertifical'
import Clients from '../../../components/services/clients';
import Services from '../../../components/services/Services'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import { services } from '../../../lib/data/services-details'

const nextJs = {
    mainSection : services.nextjsDevelopment.mainSection,
    clients: services.nextjsDevelopment.clients,
    whyHireUs: services.nextjsDevelopment.whyHireUs,
    achievement: services.nextjsDevelopment.achievement,
    startProject: services.nextjsDevelopment.startProject,
    faq: services.nextjsDevelopment.faq
}


const NextJSDevelopmentPage = () => {
    return (
        <Layout>
            <Head>
                <title>Hire a Next JS Developer | Get Next JS Support - SixPL</title>
                <meta name="description" content="Build a Next JS Full Stack Progressive Web App Now. Hire a top Next JS Development Company and get reliable Next JS services & Deployment Solutions. SixPL"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/it/nextjs-development.jpg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Hire a Next JS Developer | Get Next JS Support - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/it/nextjs-development.jpg' />
                <meta name='twitter:description' content='Build a Next JS Full Stack Progressive Web App Now. Hire a top Next JS Development Company and get reliable Next JS services & Deployment Solutions. SixPL'/>
            </Head>
            <main>
                    <div className="flex flex-col">
                        <Service 
                        title={nextJs.mainSection.title}
                        heading={nextJs.mainSection.heading} 
                        subHeading={nextJs.mainSection.subheading} 
                        headingCall={nextJs.mainSection.headingCall}
                        tags={nextJs.mainSection.tags}
                        />
                        <Clients heading={nextJs.clients.heading}/>
                        <Services whyHireUs={nextJs.whyHireUs}/>
                        <Flex achievement={nextJs.achievement}/>
                        <FAQs faqs={nextJs.faq}/>
                    </div>
            </main>
        </Layout>
    )
}
export default NextJSDevelopmentPage