import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'
import ContactFormVertical from '../../../components/forms/contact-form-vertifical'
import { services } from '../../../lib/data/services-details'
import Service from '../../../components/services/service'
import Services from '../../../components/services/Services'
import Clients from '../../../components/services/clients'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import PricePackage from '../../../components/pricing/pricePackage'

const digitalmarketing = {
    mainSection: services.digitalMarketingFullServices.mainSection,
    clients: services.digitalMarketingFullServices.clients,
    whyHireUs: services.digitalMarketingFullServices.whyHireUs,
    achievement: services.digitalMarketingFullServices.achievement,
    digitalMarketingPack: services.digitalMarketingFullServices.package,
    startProject: services.digitalMarketingFullServices.startProject,
    faq: services.digitalMarketingFullServices.faq,
}

const FullServiceDigitalMarketingPage = () => {
    return (
        <Layout>
            <Head>
                <title>Hire #1 Digital Marketing Agency - SixPL</title>
                <meta name="description" content="Avail quality digital marketing services from a top digital marketing agency. Generate more leads at lower cost. Check pricing & packages. 7-Days Free Trial"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/digital-marketing/digital-marketing-full-service.jpg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Hire #1 Digital Marketing Agency - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/digital-marketing/digital-marketing-full-service.jpg' />
                <meta name='twitter:description' content='Avail quality digital marketing services from a top digital marketing agency. Generate more leads at lower cost. Check pricing & packages. 7-Days Free Trial'/>
            </Head>
            <main>
                    <div className="flex flex-col ">
                        <Service title={digitalmarketing.mainSection.title}
                            heading={digitalmarketing.mainSection.heading}
                            subHeading={digitalmarketing.mainSection.subheading}
                            headingCall={digitalmarketing.mainSection.headingCall}
                            tags={digitalmarketing.mainSection.tags}/>
                        <Clients heading={digitalmarketing.clients.heading}/>
                        <Services whyHireUs={digitalmarketing.whyHireUs}/>
                        <PricePackage 
                        heading={digitalmarketing.digitalMarketingPack.heading} 
                        subHeading={digitalmarketing.digitalMarketingPack.subHeading} 
                        packages={digitalmarketing.digitalMarketingPack.pack}
                        description={digitalmarketing.digitalMarketingPack.description}
                        />
                        <Flex 
                        achievement={digitalmarketing.achievement}/>
                        <FAQs faqs={digitalmarketing.faq}/>
                </div>
            </main>
        </Layout>
    )
}
export default FullServiceDigitalMarketingPage