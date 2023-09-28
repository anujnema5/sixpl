import { genPageMetaData } from 'app/seo'
import Image from 'next/image'
import { services } from '@/lib/data/services-details'
import Service from '@/components/services/service'
import Flex from '@/components/services/Flex'
import FAQs from '@/components/services/FAQs'
import siteMetadata from '@/utils/siteMetadata'


const commuintyManagement = {
    mainSection: services.communityManagement.mainSection,
    clients: services.communityManagement.clients,
    whyHireUs: services.communityManagement.whyHireUs,
    achievement: services.communityManagement.achievement,
    package: services.communityManagement.package,
    faq: services.communityManagement.faq,
}

export const metadata = genPageMetaData({ title: `ICO Community Management Services - ${siteMetadata.headerTitle}`, description: "Attract, engage & monetize crypto enthusiasts through crypto ICO community management services. Discord, Telegram, Reddit - All platforms covered. SixPL" })

function page() {
    return (
        <div>
            <div className="flex flex-col ">
                <Service
                    title={commuintyManagement.mainSection.heading}
                    heading={commuintyManagement.mainSection.heading}
                    subHeading={commuintyManagement.mainSection.subheading}
                    headingCall={commuintyManagement.mainSection.headingCall}
                    tags={commuintyManagement.mainSection.tags} />
                <div>
                    <div className="flex flex-col ">
                        <div className="flex flex-col px-4 py-8 items-center text-center">
                            <div className="text-3xl py-0 text-gray-600">Some of Our Clients</div>
                            <div className="text-2xl py-2">From Solopreneurs to Industry Leaders & Governments - SixPL has partnered with Businesses of all Sizes</div>
                        </div>
                        <div>
                            <div className="flex flex-col py-0 lg:flex-row items-center justify-center">
                                <div><Image src="/images/clients-logos/ministry-of-ayush-logo-400-200.svg" width={300} height={150} /></div>
                                <div><Image src="/images/clients-logos/tech-mahindra-logo-400-200.svg" width={300} height={150} /></div>
                                <div><Image src="/images/clients-logos/oyo-logo-400-200.svg" width={300} height={150} /></div>
                                <div><Image src="/images/clients-logos/exide-life-insurance-logo-400-200.svg" width={300} height={150} /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='px-5 prose prose-p:-mb-5 prose-p:-mt-3 prose-h4:-mt-4 mx-auto max-w-full'>
                        <div className=" px-4 py-8 items-center text-center ">
                            <h2 className=" py-2 font-medium text-gray-600">Avail the Best Community Management Services</h2>
                            <h4 className="text-base font-semibold  text-indigo-600">Build and Grow Community of Tokenholders for Your Next Project</h4>
                        </div>
                        <div className="flex flex-col md:px-40">
                                <p className="text-gray-600 text-lg">
                                    {/* <br /> */}
                                    Positive Network Effect lies at the core of every crypto project. Thus, engaging a community of blockchain enthusiast is essential in building a blockchain-based product. Community management is even more critical during the launch of an ICO as it can entirely decide the fate of the ICO. Therefore, At SixPL, we have built a robust ICO community management capability to create, grow and manage various ICO communities.
                                    {/* <br /> */}
                                    {/* <br /> */}
                                    Our “ICO Community Management Services” involves managing online communities such as Telegram, Reddit, Bitcointalk.org, Steemit, Slack, Twitter, Facebook, Medium, etc. to engage likely contributors and answer their concerns. Every person who gets in touch with you through these channels is a potential contributor. Therefore, our community managers promptly respond to every query and work proactively to build an engaged and vibrant community.
                                    {/* <br /> */}
                                    {/* <br /> */}
                                </p>
                                <h2 className='text-2xl font-medium text-gray-600 text-left'>Smart Community Management Strategy</h2>
                                <p className="text-gray-600 text-lg">
                                    {/* <br /> */}
                                    Launching an ICO is a complex project. A large number of worldwide contributors with different time zones, languages and varied interests can drain your resources and workforce. Thus, adopting a smart strategy and having right people onboard is crucial to build credibility and inspire confidence in your potential contributors. Our sound strategy is designed to accomplish more from your online communities with limited resources.
                                    {/* <br /> */}
                                    {/* <br /> */}
                                </p>
                                <h2 className='text-2xl font-medium text-gray-600 py-0 text-left'>Salient Features</h2>
                                <div className="text-gray-600 text-lg">
                                    <ol className='sm:mt-0 -mt-7 list-outside list-disc py-5 px-10 bg-indigo-50/50 rounded-lg'>
                                        <li className='py-1'>Fast response and proactive engagement boost your credibility and authenticity as compared to your competitors. It inspires confidence in users, and thus, they will be more likely to invest in your ICO</li>
                                        <li className='py-1'>Smart, credible and communicative community managers with an account history on various channels – It helps in posting the content to a broader audience</li>
                                        <li className='py-1'>Skilled community managers with a certain level of crypto experience and sound knowledge about features of the various channels such as pinned messages, blocking, spamming, personal messages, how to grow the community, etc.</li>
                                        <li className='py-1'>Our community management professionals also suggest new ideas (that came up in community discussions) to founding teams. It creates a true Positive Network Effect and boosts authenticity</li>
                                        <li className='py-1'>We act instead of reacting. We manage communities proactively to ensure a constant flow of thoughts, opinion, and queries.</li>
                                        <li className='py-1'>In case of negative PR, bad news or challenges, our community managers coordinate swiftly with the founding team to find solutions and adapt wordings to minimize the impact and build trust.</li>
                                    </ol>
                                    {/* <br /> */}
                                </div>
                                <h2 className='text-2xl -mt-7 lg:mt-5 font-medium text-gray-600 text-left'>List of Questions Required to Get Started with the ICO Community Management (Frequently Asked Questions)</h2>
                                <div className="text-gray-600 text-lg">
                                    {/* <br /> */}
                                    Before you jump into managing various channels, you need to answer a few standard questions which are frequently asked by users. Writing the answers not just saves time but also makes the transition smooth when you decide to outsource ICO community management services or change the vendors. The nature of questions varies during the ICO project lifecycle.
                                    {/* <br /> */}
                                    {/* <br /> */}
                                    Here are a few questions which will help you at the initial stage of your ICO:
                                    {/* <br /> */}
                                    {/* <br /> */}

                                    <ol className=' list-outside list-decimal pl-6'>
                                        <li>What is the soft cap?</li>
                                        <li>What is the hard cap?</li>
                                        <li>What happens to the tokens if the hard cap is not raised?</li>
                                        <li>What was ICO price?</li>
                                        <li>On which exchanges your token will be listed?</li>
                                        <li>Which blockchain platform will you use?</li>
                                        <li>What type of partnerships are there?</li>
                                        <li>When is the Launch?</li>
                                        <li>How do I participate in the ICO?</li>
                                        <li>What day and time is the public sale (timezone)?</li>
                                        <li>What are the close dates for public sale?</li>
                                        <li>What are the close dates for private sale?</li>
                                        <li>When will tokens be disbursed?</li>
                                        <li>When can we transfer our tokens?</li>
                                        <li>What coins (cryptocurrencies) are accepted?</li>
                                        <li>Tokens received per coin?</li>
                                        <li>Where can I view the whitepaper?</li>
                                        <li>When will bonuses be distributed?</li>
                                        <li>Is there a lock-up period for bonuses?</li>
                                        <li>What are the requirements for contributors?</li>
                                        <li>What countries cannot participate in the ICO sale?</li>
                                        <li>Is there a demo for the product?</li>
                                        <li>How much of the allocation is left for sale?</li>
                                        <li>Who are the founders?</li>
                                        <li>What is the teams vesting period?</li>
                                        <li>What is the advisors vesting period?</li>
                                        <li>I have question about my contribution, who do I contact for assistance?</li>
                                        <li>What countries will product/platform be available for use?</li>
                                        <li>Do I need to be KYC approved?</li>
                                        <li>How do I get whitelisted for ICO?</li>
                                        <li>Do you offer tokens for referrals?</li>
                                        <li>Are their any bounties available?</li>
                                        <li>How do I participate in bounties?</li>
                                        <li>Is there an Airdrop?</li>
                                        <li>How many tokens will I receive in the Airdrop?</li>
                                        <li>When will the Airdrop occur?</li>
                                        <li>Is there a explainer video?</li>
                                        <li>Where can I find out more information?</li>
                                        <li>What Social platforms are you on? Medium, Telegram. Facebook, Twitter</li>
                                        <li>When Lambo?</li>
                                        <li>Who is your Closest Competitors in Blockchain space?</li>
                                        <li>Who is your Closest Competitors not in the Blockchain space?</li>
                                        <li>Who is your Target Audience for Users?</li>
                                        <li>Who is your Target Audience for Investors?</li>
                                        <li>What is the Style/Tone of conversation that needs to be adopted – Formal, Informal, Conversational?</li>
                                        <li>What is the number of full-time community management needed to be deployed and the hours you would like them to cover?</li>
                                        <li>What is the number of part-time community management needed to be deployed and the hours you would like them to cover?</li>
                                    </ol>
                                    {/* <br /> */}
                                    <br />
                                </div>
                            </div>
                </div>
                {/* <Content/> */}

            </div>
            <Flex achievement={commuintyManagement.achievement} />

            <FAQs faqs={commuintyManagement.faq} />
        </div>
    )
}

export default page