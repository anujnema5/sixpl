"use client"
import React, { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase/config';
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '@/lib/redux/userSlice';
import { notFound, useRouter } from 'next/navigation';


function page() {
    const dispatch = useDispatch();
    const [hydrated, setHydrated] = useState(false);
    const router = useRouter();
    const { currentUser } = useSelector((state) => state.user)

    useEffect(() => {
        setHydrated(true);

        if(currentUser) {
            router.push("/")
        }
    }, []);


    useEffect(() => {
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
    }, [currentUser]);

    if (!hydrated) {
        // Returns null on first render, so the client and server match
        return null;
    }
    
    return (
        <div className='h-full'>
            {currentUser?.emailVerified ? <p>Your Email is now verified</p> : <p>Please verify your email ASAP</p>}
        </div>
    )
}

export default page