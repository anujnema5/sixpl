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
import ContactFormVertical from '../../../components/forms/Contact-form-vertifical'
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
                        <div className='lg:w-9/12 text-center mx-auto lg:mt-10 lg:px-0 px-4'>
                            <div className='space-y-7'>
                                <h1 className='lg:text-4xl text-2xl atext-gray-700'>{businessPlan.plans.title}</h1>
                                <span className='lg:text-base text-sm font-semibold leading-8 tracking-tight text-indigo-600'>Our business plan and other stuffs</span>
                                <p className='lg:w-11/12 mx-auto lg:text-base text-sm leading-7'>{businessPlan.plans.description}</p>
                            </div>

                            <div className='space-y-10 my-10 px-3'>
                                {businessPlan.plans.steps?.map((step, index) => (
                                    <div className='flex flex-col gap-3 text-left bg-indigo-50 shadow-xl shadow-indigo-100 px-5 py-5 rounded-xl' key={index}>
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