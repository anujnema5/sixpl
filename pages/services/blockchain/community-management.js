import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'
import ContactFormVertical from '../../../components/forms/contact-form-vertifical'

const CommunityManagementPage = () => {
    return (
        <Layout>
            <Head>
                <title>ICO Community Management Services</title>
            </Head>
            <main>
                <div>
                    <div className="flex flex-col font-serif">
                        <div className='relative'>
                            <Image priority src='/images/dm-icons/top-background.svg' layout='fill' objectFit='cover' objectPosition='left' quality={100}  />
                            <div className=' relative z-10 flex flex-col text-white'>
                            <div>
                                <div className="flex flex-col px-4 py-8 items-center text-center">
                                    <h1 className="text-4xl py-4">ICO Community Management Services</h1>
                                    <p className="text-2xl py-2">Create, grow, manage and engage a vibrant community of blockchain enthusiast with our ICO community management services.</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col lg:flex-row">
                                    <div className="lg:w-1/2 px-4 py-14">
                                        <div className="pb-4 text-center text-3xl">Grow Your Crypto Community with Top Community Management Services</div>
                                        <div>
                                            <div className="flex flex-col">
                                                <div className="flex flex-col items-center lg:flex-row justify-center">
                                                    <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                        <div className="flex flex-col items-center text-center p-2">
                                                            <div className="py-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 24 24" strokeWidth="1" stroke="rgb(4,120,87,1)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                    <path d="M3 10l1 2h6" />
                                                                    <path d="M12 9a2 2 0 0 0 -2 2v3c0 1.1 .9 2 2 2h7a2 2 0 0 0 2 -2c0 -3.31 -3.13 -5 -7 -5h-2z" />
                                                                    <line x1="13" y1="9" x2="13" y2="6" />
                                                                    <line x1="5" y1="6" x2="20" y2="6" />
                                                                    <path d="M15 9.1v3.9h5.5" />
                                                                    <line x1="15" y1="19" x2="15" y2="16" />
                                                                    <line x1="19" y1="19" x2="11" y2="19" />
                                                                </svg>
                                                            </div>
                                                            <div className="py-2 text-2xl">24*7 Instant Support</div>
                                                        </div>
                                                    </div>
                                                    <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                        <div className="flex flex-col items-center text-center p-2 ">
                                                            <div className="py-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 24 24" strokeWidth="1" stroke="rgb(4,120,87,1)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                        <ellipse cx="16" cy="6" rx="5" ry="3" />
                                                                    <path d="M11 6v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                                                    <path d="M11 10v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                                                    <path d="M11 14v4c0 1.657 2.239 3 5 3s5 -1.343 5 -3v-4" />
                                                                    <path d="M7 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
                                                                    <path d="M5 15v1m0 -8v1" />
                                                                </svg>
                                                            </div>
                                                            <div className="py-2 text-2xl">Spam Filtering</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-center lg:flex-row justify-center">
                                                    <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                        <div className="flex flex-col items-center text-center p-2">
                                                            <div className="py-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 24 24" strokeWidth="1" stroke="rgb(4,120,87,1)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                    <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8" />
                                                                    <line x1="13" y1="7" x2="13" y2="7.01" />
                                                                    <line x1="17" y1="7" x2="17" y2="7.01" />
                                                                    <line x1="17" y1="11" x2="17" y2="11.01" />
                                                                    <line x1="17" y1="15" x2="17" y2="15.01" />
                                                                </svg>
                                                            </div>
                                                            <div className="py-2 text-2xl">Proactive Community Management</div>
                                                        </div>
                                                    </div>
                                                    <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                        <div className="flex flex-col items-center text-center p-2">
                                                            <div className="py-2">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20" viewBox="0 0 24 24" strokeWidth="1" stroke="rgb(4,120,87,1)" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                    <circle cx="12" cy="5" r="2" />
                                                                    <circle cx="5" cy="19" r="2" />
                                                                    <circle cx="19" cy="19" r="2" />
                                                                    <circle cx="12" cy="14" r="3" />
                                                                    <line x1="12" y1="7" x2="12" y2="11" />
                                                                    <line x1="6.7" y1="17.8" x2="9.5" y2="15.8" />
                                                                    <line x1="17.3" y1="17.8" x2="14.5" y2="15.8" />
                                                                </svg>
                                                            </div>
                                                            <div className="py-2 text-2xl">Encourage Positive Discussions</div>
                                                        </div>  
                                                    </div>   
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 px-4 py-14">
                                        <div className='text-gray-700'>
                                            <ContactFormVertical />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col font-serif">
                                <div className="flex flex-col px-4 py-8 items-center text-center">
                                    <div className="text-3xl py-4 text-sptheme-darkgreen">Some of Our Clients</div>
                                    <div className="text-2xl py-2">From Solopreneurs to Industry Leaders & Governments - SixPL has partnered with Businesses of all Sizes</div>
                                </div>
                                <div>
                                    <div className="flex flex-col py-4 lg:flex-row items-center justify-center">
                                        <div><Image src="/images/clients-logos/ministry-of-ayush-logo-400-200.svg" width={300} height={150} /></div>
                                        <div><Image src="/images/clients-logos/tech-mahindra-logo-400-200.svg" width={300} height={150} /></div>
                                        <div><Image src="/images/clients-logos/oyo-logo-400-200.svg" width={300} height={150} /></div>
                                        <div><Image src="/images/clients-logos/exide-life-insurance-logo-400-200.svg" width={300} height={150} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='  '>
                            <div className="flex flex-col font-serif">
                                <div>
                                    <div className="flex flex-col px-4 py-8 items-center text-center ">
                                        <h2 className="text-3xl py-4 text-sptheme-darkgreen">Avail the Best Community Management Services</h2>
                                        <p className="text-2xl py-2">Build and Grow Community of Tokenholders for Your Next Project</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex flex-col md:px-40">
                                        <div className="flex flex-col text-xl font-serif lg:px-40">
                                            <p>
                                                <br/>
                                                Positive Network Effect lies at the core of every crypto project. Thus, engaging a community of blockchain enthusiast is essential in building a blockchain-based product. Community management is even more critical during the launch of an ICO as it can entirely decide the fate of the ICO. Therefore, At SixPL, we have built a robust ICO community management capability to create, grow and manage various ICO communities.
                                                <br />
                                                <br />
                                                Our “ICO Community Management Services” involves managing online communities such as Telegram, Reddit, Bitcointalk.org, Steemit, Slack, Twitter, Facebook, Medium, etc. to engage likely contributors and answer their concerns. Every person who gets in touch with you through these channels is a potential contributor. Therefore, our community managers promptly respond to every query and work proactively to build an engaged and vibrant community.
                                                <br/>
                                                <br/>
                                            </p>
                                            <h2 className='text-2xl text-sptheme-darkgreen py-4 text-left'>Smart Community Management Strategy</h2> 
                                            <p>
                                                <br/>
                                                Launching an ICO is a complex project. A large number of worldwide contributors with different time zones, languages and varied interests can drain your resources and workforce. Thus, adopting a smart strategy and having right people onboard is crucial to build credibility and inspire confidence in your potential contributors. Our sound strategy is designed to accomplish more from your online communities with limited resources.
                                                <br />
                                                <br />
                                            </p> 
                                            <h2 className='text-2xl text-sptheme-darkgreen py-4 text-left'>Salient Features</h2> 
                                            <p>
                                                <ol className=' list-outside list-disc px-10 py-10 bg-slate-200 rounded-lg'>
                                                    <li className='py-1'>Fast response and proactive engagement boost your credibility and authenticity as compared to your competitors. It inspires confidence in users, and thus, they will be more likely to invest in your ICO</li>
                                                    <li className='py-1'>Smart, credible and communicative community managers with an account history on various channels – It helps in posting the content to a broader audience</li>
                                                    <li className='py-1'>Skilled community managers with a certain level of crypto experience and sound knowledge about features of the various channels such as pinned messages, blocking, spamming, personal messages, how to grow the community, etc.</li>
                                                    <li className='py-1'>Our community management professionals also suggest new ideas (that came up in community discussions) to founding teams. It creates a true Positive Network Effect and boosts authenticity</li>
                                                    <li className='py-1'>We act instead of reacting. We manage communities proactively to ensure a constant flow of thoughts, opinion, and queries.</li>
                                                    <li className='py-1'>In case of negative PR, bad news or challenges, our community managers coordinate swiftly with the founding team to find solutions and adapt wordings to minimize the impact and build trust.</li>
                                                </ol>  
                                                <br/>
                                                <br/>
                                            </p>
                                            <h2 className='text-2xl text-sptheme-darkgreen py-4 text-left'>List of Questions Required to Get Started with the ICO Community Management (Frequently Asked Questions)</h2> 
                                            <p>
                                                <br/>
                                                Before you jump into managing various channels, you need to answer a few standard questions which are frequently asked by users. Writing the answers not just saves time but also makes the transition smooth when you decide to outsource ICO community management services or change the vendors. The nature of questions varies during the ICO project lifecycle.
                                                <br />
                                                <br/>
                                                Here are a few questions which will help you at the initial stage of your ICO:
                                                <br />
                                                <br />

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
                                                <br/>
                                                <br/>
                                            </p>   
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className="py-10 font-serif bg-slate-900">
                                    <div className="p-4 flex flex-col justify-center text-center">
                                        <div className="px-2 py-10 text-3xl text-white">Delivering Superior Blockchain & Crypto Services Since 2017</div>
                                        <div className="py-4 px-2 lg:flex lg:justify-around">
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-mono">5</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Years</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-sans">30+</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Blockchain-based Apps</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-8 py-2 text-6xl text-sky-300 font-sans">52</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">Smart Contracts</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-sans">261</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">White Papers</div>
                                            </div>
                                            <div className="px-2 py-8 flex flex-col justify-center">
                                                <div className="px-4 py-2 text-6xl text-sky-300 font-sans">$400+</div>
                                                <div className="px-4 py-2 text-xl text-gray-100">ICO Funding</div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 px-4 py-14">
                                    <div className="pb-4 text-center text-3xl text-sptheme-darkgreen">Hire Communicative and Credible Community Managers who can make a difference to your ICO Launch!</div>
                                    <div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M12 16v-8l-2 2" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Define Scope of Work</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2 ">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M10 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Decide Project Budgeting</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M12 12a2 2 0 1 0 -2 -2" />
                                                                <path d="M10 14a2 2 0 1 0 2 -2" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Answer the Questions Mentioned Above</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                                <path d="M13 16v-8l-4 6h5" />
                                                                <circle cx="12" cy="12" r="9" />
                                                            </svg>
                                                        </div>
                                                        <div className="py-2 text-2xl text-gray-700">Start the Project</div>
                                                    </div>  
                                                </div>   
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 px-4 py-14">
                                    <div className="py-14">
                                        <ContactFormVertical />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-700">
                            <div>
                                <div className="flex flex-col px-4 py-8  items-center text-center">
                                    <div className="text-3xl py-4 text-white">Frequently Asked Questions</div>
                                    <div className="text-xl py-2xl text-white">Read some common questions related to our services and their answers</div>
                                </div>   
                            </div>
                            <div>
                                <div className='lg:px-40 py-10 font-serif '>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Do Your Community Management Services in Multiple Languages?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>Currently, we are offering community management services only in English, German and Hindi.</div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>How do you support different timezones?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>We deploy community managers in three shifts to cater to all timezones across the globe (24*7 engagement) </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>Do you also support community growth services?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            Yes. Our packages includes community growth as well as management services.
                                        </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>How much do you charge for your community management services?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            Please contact us so that we can discuss the project and send you the most suitable community management packages for your project.
                                        </div>
                                    </div>
                                    <div className='flex flex-col bg-gray-100 rounded-md p-4 my-8'>
                                        <div className='font-semibold py-2 px-4 text-stone-800'>How your community managers coordinate with our internal team?</div>
                                        <div className='text-lg py-2 px-4 text-gray-700'>
                                            We have an internal group of admins on Telegram/WhatsApp to devise the strategy and coordinate project execution.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default CommunityManagementPage