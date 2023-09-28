import React from 'react'

function FormWrapper({children, formTitle}) {
    return (
        <div className="lg:px-32 px-5 bg-indigo-50/30 py-5" id='job-form'>
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto py-1">
                    <h1 className="lg:text-2xl text-base font-semibold leading-2 lg:px-6 px-4 py-2 my-3 bg-red-100/60 shadow-lg rounded inline-block text-gray-900">{formTitle}</h1>
                </div>
            </div>
            {children}
        </div>
    )
}

export default FormWrapper