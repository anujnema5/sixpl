import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/nav/layout'
import { serviceList } from '../../lib/data/service-list'


const ServiceIndexPage = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Layout>
            <Head>
                <title>IT, Blockchain, Digital Marketing & Content Writing Services</title>
                <meta name="description" content="Avail superior IT, Blockchain, Digital Marketing & Content Writing Services 24*7 and across the globe. - SixPL" />
                <meta name='image' property='og:image' content='https://www.sixpl.com/og-images/sixpl-services.jpeg' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:title' content='IT, Blockchain, Digital Marketing & Content Writing Services' />
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/sixpl-services.jpeg' />
                <meta name='twitter:description' content='Avail superior IT, Blockchain, Digital Marketing & Content Writing Services 24*7 and across the globe. - SixPL' />
            </Head>
            {/* <div className="flex justify-center font-serif bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
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
            </div> */}

            {/* <div className=''>
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
            </div> */}

            {/* SERVICE SECTION */}
            <div className=" bg-gradient-to-b from-white to-indigo-100">
                <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
                        <p className="mt-4 text-gray-500" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, vel asperiores aut debitis est veritatis saepe beatae dolore distinctio ex!</p>
                    </div>

                    {/* FETCHING AND RENDERING CATEGORIES */}
                    <div className="mt-12 lg:space-y-28 space-y-10 flex flex-col lg:py-10 lg:pb-16 items-center justify-center lg:bg-gradient-to-br lg:from-slate-50 lg:to-indigo-100 rounded-2xl lg:border-t-2 lg:border-slate-50 lg:shadow-xl">
                        {serviceList.map((serviceCategoryItem, featureIdx) => (
                            // RENDERING CATEGORY
                            <div
                                key={serviceCategoryItem.serviceCategoryName}
                                className="flex flex-col-reverse lg:grid lg:grid-cols-10 lg:items-center lg:gap-10 lg:w-11/12  lg:px-6 px-0"
                            >
                                <div
                                    className={classNames(
                                        featureIdx % 2 === 0 ? 'lg:col-start-1 ' : 'lg:col-start-8 xl:col-start-3',
                                        'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 px-1'
                                    )}
                                >
                                    <h3 className="text-2xl font-medium text-gray-900 mt-7">{`${serviceCategoryItem.serviceCategoryName} Service`}</h3>
                                    <p className=" text-sm text-gray-500">{serviceCategoryItem.serviceDescription}</p>
                                </div>
                                <div
                                    className={classNames(
                                        featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                                        'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                                    )}
                                >
                                    <div className="shadow-xl shadow-indigo-200 lg:max-w-lg h-auto overflow-hidden rounded-lg bg-white ring-2 ring-indigo-50">

                                        <div className='px-7 pt-6 flex justify-between'>
                                            <div className='flex gap-3 justify-center items-center' >
                                                <img
                                                    className="mx-auto h-6 text-white w-auto"
                                                    src={`${serviceCategoryItem.name}.svg`}
                                                    alt="SixPL Logo"
                                                />
                                                <h4 className="text-xl font-medium text-gray-900 w-10/12">{`${serviceCategoryItem.serviceCategoryName}`}</h4>

                                            </div>

                                            {/* SEE MORE SERVICES */}
                                            <Link href={'/pricing/seo-packages'} className='text-xs text-indigo-700 antialiased hover:text-indigo-500'>See more services</Link>
                                        </div>

                                        {/* SERVICE LIST A/C TO PARENT SERVICE */}
                                        <ul className="px-5 py-4 flex flex-col gap-4">
                                            {serviceCategoryItem.services.map(serviceItem => (
                                                <li key={serviceItem.serviceName} className="">
                                                    <Link className="text-base lg:text-sm rounded-lg text-gray-600 antialiased py-2 px-2 transition-all lg:bg-gray-50 hover:bg-indigo-50 pr-7 hover:rounded-lg  font-sans" href={`/services/${serviceCategoryItem.serviceCategoryPermalink}/${serviceItem.servicePermalink}`}>{serviceItem.serviceName}</Link>
                                                </li>
                                            )
                                            )}
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </Layout>
    )
}
export default ServiceIndexPage

//<Link href={`/services/${serviceCategoryItem.serviceCategoryPermalink}`}><a>{serviceCategoryItem.serviceCategoryName}</a></Link>