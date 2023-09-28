"use client"
import SignUpForm from '@/components/auth/signUpForm'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux';

function page() {
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      router.push("/")
    }
  }, [])

  return (
    <SignUpForm />
  )
}

export default page