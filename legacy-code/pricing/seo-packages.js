import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import Layout from '../../components/nav/layout'
import { useState } from 'react'
import { tiers } from '../../lib/data/seo-packages'
// // console.log(packages);

const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]

const SEOPackages = () => {

    const [frequency, setFrequency] = useState(frequencies[0])
    const [selectedDiv, setSelectedDiv] = useState(2);

    function onSelect(index) {
        setSelectedDiv(index)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Layout>
            <Head>
                <title>Affordable SEO Packages in Delaware, USA - SixPL</title>
                <meta name="description" content="Are you looking for affordable SEO packages in Delaware USA? SixPL monthly SEO Packages are best for all businesses. Get SEO package prices now." />
                <meta name="image" property='og:image' content='https://www.sixpl.com/og-images/pricing/affordable-seo-packages.jpeg' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:title' content='Affordable SEO Packages in Delaware, USA - SixPL' />
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/sixpl-home.jpg' />
                <meta name='twitter:description' content='Are you looking for affordable SEO packages in Delaware USA? SixPL monthly SEO Packages are best for all businesses. Get SEO package prices now.' />
            </Head>
            <main>
                <div className=' lg:m-2 lg:py-12 m-0 px-3'>
                    <div className='mt-12 sm:mt-16 lg:-mb-16 -mb-28 border-2 border-transparent'>
                        <h1 className='lg:text-[1.9rem] px-2 text-2xl font-bold tracking-tight text-gray-600 sm:text-3xl text-center'>Affordable SEO Packages</h1>
                    </div>

                    {/* PRICING SECTION */}
                    <div className="bg-indigo-50/30 lg:bg-indigo-50/10 py-24 sm:py-24">
                        <div className="mx-auto lg:w-9/12 lg:px-8 py-14 lg:py-12 lg:bg-gradient-to-br lg:from-slate-50 lg:to-indigo-100 px-4 rounded-xl shadow-xl shadow-indigo-100 lg:mt-0">

                            <div className="mx-auto lg:mt-2 -mt-4 flex flex-col gap-3 max-w-7xl text-center">
                                <span className="text-base font-semibold leading-7 text-indigo-600">Pricing</span>
                                <h2 className="mt-2 lg:text-3xl text-2xl font-semibold tracking text-gray-600 sm:text-5xl">
                                    Tailored solutions to empower SEO teams for success.
                                </h2>
                            </div>
                            <p className="mx-auto mt-6 max-w-2xl text-center lg:text-base text-sm leading-7 text-gray-500 ">
                                Boost your online visibility with our SEO Packages. Drive organic traffic and stand out in search results with our proven strategies.
                            </p>

                            <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">

                                {/* PACKAGES */}
                                {tiers.map((tier, index) => (
                                    <div
                                        onClick={() => onSelect(index)}
                                        key={tier.id}
                                        className={classNames(
                                            index === selectedDiv ? 'ring-2 ring-indigo-600 transition-all ease-linear	duration-200' : 'ring-1 ring-gray-200 ',
                                            'rounded-3xl p-8 bg-slate-50 shadow-lg shadow-slate-300 cursor-pointer ease-linear w-full '
                                        )}
                                    >
                                        <h3
                                            id={tier.id}
                                            className={classNames(
                                                tier.mostPopular ? 'text-indigo-600' : 'text-gray-800/90',
                                                'text-lg font-semibold leading-8'
                                            )}
                                        >
                                            {tier.name}
                                        </h3>
                                        <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                                        <p className="mt-6 flex items-baseline gap-x-1">
                                            <span className="text-3xl font-bold tracking-tight text-gray-800/90">{tier.price[frequency.value]}</span>
                                            <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
                                        </p>
                                        <a
                                            href={tier.href}
                                            aria-describedby={tier.id}
                                            className={classNames(
                                                selectedDiv === index
                                                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 transition-all'
                                                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                                'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-indigo-500  hover:text-gray-200 transition-all focus-visible:outline-indigo-600 ease-linear	duration-200'
                                            )}
                                        >
                                            Buy plan
                                        </a>
                                        <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                            {tier.features.map((feature, index) => (
                                                <div key={index + 1} className="">
                                                    <h4 className='text-lg font-medium'>{feature.title}</h4>
                                                    <div className='flex flex-col gap-2 text-sm text-gray-500 mt-2'>
                                                        {feature?.data?.map((details, index) => (
                                                            <div className='flex gap-3 items-center' key={index}>
                                                                {details.disable ? <XMarkIcon className="h-6 w-5 flex-none text-red-900" ></XMarkIcon> : <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />}

                                                                <li className={details.disable ? "text-gray-400 my-0 leading-6" : "text-gray-500 my-0 leading-6"}>{details.title}</li>

                                                            </div>
                                                        ))}
                                                    </div>

                                                </div>

                                            ))}
                                        </ul>
                                        <a
                                            href={tier.href}
                                            aria-describedby={tier.id}
                                            className={classNames(
                                                selectedDiv === index
                                                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 transition-all'
                                                    : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                                'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-indigo-500  hover:text-gray-200 transition-all focus-visible:outline-indigo-600 right-4 ease-linear duration-200'
                                            )}
                                            id={`buyNow${index}`}
                                        >
                                            Buy plan
                                        </a>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col px-3 -mt-10 lg:mx-36'>
                            <div>
                                <div>
                                    <h2 className='text-2xl lg:text-3xl font-semibold text-center py-3 text-gray-600'>Affordable SEO Packages to Boost Your Ranking and Revenue</h2>
                                </div>
                                <div className=' text-xl text-gray-600'>
                                    <p className=' py-1'>Search Engine Optimization, if done right, can generate filtered leads. Businesses which generate leads/sales through SEO tend to have superior conversion rates and higher ticket size per sales.</p>
                                    <p className=' py-1'>If you are planning to promote your business and looking for affordable SEO packages, you are at the right place.</p>
                                    <p className=' py-1'>SixPL SEO service packages are designed to put your website on the first page of Google. We offer both, one-time fixation as well as monthly SEO packages to meet your unique business requirements. Whether you are looking for ecommerce SEO packages, local SEO packages or SEO quotes for a corporate website; our plans have got you covered.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col m-2 p-2 lg:mx-36'>
                            <div>
                                <div>
                                    <h2 className='text-2xl font-semibold text-center py-3 text-gray-600'>Decoding SixPL Monthly SEO Packages</h2>
                                </div>
                                <div className=' text-xl text-gray-600'>
                                    <p className=' py-1'>Do you need help in understanding our SEO packages?</p>
                                    <p className=' py-1'>SixPL monthly SEO packages are quite comprehensive. That means it includes almost every activity required to optimize your website not just for search engines but also for your potential customers.</p>
                                    <p className=' py-1'>Our monthly SEO packages focus on long term ranking of your website. That is the reason it incorporates such a vast set of features and activities.</p>
                                    <p className=' py-1'>Let’s explain our monthly SEO plans and pricing so that you can make an informed decision.</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3 className=' lg:text-3xl text-2xl font-semibold text-center py-3 text-gray-600'>Monthly SEO Packages</h3>
                                </div>
                                <div className=' text-xl text-gray-600'>
                                    <p className=' py-1'>To begin with, there are four SEO packages starting at $399. Each plan has a set of activities and relevant SEO package prices.</p>
                                    <p className=' py-1'>The four monthly SEO plans are mentioned below:</p>
                                    {/* Bullet Points Div */}
                                    <div>
                                        <ol className=' list-decimal list-inside py-3 px-8'>
                                            <li>Starter</li>
                                            <li>Standard</li>
                                            <li>Plus, and</li>
                                            <li>Enterprise</li>
                                        </ol>
                                    </div>
                                    <p className=' py-1'>The choice of plan depends on your exact requirements. Before deciding the plan, you should have a clear idea of the activities done under each plan and how they help your business.</p>
                                    <p className=' py-1'>Let’s discuss each activity in detail to get a better understanding of SEO packages.</p>

                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3 className=' lg:text-3xl text-2xl font-semibold text-center py-3 text-gray-600'>Detailed Explanation - SEO Marketing Packages</h3>
                                </div>
                                <div className=' text-xl text-gray-600'>

                                    <p className=' py-1'>As you see in the SEO price list, our affordable SEO packages include 12 broad categories as mentioned below:</p>
                                    {/* Bullet Points Div */}
                                    <div>
                                        <ol className=' list-decimal list-inside py-3 px-8'>
                                            <li>Highlight</li>
                                            <li>SEO Audit & Website Analysis</li>
                                            <li>OnPage SEO</li>
                                            <li>Technical SEO</li>
                                            <li>Measurement & Tracking</li>
                                            <li>Off-Page Optimization</li>
                                            <li>Content Marketing</li>
                                            <li>Social Media Marketing</li>
                                            <li>Brand Building</li>
                                            <li>Lead Generation</li>
                                            <li>Reporting</li>
                                            <li>Support</li>
                                        </ol>
                                    </div>
                                    <p className=' py-1'>The detailed explanation for each activity is mentioned below.</p>
                                </div>
                            </div>
                            {/* Detailed explanation of each activity starts here */}
                            <div>
                                <div>
                                    <h4 className=' lg:text-3xl text-2xl font-semibold text-center py-3 text-gray-600'>Key Highlights</h4>
                                </div>
                                <div className=' text-xl text-gray-600'>

                                    <p className=' py-1'>This section has the key deliverables for each SEO plan. In fact, these are the basis for selection of any of the plans.</p>
                                    <p className=' py-1'>Each plan has the following four key deliverables:</p>

                                    {/* Bullet Points Div */}
                                    <div>
                                        <ol className=' list-decimal list-inside py-3 px-8'>
                                            <li>No of keywords</li>
                                            <li>Landing pages</li>
                                            <li>Backlinks</li>
                                            <li>Google My Business</li>

                                        </ol>
                                    </div>
                                    <p className=' py-1'>The quantity of each of these affects SEO pricing. The other activities executed under each plan helps us expedite the ranking and deliver more quality leads and sales in short time frame.</p>
                                    <p className=' py-1'>The role and impact of each deliverable is discussed below:</p>
                                    <div>
                                        <h5 className=' font-bold py-1'>No of Keywords</h5>
                                        <p className=' py-1'>A keyword or keyphrase means the phrase your potential customer may search on Google to find your offerings. Since every user searches things online differently, we use advanced and reliable keyword research tools to shortlist the keywords which are searched by a large number of internet users. Also, the keywords must be directly related to your products or services and should reflect the purchase intent of the person. While choosing the keywords, we also pay attention to the competition. Highly competitive keywords may take longer to rank while medium to low competition keywords may quickly rank and start generating traffic and qualified leads comparatively faster. However, low competition keywords may deliver less traffic. Therefore, it is important to maintain a fair balance of low, medium and high competitive keywords.</p>
                                        <p className=' py-1'>To summarize, we select the keywords based on the following criteria:</p>
                                        <div>
                                            <ol className=' list-decimal list-inside py-3 px-5'>
                                                <li className='text-lg'>Monthly search volume</li>
                                                <li className='text-lg'>Relevance</li>
                                                <li className='text-lg'>Purchase Intent</li>
                                                <li className='text-lg'>Competition</li>

                                            </ol>
                                        </div>
                                        <p className=' py-1'>Also, the more keywords means more traffic and calls (leads). Therefore the number of keywords is a key deciding factor while selecting an SEO plan and pricing.</p>
                                    </div>
                                    <div>
                                        <h5 className=' font-bold py-1'>Landing Pages</h5>
                                        <p className=' py-1'>Landing pages are the most important pages of your website that generate leads. These are usually home pages, product or services pages of any website. Since landing pages play a crucial role in overall conversion, they must be optimized properly for search engines as well as the users.</p>
                                        <p className=' py-1'>Also every keyword must be mapped with a relevant landing page. That means if a user searches the keyword on Google, a relevant landing page should appear in the search results. Ideally, each landing page should be mapped with 2-5 keywords.</p>
                                        <p className=' py-1'>More landing pages means more keywords which further leads to more traffic and leads. Therefore, the number of landing pages is another deciding factor in choosing an SEO plan.</p>
                                    </div>
                                    <div>
                                        <h5 className=' font-bold py-1'>Backlinks</h5>
                                        <p className=' py-1'>Creating a backlinks means posting your website URL on other websites. In other words, backlinking is a process of promoting your site across the internet in such a way that a clickable link to your home page or landing pages is created.</p>
                                        <p className=' py-1'>Number of quality backlinks determines where your website will rank on search engines like Google. More quality backlinks means higher ranking. Therefore, the number of backlinks is another factor to consider while selecting an SEO plan.</p>
                                    </div>
                                    <div>
                                        <h5 className=' font-bold py-1'>Google My Business</h5>
                                        <p className=' py-1'>Google My Business is a service provided by Google to list businesses on Google Maps. It acts as a lead machine for local businesses. Our local SEO packages include Google My Business listing and promotion services to maximize response from local businesses.</p>
                                        <p className=' py-1'>We list your business on Google Maps and optimize for the relevant keywords so that it appears on the top for relevant searches in your local area.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h4 className=' lg:text-3xl text-2xl font-semibold text-center  text-gray-600'> SixPL Affordable SEO Packages - Detailed Deliverables</h4>
                                </div>
                                <div className=' text-xl text-gray-600'>

                                    <p className=' py-1'>Our SEO packages for small businesses, startups & large organizations are designed to generate more organic traffic and leads.</p>
                                    <p className=' py-1'>Below is a short description for each of the activities mentioned in our packages. Get in touch with us for a quick review of your website, need assessment and free consultations.</p>

                                    <div>
                                        <h5 className=' text-xl font-bold py-1 text-gray-600'>SEO Audit & Website Analysis</h5>
                                        <p className=' py-1'>Activities mentioned in this section pertains to research and analysis of the website, business, & industry to do a need assessment and accordingly lay out a road map to achieve desired results.</p>
                                        <p className=' py-1'>Each activity is explained below:</p>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Initial Website Analysis</h6>
                                            <p className=' py-1'>Initial website analysis is required to audit the current website. It involved analysis of business and the way products and services are presented to your customers. This is the foundation stage for the next activity, which is pre-optimization website audit.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Pre-optimization site audit</h6>
                                            <p className=' py-1'>Website SEO audit performs a SWOT (Strength, Weakness, Opportunity, & Threat) analysis of the website.It gives us an insight of high performing areas and scope of improvements. Our experts use industry leading tools and their domain expertise to evaluate your website on 120+ parameters.</p>
                                            <p className=' py-1'>The site audit also gives graded recommendations that need the attention of the SEO expert and webmasters. Low, medium and critical recommendations enable us to prioritize the actions to deliver tangible results at earliest.</p>
                                            <p className=' py-1'>A screengrab from a sample site audit is mentioned below:</p>
                                            <div className=' py-1'><Image src="/images/pricing/affordable-seo-packages-delaware.jpg" alt='affordable seo packages delaware' height={628} width={1200} /></div>
                                            <p className=' py-1'>Selecting the right keywords is at the core of any search engine optimization strategy. We leverage advanced planning tools to determine the accurate keywords that a majority of your potential customers are searching for.</p>
                                            <p className=' py-1'>The amount of leads or sales are directly proportional to the quality and quantity of keywords we work on. Therefore, we work closely with you to finalize the best performing keywords for your business.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Duplicate Content Check</h6>
                                            <p className=' py-1'>Website SEO audit performs a SWOT (Strength, Weakness, Opportunity, & Threat) analysis of the website.It gives us an insight of high performing areas and scope of improvements. Our experts use industry leading tools and their domain expertise to evaluate your website on 120+ parameters.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Backlink Analysis</h6>
                                            <p className=' py-1'>Google gives a lot of importance to quality backlink in determining the rank of a page on search engine result pages (SERP). However, not all the backlinks are the same. In fact, some backlinks act as spam and negatively impact the search engine ranking of the webpage. Therefore, we analyze current backlinks and evaluate each backlink on spam score. We also disavow harmful links on a regular basis to protect the website reputation and continuously improve the website ranking.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Competitors' Backlink Analysis</h6>
                                            <p className=' py-1'>We spy your better-ranking competitors to discover their quality backlinks that are responsible for their good ranking on Google. We then devise to get relatively stronger backlinks for your site which helps you outrank your competitors.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Backlink Strategy Gap Analysis</h6>
                                            <p className=' py-1'>Backlink strategy gap analysis shows where we stand right now and where we want to reach in terms of backlink to rank on the first page of Google. This analysis helps us devise a roadmap and forecast the business outcomes of our SEO efforts in a particular time frame.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Baseline Ranking Check</h6>
                                            <p className=' py-1'>Before starting to work on activities mentioned in the SEO packages, we check the current ranking on your website for shortlisted keywords.</p>
                                            <p className=' py-1'>This helps us and our clients to measure the impact of SEO efforts and track goal progress.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Google Penalty Check</h6>
                                            <p className=' py-1'>We check if any of your web pages were ever penalized by Google. In such cases, we take remedial measures to ensure that past penalties don't impact the performance of other pages on your website.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Brand Mention Audit</h6>
                                            <p className=' py-1'>Brand mention audit assesses the presence of your brand name across the internet. It also helps us analyze the sentiments of current mentions. Brand mentions audit detect and negative comments about your brand. We then take remedial actions to encourage brand advocacy and build positive reputation.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className=' text-xl font-bold py-1 text-teal-700'>On-Page SEO</h5>
                                        <p className=' py-1'>Onpage SEO includes the activities which are performed on the website. The selected landing pages are optimized and fine-tuned to make them search engine friendly.</p>
                                        <p className=' py-1'>List of activities under onpage optimization are discussed below:</p>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Title Tag Optimization</h6>
                                            <p className=' py-1'>We write impactful titles including relevant keywords for all the landing pages selected as part of the package.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Meta Description Optimization</h6>
                                            <p className=' py-1'>We summarize the content of the landing page and use relevant keywords to boost ranking of that page.</p>
                                            <p className=' py-1'>Title tags and meta description plays a crucial role in ranking and overall traffic to our landing pages.</p>
                                            <p className=' py-1'>We optimize both the title tag and meta description for both your users as well as the search engines.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Header Tags Optimization</h6>
                                            <p className=' py-1'>Ensuring optimum header tags (for e.g. h1, h2 tags in HTML) hierarchy with no duplicate H1 is essential to a better page structure. Using appropriate headers with important keywords is essential to improve page content and generate better ranking for your website on Google.</p>
                                            <p className=' py-1'>We carefully optimize all headers of selected landing pages to ensure that no duplicate H1 tags exist and proper hierarchy is maintained to get better ranking quickly.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Image Alt Tags Optimization</h6>
                                            <p className=' py-1'>Optimizing image alternative text (alt text) is important not just for the accessibility of the site but also for better ranking of landing pages on Google web as well as images search.</p>
                                            <p className=' py-1'>We optimize all the alt tags for all the images on the landing pages to ensure maximum coverage of keywords which leads to better ranking in a short time frame.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Content Optimization</h6>
                                            <p className=' py-1'>The content of relevant landing pages are optimized to maintain appropriate keyword density, usage of synonyms for latent semantic indexing (LSI), inclusion of frequently asked questions (FAQ) and improving overall quality of the content. Google loves comprehensive content that solves users’ all questions related to a particular topic. Our experts optimize the content for all the relevant parameters which makes the site more usable and search engine friendly.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>URL Optimization</h6>
                                            <p className=' py-1'>We optimize the URLs of individual webpages to make it more concise and search engine friendly.</p>

                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Site Navigation Tree Analysis</h6>
                                            <p className=' py-1'>Site navigation helps users navigate various pages of the website seamlessly across all the devices. A good navigation helps users achieve their goal on the site quickly.</p>
                                            <p className=' py-1'>We analyze the site navigation and recommend the best possible structure to make the site search engine friendly.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>HTML Sitemap Creation</h6>
                                            <p className=' py-1'>HTML sitemap helps readers find the relevant pages easily. It makes the site more user friendly and improves retention rate.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>XML Sitemap Creation</h6>
                                            <p className=' py-1'>Google uses XML sitemap to understand the site navigation structure. We create an XML sitemap and submit it to Google manually. We recommend remedial measures to help individual pages indexed by Google.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Robots.txt Creation</h6>
                                            <p className=' py-1'>Robot.txt is used to control visibility of various pages on your site to search engines. It informs the search engines crowler about which pages it should crawl and which one it shouldn’t. It helps us show desired pages on SERP and hide confidential information.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>404 Page Implementation</h6>
                                            <p className=' py-1'>A 404 page appears when the requested URL doesn’t exist. Implementing a 404 page makes your website user friendly as well as search engine friendly.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Broken Links Analysis</h6>
                                            <p className=' py-1'>Broken links on your site (links which are not working) can damage SEO efforts. Thus, it is essential to continuously analyze and remove broken links. We do broken link analysis and keep removing all harmful links to protect the health of your website.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Website Loading Speed Analysis</h6>
                                            <p className=' py-1'>Website loading speed plays a role in ranking of your site. Fast-loading pages get more preference and they rank at better positions in SERP. We conduct a technical analysis of your website and come up with recommendations to improve your website’s loading speed.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Google Indexed Pages Check</h6>
                                            <p className=' py-1'>We do a thorough analysis of web pages which are indexed by Google. We also fix the errors to make sure that all the relevant pages on your site get indexed by Google.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Website Canonical Check</h6>
                                            <p className=' py-1'>We conduct a canonical check to make sure that your internal pages are not competing with each other when it comes to ranking on Google. Through canonical tags, we inform Google on which pages to crawl in case of any similar content found using different URLs. It helps Google understand your website better and thus helps in overall ranking.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className=' text-xl font-bold py-1 text-teal-700'>Technical SEO</h5>
                                        <p className=' py-1'>Technical SEO deals with code optimization of the site. It makes the site secure, fast, accessibile, and user friednly. Google places a lot of important to technical structure of the site to improve overall user experience. </p>
                                        <p className=' py-1'>We cover all aspects of technical SEO as mentioned below: </p>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Structured Data Setup</h6>
                                            <p className=' py-1'>Structured data set helps Google understand the content of each page more accurately. The correct setup also helps in getting rich snippets in search engine result pages which boost brand visibility and build trust with your readers.</p>
                                            <p className=' py-1'>We set up the structured data for each page based on your offerings. We also validate the same using advanced developers tools to ensure correct setup and optimum performance of the site in search engine results pages.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Site Structure Analysis</h6>
                                            <p className=' py-1'>Overall site structure is analyzed and remedials measures are taken to improve site performance and fix JavaScript errors. Lazy loading of JavaScript and CSS scripts are enabled to optimize performance. All external scripts are analyzed and minified to improve technical performance of the site.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Internal Links Analysis</h6>
                                            <p className=' py-1'>Internal linking of pages essential to boost search engine performance of your website. Therefore, our technical team works to ensure strong interlinked web pages while ensuring that no page remains orphaned.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Google Knowledge Panel Optimization</h6>
                                            <p className=' py-1'>Google Knowledge Panel helps immensely in brand building. We put additional meta information on your “Home” and “About” page and link that with external sources to optimize your brand name with Google Knowledge panel requirements.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>HTTPS Security Analysis</h6>
                                            <p className=' py-1'>Secure websites are good for your users as well as search engines. Recently, Google has started giving priority to secure sites. We thoroughly analyze your website security and implement measures to make your website safe, secure and search engine friendly.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className=' text-xl font-bold py-1 text-teal-700'>Measurement & Tracking</h5>
                                        <p className=' py-1'>Nothing can be improved if we don't measure it. Therefore, measurement and tracking enable us to evaluate the outcomes of SEO marketing efforts and further take actions to improvise the same. </p>
                                        <p className=' py-1'>We integrate industry leading tools to track and improve performance. The tools are mentioned below: </p>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Google Search Console Integration</h6>
                                            <p className=' py-1'>Google search console is a tracking and search performance solution by Google that helps webmasters assess their site search performance on Google. It helps us track ranking across geographies and discover high potential keywords to boost ranking and traffic.</p>
                                            <p className=' py-1'>We integrate the search console to your website to assess the site’s performance on Google and also check the progress towards achieving our SEO goals.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Google Analytics Integration</h6>
                                            <p className=' py-1'>Google Analytics helps find out when the sources from where people are coming to the website, what exactly they do on the website and what else can be done to ensure that they take important actions (like filling the contact form, calling the business or making a purchase) on the site.</p>
                                            <p className=' py-1'>We implement Google Analytics 4 (the most advanced analytics solution available) to measure effectiveness marketing efforts and maximize return on investment.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className=' text-xl font-bold py-1 text-teal-700'>Off-Page SEO</h5>
                                        <p className=' py-1'>When you sign up for affordable SEO packages in Delaware, we promote your site on various other portals to build awareness, generate backlinks leading to better ranking of your site. Most of the off-page activities are done by SEO experts who have years of experience in managing clients in your industry.</p>
                                        <p className=' py-1'>At SixPL, we bring valuable insights from our experience in SEO since 2012 and accelerate your SEO marketing efforts leading to more leads, sales and of course revenue.</p>
                                        <p className=' py-1'>Following activities are covered in our off-page SEO strategy. The quantity of work depends on the monthly SEO packages you have signed up for.</p>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Manual Search Engine Submission</h6>
                                            <p className=' py-1'>We submit your website manually to all major search engines, which leads to fast indexing of all the pages by the search engines.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Classified Submissions</h6>
                                            <p className=' py-1'>We submit classified ads in your local area to improve your brand's visibility, increase sales and generate backlinks. Classified submissions significantly impact local SEO and the rank of Google My Business listings.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Business Listing</h6>
                                            <p className=' py-1'>We list your business on major business listing platforms like Yelp, Bing, and other relevant sites to build brand awareness, get more reviews and generate backlinks.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Social Bookmarking</h6>
                                            <p className=' py-1'>We bookmark your website on several social bookmarking platforms to generate backlinks and increase brand awareness leading to a better ranking of your site for the relevant keywords.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Article Writing</h6>
                                            <p className=' py-1'>We write articles on relevant topics to boost our backlinking efforts from the top platforms. It helps us capture the attention of the audience of top community-based sites.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Article Submissions</h6>
                                            <p className=' py-1'>We submit the articles on high-quality and authoritative sites to generate backlinks and traffic, leading to a better ranking on Google in the long run.</p>

                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Article Marketing</h6>
                                            <p className=' py-1'>The articles posted are further promoted on several other platforms to maximize the responses and benefits from article submissions. It maximizes the impact of backlinks for ranking your website.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>PPT Submissions</h6>
                                            <p className=' py-1'>We design attractive PowerPoint presentations and post them on relevant platforms to attract a knowledge-hungry audience. It also helps in generating stable backlinks from the top sites.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>PDF Submissions</h6>
                                            <p className=' py-1'>PDF submissions generate stable do-follow backlinks in the long run. We write unique, insightful content, optimize it for SEO and convert it into beautiful PDFs before sharing it on the relevant platforms.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Podcast Submissions</h6>
                                            <p className=' py-1'>Podcasts have gained traction in recent years. Podcasts on trending topics fetch a lot of interest and traffic from internet users. It also helps generate backlinks, boosting your website's ranking on SERP.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Image Submissions</h6>
                                            <p className=' py-1'>We design attractive graphics and post them on various platforms to generate quality backlinks and boost brand visibility.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Blog Creation (One-Time)</h6>
                                            <p className=' py-1'>We create a neutral blogging platform and share insightful information about your brand, products, and services. This helps in getting consistent referral traffic and strong backlinks.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Blog Writing</h6>
                                            <p className=' py-1'>We select the trending topics related to your business, create compelling headlines and write insightful blogs with relevant backlinks to your website to build awareness and trust among your target audience.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Blog Posting</h6>
                                            <p className=' py-1'>We post the content mentioned in the previous step on blog sites and optimize and promote the same to maximize link juice from them which further helps in ranking.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Blog Marketing</h6>
                                            <p className=' py-1'>Off-site blogs are further promoted on various portals to improve credibility and maximize the impact of SEO efforts. Our monthly SEO packages include blog marketing efforts to rank your website quickly on Google.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Product Listing</h6>
                                            <p className=' py-1'>Product listing helps in brand visibility, search engine ranking, and lead generation for your business. When you subscribe to our monthly SEO packages, we list your products on quality product listing sites that help you generate more traffic to your product pages.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Profile Creation</h6>
                                            <p className=' py-1'>When you choose our affordable SEO packages in Delaware, we work round the clock to offer 360-degree visibility to your business on as many platforms as possible. As part of this strategy, we work on creating individual profiles on various platforms and further use those profiles to share relevant information about your business. This SEO strategy generates more visibility and offers more avenues for creating backlinks.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Video Marketing (video provided by the client)</h6>
                                            <p className=' py-1'>Storytelling is the best way to influence your customers. When you choose the best and most affordable SEO packages in Delaware and provide us with a video, we will promote it to maximize its reach and impact. This also provides another great avenue to build trust backlinks which further helps the overall ranking.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Press Release (news provided by the client)</h6>
                                            <p className=' py-1'>Whenever there is a new product or service launch, event, or general announcement, it is crucial to write a compelling press release and distribute the same to maximize the reach and gain maximum exposure. When clients choose our monthly SEO services packages and send us a press release, we use our network and expertise to maximize exposure and reach.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className=' text-xl font-bold py-1 text-teal-700'>Content Marketing</h5>
                                        <p className=' py-1'>In the era of cut-throat competition and the bombardment of unsolicited advertising, brands leverage the power of content marketing to become a thought leader and position themselves as an authority in their industry.</p>
                                        <p className=' py-1'>Content marketing is a win-win strategy for both - the brands as well the consumers. However, without a proper plan, the entire process can become a mess benefitting none.</p>
                                        <p className=' py-1'>Therefore, SixPL's affordable SEO packages USA offer content marketing services that put clients at the top of their audiences' minds.</p>
                                        <p className=' py-1'>Below is the list of content marketing activities covered in affordable SEO packages:</p>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>On-site Blog Creation</h6>
                                            <p className=' py-1'>We create a dedicated blog section on your website and post fresh content regularly. Integrating website, blog, and social media handles facilitates seamless content sharing across multiple platforms and multiplies reach.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>On-site Blog Posting</h6>
                                            <p className=' py-1'>Our monthly SEO packages include the creation of high-quality on-site blogs that represent your thought process and reflect your expertise in the industry. Solution-focused and neatly organized blogs address the pain points of your potential customers. In return, you get word-of-mouth advertising for free.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>On-site blog optimization</h6>
                                            <p className=' py-1'>On-site blogs can generate massive traffic to your website if optimized correctly. For every blog, we shortlist appropriate longtail keywords and do on-page and off-page optimization for every blog. Evergreen content with proper optimization becomes traffic and lead machine in the long run.</p>
                                            <p className=' py-1'>As a part of our affordable monthly SEO packages, we offer on-site blog optimization for all the blogs we write.</p>
                                        </div>
                                        <div>
                                            <h6 className=' text-lg font-bold py-1'>Featured Image Creation</h6>
                                            <p className=' py-1'>We create an attractive featured image for every blog. The featured image not just helps in Google Image searches, but it also helps in getting more traffic from social media platforms.</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h5 className=' text-xl font-bold py-1 text-teal-700'>Social Media Activities</h5>
                                        <p className=' py-1'>Billions use social media to connect with others, express their views, promote business, get inspiration and generate impact in their communities. It is a favorite hangout place which also helps in achieving multiple goals. Social media has created more celebrities and stars than any other industry. It has empowered individuals at the bottom of the pyramid and enabled everyone to live with self-respect by doing what they love the most.</p>
                                        <p className=' py-1'>Therefore, it makes sense to leverage this revolution in favor of your business. SixPL helps you utilize social media to get exposure, generate leads, and build a brand.</p>
                                        <p className=' py-1'>Our affordable monthly SEO packages include social media activities that maximize the return on your investment.</p>
                                        <p className=' py-1'>Following is the list of activities covered under social media marketing as part of our monthly SEO packages:</p>
                                        <div>
                                            <h6 className=' text-xl font-bold py-1'>Facebook</h6>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Facebook Profile Creation</p>
                                                <p className=' py-1'>We create an individual Facebook profile. We can use this profile to manage all the aspects of your Facebook marketing activities. This Facebook profile creation separates your personal activities from professional engagements.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Facebook Fan Page Creation</p>
                                                <p className=' py-1'>We create an attractive and professional Facebook Page for your business. This Facebook page will be required to post content, generate leads and build followers.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Facebook Posting</p>
                                                <p className=' py-1'>Facebook posting means the number of posts we make every month. Each post involves textual content, an image, a caption, and relevant hashtags.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Facebook Group Sharing</p>
                                                <p className=' py-1'>We share Facebook posts on several Facebook groups to increase the reach of the post and improve engagement.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className=' text-xl font-bold py-1'>Instagram</h6>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Instagram Profile Creation</p>
                                                <p className=' py-1'>If you don't have an Instagram account for your business, we create one and connect the same to your Facebook Business page. Integrating Facebook and Instagram accounts leads to several advantages like better reach, cost-effective advertising, easy management, and more leads.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Posting/Updates</p>
                                                <p className=' py-1'>Posting or updates refer to the number of Instagram posts we create for you. Visually appealing posts with a high viral quotient boost reach and engagement.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Hashtag Marketing</p>
                                                <p className=' py-1'>We use relevant and adequate numbers of hashtags to maximize the reach of your posts.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className=' text-xl font-bold py-1'>Twitter</h6>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Twitter Handle Creation</p>
                                                <p className=' py-1'>We create a professional Twitter account for your business. It includes many activities like creating a profile image, designing a cover picture, writing a compelling bio, following relevant accounts, etc.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Twitter Posting</p>
                                                <p className=' py-1'>Twitter posting refers to the number of posts we create every month. Each post includes an image, caption, text, and hashtags.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Retweets, likes, and comments</p>
                                                <p className=' py-1'>We work on getting retweets, likes, and comments on your Tweets to boost user engagement.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Trending hashtag promotion</p>
                                                <p className=' py-1'>We research and create relevant hashtags to maximize the reach of every Tweet.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <h6 className=' text-xl font-bold py-1'>Pinterest</h6>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Account Creation/Management</p>
                                                <p className=' py-1'>We will create a Pinterest account on your behalf. It includes completing all the profile details.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Pinterest Followers</p>
                                                <p className=' py-1'>We work on improving your Pinterest followers and building a sustainable way to generate more followers regularly.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 py-1'>Pinboards updation</p>
                                                <p className=' py-1'>We update the pin boards on a regular basis.</p>
                                            </div>
                                            <div>
                                                <p className=' font-semibold text-slate-700 '>Pins (Images provided by the client)</p>
                                                <p className=' '>We also post pins provided by the client and promote them to generate maximum engagement.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='text-white'>FAQ</div>
            </main>
        </Layout>
    )
}

export default SEOPackages