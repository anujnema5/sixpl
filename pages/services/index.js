import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/nav/layout'
import { serviceList } from '../../lib/data/service-list'

const ServiceIndexPage = () => {
    return(
        <Layout>
            <Head>
                <title>IT, Blockchain, Digital Marketing & Content Writing Services</title>
                <meta name="description" content="Avail superior IT, Blockchain, Digital Marketing & Content Writing Services 24*7 and across the globe. - SixPL"/>
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/sixpl-services.jpeg' />
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name='twitter:title' content='IT, Blockchain, Digital Marketing & Content Writing Services'/>
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/sixpl-services.jpeg' />
                <meta name='twitter:description' content='Avail superior IT, Blockchain, Digital Marketing & Content Writing Services 24*7 and across the globe. - SixPL'/>
            </Head>
            <div className="flex justify-center font-serif bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                <div className="px-8 pt-4 pb-2 lg:px-4 ">
                        <div className=""><h1 className='font-extrabold text-4xl text-center py-8 text-gray-700'>Our Services</h1></div>
                            <div className="lg:flex">
                                {serviceList.map(serviceCategoryItem => {
                                    return(
                                        <div key={serviceCategoryItem.serviceCategoryName}>
                                            <div className="px-5 py-2 font-bold text-2xl text-sptheme-lightgreen animate-pulse"><h2>{serviceCategoryItem.serviceCategoryName}</h2></div>
                                            <ul className="px-5 py-4">
                                                {serviceCategoryItem.services.map(serviceItem => {
                                                    return (
                                                        <li key={serviceItem.serviceName} className="py-4"><Link className="text-lg sm:text-xl py-2 px-2 text-zinc-700 hover:bg-gray-100 hover:rounded-lg border-slate-100 font-sans" href={`/services/${serviceCategoryItem.serviceCategoryPermalink}/${serviceItem.servicePermalink}`}>{serviceItem.serviceName}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })} 
                            </div>
                </div>
            </div>
        </Layout>
    )
}
export default ServiceIndexPage

//<Link href={`/services/${serviceCategoryItem.serviceCategoryPermalink}`}><a>{serviceCategoryItem.serviceCategoryName}</a></Link>