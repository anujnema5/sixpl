import React from 'react'
import { findObjectBySlug } from '@/utils/functions/helper'
import { services } from '@/lib/data/services-details'
import { genPageMetaData } from 'app/seo'
import ServiceLayout from '@/components/Layout/ServicesLayout'

export const generateMetadata = async ({ params }) => {
  const slug = params.slug.join('/')
  // LOOPING THROUGH THE OBJECT AND FINDING THE PACKAGE THAT HAVE CORRECT SLUG
  // AND GENERATING TITLE AND DESCRIPTION
  const pack = findObjectBySlug(services, slug);
  return genPageMetaData({ title: pack?.title, description: pack?.description })
}

function page({params}) {

    return (
      <React.Fragment>
        <ServiceLayout params={params}/>
      </React.Fragment>
    )
}

export default page