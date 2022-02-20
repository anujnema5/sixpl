import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'
import ContactFormVertical from '../../../components/forms/contact-form-vertifical'



const DigitalMarketingIndexPage = () => {
    return(
        <Layout>
            <Head>
                <title>Digital Marketing Services</title>
            </Head>
            <main>
                <div>
                    <div className="flex flex-col font-serif">
                        <div>
                            <div className="flex flex-col px-4 py-8 bg-orange-400 items-center text-center">
                                <h1 className="text-4xl py-4 text-white">Generate More Leads at Lower Costs</h1>
                                <p className="text-2xl py-2">Avail a range of customized digital marketing services designed to win your prospects' trust</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
        </Layout>
    )
}
export default DigitalMarketingIndexPage