import { codeMessages } from '@/utils/data/statusheaders/responses';
import React from 'react'

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    // More people...
  ]

function ResponseTable({ redirects }) {

    return (
        <ul role="list" className="mt-8 rounded-lg shadow-xl shadow-gray-100 w-full">
            <h1 className="lg:text-lg font-bold text-gray-500">Redirect Overview</h1>

            <div className="sm:overflow-hidden overflow-x-scroll shadow ring-1 ring-black ring-opacity-5 lg:rounded-lg rounded-md mt-5">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                Status Code
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Scheme
                            </th>
                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                URL
                            </th>

                            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                Status Message
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                        
                        {redirects?.map((info, i) => {
                            const {code, url} = info

                            return (
                            <tr key={i}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {code}
                                </td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {url.startsWith("https") ? "HTTPS" : "HTTP"}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{url}</td>
                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{codeMessages[code]}</td>

                            </tr>
                        )}
                        )}
                    </tbody>
                </table>
            </div>
        </ul>
    )
}

export default ResponseTable