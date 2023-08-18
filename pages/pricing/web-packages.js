import Head from 'next/head'
import Layout from '../../components/nav/layout'
import PricePackage from '../../components/pricing/pricePackage'
import { webPackages } from '../../lib/data/seo-packages'

import { getMDXComponent } from 'next-contentlayer/hooks'
import { allContents } from '../../.contentlayer/generated';

const webPackage = () => {
    const post = allContents.find((post) => post._raw.flattenedPath === 'web-packages')
    const Content = getMDXComponent(post.body.code)

    return (
        <Layout>
            <Head>
                <title>Web Packages - SixPL</title>
                <meta name="description" content="Are you looking for affordable Web packages in Delaware USA? SixPL monthly Web Packages are best for all businesses. Get Web package prices now." />
                <meta name="image" property='og:image' content='https://www.sixpl.com/og-images/pricing/affordable-seo-packages.jpeg' />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name='twitter:title' content='Web Packages in Delaware, USA - SixPL' />
                <meta name='twitter:image' content='https://www.sixpl.com/og-images/sixpl-home.jpg' />
                <meta name='twitter:description' content='Are you looking for affordable SMO packages in Delaware USA? SixPL monthly SMO Packages are best for all businesses. Get SMO package prices now.' />
            </Head>
            <main className=''>
                <div className='mt-12 sm:mt-20 lg:-mb-16 -mb-20'>
                    <h1 className='lg:text-4xl text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl text-center'>Affordable Web Design Packages</h1>
                </div>
                <div className='mt-5'>
                    <PricePackage heading={"Hello"} packages={webPackages} description={"Or kaise ho"} subHeading={"Haaa"} key={1}/>
                    
                    <div className='mx-auto lg:w-9/12 w-11/12 lg:px-10 px-5 pb-10 -mt-6'>
                    <Content />
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default webPackage;