import { isFormDataFilled } from '@/utils/functions/helper';
import React, { useState } from 'react';
import { TagsInput } from "react-tag-input-component"
import { doc, setDoc } from "firebase/firestore"
import { db, auth } from "@/lib/firebase/config"
import { nanoid } from 'nanoid'
import SuccessAlert from '../misc/SuccessAlert';
import Link from 'next/link';

const JobOpening = () => {

    const timestamp = new Date().getTime();
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [requirements, setRequirements] = React.useState([])
    const [responsibilities, setResponsibilities] = React.useState([])
    const initialFormData = {
        id: nanoid(),
        createdAt: new Date().toLocaleString(),
        jobPosition: '',
        jobRoleDescription: '',
        requirements,
        responsibilities,
        otherDescription: '',
        totalPositions: '',
        location: '',
        experience: '',
        jobType: '',
        status: 'opened'
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    };

    const resetForm = () => {
        setFormData(initialFormData);
    };

    const triggerSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        // SAVING  JOB POSTING TO THE DB
        try {
            await setDoc(doc(db, "job-postings", formData.jobPosition), formData);
            setSuccess('Job Successfully posted')
            setLoading(false)
            resetForm();
        } catch (error) {
            setError("Something went wrong (Server Problem)")
            setLoading(false)
        }
    }

    React.useEffect(() => {
        setFormData(prevFormData => ({
            ...prevFormData,
            requirements,
            responsibilities,
        }));
    }, [requirements, responsibilities]);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full">
                <h2 className="text-2xl font-semibold text-indigo-500 mb-6">
                    Job Application Form
                </h2>

                <form onSubmit={triggerSubmit}>
                    <div className="mb-4">
                        <label htmlFor="jobPosition" className="block text-gray-600">
                            Job Position
                        </label>
                        <input
                            type="text"
                            id="jobPosition"
                            name="jobPosition"
                            value={formData.jobPosition}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jobRoleDescription" className="block text-gray-600">
                            Job Role Description
                        </label>
                        <textarea
                            id="jobRoleDescription"
                            name="jobRoleDescription"
                            value={formData.jobRoleDescription}
                            onChange={handleChange}
                            rows="3"
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="requirements" className="block text-gray-600">
                            Requirements (tags)
                        </label>
                        <TagsInput
                            value={requirements}
                            onChange={setRequirements}
                            name="requirements"
                            placeHolder="Press Enter"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="responsibilities" className="block text-gray-600">
                            Responsibilities (tags)
                        </label>
                        <TagsInput
                            value={responsibilities}
                            onChange={setResponsibilities}
                            name="responsibilities"
                            placeHolder="Press Enter"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="otherDescription" className="block text-gray-600">
                            Other Description
                        </label>
                        <textarea
                            id="otherDescription"
                            name="otherDescription"
                            value={formData.otherDescription}
                            onChange={handleChange}
                            rows="3"
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="totalPositions" className="block text-gray-600">
                            Total Positions
                        </label>
                        <input
                            type="number"
                            id="totalPositions"
                            name="totalPositions"
                            value={formData.totalPositions}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-gray-600">
                            Location
                        </label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="experience" className="block text-gray-600">
                            Experience
                        </label>
                        <input
                            type="text"
                            id="experience"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jobType" className="block text-gray-600">
                            Job Type
                        </label>
                        <input
                            type="text"
                            id="jobType"
                            name="jobType"
                            value={formData.jobType}
                            onChange={handleChange}
                            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-indigo-500"
                        />
                    </div>
                    <div className="mt-6">
                        <button
                            type="submit"
                            disabled={!isFormDataFilled(formData, requirements, responsibilities) || loading}
                            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 disabled:bg-indigo-300"
                        >
                            Submit
                        </button>
                    </div>

                    <br />
                    {success && <span className=''><SuccessAlert message={success} /></span>}
                </form>
            </div>
        </div>
    );
};

export default JobOpening;
