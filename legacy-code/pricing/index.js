import { useState } from 'react'
import { useRouter } from 'next/router'

import Layout from '../../components/nav/layout'
import { serviceList } from '../../lib/data/service-list'
import StandardPackages from '../../components/pricing/packages'

const PricingIndexPage = () => {

    const router = useRouter()
    const { service } = router.query

    const [selectedServiceCategory, setSelectedServiceCategory] = useState('Select')
    const [selectedServiceName, setSelectedServiceName] = useState('Select a Service')
    const [displayPackages, setDisplayPackages] = useState(false)
    let serviceOptionsToBeDisplayed

    function handleServiceCategoryChange (e) {
        // // console.log(e.target.value)
        setSelectedServiceCategory(e.target.value)
        setDisplayPackages(false)
    }
    

    function handleServiceChange (e) {
        setSelectedServiceName(e.target.value)
        setDisplayPackages(false)
    }

    if (selectedServiceCategory != 'Select') {
        
        serviceOptionsToBeDisplayed = serviceList.filter(serviceCategoryItem => serviceCategoryItem.serviceCategoryName == selectedServiceCategory)[0].services
        
    }

    function handleSubmit (e) {
        e.preventDefault()
        setDisplayPackages(true)
    }



    // // console.log(serviceList.filter(serviceCategoryItem => serviceCategoryItem.serviceCategoryName == selectedServiceCategoy)[0].services[0])

    return(
        <Layout>
           <div>
               <div className='flex flex-col'>
                   <div>
                       <div className='flex flex-col items-center py-8 px-4'>
                           <h1 className='text-4xl py-4 text-center text-gray-700'>Transparent Pricing = More Trust + Better Results</h1>
                           <p className="text-2xl py-2 text-gray-600">Check our standard packages or request a custom quote</p>
                       </div>
                   </div>
                   <div className='bg-slate-400 max-w-full p-4'>
                        <form onSubmit={handleSubmit} className='flex flex-col items-center bg-slate-100 py-8 px-4'>
                            <div className='flex flex-col md:flex-row px-4'>  
                                <label className='flex flex-col md:flex-row p-2 justify-center items-center'><span className='py-4 pr-4 text-lg'>Select a Service Category</span>                                 
                                        <select className='py-1 px-4 text-lg rounded-sm' value={selectedServiceCategory} onChange={handleServiceCategoryChange}>
                                            <option key="Select" value="Select">Select</option>
                                            {serviceList.map(serviceCategoryItem => {
                                                return (
                                                    <option key={serviceCategoryItem.serviceCategoryName} value={serviceCategoryItem.serviceCategoryName}>{serviceCategoryItem.serviceCategoryName}</option>
                                                )
                                            })}
                                        </select>    
                                    </label>   
                            </div>
                            <div className='flex flex-col md:flex-row px-4'>
                                    <label className='flex flex-col md:flex-row  p-2 justify-center items-center'><span className='py-4 pr-4 text-lg'>Choose a Service</span>                                 
                                        <select className='py-1 px-4 text-lg w-11/12' value={selectedServiceName} onChange={handleServiceChange}>
                                            <option key="select-service" value="Select a Service">Select</option>
                                            
                                            {serviceOptionsToBeDisplayed ? serviceOptionsToBeDisplayed.map(serviceItem => {
                                                return (
                                                    <option key={serviceItem.serviceName} value={serviceItem.serviceName}>{serviceItem.serviceName}</option>
                                                )
                                            }) : ''}
                                        </select>    
                                    </label>
                            </div>
                            <div>
                                <button type='submit'>Get Service Packages</button>
                            </div>
                        </form>
                   </div>
                   <div>
                       {displayPackages ? <StandardPackages category={selectedServiceCategory} service={selectedServiceName} /> : ''}
                       
                   </div>
               </div>
           </div>
        </Layout>
    )
}
export default PricingIndexPage