import { checkValidURL } from '@/utils/functions/helper';
import { addResults, addWebsites, setError, setLoading } from '@/utils/redux/statusSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Statusheader() {
    const dispatch = useDispatch();
    const router = useRouter();
    const { websites, loading } = useSelector((store) => store.status)

    const checkURLs = async () => {
        const urls = websites.split('\n').map((url) => url.trim());
        const resultsArray = await Promise.all(
            urls.map(async (link) => {
                let url = link

                if (!url.startsWith("http://") && !url.startsWith("https://")) {
                    url = "http://" + url;
                }

                try {
                    if (checkValidURL) {
                        dispatch(setLoading(true))
                        const response = await axios.post('/api/status', { url });
                        const data = await response.data;
                        return data;
                    }
                } catch (error) {
                    // console.log(error)
                    // dispatch(setError(error))
                    return error
                }
            })
        );

        dispatch(addResults(resultsArray))
        router.push("#result")
    };

    return (
        <div className='lg:py-20 sm:py-7 px-5 py-10 bg-gradient-to-r from-gray-50 to-indigo-300/70 flex flex-col justify-center'>
            <div className="xl:w-10/12 sm:w-11/12 flex sm:flex-row flex-col gap-5 justify-between w-full mx-auto lg:mt-0 sm:mt-5">
                <form onSubmit={(e) => e.preventDefault()} className='lg:w-5/12 w-full flex flex-col gap-5'>
                    <h1 className='lg:text-5xl sm:text-3xl text-2xl font-bold text-slate-700'>HTTP Status and redirect Checker</h1>
                    <p className='text-gray-600 text-base font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, harum nihil veniam eius
                        fuga deserunt? Modi. Lorem ipsum dolor sit amet.</p>

                    <div className='lg:mt-2'>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <textarea
                            type="email"
                            name="email"
                            id="email"
                            rows={3}
                            className="block w-full resize-none rounded-xl border-0 py-3 text-gray-900 ring-1 ring-inset ring-indigo-400  placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-700 sm:text-sm sm:leading-6"
                            placeholder="example.com"
                            onChange={(e) => {
                                dispatch(addWebsites(e.target.value))
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={checkURLs}
                        disabled={loading}
                        className="w-32 rounded-md disabled:bg-indigo-400 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Check
                    </button>
                </form>

                <div className="sm:w-6/12 w-full sm:block hidden">
                    <div className='w-full h-full rounded-xl shadow-xl bg-gray-400/20 flex items-center justify-center'>
                        IMG to be put here
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Statusheader