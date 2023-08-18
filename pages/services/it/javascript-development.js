import Head from 'next/head'
import Service from '../../../components/services/service'
import Layout from '../../../components/nav/layout'
import Clients from '../../../components/services/clients';
import Services from '../../../components/services/Services'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import { services } from '../../../lib/data/services-details'

const javascript = {
    mainSection: services.javascriptDevelopment.mainSection,
    clients: services.javascriptDevelopment.clients,
    whyHireUs: services.javascriptDevelopment.whyHireUs,
    achievement: services.javascriptDevelopment.achievement,
    startProject: services.javascriptDevelopment.startProject,
    faq: services.javascriptDevelopment.faq
}

const JavaScriptDevelopmentPage = () => {
    return (
        <Layout>
            <Head>
                <title>Javascript Development | Hire top JavaScript Developers</title>
                <meta name="description" content="JavaScript Development company with 100+ years of accumulative JavaScript development experience. Hire front-end, backend & full-stack JavaScript developers now" />
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/it/javascript-development.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:title' content='Javascript Development | Hire top JavaScript Developers' />
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/it/javascript-development.jpg' />
                <meta name='twitter:description' content='JavaScript Development company with 100+ years of accumulative JavaScript development experience. Hire front-end, backend & full-stack JavaScript developers now' />
            </Head>
            <main>
                <div className="flex flex-col">
                    <Service
                        title={javascript.mainSection.title}
                        heading={javascript.mainSection.heading}
                        subHeading={javascript.mainSection.subheading}
                        headingCall={javascript.mainSection.headingCall}
                        tags={javascript.mainSection.tags}
                    />
                    <Clients heading={javascript.clients.heading} />
                    <Services whyHireUs={javascript.whyHireUs} />
                    <Flex achievement={javascript.achievement} />
                    <FAQs faqs={javascript.faq} />
                </div>
            </main>
        </Layout>
    )
}
export default JavaScriptDevelopmentPage