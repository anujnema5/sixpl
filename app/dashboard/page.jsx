"use client"
import React, { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase/config';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '@/lib/redux/userSlice';
import { notFound } from 'next/navigation';

function page() {
    const dispatch = useDispatch();
    const [hydrated, setHydrated] = useState(false);
    const { currentUser } = useSelector((state) => state.user)

    useEffect(() => {
        setHydrated(true)
        if (isSignInWithEmailLink(auth, window.location.href)) {
            let email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                notFound()
            }
            // The client SDK will parse the code from the link for you.
            signInWithEmailLink(auth, email, window.location.href)
                .then((result) => {
                    // Clear email from storage.
                    window.localStorage.removeItem('emailForSignIn');
                    dispatch(loginSuccess(result.user))
                    console.log(result);
                })
                .catch((error) => {
                });
        }
    }, []);

    if(!hydrated) {
        // HERE FIXING THE HYDRATION ERROR
        return null;
    }

    return (
        <div className='h-full'>
            {currentUser?.emailVerified ? <p>You are in</p> : <p>Not authenticated</p>}
        </div>
    )
}

export default page