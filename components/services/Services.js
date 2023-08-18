
export default function Example({ whyHireUs }) {
    return (
        <div className="bg-indigo-50/40 py-5 lg:py-16 ">
            <div className="mx-auto w-10/12 lg:px-8 ">
                <div className="mx-auto w-full text-center">
                    <h2 className="lg:text-lg text-sm font-semibold leading-8 tracking-tight text-indigo-600">{whyHireUs.heading}</h2>
                    <p className="mt-2 lg:text-3xl text-lg max-w-7xl mx-auto font-[700] tracking-normal text-gray-600 sm:text-3xl">
                        {whyHireUs.subheading}
                    </p>
                </div>
                <div className="mx-auto mt-9 flow-root max-w-2xl sm:mt-14 lg:mx-0 lg:max-w-none">
                    <div className="sm:columns-2 h-auto border-t shadow-xl rounded-xl shadow-indigo-200  py-5 lg:columns-3 lg:px-0 px-7">

                        {whyHireUs.tags?.map((testimonial, index) => (
                            <div className='lg:w-72 w-full h-48 mb-5 border mx-auto rounded-lg flex flex-col justify-center items-center bg-indigo-50/50 shadow-md shadow-indigo-50 gap-4
                            hover:scale-105 ease-in-out duration-200 cursor-pointer
                            ' key={index}>
                                <div className='w-20 h-20 rounded-lg shadow-xl shadow-indigo-100 flex justify-center items-center text-xs'>
                                    {
                                        testimonial.svg &&
                                        <testimonial.svg className="text-slate-500 w-4/6 h-full" />

                                    }
                                </div>
                                <p className='font-semibold text-slate-700 text-base text-center antialiased'>{testimonial.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}