import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'
import ContactFormVertical from '../../../components/forms/contact-form-vertifical'
import { services } from '../../../lib/data/services-details'
import Service from '../../../components/services/service'
import Clients from '../../../components/services/clients'
import Services from '../../../components/services/Services'
import Flex from '../../../components/services/Flex'
import FAQs from '../../../components/services/FAQs'
import Project from '../../../components/services/Projects'
import '../../../prototypes/processParagraph'

const reactJS = {
    mainSection: services.reactDevelopment.mainSection,
    clients: services.reactDevelopment.clients,
    whyHireUs: services.reactDevelopment.whyHireUs,
    achievement: services.reactDevelopment.achievement,
    ourProjects: services.reactDevelopment.ourProjects,
    clientsTestimonials: services.reactDevelopment.clientsTestimonials,
    startProject: services.reactDevelopment.startProject,
    faq: services.reactDevelopment.faq,
    ourProjects: services.reactDevelopment.ourProjects
}

const ReactDevelopersPage = () => {
    return (
        <Layout>
            <Head>
                <title>Hire Best React developers - SixPL</title>
                <meta name="description" content="Hire top Reactjs developers from the best Reactjs development company. 24*7 support. Fullstack & Frontend Reactjs development services. Stable React Web Development." />
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/it/react-development.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:title' content='Hire Best React developers - SixPL' />
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/it/react-development.jpg' />
                <meta name='twitter:description' content='Hire top Reactjs developers from the best Reactjs development company. 24*7 support. Fullstack & Frontend Reactjs development services. Stable React Web Development.' />
            </Head>
            <main>
                <div>
                    <div className="flex flex-col">
                        <Service
                            title={reactJS.mainSection.title}
                            heading={reactJS.mainSection.heading}
                            subHeading={reactJS.mainSection.subheading}
                            headingCall={reactJS.mainSection.headingCall}
                            tags={reactJS.mainSection.tags}
                        />
                        <Clients heading={reactJS.clients.heading} />
                        <Services whyHireUs={reactJS.whyHireUs} />
                        <div className='bg-indigo-50/50 rounded-2xl '>
                            <div className='flex flex-col'>
                                <div className=''>
                                    <div className="flex flex-col px-4 py-8 items-center text-center ">
                                        <h2 className="lg:text-lg text-sm font-semibold leading-8 tracking-tight text-indigo-600">{reactJS.ourProjects.heading}</h2>
                                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-700 sm:text-[1.7rem]">
                                        We have the right solution for businesses of all sizes from across industries. <br /> Do you have specific requirements? Talk to us to get customized plan for your business.
                                        </p>
                                    </div>
                                </div>
                                <div className=''>
                                   <Project projects={reactJS.ourProjects.projects}/> 
                                </div>
                            </div>
                        </div>
                        <div className='bg-indigo-50/50 rounded-2xl'>
                            <div className='flex flex-col '>
                                        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-800 mb-7 sm:text-[1.7rem]">{reactJS.clientsTestimonials.heading}</h2>
                                <div>
                                    <Project projects={reactJS.clientsTestimonials.projects}/>
                                </div>
                            </div>
                        </div>
                        <Flex achievement={reactJS.achievement} />
                        <FAQs faqs={reactJS.faq} />
                    </div>
                </div>
            </main>
        </Layout>

    )
}
export default ReactDevelopersPage