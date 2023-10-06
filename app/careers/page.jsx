import Careers from '@/components/misc/Careers'
import siteMetadata from '@/utils/siteMetadata'
import { genPageMetaData } from 'app/seo'
import React from 'react'

export const metadata = genPageMetaData({ title: `Careers - ${siteMetadata.headerTitle}`, description: "Careers @sixPL" })

function page() {
  return (
    <Careers />
  )
}

export default page