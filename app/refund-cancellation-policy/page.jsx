import React from 'react'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { allContents } from '../../.contentlayer/generated'
import { coreContent } from 'pliny/utils/contentlayer'
import PageLayout from '@/components/Layout/PageLayout'
import { genPageMetaData } from 'app/seo'
import siteMetadata from '@/utils/siteMetadata'

export const metadata = genPageMetaData({title: "privacy Policy - " + siteMetadata.headerTitle, 
description : "Privacy Policy Sixpl"})

function page() {
    const post = allContents.find((post) => post._raw.flattenedPath === 'refund-cancellation-policy')
    const mainContent = coreContent(post)

    return (
        <PageLayout content={mainContent}>
            <MDXLayoutRenderer code={post.body.code} />
        </PageLayout>
    )
}

export default page