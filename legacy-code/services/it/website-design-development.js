import Head from 'next/head'

import Service from '../../../components/services/service'
import Layout from '../../../components/nav/layout'
import Clients from '../../../components/services/clients';
import Services from '../../../components/services/Services'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import { services } from '../../../lib/data/services-details'

const webDesign = {
    mainSection: services.webDesignDevelopment.mainSection,
    clients: services.webDesignDevelopment.clients,
    whyHireUs: services.webDesignDevelopment.whyHireUs,
    achievement: services.webDesignDevelopment.achievement,
    startProject: services.webDesignDevelopment.startProject,
    faq: services.webDesignDevelopment.faq
}

const WebsiteDevelopmentPage = () => {
    return (
        <Layout>
            <Head>
                <title>Web Design & Development Company - SixPL</title>
                <meta name="description" content="Avail web design & development services. Hire top website development company & avail quality web development services 24*7. Get all website design services."/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/it/web-design-development-company.jpg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Web Design & Development Company - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/it/web-design-development-company.jpg' />
                <meta name='twitter:description' content='Avail web design & development services. Hire top website development company & avail quality web development services 24*7. Get all website design services.'/>
            </Head>
            <main>
            <div className="flex flex-col">
                    <Service
                        title={webDesign.mainSection.title}
                        heading={webDesign.mainSection.heading}
                        subHeading={webDesign.mainSection.subheading}
                        headingCall={webDesign.mainSection.headingCall}
                        tags={webDesign.mainSection.tags}
                    />
                    <Clients heading={webDesign.clients.heading} />
                    <Services whyHireUs={webDesign.whyHireUs} />
                    <Flex achievement={webDesign.achievement} />
                    <FAQs faqs={webDesign.faq} />
                </div>
            </main>
        </Layout>
    )
}
export default WebsiteDevelopmentPage