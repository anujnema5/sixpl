import Head from 'next/head'

import Layout from '../components/nav/layout'

const ThankYouPage = () => {
    return (
        <Layout>
            <Head>
                <title>Thank You for Interest in SixPL Services!</title>
            </Head>
            <main>
                <div className='flex flex-col'>
                    <div className=' flex flex-col font-serif text-gray-700 items-center border-2 border-gray-200 mx-auto md:my-20 px-8 py-20'>
                        <div className=' text-3xl py-4 text-sptheme-darkgreen'>Thank you for your interest in SixPL Services!</div>
                        <div className=' text-2xl py-2'>Our team will get in touch with you shortly.</div>
                        <div className=' text-xl py-2'>USA Office Timings: Monday-Friday (9:00am - 5:00pm EDT)</div>
                        <div className=' text-xl py-2'>India Office Timings: Monday-Friday (9:30am - 6:30pm IST)</div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default ThankYouPage