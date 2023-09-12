// import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'

// import Layout from '../components/nav/layout'
// import ContactFormVertical from '../components/forms/contact-form-vertifical'

// const ContactUsPage = () => {
//     return(
//         <Layout>
//             <Head>
//                 <title>SixPL - Contact Us</title>
//             </Head>
//             <main>
//                 <div>
//                     <div className="flex flex-col ">
//                         <div className=' flex flex-col'>
//                             <div>
//                                 <div className="flex flex-col px-4 py-8 items-center text-center">
//                                     <h1 className="text-4xl py-4">Contact Us to Start Your Project Now</h1>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="flex flex-col lg:flex-row justify-center ">
//                                     <div className="px-10 py-14">
//                                         <div className="pb-4 text-center text-3xl">Ways to Connect</div>
//                                         <div>
//                                             <div className="flex flex-col">
//                                                 <div className="flex flex-col">
//                                                     <div className='px-4 py-2'>
//                                                         <div className="flex flex-row flex-1 items-center text-center p-2">
//                                                             <div className="px-2">
//                                                                 <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 stroke-sptheme-darkgreen' viewBox="0 0 24 24" strokeWidth="1" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                                                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
//                                                                     <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
//                                                                 </svg>
//                                                             </div>
//                                                             <div className='flex flex-col font-sans text-lg'>
//                                                                 <Link className='py-1 px-2' href="tel:+17795452612">US: +1 779 545 2612</Link>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className='px-4 py-2'>
//                                                         <div className="flex flex-row items-center text-center p-2 ">
//                                                             <div className="px-2">
//                                                                 <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 stroke-sptheme-darkgreen' viewBox="0 0 24 24" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                                                     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
//                                                                     <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
//                                                                     <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
//                                                                 </svg>
//                                                             </div>
//                                                             <div>
//                                                                 <Link className=' text-lg px-2' href="https://api.whatsapp.com/send?phone=919318463840">Click to Chat</Link>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className='px-4 py-2'>
//                                                         <div className="flex flex-row items-center text-center p-2 ">
//                                                             <div className="px-2">
//                                                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-1 inline-flex" viewBox="0 0 20 20" fill="currentColor">
//                                                                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                                                                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                                                                 </svg>
//                                                             </div>
//                                                             <div>
//                                                                 <Link className=' text-lg px-2' href="mailto: sales@sixpl.com">Email: sales@sixpl.com</Link>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className='px-4 py-2'>
//                                                         <div className="flex flex-row p-2 ">
//                                                             <div className="px-2">
//                                                                 <svg xmlns="http://www.w3.org/2000/svg" className='h-8 w-8 stroke-sptheme-darkgreen' viewBox="0 0 24 24" strokWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                                                                 <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
//                                                                 <circle cx="12" cy="11" r="3" />
//                                                                 <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
//                                                                 </svg>
//                                                             </div>
//                                                             <div className='px-2'>
//                                                                 <h2 className='text-2xl  text-gray-700 font-semibold'>Headquarter</h2>
//                                                                 <p>SixPL</p>
//                                                                 <p>16192 Coastal Highway</p>
//                                                                 <p>Lewes, DE 19958</p>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="lg:w-1/2 px-10 py-14">
//                                         <div className='text-gray-700'>
//                                             <ContactFormVertical />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </Layout>
//     )
// }
// export default ContactUsPage


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Layout from '../components/nav/layout'
import ContactFormVertical from '../components/forms/Contact-form-vertifical'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { useState } from 'react'


export default function Example() {
  const [errMsg, setErrMsg] = useState('')
    const [disable, setDisable] = useState(false)

    const router = useRouter()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setDisable(true)

        const name = {
            firstName: e.currentTarget.firstName.value.trim(),
            lastName: e.currentTarget.lastName.value.trim()
        }

        console.log(name.firstName + " " + name.lastName);



        const body = {
            serviceUrl: router.pathname,
            date: new Date().toLocaleDateString(),
            fullName: name.firstName + " " + name.lastName,
            email: e.currentTarget.email.value,
            phone: e.currentTarget.phone.value,
            site: e.currentTarget.website.value,
            message: e.currentTarget.message.value
        }

        console.log(body);

        try {
            const res = await fetch('/api/sheet', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })

            if (res.status === 201) {
                console.log(router.pathname)
                console.log('successful');
                setDisable(false)
                Router.push('/thank-you')
            } else {
                throw new Error(await res.text())
            }

        } catch (error) {
            console.log(error)
            setErrMsg(error.message)
        }
    }

  return (
    <Layout>
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-800/90">Let's talk about your project</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Witness the power of creative design, website development, and online marketing strategies with SixPL.
Boost your business with SEO, SMO, email & PPC solutions offered by SixPLl's expert team.
We provide compelling copywriting and content development services for maximum impact.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                16192 Coastal Highway
                  <br />
                  Lewes, DE 19958
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-800/90" href="tel:+1 779 545 2612">
                  +1 779 545 2612
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-800/90" href="mailto:sales@sixpl.com">
                  sales@sixpl.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <ContactFormVertical contactUs={true}/>

        
      </div>
    </div>
    </Layout>
  )
}
