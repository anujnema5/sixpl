import React from 'react'

const Other = () => {
    return (
        <div className="flex flex-col lg:flex-row border-2 border-red-800">
            <div className="lg:w-1/2 px-4 py-14">
                <div className="pb-4 text-center text-3xl text-sptheme-darkgreen">Start Your Custom NextJS Project in 4 Easy Steps</div>
                <div>
                    <div className="flex flex-col">
                        <div className="flex flex-col items-center lg:flex-row justify-center">
                            <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                <div className="flex flex-col items-center text-center p-2">
                                    <div className="py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M12 16v-8l-2 2" />
                                            <circle cx="12" cy="12" r="9" />
                                        </svg>
                                    </div>
                                    <div className="py-2 text-2xl text-gray-700">Requirement Gathering & Analysis</div>
                                </div>
                            </div>
                            <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                <div className="flex flex-col items-center text-center p-2 ">
                                    <div className="py-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                            <path d="M10 10a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0" />
                                            <circle cx="12" cy="12" r="9" />
                                        </svg>
                                    </div>
                                    <div className="py-2 text-2xl text-gray-700">Project Budgeting</div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center lg:flex-row justify-center">
                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                    <div className="flex flex-col items-center text-center p-2">
                                        <div className="py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M12 12a2 2 0 1 0 -2 -2" />
                                                <path d="M10 14a2 2 0 1 0 2 -2" />
                                                <circle cx="12" cy="12" r="9" />
                                            </svg>
                                        </div>
                                        <div className="py-2 text-2xl text-gray-700">Milestone Development</div>
                                    </div>
                                </div>
                                <div className="px-4 py-4 lg:w-1/2 lg:h-52">
                                    <div className="flex flex-col items-center text-center p-2">
                                        <div className="py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 stroke-sptheme-darkgreen stroke-1' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M13 16v-8l-4 6h5" />
                                                <circle cx="12" cy="12" r="9" />
                                            </svg>
                                        </div>
                                        <div className="py-2 text-2xl text-gray-700">Start the Project Immediately</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 px-4 py-14">
                    <div className="py-14">
                        <ContactFormVertical />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Other