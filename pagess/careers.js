
import React, { useState } from 'react'
import Layout from '../components/nav/layout'
import Image from 'next/image'
import { ArrowDownIcon } from '@heroicons/react/20/solid'
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'
import CareerForm from '../components/careerForm'
import Link from 'next/link'
import { IconArrowBearRight } from '@tabler/icons-react'

const plans = [

    {
        id: 1,
        name: 'Email Marketing Specialist',
        memory: '20',
        cpu: 'Remote',
        storage: '1 - 2 Years',
        price: 'Full Time',
        isCurrent: false,
        information: {
            title: "Email Marketing Specialist",
            jobDescription: "Your primary responsibility would be to generate leads for IT and digital marketing services from USA/Canada market.",

            requirements: ["Email Marketing Knowledge", "Analytical Skills", "Content Creation", "Segmentation and Targeting", "Automation", "Communication Skills", "Technical Skills"],

            responsibility: ["Lead Generation for SEO Services", "Lead Generation for Website development"],

            otherInformation: "At least 6 months of experience in email marketing and lead generation in the international market."
        }
    },
    {
        id: 2,
        name: 'Search Engine Optimization Executive',
        memory: '5',
        cpu: 'Remote',
        storage: '1 - 2 Years',
        price: 'Full Time',
        isCurrent: false,
        information: {
            title: "Search Engine Optimization Executive",
            jobDescription: "We are looking for SEO specialists who can handle end-to-end SEO projects.",

            requirements: ["Technical SEO", "Link Building:", "Analytics and Reporting", "Local SEO", "exercitation ullamco laboris", "Ethical Practices"],

            responsibility: ["Creating quality backlinks", "WordPress Website Updation", "On-Page SEO", "Off-Page SEO", "Conduct keyword research and competitive analysis", "Optimize website content for search engines.", "Collaborate with cross-functional teams to achieve SEO goals."],

            otherInformation: "We look forward to receiving your application and exploring the exciting possibilities of working together to achieve digital excellence."
        }
    }
    // More plans...
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function career() {

    const [planStates, setPlanStates] = useState(() => {
        return plans.map((plan, index) => ({
            ...plan,
            index: index,
            opened: false
        }));
    });

    const handleFaq = (index) => {
        setPlanStates((prevItem) => {
            const items = [...prevItem]
            prevItem[index].opened = !prevItem[index].opened
            return items;
        })
    }

    return (
        <Layout>
            <div className='w-[100vw] h-[50vh] bg-gray-950 relative scroll-smooth'>
                <Image src={'/images/career/careerBanner.jpg'} width={500} alt='career' height={700} className='object-cover bg-no-repeat w-[100%] h-[100%]' />
                <div className='absolute w-[100%] h-[100%] bg-black/60 top-0 left-0 flex flex-col items-center justify-center gap-5'>
                    <h1 className='text-white lg:text-5xl text-4xl my-0'>Six<span className='text-indigo-500'>PL</span></h1>
                    <h2 className='my-0 text-white/90 font-bold lg:text-3xl text-xl'>Explore Career <span className='text-red-500'>@ SixPL</span> </h2>
                </div>
            </div>

            <div className="px-4 sm:px-6 lg:px-32 lg:py-5 bg-indigo-50/30">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto py-1">
                        <h1 className="lg:text-2xl text-base font-semibold leading-2 lg:px-6 px-4 py-2 my-3 bg-red-100/60 shadow-lg rounded inline-block text-gray-900">#Our Job Openings</h1>
                    </div>

                </div>
                <div className='px-4 pb-6 lg:py-0 lg:px-0'>
                    <div className="-mx-4 mt-2 ring-1 ring-gray-200 rounded-lg sm:mx-0 sm:rounded-lg overflow-x-auto bg-white">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                        Job
                                    </th>
                                    <th
                                        scope="col"
                                        className=" px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                    >
                                        Positions
                                    </th>
                                    <th
                                        scope="col"
                                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                    >
                                        Location
                                    </th>
                                    <th
                                        scope="col"
                                        className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                                    >
                                        Experience
                                    </th>
                                    <th scope="col" className="hidden lg:block px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                        Job Type
                                    </th>
                                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                        <span className="sr-only">Select</span>
                                        {/* <ArrowDownIcon className='h-4 w-4'/> */}
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {planStates.map((plan, planIdx) => (
                                    <React.Fragment key={plan.id}>

                                        <tr key={plan.id} className=''>
                                            <td
                                                className={classNames(
                                                    planIdx === 0 ? '' : 'border-t border-transparent',
                                                    'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                                                )}
                                            >
                                                <div className="font-medium text-gray-900">
                                                    {plan.name}
                                                    {plan.isCurrent ?
                                                        <span className="ml-1 text-indigo-600"></span> : null}
                                                </div>
                                                <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                                                    <span>
                                                        {plan.memory} / {plan.cpu}
                                                    </span>
                                                    <span className="hidden sm:inline">·</span>
                                                    <span>{plan.storage}</span>
                                                </div>
                                                {planIdx !== 0 ? <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" /> : null}
                                            </td>
                                            <td
                                                className={classNames(
                                                    planIdx === 0 ? '' : 'border-t border-gray-200',
                                                    ' px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                )}
                                            >
                                                {plan.memory}
                                            </td>
                                            <td
                                                className={classNames(
                                                    planIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                )}
                                            >
                                                {plan.cpu}
                                            </td>
                                            <td
                                                className={classNames(
                                                    planIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                                )}
                                            >
                                                {plan.storage}
                                            </td>
                                            <td
                                                className={classNames(
                                                    planIdx === 0 ? '' : 'border-t border-gray-200',
                                                    'px-3 py-3.5 text-sm text-gray-500'
                                                )}
                                            >
                                                {/* <div className="hidden">{plan.price}/mo</div> */}
                                                <div className="hidden sm:block">{plan.price}</div>
                                            </td>
                                            <td
                                                className={classNames(
                                                    planIdx === 0 ? '' : 'border-t border-transparent',
                                                    'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
                                                )}
                                            >
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white mx-3"
                                                    onClick={() => handleFaq(planIdx)}
                                                    disabled={plan.isCurrent}
                                                >
                                                    {/* Select<span className="sr-only">, {plan.name}</span> */}
                                                    {plan.opened ? <IconChevronUp className='h-4 w-4 transition-all' /> : <IconChevronDown className='h-4 w-4 transition-all' />}
                                                </button>
                                                {planIdx !== 0 ? <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" /> : null}
                                            </td>
                                        </tr>

                                        {plan.opened &&
                                            (<tr className='px-10'>
                                                <div className='px-4'>

                                                    <h1 className='w-[80vw] lg:w-full lg:text-2xl'>{plan.information.title}</h1>
                                                    <p>{plan.information.jobDescription}</p>

                                                    <h5 className='lg:ml-1 lg:my-5'>Requirements</h5>
                                                    <ul className='px-6'>
                                                        {plan.information?.requirements.map((item) => (
                                                            <li className='text-gray-500 text-base list-disc'>{item}</li>
                                                        ))}
                                                    </ul>

                                                    <h5 className='lg:ml-1 lg:my-5'>Responsibility</h5>
                                                    <ul className='px-6'>
                                                        {plan.information?.responsibility.map((item) => (
                                                            <li className='text-gray-500 text-base list-disc'>{item}</li>
                                                        ))}
                                                    </ul>

                                                    {plan.information.otherInformation && <p className='mt-6 ml-2'>{plan.information.otherInformation}</p>}

                                                    <div className='flex justify-start pb-6 pt-2 lg:px-3 px-1'>
                                                        <Link
                                                        href={'#job-form'}
                                                            type="button"
                                                            className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 flex items-center justify-center"
                                                        >
                                                            Apply Now
                                                            <IconArrowBearRight className='h-4 w-5'/>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </tr>)}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

            <div className="lg:px-32 px-5 bg-indigo-50/30 py-5" id='job-form'>
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto py-1">
                        <h1 className="lg:text-2xl text-base font-semibold leading-2 lg:px-6 px-4 py-2 my-3 bg-red-100/60 shadow-lg rounded inline-block text-gray-900">Job Application form</h1>
                    </div>
                </div>
                <CareerForm jobs={plans} />
            </div>
        </Layout>
    )
}

export default career