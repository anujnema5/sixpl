"use client";

import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Dropdown from './Dropdown'
// import {IconBoxMultiple, IconBulb, IconClick, IconHandClick, IconRocket, IconSocial, IconUser} from "@tabler/icons-react"
import {navigation} from '@/utils/data/nav/navLinks';
import React from '@heroicons/react';

export default function TopNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">SixPL</span>
            <img className="h-14 w-auto" src="/sixpl-logo.svg" alt="logo" />
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">

          {/* RENDERING NAVIGATION AND DROP DOWN MENU */}
          {navigation.map((item) => {
            if (item.type !== 'dropdown') {
              return (

                <Link key={item.href} href={item.href} className="text-sm font-semibold leading-6 text-gray-800/90">
                  {item.name}
                </Link>
              )
            } if (item.type === 'dropdown') {
              // DROPDOWN LINKS
              return (
                <div className='' key={item.name}>
                <Dropdown title={item.title} key={item.name} links={item.links} />
                </div>
              )
            }
          })}
        </div>

        <div className="flex flex-1 items-center justify-end gap-x-6">
          <Link href="mailto: sales@sixpl.com" className="hidden lg:block lg:text-sm lg:font-semibold lg:leading-6 lg:text-gray-800/90">
            sales@sixpl.com
          </Link>
          <Link
            href="tel:+1 779 545 2612"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            +1 779 545 2612
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
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


                    <div className='space-y-2' key={item.href}>
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
    </header>
  )
}
