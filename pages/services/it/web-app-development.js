import Head from 'next/head'

import Service from '../../../components/services/service'
import Layout from '../../../components/nav/layout'
import Clients from '../../../components/services/clients';
import Services from '../../../components/services/Services'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import { services } from '../../../lib/data/services-details'

const webApp = {
    mainSection: services.webAppDevelopment.mainSection,
    clients: services.webAppDevelopment.clients,
    whyHireUs: services.webAppDevelopment.whyHireUs,
    achievement: services.webAppDevelopment.achievement,
    startProject: services.webAppDevelopment.startProject,
    faq: services.webAppDevelopment.faq
}
const WebAppDevelopmentPage = () => {
    return (
        <Layout>
            <Head>
                <title>Web Application Development Company - SixPL</title>
                <meta name="description" content="Build real-time, secure & fast web applications with our web development services. Hire web apps developer instantly. Avail app development services - SixPL"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/it/web-application-development-company.jpg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Web Application Development Company - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/it/web-application-development-company.jpg' />
                <meta name='twitter:description' content='Build real-time, secure & fast web applications with our web development services. Hire web apps developer instantly. Avail app development services - SixPL'/>
            </Head>
            <main>
                <div className="flex flex-col">
                    <Service
                        title={webApp.mainSection.title}
                        heading={webApp.mainSection.heading}
                        subHeading={webApp.mainSection.subheading}
                        headingCall={webApp.mainSection.headingCall}
                        tags={webApp.mainSection.tags}
                    />
                    <Clients heading={webApp.clients.heading} />
                    <Services whyHireUs={webApp.whyHireUs} />
                    <Flex achievement={webApp.achievement} />
                    <FAQs faqs={webApp.faq} />
                </div>
            </main>
        </Layout>
    )
}
export default WebAppDevelopmentPage