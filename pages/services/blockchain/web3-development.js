import Head from 'next/head'

import Layout from '../../../components/nav/layout'
import { services } from '../../../lib/data/services-details'
import Service from '../../../components/services/service'
import Services from '../../../components/services/Services'
import Clients from '../../../components/services/clients'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import PricePackage from '../../../components/pricing/pricePackage'

const web3Development = {
    mainSection: services.web3Development.mainSection,
    clients: services.web3Development.clients,
    whyHireUs: services.web3Development.whyHireUs,
    achievement: services.web3Development.achievement,
    package: services.web3Development.package,
    startProject: services.web3Development.startProject,
    faq: services.web3Development.faq,
}

const Web3DevelopmentPage = () => {
    return (
        <Layout>
            <Head>
                <title>Hire Best Web3 Developers - SixPL</title>
                <meta name="description" content="Hire top 1% web3 developers & launch you next project on blockchain. Build scalable & compatible decentralized apps (Dapps) today. SixPL"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/blockchain/web3-development.jpg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='Hire Best Web3 Developers - SixPL'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/blockchain/web3-development.jpg' />
                <meta name='twitter:description' content='Hire top 1% web3 developers & launch you next project on blockchain. Build scalable & compatible decentralized apps (Dapps) today. SixPL'/>
            </Head>
            <main>
            <div className="flex flex-col ">
                        <Service title={web3Development.mainSection.title}
                            heading={web3Development.mainSection.heading}
                            subHeading={web3Development.mainSection.subheading}
                            headingCall={web3Development.mainSection.headingCall}
                            tags={web3Development.mainSection.tags}/>
                        <Clients heading={web3Development.clients.heading}/>
                        <Services whyHireUs={web3Development.whyHireUs}/>
                        {/* <PricePackage 
                        heading={web3Development.package.heading} 
                        subHeading={web3Development.package.subHeading} 
                        packages={web3Development.package.pack}
                        description={web3Development.package.description}
                        /> */}
                        <Flex 
                        achievement={web3Development.achievement}/>
                        <FAQs faqs={web3Development.faq}/>
                </div>
            </main>
        </Layout>
    )
}
export default Web3DevelopmentPage