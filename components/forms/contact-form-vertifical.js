import Router from 'next/router'
import { useRouter } from 'next/router'
import { useState } from 'react'


const ContactFormVertical = () => {

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
            <div className="flex items-center justify-center border-l-2 border-gray-100">
                {/* <form className="flex flex-col p-2 items-center w-full" onSubmit={onSubmitHandler}>
                    <div className="flex flex-col items-center w-full md:px-8">
                        <div>
                            <div className="py-4 text-center text-2xl text-white">Start Your Project</div>
                        </div>
                        <label className="flex p-2 w-full">
                            <input className="p-2 w-full rounded-md" type="text" name="name" placeholder="Name" required />
                        </label>
                        <label className="p-2 w-full">
                            <input className="p-2 w-full rounded-md" type="email" name="email" placeholder="Email" required />
                        </label>
                        <label className="p-2 w-full">
                            <input className="p-2 w-full rounded-md" type="text" name="phone" placeholder="Mobile" required />
                        </label>
                        <label className="p-2 w-full ">
                            <input className="p-2 w-full rounded-md" type="text" name="website" placeholder="Website" />
                        </label>
                        <label className="p-2 w-full">
                            <textarea className="p-2 w-full rounded-md" name="message" placeholder="Message" required />
                        </label>   
                    </div>
                    <div className="p-2">
                        <button type="submit" disabled={disable} className="py-2 px-8 text-xl bg-slate-50 rounded-lg hover:bg-orange-400 hover:text-white hover:px-10">Get Started Now</button>
                    </div>
                    <div>
                        <p className=' text-red-700'>{errMsg}</p>
                    </div>
                </form> */}

                <form action="#" method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48" onSubmit={onSubmitHandler}>
                    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    First name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="first-name"
                                        autoComplete="given-name"
                                        placeholder='First name'
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Last name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="last-name"
                                        autoComplete="family-name"
                                        placeholder='Last name'
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        placeholder='E-mail address'
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Phone number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone-number"
                                        autoComplete="tel"
                                        placeholder='Phone number'
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="website" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Website
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="website"
                                        id="website"
                                        autoComplete="url"
                                        placeholder='Website URL'
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        placeholder='Message'
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
export default ContactFormVertical