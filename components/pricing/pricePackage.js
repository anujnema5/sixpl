import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const frequencies = [
    { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
    { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]

const PricePackage = ({ packages, heading, subHeading, description }) => {

    const [frequency, setFrequency] = useState(frequencies[0])
    const [selectedDiv, setSelectedDiv] = useState(2);

    function onSelect(index) {
        setSelectedDiv(index)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    return (
        <div className="bg-white py-24">
            <div className="mx-auto lg:w-9/12 w-full py-0 pb-16 lg:pb-12 lg:py-12 lg:bg-gradient-to-br lg:from-slate-50 lg:to-indigo-100 rounded-xl shadow-xl shadow-indigo-100 lg:mt-0 ">

                <div className="mx-auto px-6 lg:mt-2 flex flex-col gap-3 max-w-7xl text-center">
                    <span className="text-base font-semibold leading-7 text-indigo-600">Pricing</span>
                    <h2 className="mt-2 text-3xl font-[600] tracking-tight text-gray-800 sm:text-5xl">
                    Pricing plans for teams of all sizes

                    </h2>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-gray-600 px-7">
                    {'Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.'}
                    <span className='font-bold'>{''}</span>
                </p>

                <div className="isolate mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4 items-start px-10 mx-auto justify-center xl:flex">

                    {/* PACKAGES */}
                    {packages.map((tier, index) => (
                        <div
                            onClick={() => onSelect(index)}
                            key={tier.id}
                            className={classNames(
                                index === selectedDiv ? 'ring-2 ring-indigo-600 transition-all ease-linear	duration-200' : 'ring-1 ring-gray-200 ',
                                'rounded-3xl p-8 bg-slate-50 shadow-lg shadow-slate-300 cursor-pointer ease-linear border'
                            )}
                        >
                            <h3
                                id={tier.id}
                                className={classNames(
                                    tier.mostPopular ? 'text-indigo-600' : 'text-gray-900',
                                    'text-lg font-semibold leading-8'
                                )}
                            >
                                {tier.name}
                            </h3>
                            <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                                <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
                            </p>
                            <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    selectedDiv === index
                                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 transition-all'
                                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-indigo-500  hover:text-gray-200 transition-all focus-visible:outline-indigo-600 ease-linear	duration-200'
                                )}
                            >
                                Buy plan
                            </a>
                            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                {tier.features.map((feature, index) => (
                                    <div key={index + 1} className="">
                                        <h4 className='text-lg font-medium'>{feature.title}</h4>
                                        <div className='flex flex-col gap-2 text-sm text-gray-500 mt-2'>
                                            {feature?.data?.map((details) => (
                                                <div className='flex gap-3'>
                                                    {details.disable ? <XMarkIcon className="h-6 w-5 flex-none text-red-900" ></XMarkIcon> : <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />}

                                                    <li className={details.disable ? "text-gray-400" : "text-gray-500"}>{details.title}</li>

                                                </div>
                                            ))}
                                        </div>

                                    </div>

                                ))}
                            </ul>
                            {/* <a
                                href={tier.href}
                                aria-describedby={tier.id}
                                className={classNames(
                                    selectedDiv === index
                                        ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 transition-all'
                                        : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300',
                                    'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-indigo-500  hover:text-gray-200 transition-all focus-visible:outline-indigo-600 right-4 ease-linear duration-200'
                                )}
                                id={`buyNowPackage${index}`}
                            >
                                Buy plan
                            </a> */}
                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}

export default PricePackage