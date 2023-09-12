"use client";

import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { IconBoxMultiple, IconBulb, IconClick, IconHandClick, IconRocket, IconSocial, IconUser } from "@tabler/icons-react"
import Link from 'next/link';

const navigation = [
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

function MobileDialogue() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center gap-x-6">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SixPL</span>
            <img
              className="h-8 w-auto"
              src="/sixpl-logo.svg"
              alt="logo"
            />
          </Link>
          <Link
            href="#"
            className="ml-auto rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            +1 779 545 2612
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => {
                if (item.type !== 'dropdown') {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800/90 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  )
                }

                return (


                  <div className='space-y-2'>
                    {item.links.map((link) => {
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800/90 hover:bg-gray-50 "
                        >
                          {link.title}
                        </Link>
                      )
                    })}

                  </div>
                )
              })}

            </div>
            <div className="py-6">
              <Link
                href="#"
                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-800/90 hover:bg-gray-50"
              >
                sales@sixpl.com
              </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
}

export default MobileDialogue