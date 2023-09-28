"use client"
import React from 'react'
import CareerForm from '@/components/Careers/CareerForm'
import { useSelector } from 'react-redux'
import useFetchJobs from 'hooks/useFetchJobs'
import CareerWrapper from '../Careers/CareerWrapper'

function Careers() {

    useFetchJobs();
    const jobs = useSelector((store) => store?.jobs)

    return (

        <CareerWrapper title={'See Our Job Openings '} formTitle={'Submit Your Application'}>
            <CareerForm jobs={jobs} />
        </CareerWrapper>
    )
}

export default Careers