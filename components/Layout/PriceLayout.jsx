import React from 'react'
import PricePackage from '@/components/pricing/pricePackage'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { allContents } from '@/contentlayer/generated';
import PageLayout from './PageLayout';

function PriceLayout({ pack }) {
    // GRABING THE SLUG
    const { slug } = pack

    // GRABING THE PACKAGE OBJECT
    const { pricing, heading, description, subHeading } = pack.package;

    // FINDING THE POST WITH CORRECT SLUG
    const post = allContents.find((post) => post._raw.flattenedPath === slug)
    const Content = getMDXComponent(post.body.code) // GETTING READY OUR MDX COMPONENT


    return (
        <React.Fragment>
            {/* PACKAGE TITLE */}
            <div className='mt-7 sm:mt-20 lg:-mb-16 -mb-20 pt-10 lg:px-0 px-2.5'>
                <h1 className='lg:text-[1.9rem] px-2 text-2xl font-bold tracking-tight text-gray-600 sm:text-3xl text-center'>{pack.title}</h1>
            </div>
            {/* PRICING & CONTENT */}
            <div className='mt-20 lg:mt-7'>
                {/* PRICING COMPONENT */}
                <PricePackage heading={heading} packages={pricing} description={description} subHeading={subHeading} />

                {/* CONTENT */}
                <div className='mx-auto lg:w-9/12 lg:px-2 px-5 prose max-w-full py-10 pb-8'>
                    <Content />
                </div>
            </div>
        </React.Fragment>
    )
}

export default PriceLayout