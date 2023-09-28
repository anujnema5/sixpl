import React from 'react'
import OpenedJobs from './OpenedJobs'

function Jobs() {
    return (
        <div className="px-4 sm:px-6 lg:px-32 lg:py-5 bg-indigo-50/30">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto py-1">
                    <h1 className="lg:text-2xl text-base font-semibold leading-2 lg:px-6 px-4 py-2 my-3 bg-red-100/60 shadow-lg rounded inline-block text-gray-900">Our Job Openings</h1>
                </div>

            </div>

            <OpenedJobs />
        </div>
    )
}

export default Jobs