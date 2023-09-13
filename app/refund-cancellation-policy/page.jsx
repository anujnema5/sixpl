import React from 'react'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { allContents } from '../../.contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import PageLayout from '@/components/Layout/PageLayout'
import { genPageMetaData } from 'app/seo'
import siteMetadata from '@/utils/siteMetadata'

export const metadata = genPageMetaData({title: "Refund cancellation policy - " + siteMetadata.headerTitle, 
description : `Refund cancellation policy ${siteMetadata.headerTitle}`})

function page() {
    // FINDING OUR CONTENT AND POST BODY
    const post = allContents.find((post) => post._raw.flattenedPath === 'refund-cancellation-policy')
    const mainContent = coreContent(post)

    return (
        <PageLayout content={mainContent}>
             {/* HERE PASSING THE MDX CODE THIS COMPONENT WILL CONVERT MDX TO HTML 
            AND RENDER CONTENT */}
            <MDXLayoutRenderer code={post.body.code} />
        </PageLayout>
    )
}

export default page