import Layout from '../components/nav/layout'

const ThankYouPage = () => {
    return (
        <Layout>
            <div className='flex flex-col'>
                <div className=' flex flex-col font-serif text-gray-700 items-center border-2 border-gray-200 mx-auto md:my-20 px-8 py-20'>
                    <div className=' text-3xl py-4 text-sptheme-darkgreen'>Thank you for your interest in SixPL Services!</div>
                    <div className=' text-2xl py-2'>Our team will get in touch with you shortly.</div>
                    <div className=' text-xl py-2'>Office Timings: Monday-Friday (9:30am - 6:30pm IST)</div>
                </div>
            </div>
        </Layout>
    )
}

export default ThankYouPage