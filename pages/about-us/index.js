import Link from 'next/link'

import Layout from '../../components/nav/layout'

const AboutUsIndexPage = () => {
    return (
        <Layout>
            <div>
                <div className='flex flex-col lg:flex-row m-4 lg:m-14 lg:px-14 font-serif'>
                    <div className=' flex flex-col bg-gray-100 py-4 font-serif'>
                        <Link href='/about-us'><a className='p-2 text-lg underline underline-offset-4 hover:text-sky-700 text-sky-700 bg-white border-l'>Company Overview</a></Link>
                        <Link href='/about-us/saket-kumar-singh'><a className='p-2 text-lg underline underline-offset-4 hover:text-sky-700'>The Founder</a></Link>

                    </div>
                    <div className='flex flex-col px-4 justify-center items-center lg:px-14 border border-l-0'>
                        <div><h1 className=' text-3xl text-gray-700 py-4'>Company Overview</h1></div>
                        <small className='pb-4'>Information updated on Feb 23, 2022</small>
                        <div>
                            <table className=' text-lg'>
                                <thead>
                                    <th></th>
                                    <th></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='pr-4 py-2'>Established</td>
                                        <td className='pl-4 py-2'>May 16, 2012</td>
                                    </tr>
                                    <tr>
                                        <td className='pr-4 py-2'>Founder</td>
                                        <td className='pl-4 py-2'>Saket Kumar Singh</td>
                                    </tr>
                                    <tr>
                                        <td className='pr-4 py-2'>Clients</td>
                                        <td className='pl-4 py-2'>1489</td>
                                    </tr>
                                    <tr>
                                        <td className='pr-4 py-2'>Projects</td>
                                        <td className='pl-4 py-2'>2207</td>
                                    </tr>
                                    <tr>
                                        <td className='pr-4 py-2'>Client Retention Rate</td>
                                        <td className='pl-4 py-2'>74%</td>
                                    </tr>
                                    <tr>
                                        <td className='pr-4 py-2'>Address</td>
                                        <td className='pl-4 py-2'>M 138, 2nd Floor, Connaught Place, New Delhi - 110001</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default AboutUsIndexPage