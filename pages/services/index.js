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
            <div className="flex justify-center bg-slate-50 font-serif">
                <div className="px-8 pt-4 pb-2 lg:px-4">
                        <div className=""><h1 className='font-extrabold text-4xl text-center py-8 text-gray-700'>Our Services</h1></div>
                            <div className="lg:flex">
                                {serviceList.map(serviceCategoryItem => {
                                    return(
                                        <div key={serviceCategoryItem.serviceCategoryName}>
                                            <div className="px-5 py-2 font-bold text-2xl text-sptheme-lightgreen"><h2>{serviceCategoryItem.serviceCategoryName}</h2></div>
                                            <ul className="px-5 py-4">
                                                {serviceCategoryItem.services.map(serviceItem => {
                                                    return (
                                                        <li key={serviceItem.serviceName} className="py-2"><Link href={`/services/${serviceCategoryItem.serviceCategoryPermalink}/${serviceItem.servicePermalink}`}><a className="text-lg py-1 text-sptheme-darkgreen hover:bg-cyan-600 hover:text-white hover:px-1">{serviceItem.serviceName}</a></Link></li>
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