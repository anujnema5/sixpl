import Head from 'next/head'

import Layout from '../../../components/nav/layout'
import { services } from '../../../lib/data/services-details'
import Service from '../../../components/services/service'
import Services from '../../../components/services/Services'
import Clients from '../../../components/services/clients'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import PricePackage from '../../../components/pricing/pricePackage'

const googleAdsManagement = {
    mainSection: services.googleAdsManagement.mainSection,
    clients: services.googleAdsManagement.clients,
    whyHireUs: services.googleAdsManagement.whyHireUs,
    achievement: services.googleAdsManagement.achievement,
    package: services.googleAdsManagement.package,
    startProject: services.googleAdsManagement.startProject,
    faq: services.googleAdsManagement.faq,
}


const GoogleAdsManagementPage = () => {
    return (
        <Layout>
            <Head>
                <title>Google Ads Management | PPC Agency | PPC Services - SixPL</title>
                <meta name="description" content="Google Ads management services designed to generate more ROI from Google ads campaign. Avail PPC services, Remarketing Ads from top PPC agency, SixPL"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/digital-marketing/google-ads-managment.jpg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Google Ads Management | PPC Agency | PPC Services - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/digital-marketing/google-ads-managment.jpg' />
                <meta name='twitter:description' content='Google Ads management services designed to generate more ROI from Google ads campaign. Avail PPC services, Remarketing Ads from top PPC agency, SixPL'/>
            </Head>
            <main>
            <div className="flex flex-col ">
                        <Service title={googleAdsManagement.mainSection.title}
                            heading={googleAdsManagement.mainSection.heading}
                            subHeading={googleAdsManagement.mainSection.subheading}
                            headingCall={googleAdsManagement.mainSection.headingCall}
                            tags={googleAdsManagement.mainSection.tags}/>
                        <Clients heading={googleAdsManagement.clients.heading}/>
                        <Services whyHireUs={googleAdsManagement.whyHireUs}/>
                        <PricePackage 
                        heading={googleAdsManagement.package.heading} 
                        subHeading={googleAdsManagement.package.subHeading} 
                        packages={googleAdsManagement.package.pack}
                        description={googleAdsManagement.package.description}
                        />
                        <Flex 
                        achievement={googleAdsManagement.achievement}/>
                        <FAQs faqs={googleAdsManagement.faq}/>
                    </div>
            </main>
        </Layout>
    )
}
export default GoogleAdsManagementPage