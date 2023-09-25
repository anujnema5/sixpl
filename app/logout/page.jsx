"use client"
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

function page() {
    // ROUTER INSTANCE
    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem("user")
        localStorage.removeItem("access_token")
        localStorage.removeItem("access_token")
        router.push("/")
    }, [])

    return (
        <div>

        </div>
    )
}

export default page