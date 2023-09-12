"use client"
import React from 'react'
import { findObjectBySlug } from '@/utils/functions/helper'
import { services } from '@/lib/data/services-details'

import Service from '@/components/services/service'
import Clients from '@/components/services/clients';
import Services from '@/components/services/Services'
import Flex from '@/components/services/Flex'

import FAQs from '@/components/services/FAQs'
import NotFound from 'app/not-found'
import PricePackage from '@/components/pricing/pricePackage'

function ServiceLayout({ params }) {
  const slug = params.slug.join('/')
  // LOOPING THROUGH THE OBJECT AND FINDING THE PACKAGE THAT HAVE CORRECT SLUG
  const target = findObjectBySlug(services, slug);

  if (target) {

    const data = {
      mainSection: target.mainSection,
      clients: target.clients,
      whyHireUs: target.whyHireUs,
      achievement: target.achievement,
      package: target?.package,
      startProject: target.startProject,
      faq: target.faq
    }

    return (
      <React.Fragment>
        <Service
          title={data.mainSection.title}
          heading={data.mainSection.heading}
          subHeading={data.mainSection.subheading}
          headingCall={data.mainSection.headingCall}
          tags={data.mainSection.tags}
        />
        <Clients heading={data.clients.heading} />
        {data?.package &&
          <PricePackage
            heading={data?.package.heading}
            subHeading={data?.package.subHeading}
            packages={data?.package.pack}
            description={data?.package.description} />
        }
        <Services whyHireUs={data.whyHireUs} />
        <Flex achievement={data.achievement} />
        <FAQs faqs={data.faq} />
      </React.Fragment>)
  } 
}

export default ServiceLayout