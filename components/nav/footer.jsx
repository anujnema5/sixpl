import Link from 'next/link'
import Image from 'next/image'
import { navigation } from '../../lib/data/footernavigation'
import { FunnelIcon, Square3Stack3DIcon, CodeBracketSquareIcon, PencilIcon } from '@heroicons/react/20/solid'
import { footerLink } from '@/utils/data/nav/navLinks'

export default function Footer() {

  function handleRoutes(link) {
    window.location.href = link
  }

  const date = new Date();

  return (
    <footer className="bg-gradient-to-bl from-gray-900 to-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-7 pt-8 lg:px-8 lg:pt-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4">
            <img
              className="h-7 text-white bg-white rounded-xl px-5 py-0.5"
              src="/sixpl-logo.svg"
              alt="Company name"
            />
            <p className="text-xs lg:text-sm leading-7 text-gray-200 antialiased ">
              Helping businesses grow faster and become more efficient everyday .
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <Link key={item.name} href={item.href} target='_blank' className="text-gray-200 antialiased hover:text-gray-500 transition-all duration-300 ease-in-out">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className='flex justify-start items-center gap-3'>

                  {/* FIRST LANE */}
                  <FunnelIcon className='h-5 w-5 text-indigo-400' />

                  <h3 className="text-base font-semibold leading-6 text-gray-100">
                    Services IT</h3>
                </div>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-xs lg:text-sm leading-6 text-gray-200 antialiased hover:text-gray-400 transition-all duration-300 ease-in-out">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                {/* <h3 className="text-base font-semibold leading-6 text-gray-100">Digital Marketing</h3> */}
                <div className='flex justify-start items-center gap-3'>
                  {/* SECOND LANE */}
                  <CodeBracketSquareIcon className='w-6 h-6 text-indigo-400' />
                  <h3 className="text-base font-semibold leading-6 text-gray-100">Digital Marketing</h3>
                </div>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-xs lg:text-sm leading-6 text-gray-200 antialiased hover:text-gray-400 transition-all duration-300 ease-in-out">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <div className='flex justify-start items-center gap-3'>
                  {/* <img
                    className=" h-6 text-white w-auto"
                    src={`blockchain.svg`}
                    alt="SixPL Logo"
                  /> */}
                  <Square3Stack3DIcon className='w-6 h-6 text-indigo-400' />
                  <h3 className="text-base font-semibold leading-6 text-gray-100">Blockchain</h3>
                </div>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-xs lg:text-sm leading-6 text-gray-200 antialiased hover:text-gray-400 transition-all duration-300 ease-in-out">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <div className='flex justify-start items-center gap-2'>
                  <PencilIcon className='w-5 -5 text-indigo-400' />
                  <h3 className="text-base font-semibold leading-6 text-gray-100">Content</h3>
                </div>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-xs lg:text-sm leading-6 text-gray-200 antialiased hover:text-gray-400 transition-all duration-300 ease-in-out">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 w-full border-t lg:flex items-center justify-between border-gray-900/10 pt-8">
          <p className="text-xs leading-5 text-gray-200">&copy; {date.getFullYear()} SixPL, Inc. All rights reserved.</p>

          <ul role="list" className="flex lg:flex-row gap-4 lg:gap-10 flex-wrap lg:mt-0 mt-5">
            {footerLink.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="text-xs lg:text-sm font-medium leading-6 text-gray-200 antialiased hover:text-gray-400 transition-all duration-300 ease-in-out">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}