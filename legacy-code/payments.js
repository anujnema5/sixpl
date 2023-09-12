import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/nav/layout'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { useEffect, useState } from 'react'

const PaymentsPage = () => {

    const [publishableKey, setPublishableKey] = useState('')
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')

    useEffect(() => {
        fetch('api/keys', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then((res) => res.json())
        .then((data) => {
            setPublishableKey(data.publishableKey)
        })
    })

    if(!publishableKey) {
        return 'Loading . . .'
    }

    const stripe = loadStripe(publishableKey)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const body = {
            amt: e.currentTarget.amount.value
        }
        try {
            const resp = await fetch('/api/checkout-sessions/', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(body)
            })

            return await resp.json()
        } catch (error) {
            throw new Error(error.message)
        }
    }
    
    return (
        <Layout>
            <Head>
                <title>This is a Sample Payment Page</title>
            </Head>
            <main>
                <div className='m-8 p-4'>
                    <form className='flex flex-col items-center' onSubmit={handleSubmit}>
                        <input className=' bg-slate-100 max-w-lg m-4 p-4' type='number' placeholder='Enter Amount' name='amount' />
                        <button className=' bg-teal-700 text-white max-w-lg p-2'>Submit Now</button>
                    </form>
                </div>
            </main>
        </Layout>
    )
}
export default PaymentsPage