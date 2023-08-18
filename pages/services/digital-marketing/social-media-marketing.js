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

const socialMediaPlans = {
    mainSection: services.socialMediaMarketing.mainSection,
    clients: services.socialMediaMarketing.clients,
    whyHireUs: services.socialMediaMarketing.whyHireUs,
    achievement: services.socialMediaMarketing.achievement,
    pack: services.socialMediaMarketing.package,
    startProject: services.socialMediaMarketing.startProject,
    faq: services.socialMediaMarketing.faq,
}


const SocialMediaMarketingPage = () => {
    return (
        <Layout>
            <Head>
                <title>Social Media Marketing Agency | SMM Services - SixPL</title>
                <meta name="description" content="Social media marketing services from a top social media marketing company. Get more followers, engagement, traffic & sales from our SMM services. SixPL" />
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/digital-marketing/social-media-optimization.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:title' content='Social Media Marketing Agency | SMM Services - SixPL' />
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/digital-marketing/social-media-optimization.jpg' />
                <meta name='twitter:description' content='Social media marketing services from a top social media marketing company. Get more followers, engagement, traffic & sales from our SMM services. SixPL' />
            </Head>
            <main>
            <div className="flex flex-col ">
                        <Service title={socialMediaPlans.mainSection.title}
                            heading={socialMediaPlans.mainSection.heading}
                            subHeading={socialMediaPlans.mainSection.subheading}
                            headingCall={socialMediaPlans.mainSection.headingCall}
                            tags={socialMediaPlans.mainSection.tags}/>
                        <Clients heading={socialMediaPlans.clients.heading}/>
                        <Services whyHireUs={socialMediaPlans.whyHireUs}/>
                        <PricePackage 
                        heading={socialMediaPlans.pack.heading} 
                        subHeading={socialMediaPlans.pack.subHeading} 
                        packages={socialMediaPlans.pack.pack}
                        description={socialMediaPlans.pack.description}
                        />
                        <Flex 
                        achievement={socialMediaPlans.achievement}/>
                        <FAQs faqs={socialMediaPlans.faq}/>
                </div>
            </main>
        </Layout>
    )
}
export default SocialMediaMarketingPage