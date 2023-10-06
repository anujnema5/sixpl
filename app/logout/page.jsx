"use client"
import { logout } from '@/utils/redux/userSlice';
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function page() {
    // ROUTER INSTANCE
    const router = useRouter();

    // GETTING THE CURRENT USER
    const {currentUser} = useSelector((state)=> state.user);

    // DISPATCHING
    const dispatch = useDispatch();

    useEffect(() => {
        if (!currentUser) {
            router.refresh()
            router.push("/")
        } 
        
        else {
            dispatch(logout())
            localStorage.removeItem("user")
            localStorage.removeItem("access_token")
            localStorage.removeItem("access_token")
            router.refresh();
            router.push("/")
        }

    }, [])

    return (
        null
    )
}

export default page