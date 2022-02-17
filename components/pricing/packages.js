import Link from 'next/link'

import { serviceList } from '../../lib/data/service-list'


const StandardPackages = ({ category, service }) => {

    let packageFeaturesArray
    let packageFeaturesCount

    const selCategoryServices = serviceList.filter(x => x.serviceCategoryName == category)
    
    const selService = selCategoryServices[0].services.filter(x => x.serviceName == service)
    console.log(selService)
    const packageArray = selService[0]?.servicePackages
    console.log(packageArray);
    
    if (packageArray) {
        packageFeaturesArray = Object.keys(packageArray[0]?.packageDetails)
        packageFeaturesCount = packageFeaturesArray.length
    }


    return (
        <div>
            <div className='flex flex-col items-center lg:flex-row justify-center text-center py-14 lg:px-24'>
                {
                    packageArray.map(packageItem => {
                        return(
                            <div className='flex flex-col my-4 mx-0.5 hover:border-4 hover:border-sky-600 hover:rounded-xl'>
                                <div>
                                    <div className='flex flex-col items-center text-white'>
                                        <div key={packageItem.packageName} className='p-2 bg-emerald-600 text-xl w-full rounded-t-lg'>{packageItem.packageName}</div>
                                        <div className='pt-4 flex flex-row justify-center items-center w-full bg-slate-800'>
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 stroke-white stroke-2' viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6" />
                                                    <line x1="7" y1="9" x2="18" y2="9" />
                                                </svg>
                                            </div>
                                            <div key={packageItem.packagePrice} className='text-4xl font-sans'>{packageItem.packagePrice}</div>
                                        </div>
                                        <div key={packageItem.packageFrequency} className='pb-4 text-sm w-full bg-slate-800'>{packageItem.packageFrequency}</div>
                                    </div>
                                    <div className='w-full'>
                                        {packageFeaturesArray.map(packageFeatureItem => {
                                            return(
                                                    <div className='bg-slate-200 p-2'>
                                                        <div className='p-2 border-b-2 border-slate-300 text-xl font-semibold'>{packageItem.packageDetails[packageFeatureItem].text}</div>
                                                            {packageItem.packageDetails[packageFeatureItem].quantity.map(quantityItem => {
                                                                return (
                                                                    <div className='p-1 border-b-2 border-slate-300'>{quantityItem}</div>
                                                                )
                                                            })}    
                                                    </div>
                                                    )
                                                })}    
                                    </div>
                                    <div className='w-full bg-sky-600 text-white text-2xl p-2 rounded-b-lg '><Link href="/contact-us"><a>Sign up</a></Link></div>
                                </div>    
                            </div>
                        )
                    })    
                }                    
            </div>
        </div>
    )
}
export default StandardPackages