import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../../components/nav/layout'

const ITServicesWebAppPortfolioPage = () => {
    return (
        <Layout>
            <Head>
                <title>SixPL Portfolio - EduTech Web App using ReactJS, NextJS, TailwindCSS, PSQL, Prisma & Heroku</title>
            </Head>
            <main>
                <div className=' lg:mx-52'>
                    <div className=' flex flex-col my-10 mx-4 py-4 font-serif'>
                        <div>
                            <div className='py-10 px-4'>
                                <h1 className=' text-3xl text-sptheme-darkgreen text-center'>Web Application for a Funded EduTech Startup using ReactJS, NextJS, TailwindCSS, PSQL, Prisma & Heroku</h1>
                            </div>
                            <div className='px-4'>
                                <p className='text-gray-600 text-center'>Portfolio {">"} IT Services</p>
                            </div>
                        </div>
                        <div className=' flex flex-col lg:mx-40'>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Overview</h2>
                                <p className=' text-lg'>SixPL team delivered a powerful, secure, scalable & fast web application that handles more than 200,000 active users per month.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Client</h2>
                                <p className=' text-lg'>A funded EduTech startup based in Delaware, USA</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Industry</h2>
                                <p className=' text-lg'>eLearning, Education</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Project Goal</h2>
                                <p className=' text-lg'>To develop and deploy a modern and fast web application where users can login, buy a course, complete it step by step and download the certificate after scoring certain minimum marks.</p>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Our Solution</h2>
                                <p className=' text-lg'>
                                    We use the concept of progressive web app to build the complex app, one unit at a time. We adopted Test Driven Development approach build a bug-free software and reach the milestones faster.
                                </p>
                                <ol className=' list-outside pl-8 py-4 text-lg'>
                                    <li>ReactJS, NextJS, TailwindCSS - To build faster front end and better user experience</li>
                                    <li>PSQL - SQL Database for robust and secure backend </li>
                                    <li>Jest - Testing Framework</li>
                                    <li>Heroku - Web App Deployment</li>
                                </ol>
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Tech/Tools Used</h2>
                                <p className=' text-lg'>
                                    NextJS, TailwindCSS PSQL, JEST, Heroku
                                </p>
                                
                            </div>
                            <div className='px-4 py-4'>
                                <h2 className='text-2xl text-gray-700'>Tangible Results</h2>
                                <p className=' text-lg'>
                                    A fast web application that has given stable performance while meeting the stability requirements. The app has shown reliable performance while maintaining a monthly active user growth rate of more than 1000% in the past few months.
                                </p>

                            </div>
                        
                            <div className='flex flex-row flex-1 justify-center px-4 py-10'>
                                <Link href="/contact-us"><a className='text-xl text-center py-2 px-6 bg-gradient-to-r from-sptheme-darkgreen to-sptheme-lightgreen text-white rounded-3xl hover:text-orange-400 hover:bg-gradient-to-r hover:from-sptheme-lightgreen hover:to-sptheme-darkgreen '>Start Your Project Now</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    )
}
export default ITServicesWebAppPortfolioPage