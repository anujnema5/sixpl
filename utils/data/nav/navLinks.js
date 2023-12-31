import { IconBoxMultiple, IconBulb, IconClick, IconRocket, IconRotateClockwise, IconSocial, IconUser } from "@tabler/icons-react"

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  {
    type: 'dropdown',
    title: 'Pricing',
    links: [
      { href: '/pricing/seo-packages', title: 'SEO Packages', icon: IconRocket },
      { href: '/pricing/website-packages', title: 'Website Packages', icon: IconBoxMultiple },
      { href: '/pricing/smo-packages', title: 'SMO Packages', icon: IconSocial },
      { href: '/pricing/ppc-packages', title: 'PPC Packages', icon: IconClick },
    ],
  },
  {
    type: 'dropdown',
    title: 'Tools',
    links: [
      { href: '/tools/http-status-tool', title: 'Status Checker', icon: IconRotateClockwise }
    ],
  },
  { name: 'Pay', href: 'https://buy.stripe.com/cN29Cy9Po76G3teeV0' },
  { name: 'Contact', href: '/contact-us' },
  {
    type: 'dropdown',
    title: 'About',
    links: [
      { href: '/about-us', title: 'About us', icon: IconUser },
      { href: '/careers', title: 'Careers', icon: IconBulb },
    ],
  }
]

export const footerLink = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Refund Cancellation Policy', href: '/refund-cancellation-policy' },
  { name: 'Disclaimer', href: '/disclaimer' },
  { name: 'Terms & Conditions', href: '/terms-conditions' }
]

export const dasboardLinks = [
  {
    type: 'dropdown',
    title: 'Dashboard',
    links: [
      { href: '/dashboard/jobpostings', title: 'Job Postings', icon: IconUser },
      { href: '/logout', title: 'Logout', icon: IconBulb },
    ],
  }
]

export default navigation;