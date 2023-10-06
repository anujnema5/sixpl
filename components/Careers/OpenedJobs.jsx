import { addCurrent } from '@/utils/redux/jobsSlice';
import { IconArrowBearRight } from '@tabler/icons-react';
import { IconChevronDown } from '@tabler/icons-react';
import { IconChevronUp } from '@tabler/icons-react';
import useFetchJobs from 'hooks/useFetchJobs';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

function OpenedJobs() {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const dispatch = useDispatch();
    const jobs = useSelector((store) => store?.jobs)
    useFetchJobs();


    const handleFaq = (id) => {
        dispatch(addCurrent(id))
    }

    return (
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
                        {jobs?.map((plan, planIdx) => {
                            // console.log(plan.data);
                            const
                                { id,
                                    jobPosition,
                                    jobRoleDescription,
                                    jobType,
                                    location,
                                    otherDescription,
                                    totalPositions,
                                    requirements,
                                    responsibilities
                                } = plan.data
                            return (
                                <React.Fragment key={id}>
                                    <tr key={id} className=''>
                                        <td
                                            className={classNames(
                                                planIdx === 0 ? '' : 'border-t border-transparent',
                                                'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                                            )}
                                        >
                                            <div className="font-medium text-gray-900">
                                                {jobPosition}
                                                {jobs.isCurrent ? <span className="ml-1 border-2 border-red-700 text-indigo-600"></span> : null
                                                }
                                            </div>
                                            <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                                                <span>
                                                    {totalPositions} / {location}
                                                </span>
                                                <span className="hidden sm:inline">·</span>
                                                <span>{plan.experience}</span>
                                            </div>
                                            {planIdx !== 0 ? <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" /> : null}
                                        </td>
                                        <td
                                            className={classNames(
                                                planIdx === 0 ? '' : 'border-t border-gray-200',
                                                ' px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                            )}
                                        >
                                            {totalPositions}
                                        </td>
                                        <td
                                            className={classNames(
                                                planIdx === 0 ? '' : 'border-t border-gray-200',
                                                'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                            )}
                                        >
                                            {location}
                                        </td>
                                        <td
                                            className={classNames(
                                                planIdx === 0 ? '' : 'border-t border-gray-200',
                                                'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                                            )}
                                        >
                                            {plan.experience}
                                        </td>
                                        <td
                                            className={classNames(
                                                planIdx === 0 ? '' : 'border-t border-gray-200',
                                                'px-3 py-3.5 text-sm text-gray-500'
                                            )}
                                        >
                                            <div className="hidden sm:block">{jobType}</div>
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
                                                onClick={() => handleFaq(id)}

                                            >

                                                {plan?.opened ? <IconChevronUp className='h-4 w-4 transition-all' /> : <IconChevronDown className='h-4 w-4 transition-all' />}
                                            </button>

                                        </td>
                                    </tr>

                                    {plan.opened &&
                                        (<tr className='px-10'>
                                            <div className='px-4'>

                                                <h1 className='w-[80vw] lg:w-full lg:text-2xl font-medium'>{jobPosition}</h1>
                                                <p className='text-gray-600 mt-3'>{jobRoleDescription}</p>

                                                <h5 className='lg:ml-1 lg:my-5'>Requirements</h5>
                                                <ul className='px-6'>
                                                    {requirements.map((item) => (
                                                        <li className='text-gray-500 text-base list-disc'>{item}</li>
                                                    ))}
                                                </ul>

                                                <h5 className='lg:ml-1 lg:my-5'>Responsibility</h5>
                                                <ul className='px-6'>
                                                    {responsibilities.map((item) => (
                                                        <li className='text-gray-500 text-base list-disc'>{item}</li>
                                                    ))}
                                                </ul>

                                                {otherDescription && <p className='mt-6 ml-2 text-gray-600'>{otherDescription}</p>}

                                                <div className='flex justify-start pb-6 pt-2 lg:px-3 px-1'>
                                                    <Link
                                                        href={'#job-form'}
                                                        type="button"
                                                        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 flex items-center justify-center"
                                                    >
                                                        Apply Now
                                                        <IconArrowBearRight className='h-4 w-5' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </tr>)}
                                </React.Fragment>
                            )
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OpenedJobs