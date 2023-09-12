'use client'
import React from "react";
import { useAuthContext } from "../lib/context/AuthContext"
import { useRouter } from "next/navigation"

function PrivatePage() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (<h1>Thank you. You have signed in.</h1>);
}

export default PrivatePage;