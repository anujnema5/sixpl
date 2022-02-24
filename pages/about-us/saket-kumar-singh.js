import Link from 'next/link'

import Layout from '../../components/nav/layout'

const FounderPage = () => {
    return(
        <Layout>
            <div>
                <div className='flex flex-col lg:flex-row max-w-4xl m-4 lg:m-14 lg:px-14'>
                    <div className=' flex flex-col bg-gray-100 p-4 font-serif'>
                        <Link href='/about-us'><a className='p-2 text-lg underline underline-offset-4 hover:text-sky-700'>Company Overview</a></Link>
                        <Link href='/about-us/saket-kumar-singh'><a className='p-2 text-lg underline underline-offset-4 hover:text-sky-700'>The Founder</a></Link>

                    </div>
                    <div className='bg-gray-300 px-4'>This is Founder's profile.</div>
                </div>
            </div>
        </Layout>
    )
}
export default FounderPage