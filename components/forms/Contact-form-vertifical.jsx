"use client"
import Router from 'next/router'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


const ContactFormVertical = ({ contactUs }) => {

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

    const body = {
      serviceUrl: router.pathname,
      date: new Date().toLocaleDateString(),
      fullName: name.firstName + " " + name.lastName,
      email: e.currentTarget.email.value,
      phone: e.currentTarget.phone.value,
      site: e.currentTarget.website.value,
      message: e.currentTarget.message.value
    }

    try {
      const res = await fetch('/api/sheet', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })


      if (res.status === 201) {
        // console.log('successful');
        setDisable(false)
        router.push('/thank-you')
      }

      else {
        throw new Error(await res.text())
      }
    }
    catch (error) {
      setErrMsg(error.message)
    }
  }

  if(contactUs)  {
    return (
      <form action="/thank-you" method="POST" onSubmit={onSubmitHandler} className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-800/90">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="firstName"
                  placeholder='First name'
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-[0.85rem] sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-800/90">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder='Last name'
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 
                  sm:text-sm text-[0.85rem] sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-800/90">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder='E-mail address'
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-[0.85rem] sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-800/90">
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone-number"
                  autoComplete="tel"
                  placeholder='Phone number'
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-[0.85rem] sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="website" className="block text-sm font-semibold leading-6 text-gray-800/90">
                Website
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="website"
                  id="website"
                  autoComplete="url"
                  placeholder='Website URL'
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-[0.85rem]"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-800/90">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder='Message'
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-[0.85rem] sm:leading-6 "
                  defaultValue={''}
                />
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send message
            </button>
          </div>
        </div>
      </form>
    )
  }

  else {
      return (
        <div className="flex items-center justify-center rounded-xl bg-gradient-to-r from-slate-50 to-indigo-100/50 shadow-xl  shadow-indigo-100">
  
          <form action="/thank-you" method="POST" className=" px-4 w-full lg:max-w-xl py-12  lg:px-8 " onSubmit={onSubmitHandler}>
            <div className='pt-2 pb-12 flex lg:justify-start justify-center'>
              <h1 className='lg:text-[1.5rem] text-xl inline rounded-lg px-1 font-semibold text-slate-600'>Get a quote from us</h1>
              
            </div>
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-800/90">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="firstName"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder='First name'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-[0.85rem] sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-800/90">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="lastName"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder='Last name'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-[0.85rem] sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-800/90">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      placeholder='E-mail address'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-[0.85rem] sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-800/90">
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone-number"
                      autoComplete="tel"
                      placeholder='Phone number'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-[0.85rem] sm:leading-6"
                    />
                  </div>
                </div>
  
                <div className="sm:col-span-2">
                  <label htmlFor="website" className="block text-sm font-semibold leading-6 text-gray-800/90">
                    Website
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="website"
                      id="website"
                      autoComplete="url"
                      placeholder='Website URL'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-[0.85rem]"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-800/90">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      placeholder='Message'
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800/90 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm text-[0.85rem] sm:leading-6 "
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  type="submit"
                  disabled={disable}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      )
    } 
  }
  
export default ContactFormVertical