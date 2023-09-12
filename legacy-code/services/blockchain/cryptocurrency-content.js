import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'
import { services } from '../../../lib/data/services-details'
import ContactFormVertical from '../../../components/forms/contact-form-vertifical'
import Clients from '../../../components/services/clients'
import Services from '../../../components/services/Services'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'

const cryptocurrencyContent = {
    mainSection: services.cryptoContent.mainSection,
    clients: services.cryptoContent.clients,
    whyHireUs: services.cryptoContent.whyHireUs,
    achievement: services.cryptoContent.achievement,
    package: services.cryptoContent.package,
    startProject: services.cryptoContent.startProject,
    faq: services.cryptoContent.faq,
}


const CryptoContentPage = () => {
    return (
        <Layout>
            <Head>
                <title>Blockchain & Cryptocurrency Content Writer - SixPL</title>
                <meta name="description" content="Avail blockchain & crypto content writing services and communicate your complex blockchain-based business model to the target audience. Crypto Content Services" />
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/blockchain/crypto-content.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:title' content='Blockchain & Cryptocurrency Content Writer - SixPL' />
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/blockchain/crypto-content.jpg' />
                <meta name='twitter:description' content='Avail blockchain & crypto content writing services and communicate your complex blockchain-based business model to the target audience. Crypto Content Services' />
            </Head>
            <main>
                <div className="flex flex-col ">
                    <div className='lg:min-h-screen text-white'>
                        <div>
                            <Image priority height={457} width={765} src='/images/blockchain/blockchain-cryptocurrency-content-writer.jpeg' alt='cryptocurrency content writer' layout='responsive' />
                        </div>
                    </div>
                    <div className='px-4 py-10 lg:px-14'>
                        <div className=' flex flex-col items-center'>
                            <div className=' py-4 text-center text-3xl text-gray-700 font-semibold'>Blockchain Technology and Cryptocurrency is Redefining the Future of Commerce</div>
                            <div className='  flex flex-col lg:flex-row'>
                                <div className=' p-4 lg:px-8  flex flex-col lg:w-1/2'>
                                    <div className=' text-xl font-semibold leading-7 text-indigo-600 text-center py-4 '>You Lead The Change</div>
                                    <div className='  text-xl text-gray-700'>
                                        <p className="text-lg text-gray-700">
                                            It is Revolutionary. It is Democratic. It has the potential to transform the economy and share the wealth beyond certain individuals and the corporations. Blockchain can break the monopoly of central banks across the world.
                                        </p>
                                        <br />
                                        <p className="text-lg text-gray-700">
                                            While everyone is talking about blockchain technology, many smart entrepreneurs have already taken the plunge. They are creating innovative systems, products, and platforms which are underpinned by blockchain technology.These startups are utilizing the power of Smart Contracts to make financial transactions more secure, reliable, affordable and instant. With the increased capacity of Bitcoin system, the cryptocurrency is expected to be more inclusive in the future.
                                        </p>
                                        <br />
                                        <p className="text-lg text-gray-700">
                                            The blockchain ecosystem has also brought disruptions in the Fintech sector and expected to bring a paradigm shift in the way companies, and individuals do financial transactions. Top financial institutions including Gladman Sachs have recognized the power of cryptocurrency and have undertaken several initiatives to lead the new phenomena.
                                        </p>
                                    </div>
                                </div>
                                <div className=' p-4 lg:px-8 flex flex-col lg:w-1/2'>
                                    <div className=' text-xl font-semibold leading-7 text-indigo-600 text-center py-4 '>We Power That Change</div>
                                    <div className=' text-xl text-gray-700'>
                                        <p className="text-lg text-gray-700">
                                            We at SixPL, are determined to help the DOERS turn their ideas into reality by providing quality content on blockchain technology, cryptocurrency, ICO, etc. We have already worked with some of the leading FinTech startups, Bitcoin exchanges and Blockchain developers who have built next generation platforms and products using blockchain ecosystem.
                                        </p>
                                        <br />
                                        <p className="text-lg text-gray-700">
                                            We are not just language, marketing and technology experts, but also Bitcoin investors and traders. Therefore, we closely track the latest development in cryptocurrency sector and make sound financial decisions. It has led to in-depth knowledge and superior capability to write relevant content for your audience.
                                        </p>
                                        <br />
                                        <p className="text-lg text-gray-700">
                                            We have written hundreds of blogs, news pieces, product descriptions (blockchain-based products), ICO white papers, case studies, press release, guest posts and academic papers in blockchain domain. Our client base include FinTech Startups, Global Thinkers, Blockchain Programmers, cryptocurrency exchanges and traders, leading cryptocurrency publishers and bloggers, etc.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Clients heading={"Hello"} />
                    <Services whyHireUs={cryptocurrencyContent.whyHireUs} />
                    <Flex
                        achievement={cryptocurrencyContent.achievement} />
                        <FAQs faqs={cryptocurrencyContent.faq}/>
                </div>
            </main>
        </Layout>
    )
}
export default CryptoContentPage