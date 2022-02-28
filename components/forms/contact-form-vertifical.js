import Router from 'next/router'
import { useRouter } from 'next/router'
import { useState } from 'react'


const ContactFormVertical = () => {

    const [errMsg, setErrMsg] = useState('')

    const router = useRouter()
    

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        const body = {
            serviceUrl: router.pathname,
            date: new Date().toLocaleDateString(),
            fullName: e.currentTarget.name.value,
            email: e.currentTarget.email.value,
            phone: e.currentTarget.phone.value,
            site: e.currentTarget.website.value,
            message: e.currentTarget.message.value
        }

        try {
            const res = await fetch('/api/sheet', {
                method: "POST",
                headers: { 'Content-Type': 'application/json'  },
                body: JSON.stringify(body)
            })

            if (res.status === 201) {
                console.log(router.pathname)
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
        <div>
            <div className="flex bg-slate-800 font-serif rounded-lg">
                <form className="flex flex-col p-2 items-center w-full" onSubmit={onSubmitHandler}>
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
                        <button type="submit" className="py-2 px-8 text-xl bg-slate-50 rounded-lg hover:bg-orange-400 hover:text-white hover:px-10">Get Started Now</button>
                    </div>
                    <div>
                        <p className=' text-red-700'>{errMsg}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ContactFormVertical