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
                            <div className="flex flex-col px-4 py-12 bg-cyan-100 items-center text-center">
                                <h1 className="text-4xl py-4 text-emerald-700">Generate More Leads at Lower Costs</h1>
                                <p className="text-xl py-2">Avail a range of customized digital marketing services designed to win your prospects' trust</p>
                            </div>
                        </div>
                        <div className="bg-slate-100">
                            <div className="flex flex-col lg:flex-row">
                                <div className="lg:w-1/2 px-4 py-8">
                                    <div className="text-center">Headline</div>
                                    <div>
                                        <div className="flex flex-col">
                                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                                <div className="px-4 py-4 lg:w-1/2">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">Image 1</div>
                                                        <div className="py-2">Text Explaining Why we are the best company in the world</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-4 lg:w-1/2">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">New Image 2</div>
                                                        <div className="py-2">Similar Text</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                                <div className="px-4 py-8 lg:w-1/2">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">Image 3</div>
                                                        <div className="py-2">New Text 4 Explain the best benefits to the clients</div>
                                                    </div>
                                                </div>
                                                <div className="px-4 py-8 lg:w-1/2">
                                                    <div className="flex flex-col items-center text-center p-2">
                                                        <div className="py-2">Image 4</div>
                                                        <div className="py-2">New Text 4 - Explaining some great things</div>
                                                    </div>  
                                                </div>   
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-1/2 px-4 py-8">
                                    <div>
                                        <ContactFormVertical />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-200">
                            <div>Section 3</div>

                        </div>
                        <div className="bg-slate-300">
                            <div>Section 4</div>
                        </div>
                        <div className="bg-slate-400">
                            <div>Section 5</div>
                        </div>
                        <div className="bg-slate-500">
                            <div>Section 6</div>
                        </div>
                        <div className="bg-slate-600">
                            <div>Section 7</div>
                        </div>
                        <div className="bg-slate-700">
                            <div>Section 8</div>
                        </div>
                        <div className="bg-gray-200">
                            <div>Section 9</div>
                        </div>
                        <div className="bg-gray-300">
                            <div>Section 10</div>
                        </div>
                        <div className="bg-gray-400">
                            <div>Section 11</div>
                        </div>
                    </div>
                </div>
            </main>
            
        </Layout>
    )
}
export default DigitalMarketingIndexPage