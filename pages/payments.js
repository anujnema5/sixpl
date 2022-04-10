import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../components/nav/layout'

import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import { useEffect, useState } from 'react'

const PaymentsPage = () => {

    const [publishableKey, setPublishableKey] = useState('')

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
    
    return (
        <Layout>
            <Head>
                <title>This is a Sample Payment Page</title>
            </Head>
            <main>
                <div>
                    This is a Payment Page.
                </div>
            </main>
        </Layout>
    )
}
export default PaymentsPage