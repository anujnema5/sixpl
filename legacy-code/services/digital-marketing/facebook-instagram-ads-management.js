import Head from 'next/head'

import Layout from '../../../components/nav/layout'
import { services } from '../../../lib/data/services-details'
import Service from '../../../components/services/service'
import Services from '../../../components/services/Services'
import Clients from '../../../components/services/clients'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import PricePackage from '../../../components/pricing/pricePackage'

const facebookInstagramAdsManagement = {
    mainSection: services.facebookInstagramAdsManagement.mainSection,
    clients: services.facebookInstagramAdsManagement.clients,
    whyHireUs: services.facebookInstagramAdsManagement.whyHireUs,
    achievement: services.facebookInstagramAdsManagement.achievement,
    package: services.facebookInstagramAdsManagement.package,
    startProject: services.facebookInstagramAdsManagement.startProject,
    faq: services.facebookInstagramAdsManagement.faq,
}


const FBInstaPage = () => {
    return (
        <Layout>
            <Head>
                <title>Facebook & Instagram Ads Management Services - SixPL</title>
                <meta name="description" content="Facebook Ads Management services designed to generate more leads & sales. Facebook & Instagram Lead generation ads. Business Manager services. SixPL"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/digital-marketing/facebook-instagram-ads-management.jpg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Facebook & Instagram Ads Management Services - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/digital-marketing/facebook-instagram-ads-management.jpg' />
                <meta name='twitter:description' content='Facebook Ads Management services designed to generate more leads & sales. Facebook & Instagram Lead generation ads. Business Manager services. SixPL'/>
            </Head>
            <main>
            <div className="flex flex-col ">
                        <Service title={facebookInstagramAdsManagement.mainSection.title}
                            heading={facebookInstagramAdsManagement.mainSection.heading}
                            subHeading={facebookInstagramAdsManagement.mainSection.subheading}
                            headingCall={facebookInstagramAdsManagement.mainSection.headingCall}
                            tags={facebookInstagramAdsManagement.mainSection.tags}/>
                        <Clients heading={facebookInstagramAdsManagement.clients.heading}/>
                        <Services whyHireUs={facebookInstagramAdsManagement.whyHireUs}/>
                        <PricePackage 
                        heading={facebookInstagramAdsManagement.package.heading} 
                        subHeading={facebookInstagramAdsManagement.package.subHeading} 
                        packages={facebookInstagramAdsManagement.package.pack}
                        description={facebookInstagramAdsManagement.package.description}
                        />
                        <Flex 
                        achievement={facebookInstagramAdsManagement.achievement}/>
                        <FAQs faqs={facebookInstagramAdsManagement.faq}/>
                </div>
            </main>
        </Layout>
    )
}
export default FBInstaPage