import Head from 'next/head'
import Layout from '../../components/nav/layout'
import PricePackage from '../../components/pricing/pricePackage'
import { ppcPackage } from '../../lib/data/seo-packages'

import { getMDXComponent } from 'next-contentlayer/hooks'
import { allContents } from '../../.contentlayer/generated';

const webPackage = () => {
    const post = allContents.find((post) => post._raw.flattenedPath === 'ppc-packages')
    const Content = getMDXComponent(post.body.code)

    return (
        <Layout>
            <Head>
                <title>Web Packages - SixPL</title>
                <meta name="description" content="Are you looking for affordable PPC packages in Delaware USA? SixPL monthly PPC Packages are best for all businesses. Get PPC package prices now." />
                <meta name="image" property='og:image' content='https://www.sixpl.com/og-images/pricing/affordable-seo-packages.jpeg' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:title' content='Web Packages in Delaware, USA - SixPL' />
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/sixpl-home.jpg' />
                <meta name='twitter:description' content='Are you looking for affordable PPC packages in Delaware USA? SixPL monthly PPC Packages are best for all businesses. Get PPC package prices now.' />
            </Head>
            <main className=''>
                <div className='mt-7 sm:mt-20 lg:-mb-16 -mb-20 pt-10 lg:px-0 px-2.5'>
                    <h1 className='lg:text-[1.9rem] px-2 text-2xl font-bold tracking-tight text-gray-600 sm:text-3xl text-center'>Affordable Digital Marketing PPC Packages</h1>
                </div>
                <div className='mt-20 lg:mt-0'>
                    <PricePackage heading={"Hello"} packages={ppcPackage} description={"Accelerate Growth with Our Results-Driven PPC Packages. Maximize Reach, Drive Leads."} subHeading={"Empower Your Growth with Our Effective PPC Packages"} key={1} />
                    
                    <div className='mx-auto lg:w-9/12 w-11/12 lg:px-10 px-5 pb-10 llg:-mt-6 mt-14'>
                    <Content />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default webPackage;