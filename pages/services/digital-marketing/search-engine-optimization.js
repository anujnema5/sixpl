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

const seoPackage = {
    mainSection: services.searchEngineOptimization.mainSection,
    clients: services.searchEngineOptimization.clients,
    whyHireUs: services.searchEngineOptimization.whyHireUs,
    achievement: services.searchEngineOptimization.achievement,
    seoPackage: services.searchEngineOptimization.package,
    startProject: services.searchEngineOptimization.startProject,
    faq: services.searchEngineOptimization.faq,
}


const SearchEngineOptimizationPage = () => {
    return (
        <Layout>
            <Head>
                <title>Best SEO Company in Delaware - SixPL</title>
                <meta name="description" content="SixPL is the best SEO Company in Delaware, USA. Offering on-page and off-page optimization, link building, local SEO and much more. Get Free SEO Audit"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/digital-marketing/search-engine-optimization.jpg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='SEO Services | SEO Agency | Pricing & Packages - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/digital-marketing/search-engine-optimization.jpg' />
                <meta name='twitter:description' content='White hat SEO services from a top SEO agency. Keyword Research, On-Page & Off-Page SEO, Link Building, Local SEO - all services covered. Get Free SEO Audit'/>
            </Head>
            <main>
                    <div className="flex flex-col ">
                        <Service title={seoPackage.mainSection.title}
                            heading={seoPackage.mainSection.heading}
                            subHeading={seoPackage.mainSection.subheading}
                            headingCall={seoPackage.mainSection.headingCall}
                            tags={seoPackage.mainSection.tags}/>
                        <Clients heading={seoPackage.clients.heading}/>
                        <Services whyHireUs={seoPackage.whyHireUs}/>
                        <PricePackage 
                        heading={seoPackage.seoPackage.heading} 
                        subHeading={seoPackage.seoPackage.subHeading} 
                        packages={seoPackage.seoPackage.pack}
                        description={seoPackage.seoPackage.description}
                        />
                        <Flex 
                        achievement={seoPackage.achievement}/>
                        <FAQs faqs={seoPackage.faq}/>
                </div>
            </main>
        </Layout>
    )
}
export default SearchEngineOptimizationPage