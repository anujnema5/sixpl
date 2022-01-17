import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/nav/layout'
import { serviceList } from '../../lib/data'

const ServiceIndexPage = () => {
    return(
        <Layout>
            <Head>
                <title>SixPL Services - Complete List of Solutions</title>
            </Head>
            <div className="flex justify-center bg-slate-50 font-serif">
                <div className="px-8 pt-4 pb-2 lg:px-4">
                        <div className="font-extrabold text-4xl text-center py-8 text-gray-700"> Our Services</div>
                            <div className="lg:flex">
                                {serviceList.map(serviceCategoryItem => {
                                    return(
                                        <div key={serviceCategoryItem.serviceCategoryName}>
                                            <div className="px-5 py-2 font-bold text-2xl text-teal-700"><Link href={`/services/${serviceCategoryItem.serviceCategoryPermalink}`}><a>{serviceCategoryItem.serviceCategoryName}</a></Link></div>
                                            <ul className="px-5 py-4">
                                                {serviceCategoryItem.services.map(serviceItem => {
                                                    return (
                                                        <li key={serviceItem.serviceName} className="py-2"><Link href={`/services/${serviceCategoryItem.serviceCategoryPermalink}/${serviceItem.servicePermalink}`}><a className="text-lg py-1 text-cyan-700 hover:bg-cyan-600 hover:text-white hover:px-1">{serviceItem.serviceName}</a></Link></li>
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