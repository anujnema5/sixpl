import Head from 'next/head'

import Layout from '../../components/nav/layout'
import Date from '../../components/misc/date'

import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths() {
    const paths = getAllPostIds()

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}


const BlogPostPage = ({ postData }) => {
    return(
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div className='flex flex-col items-center font-serif py-10 max-w-2xl m-auto'>
                <div>
                    <h1 className=' text-3xl text-gray-700'>{postData.title}</h1>
                </div>
                <div className='py-2'>
                    <small><Date dateString={postData.date} /></small>
                </div>
                <div className=' text-xl text-gray-700 py-6 list-disc'>
                    <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
                </div>
            </div>
        </Layout>
    )
}

export default BlogPostPage