import Link from 'next/link'

import Layout from '../../components/nav/layout'
import Date from '../../components/misc/date'

import { getSortedPostsData } from '../../lib/posts'


export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

const BlogIndexPage = ({ allPostsData }) => {
    return(
        <Layout>
            <main>
                <section className=' flex flex-col items-center justify-center font-serif'>
                    <h1 className='text-3xl text-gray-700 pt-10'>Welcome to SixPL Blog</h1>
                    <ul className='flex flex-col md:flex-row p-4'>
                        {allPostsData.map(( {id, date, title} ) => (
                            
                            <li key={id} className='px-8'>
                                <Link href={`/blog/${id}`}><a className='text-2xl text-sky-700'>{title}</a></Link>
                                <br />
                                <small><Date dateString={date} /></small>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </Layout>
    )
}
export default BlogIndexPage