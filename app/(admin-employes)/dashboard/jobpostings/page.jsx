"use client"
import JobOpening from "@/components/forms/JobOpening";
import CareerWrapper from "@/components/Careers/CareerWrapper";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

function JobPostings() {
    const router = useRouter();
    const {currentUser} = useSelector((store)=> store.user)

    useEffect(()=> {
        if(!currentUser) router.push("/")
    },[])

    return (
        <CareerWrapper title={'Open a new position'} formTitle={'Open a new job position'}>
            <JobOpening />
        </CareerWrapper>
    )
}

export default JobPostings