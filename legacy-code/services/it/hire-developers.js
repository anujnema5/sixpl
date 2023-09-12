import Head from 'next/head'

import Service from '../../../components/services/service'
import Layout from '../../../components/nav/layout'
import Clients from '../../../components/services/clients';
import Services from '../../../components/services/Services'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import { services } from '../../../lib/data/services-details'

const hireDev = {
    mainSection : services.hireDeveloper.mainSection,
    clients: services.hireDeveloper.clients,
    whyHireUs: services.hireDeveloper.whyHireUs,
    achievement: services.hireDeveloper.achievement,
    startProject: services.hireDeveloper.startProject,
    faq: services.hireDeveloper.faq
}


const HireDevelopersPage = () => {
    return (
        <Layout>
            <Head>
                <title>Hire Developers, Top 1% Web Developer - SixPL</title>
                <meta name="description" content="Hire developers, web developer, full stack developers, front end and back end developers on a freelance, part-time or full-time basis. Flexible working hours."/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/it/hire-developers.jpg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Hire Developers, Top 1% Web Developer - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/it/hire-developers.jpg' />
                <meta name='twitter:description' content='Hire developers, web developer, full stack developers, front end and back end developers on a freelance, part-time or full-time basis. Flexible working hours.'/>
            </Head>
            <main>
            <div className="flex flex-col">
                        <Service 
                        title={hireDev.mainSection.title}
                        heading={hireDev.mainSection.heading} 
                        subHeading={hireDev.mainSection.subheading} 
                        headingCall={hireDev.mainSection.headingCall}
                        tags={hireDev.mainSection.tags}
                        />
                        <Clients heading={hireDev.clients.heading}/>
                        <Services whyHireUs={hireDev.whyHireUs}/>
                        <Flex achievement={hireDev.achievement}/>
                        <FAQs faqs={hireDev.faq}/>
                    </div>
            </main>
        </Layout>
    )
}
export default HireDevelopersPage