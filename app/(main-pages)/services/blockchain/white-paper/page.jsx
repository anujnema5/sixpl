import React from 'react'
import { services } from '@/lib/data/services-details'
import Service from '@/components/services/service'
import Flex from '@/components/services/Flex'
import FAQs from '@/components/services/FAQs'
import { genPageMetaData } from 'app/seo'
import siteMetadata from '@/utils/siteMetadata'

const whitePaper = {
    mainSection: services.whitePaper.mainSection,
    clients: services.whitePaper.clients,
    whyHireUs: services.whitePaper.whyHireUs,
    achievement: services.whitePaper.achievement,
    package: services.whitePaper.package,
    faq: services.whitePaper.faq,
}

export const metadata = genPageMetaData({ title: `IDO, IEO, ICO Whitepaper Writing Services - ${siteMetadata.headerTitle}`, description: "Get technical & marketing whitepaper writing services for your next ICO, IDO, IEO or any crypto project. Hire the best ico whitepaper writer now. SixPL" })

function page() {
    return (
        <div className="flex flex-col">
            <Service title={whitePaper.mainSection.heading}
                heading={whitePaper.mainSection.heading}
                subHeading={whitePaper.mainSection.subheading}
                headingCall={whitePaper.mainSection.headingCall}
                tags={whitePaper.mainSection.tags} />
            <div className='mx-auto w-full h-full bg-indigo-50/30 px-6 pb-4'>
                {/* <Content key={1}/> */}
                <div className="flex flex-col prose max-w-full prose-h2:mt-4">
                    <div className="px-4 items-center text-center ">
                        <h2 className="text-3xl font-medium text-gray-600">Kickstart Your Blockchain-based Project with a Solid ICO/IEO/IDO White Paper</h2>
                        <h4 className="text-lg font-semibold leading-7 text-indigo-600">Let our Experts Design the Best White Paper for Your Decentralized Application (DAPP)</h4>
                    </div>
                    <div>
                        <div className="flex flex-col md:px-40">
                            <div className="flex flex-col text-xl  lg:px-40">
                                <p className="text-lg text-gray-700">
                                    Are you looking to hire an ICO white paper writer who understands your industry as well as nuances of a successful ICO launch? Do you have a plan to launch an ICO but don’t know how to get started? Are you looking for ICO white paper writers who can deliver a masterpiece on an urgent basis?
                                    If your answer to any of these questions is in affirmative, then you are at the right place! At SixPL, we have a team of talented ICO white paper writers who can deliver a compelling white paper on short notice. Whether you are looking for a commercial or a technical white paper, we have got you covered.
                                </p>
                                <h2 className='text-2xl font-medium text-gray-600  text-left'>Hire an ICO White Paper Writer and Kick off your Project</h2>
                                <p className="text-lg text-gray-700">

                                    A White Paper is at the heart of any Blockchain project.  You can raise millions of dollars through an ICO just on the strength of your White Paper.


                                    We have written hundreds of ICO White Papers for innovative Blockchain projects.  We closely monitor the fast-changing industry and regulatory environments across the world and incorporate necessary details in the White Paper to ensure the success of your ICO launch. Our expert white paper writers are bitcoin (and other cryptocurrencies) investors and traders who keep an eye on the latest developments in the cryptocurrency ecosystem.


                                    We have also invested in several cryptocurrency projects through token generation events (also called Initial Coin Offerings or “ICO”) by analyzing their White Paper and business model. Thus, we have a deep understanding of the nuances of Token Launch and impact of quality of White Paper on the success of an ICO. In fact, the success of most prominent ICOs can be attributed to their White Paper and the founding team. Hire a white paper writer now and take the first step towards launching your next revolutionary project.


                                </p>
                                <h2 className='text-2xl font-medium text-gray-600 text-left'>White Paper – A Prerequisite to a successful Crypto Project</h2>
                                <p className="text-lg text-gray-700">

                                    At the time of a token crowdsale, you may not have a product, an audience or any traction. Most of the entrepreneurs or founding teams can’t afford to hire blockchain engineers. They depend on money generated through the Initial Coin Offering to fund astronomical salaries of experienced blockchain engineers and product developers. Thus, the only tangible thing they have at the time of Token launch is a White Paper which also acts as a Prospectus or a legal document in some countries. Therefore, writing an excellent White Paper is a prerequisite to a successful crypto project.


                                </p>
                                <h2 className='text-2xl font-medium text-gray-600  text-left'>Inspire Your Audience and Get Backing of your Users</h2>
                                <p className="text-lg text-gray-700">

                                    While writing a White Paper for ICO, we make a balance between the technical and business aspects of the project implementation. We understand that it is vital to inspire the tech-enthusiast blockchain community & traders as well as gain traction among the users of your product. Backing from end users of the yet-to-be-developed product can be a dream for the teams spearheading the Initial Coin Offering. Thus, we invest a significant amount of time in writing a White Paper that attracts both – the active blockchain community as well as your end users.


                                </p>
                                <h2 className='text-2xl font-medium text-gray-600  text-left'>ICO White Paper Template</h2>
                                <div className="text-lg text-gray-700">

                                    There is no universal or prescribed format or a template for a White Paper for ICO. The structure of a white paper entirely depends on the nature of the project. Some of the organizations prefer to have a technical and detailed white paper while others prefer to adopt a marketing or commercial white paper template to attract not so tech-savvy investors as well. Thus, the selection of white paper template depends on your target audience. It shouldn’t be too technical to comprehend. At the same time writing a very simple White Paper may not impress your target audience.

                                    <br />
                                    <br />
                                    <span className='text-lg font-medium'>However, an ICO White Paper must contain the following</span>
                                    <br />
                                    <br />

                                    <ol className=' list-inside list-decimal px-2'>
                                        <li>Abstract</li>
                                        <li>The Problem or challenges in the existing market</li>
                                        <li>The solution and Product</li>
                                        <li>Project Implementation – How tokens work with the project. The technical, economic and legal aspect of the tokens</li>
                                        <li>Tokenomics</li>
                                        <li>Why should you Invest</li>
                                        <li>ICO Details</li>
                                        <li>The team behind the project</li>
                                        <li>Token Deployment and Future Plans</li>
                                        <li>Conclusion</li>
                                    </ol>

                                    An ICO white paper may have 20-40 pages depending on the nature of your project. It must contain the necessary details required to answer technical and non-technical questions by prospective token buyers. The White Paper must be authentic and provide credible information.


                                    Visual depiction of facts and figures is critical. Ensure that the document looks attractive and help readers understand the topic quickly. We at SixPL, provide white paper writing as well as designing services so that you can get everything you need to make your ICO launch successful.


                                </div>
                                <h2 className='text-2xl font-medium text-gray-600  items-start'>ICO White Paper Writing Services from Blockchain Experts</h2>
                                <p className="text-lg text-gray-700">
                                    We at SixPL, have written ICO white paper for several successful cryptocurrency-based startups across the globe. Our cost-effective services are designed to help you get started with your crypto project on a low budget. Our deep understanding of the blockchain ecosystem along with years of experience in business writing has helped us deliver quality White Papers to make your ICO launch successful. We have a team of technical experts and native writers who are willing to bring your ideas to life with a sound project plan. We make sure that our content is original and free from plagiarism or grammatical errors. Although the revision requests are minimal, we work on feedback and improve content to the satisfaction of our clients.

                                    <br />
                                    <br />
                                    <span className='font-semibold'>Contact us to get your custom ICO White Paper written today!</span>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Flex achievement={whitePaper.achievement} />
            <FAQs faqs={whitePaper.faq} />
        </div>
    )
}

export default page