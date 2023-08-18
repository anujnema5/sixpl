import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import ContactFormVertical from '../forms/contact-form-vertifical'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'


import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function Service({ heading, subHeading, headingCall, tags, title, description }) {

    return (
        <div className="bg-slate-100/30 border-t">
            <div className="relative isolate">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-slate-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M100 200V.5M.5 .5H200" fill="none" />
                        </pattern>
                    </defs>
                    <svg x="50%" y={-1} className="overflow-visible fill-slate-200/75">
                        <path
                            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                            strokeWidth={0}
                        />
                    </svg>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
                </svg>
                <div className="w-full px-6 py-8 sm:py-14 lg:flex lg:gap-x-10 lg:px-10 lg:pl-16 lg:py-20">
                    <div className="duration-150 shadow-xl shadow-indigo-200/60 lg:py-20 py-10 sm:py-16 ease-in-out 
                    lg:w-3/5 w-full h-full lg:mx-0 lg:flex-auto lg:px-20 lg:pt-10 sm:pt-10 p-4 rounded-2xl bg-gradient-to-r from-slate-50 to-indigo-100/40">
                        <div className="flex">
                            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                <span className="font-semibold text-indigo-600">{title}</span>
                                <Link href="/contact-us" className="flex items-center gap-x-1">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Contact us
                                    <ChevronRightIcon className="-mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                        <h1 className="mt-10 text-[1.5rem] font-bold lg:max-w-4xl sm:max-w-3xl text-gray-800 lg:leading-tight sm:leading-tight sm:text-4xl lg:text-[2.7rem]">
                            {heading}
                        </h1>
                        <p className="mt-6 text-lg leading-7 text-gray-600/75">
                            {subHeading}
                        </p>

                        <h3 className='mt-5 lg:mt-10 lg:text-3xl text-[1.15rem] font-bold sm:max-w-4xl text-slate-600 lg:leading-tight '>{headingCall}</h3>

                        {description ? <p className='text-base text-slate-500 mt-4 -mb-8'>{description}</p> : ""}

                        <div className='grid lg:grid-cols-1 xl:grid-cols-2 lg:mt-8 mt-5 lg:gap-7 gap-5 xl:w-full 2xl:w-6/12  '>
                            {tags?.map((tag, index) => (
                                <div className='flex items-center justify-start min-h-max w-full gap-2' key={index}>
                                    {/* <PhoneIcon className='w-7 h- text-indigo-700'/>                                     */}
                                    <span className='text-sm lg:text-sm text-gray-600 lg:font-medium font-normal'>{tag.title}</span>
                                </div>
                            ))}

                        </div>

                        <div className="mt-8 flex items-center gap-x-6">
                            <Link
                                href="/contact-us"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Get started
                            </Link>
                            <Link href="/contact-us" className="text-sm font-semibold leading-6 text-gray-900">
                                Learn more <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
                        <ContactFormVertical />
                    </div>
                </div>
            </div>
        </div>
    )
}