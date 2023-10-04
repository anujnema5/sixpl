import React from 'react'
import Stackedlist from './Stackedlist'
import { addResults } from '@/utils/redux/statusSlice';
import { useDispatch, useSelector } from 'react-redux';
import { axios } from 'axios'
import { codeMessages } from '@/utils/data/statusheaders/responses';

function Main() {
    const { status } = useSelector((store) => store.status)

    return (
        <div id='result'>
            {status.map((site) => (
                <div className='lg:w-10/12 w-full mx-auto mt-10 px-5'>
                    <h1 className='text-gray-800 font-bold lg:text-xl sm:text-lg'>{site.url}</h1>

                    {site.redirects.map((response) => (
                        <>
                            <span className="inline-flex items-center rounded-md bg-green-100 px-3 py-1 text-xs font-medium text-green-700 lg:mt-5 mt-4">
                                {response.code}
                            </span>
                            <div className="mt-5 flex lg:flex-row flex-col gap-6">
                                <div className="flex flex-col gap-2 text-base font-bold">
                                    <h3 className='text-gray-500'>URL</h3>
                                    <span className='text-gray-700'>{response.url}
                                    </span>
                                </div>

                                <div className="flex flex-col gap-2 text-base font-bold">
                                    <h3 className='text-gray-500 uppercase'>Staus Message</h3>
                                    <span className='text-gray-700 uppercase lg:text-base text-sm'>{codeMessages[response.code]}</span>
                                </div>
                            </div>
                            <Stackedlist headers={response.headers} />
                        </>
                    ))}

                </div>
            ))}
        </div>
    )
}

export default Main