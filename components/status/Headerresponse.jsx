import React from 'react'
import {statusData} from '@/utils/data/statusheaders/responses'

function HeaderResponse() {
    return (
        <div className='w-full bg-gray-50 py-10 lg:mt-16 mt-10'>

            <div className="lg:w-10/12 w-full mx-auto flex flex-col flex-wrap justify-center items-center gap-6 lg:px-0 px-5">

                <h1 className='text-center text-4xl text-slate-700 font-semibold'>Types of HTTPS Status</h1>

                <p className='text-center max-w-5xl text-gray-700'>HTTP response status codes indicate whether a particular HTTP request is completed successfully. Each class contains different responses, and the responses are divided into five classes. Moreover, while there are specific codes in each class, the first number indicates which class it belongs to. You can keep this HTTP status code cheat sheet with a screenshot so you don’t forget it.</p>

                <ul className='flex lg:flex-row flex-col gap-5 lg:w-full flex-wrap justify-center w-full lg:mt-5 mt-0'>
                    {statusData.map((status) => {
                        const { style, codes, message, type } = status
                        return (
                            <li key={type} className={`${style} lg:h-80  lg:w-64 w-full px-5 py-4 rounded-md bg-white shadow-xl shadow-gray-200`}>
                                <h2 className='text-base mt-3 font-semibold'>{message}</h2>
                                <ul className='mt-4 flex flex-col gap-4'>
                                    {codes.map((codeInfo, i) => (
                                        <li className={`text-${style}-600 flex gap-4 items-center`} key={codeInfo.code}>
                                            <span className={`inline-flex items-center rounded-md  px-3 py-1 text-xs font-medium ${style + '-bg'}`}>
                                                {codeInfo.code}
                                            </span>
                                            <span className='py-1 text-sm'>
                                                {codeInfo.message}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )
                    })}
                </ul>
            </div>

        </div>
    )
}

export default HeaderResponse