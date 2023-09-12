import HomeHero from '@/components/misc/homeHero'
import QuickFacts from '@/components/misc/quickFacts'
import ServicesSection from '@/components/misc/servicesSection'
import React from 'react'
import { ToastContainer } from 'react-toastify'

function page() {
  return (
    <React.Fragment>
      <HomeHero />
      <ServicesSection />
      <QuickFacts />
      <ToastContainer />
    </React.Fragment>
  )
}

export default page