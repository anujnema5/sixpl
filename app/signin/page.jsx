"use client"
import SignInForm from "@/components/auth/signInForm"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux';

export default function page() {
    const router = useRouter();
    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        if (currentUser) {
            router.push("/")
        }
    }, [])

    return <SignInForm />
}

