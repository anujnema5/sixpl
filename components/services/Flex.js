// import React from 'react'

// const Flex = () => {
//   return (
//     <div className="py-10  bg-slate-900">
//     <div className="p-4 flex flex-col justify-center text-center">
//         <div className="px-2 py-10 text-3xl text-white">Delivering Superior IT Services Since 2012</div>
//         <div className="py-4 px-2 lg:flex lg:justify-around">
//             <div className="px-2 py-8 flex flex-col justify-center">
//                 <div className="px-4 py-2 text-6xl text-sky-300 font-mono">10</div>
//                 <div className="px-4 py-2 text-xl text-gray-100">Countries</div>
//             </div>
//             <div className="px-2 py-8 flex flex-col justify-center">
//                 <div className="px-4 py-2 text-6xl text-sky-300 font-sans">16</div>
//                 <div className="px-4 py-2 text-xl text-gray-100">Industries</div>
//             </div>
//             <div className="px-2 py-8 flex flex-col justify-center">
//                 <div className="px-8 py-2 text-6xl text-sky-300 font-sans">86</div>
//                 <div className="px-4 py-2 text-xl text-gray-100">Clients</div>
//             </div>
//             <div className="px-2 py-8 flex flex-col justify-center">
//                 <div className="px-4 py-2 text-6xl text-sky-300 font-sans">129</div>
//                 <div className="px-4 py-2 text-xl text-gray-100">Ecommerce Sites</div>
//             </div>
//             <div className="px-2 py-8 flex flex-col justify-center">
//                 <div className="px-4 py-2 text-6xl text-sky-300 font-sans">267</div>
//                 <div className="px-4 py-2 text-xl text-gray-100">Web Applications</div>
//             </div>
//         </div>

//     </div>
// </div>
//   )
// }

// export default Flex

export default function Example({ achievement }) {
    return (
        <div className="bg-gray-900 sm:pt-14 sm:pb-24 py-10">
            
            <div className="mb-16 flex justify-center">
                    <p className="relative rounded-full bg-gray-800 px-4 py-1.5 text-sm leading-6 text-gray-300">
                        <span className="hidden md:inline"> </span>
                        <a href="#" className="font-semibold text-white uppercase">
                            <span className="absolute inset-0 " aria-hidden="true" />Delivering Superior IT Services Since 2012 {' '}
                            {/* <span aria-hidden="true">&rarr;</span> */}
                        </a>

                    </p>
                </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                
                <div className="grid grid-cols-2 gap-10 lg:grid-cols-5 ">
                    {achievement.achievement.map((achive, index)=>(
                    <div className="mx-auto flex flex-col gap-3 items-center justify-center lg:py-0" key={index}>
                        <div className=" lg:text-5xl text-4xl font-medium text-sky-500">{achive.number}</div>
                        <div className="sm:text-lg text-base text-gray-300/90">{achive.title}</div>
                    </div>
                    ))}


                </div>
                
            </div>
        </div>
    )
}
