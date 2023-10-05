import React from 'react'
import Stackedlist from './Stackedlist'
import { useSelector } from 'react-redux';
import { codeMessages } from '@/utils/data/statusheaders/responses';
import ResponseTable from './ResponseTable';
import ErrorAlert from '../misc/ErrorAlert';

function Main() {
    const { status } = useSelector((store) => store.status)

    return (
        <div id='result'>
            {status?.map((site) => {
                const {redirects} = site

                if(site?.data?.status === 500) return (
                    <div className=' mt-10 lg:w-2/6 w-9/12 mx-auto'>
                    <ErrorAlert message={"Enter a valid Site URL"}/>
                    </div>
                )

                return (
                    <div className='lg:w-10/12 w-full mx-auto mt-10 px-5'>
                        <h1 className='text-gray-800 font-bold lg:text-xl sm:text-lg'>{"Rendered URL - " + site.url}</h1>

                        <ResponseTable redirects={redirects} />

                        {/* {redirects?.map((response) => (
                            <>
                                <div className='lg:mt-7 mt-5 px-1'>
                                    <span className={`inline-flex items-center rounded-md px-3 py-1 text-xs font-medium text-green-700 lg:mt-5 mt-4 bg-${response.code}`}>
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
                                </div>
                                <Stackedlist headers={response.headers} />
                            </>
                        ))} */}

                    </div>
                )
            }

            )}
        </div>
    )
}

export default Main