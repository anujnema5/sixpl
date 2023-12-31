import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown({ title, links, hidden }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div className=''>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white text-sm font-semibold text-gray-800/90 shadow-sm">
          {title}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        appear=""
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none translate-x-20 translate-y-2">
          <div className="py-1">
            {links?.map((link) =>
            (
              <Menu.Item>
                {({ active }) => (
                  <Link href={link.href} replace={true} className={classNames(active ? 'bg-gray-100 text-gray-800/90' : 'text-gray-700', 'flex items-center gap-2.5 space-y-0.5')}>

                    <div className="left-0 top-0 flex h-6 w-6 items-center justify-center rounded-md bg-gray-200 ml-2">
                      {link.icon && (<link.icon className="h-4 w-4 text-gray-500 antialiased" aria-hidden="true" />)}
                    </div>

                    <span
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-800/90' : 'text-gray-700',
                        'block  py-2 text-[0.8rem] font-medium'
                      )}
                    >
                      {link.title}
                    </span>
                  </Link>
                )}
              </Menu.Item>
            ))}


          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
