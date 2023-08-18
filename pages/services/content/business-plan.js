import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'
import { services } from '../../../lib/data/services-details'
import Service from '../../../components/services/service'
import Services from '../../../components/services/Services'
import Clients from '../../../components/services/clients'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import ContactFormVertical from '../../../components/forms/contact-form-vertifical'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { allContents } from '../../../.contentlayer/generated'

const businessPlan = {
    mainSection: services.businessPlan.mainSection,
    clients: services.businessPlan.clients,
    whyHireUs: services.businessPlan.whyHireUs,
    achievement: services.businessPlan.achievement,
    package: services.businessPlan.package,
    faq: services.businessPlan.faq,
    plans: services.businessPlan.plans
}



const BusinessPlanPage = () => {
    const post = allContents.find((content) => content._raw.flattenedPath === 'business-plan');
    const Content = getMDXComponent(post.body.code);

    return (
        <Layout>
            <Head>
                <title>Business Plan Writing Services | Business Plan Writers</title>
                <meta name="description" content="Avail business plan writing services from top business plan writers. Get a business plan for entrepreneurial visa, academic purposes or fund raising" />
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/content/business-plan-writing-services.jpeg' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:title' content='Business Plan Writing Services | Business Plan Writers' />
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/content/business-plan-writing-services.jpeg' />
                <meta name='twitter:description' content='Avail business plan writing services from top business plan writers. Get a business plan for entrepreneurial visa, academic purposes or fund raising' />
            </Head>
            <main>
                <div className="flex flex-col ">
                    <Service
                        heading={businessPlan.mainSection.heading}
                        subHeading={businessPlan.mainSection.subheading}
                        headingCall={businessPlan.mainSection.headingCall}
                        tags={businessPlan.mainSection.tags}
                        description={businessPlan.mainSection.description}
                    />
                    <Services whyHireUs={businessPlan.whyHireUs} />
                    <Flex achievement={businessPlan.achievement} />
                    <div className=' bg-indigo-50/50 w-full'>
                        <div className='lg:w-9/12 lg:px-0 px-7 mx-auto lg:mt-16 mt-10 lg:mb-10'>
                            <Content key={2} />
                        </div>
                    </div>
                    <div className='bg-indigo-50/50'>
                        {/* <div className=' flex flex-col m-4 lg:w-10/12 mx-auto lg:mt-16 bg-slate-200  rounded-2xl'>
                            <div><h2 className=' text-3xl bg-sptheme-darkgreen py-10 px-2 text-center text-white rounded-2xl'>Our Business Plan Writing Process</h2></div>
                            <div>
                                <p className='p-4 md:p-10 text-lg'>
                                    Our business plan writing process is simple yet effective. It is designed to meet the goals in a transparent and efficient manner. We go the extra mile to maintain utmost transparency at every stage of the project. Thus, while we work in the background, the clients can track the work-in-progress in real-time and provide their valuable input to chart the project in the right direction. It offers us the added benefit of maintaining a high acceptance rate of the first draft itself
                                </p>
                            </div>
                            <div><h3 className=' text-2xl bg-gradient-to-r from-sptheme-lightgreen to-sptheme-darkgreen p-3 text-center text-white rounded-full'>Step 1 – Requirement Gathering</h3></div>
                            <div>
                                <p className='p-4 md:p-10 text-lg rounded-full bg-stone-100'>
                                    After onboarding a new client, we provide a questionnaire to capture the relevant information about your business idea. After analyzing the initial information and conducting a quick research, we set up a brief call with the client to share our understanding and expert views.
                                </p>
                            </div>
                            <div><h3 className=' text-2xl bg-gradient-to-r from-sptheme-lightgreen to-sptheme-darkgreen p-3 text-center text-white rounded-full'>Step 2 – Creating an Outline and Detailed Structure</h3></div>
                            <div>
                                <p className='p-4 md:p-10 text-lg rounded-full bg-stone-100'>
                                    We prepare a table of contents outlining the broad ideas we aim to cover in different sections of the business plan. The detailed structure allows us and the client to visualize the content expected in the business plan. Also, it helps us distribute the work among various experts such as financial analysts, researchers, and business writers.
                                </p>
                            </div>
                            <div><h3 className=' text-2xl bg-gradient-to-r from-sptheme-lightgreen to-sptheme-darkgreen p-3 text-center text-white rounded-full'>Step 3 – Preparing the First Draft</h3></div>
                            <div>
                                <p className='p-4 md:p-10 text-lg rounded-full bg-stone-100'>
                                    Upon approval of the table of contents, we proceed with developing the first draft of the document. In this step, we employ chartered accounts and financial experts to devise the budgeting and business forecasting. The financial experts also help us draft financial statements such as Balance Sheet, Profit & Loss Statement, Feasibility Analysis, Cash Flow statement, etc. <br /><br />
                                    The first draft includes the unedited content (except Executive Summary or Abstract), all the data and calculations in the raw format, and key insights and recommendations.
                                </p>
                            </div>
                            <div><h3 className=' text-2xl bg-gradient-to-r from-sptheme-lightgreen to-sptheme-darkgreen p-3 text-center text-white rounded-full'>Step 4 – Revising the Business Plan (Delivering v2.0)</h3></div>
                            <div>
                                <p className='p-4 md:p-10 text-lg rounded-full bg-stone-100'>
                                    Based on the client’s feedback, we revise the first draft. Once the content is finalized, we move on to writing the Executive Summary. This step requires active involvement from the clients to ensure better output. At this stage, we do expect some iterations due to change in requirements (or putting additional information) from the client’s end.<br /><br />
                                    Note: At the incubation stage, the founding teams are open for new ideas. This leads to a slight change in requirements even after completion of the first draft of the business plan. Keeping that in mind, we have kept our processes flexible enough to adopt such changes and quickly refine the plan based on new developments.
                                </p>
                            </div>
                            <div><h3 className=' text-2xl bg-gradient-to-r from-sptheme-lightgreen to-sptheme-darkgreen p-3 text-center text-white rounded-full'>Step 5 – Designing the Business Plan and Preparing the Final Draft</h3></div>
                            <div>
                                <p className='p-4 md:p-10 text-lg rounded-full bg-stone-100'>
                                    All the hard work pays off at this stage when you see the final outcome. The result is an impressive and detailed business plan that paints the exact picture of your business. Our business plan empowers you to show off your ideas to your target audience. <br /><br />
                                    At this stage, we finalize the content and design of your business plan. You will get an attractive PDF file and an editable version, which you can modify from your end.
                                </p>
                            </div>
                        </div> */}

                        <div className='lg:w-9/12 text-center mx-auto lg:mt-10 lg:px-0 px-4'>
                            <div className='space-y-7'>
                                <h1 className='lg:text-4xl text-2xl atext-gray-700'>{businessPlan.plans.title}</h1>
                                <span className='lg:text-base text-sm font-semibold leading-8 tracking-tight text-indigo-600'>Our business plan and other stuffs</span>
                                <p className='lg:w-11/12 mx-auto lg:text-base text-sm leading-7'>{businessPlan.plans.description}</p>
                            </div>

                            <div className='space-y-10 my-10 px-3'>
                                {businessPlan.plans.steps?.map((step, index) => (
                                    <div className='flex flex-col gap-3 text-left bg-indigo-50 shadow-xl shadow-indigo-200 px-5 py-5 rounded-xl' key={index}>
                                        <h4 className='text-gray-600 text-[1.3rem] antialiased font-[500]'>Step {index + 1}: {step.title}</h4>
                                        <p className='lg:w-10/12 lg:text-sm text-[0.8rem] leading-7'>{step.description}</p>
                                        {step.description2 && <p className='lg:w-10/12 lg:text-sm text-[0.8rem] leading-7'>{step.description2}</p>}
                                        {/* <p>{step.description2}</p> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <FAQs faqs={businessPlan.faq} />

                </div>
            </main>
        </Layout>
    )
}
export default BusinessPlanPage