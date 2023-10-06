import React from 'react'
import SEOPackages from './seo'
import { genPageMetaData } from 'app/seo'

export const metadata = genPageMetaData({title: "Affordable SEO Packages in Delaware, USA - SixPL", description: "Are you looking for affordable SEO packages in Delaware USA? SixPL monthly SEO Packages are best for all businesses. Get SEO package prices now."})

function page() {
  return (
    <SEOPackages/>
  )
}

export default page