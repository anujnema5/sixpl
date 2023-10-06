import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'


const ITServicesWebAppPortfolioPage = () => {
    return (
            <main>
                <div className=' lg:mx-52'>
                    <div className=' flex flex-col my-10 mx-4 py-4 '>
                        <div>
                            <div className='py-10 px-4'>
                                <h1 className=' text-3xl text-indigo-800 font-semibold text-center'>Web Application for a Funded EduTech Startup using ReactJS, NextJS, TailwindCSS, PSQL, Prisma & Heroku</h1>
                            </div>
                            <div className='px-4'>
                                <p className='text-gray-600 text-center'>Portfolio {">"} IT Services</p>
                            </div>
                        </div>
                        <div className=' flex flex-col lg:mx-40'>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Overview</h2>
                                <p className=' text-lg mt-1'>SixPL team delivered a powerful, secure, scalable & fast web application that handles more than 200,000 active users per month.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Client</h2>
                                <p className=' text-lg mt-1'>A funded EduTech startup based in Delaware, USA</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Industry</h2>
                                <p className=' text-lg mt-1'>eLearning, Education</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Project Goal</h2>
                                <p className=' text-lg mt-1'>To develop and deploy a modern and fast web application where users can login, buy a course, complete it step by step and download the certificate after scoring certain minimum marks.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Our Solution</h2>
                                <p className=' text-lg mt-1'>
                                    We use the concept of progressive web app to build the complex app, one unit at a time. We adopted Test Driven Development approach build a bug-free software and reach the milestones faster.
                                </p>
                                <ol className=' list-outside pl-8 py-4 text-lg mt-1'>
                                    <li>ReactJS, NextJS, TailwindCSS - To build faster front end and better user experience</li>
                                    <li>PSQL - SQL Database for robust and secure backend </li>
                                    <li>Jest - Testing Framework</li>
                                    <li>Heroku - Web App Deployment</li>
                                </ol>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Tech/Tools Used</h2>
                                <p className=' text-lg mt-1'>
                                    NextJS, TailwindCSS PSQL, JEST, Heroku
                                </p>
                                
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl font-medium text-indigo-700'>Tangible Results</h2>
                                <p className=' text-lg mt-1'>
                                    A fast web application that has given stable performance while meeting the stability requirements. The app has shown reliable performance while maintaining a monthly active user growth rate of more than 1000% in the past few months.
                                </p>

                            </div>
                        
                            <div className='flex flex-row flex-1 justify-center px-4 py-10'>
                                <Link className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500' href="/contact-us">Start Your Project Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
    )
}
export default ITServicesWebAppPortfolioPage