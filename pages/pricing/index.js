
import { useState } from 'react'
import Layout from '../../components/nav/layout'
import { serviceList } from '../../lib/data'

const PricingIndexPage = () => {

    const [selectedServiceCategory, setSelectedServiceCategory] = useState('Select')
    const [selectedService, setSelectedService] = useState([])
    const [selectedServiceName, setSelectedServiceName] = useState('Select a Service')
    let serviceOptionsToBeDisplayed

    function handleServiceCategoryChange (e) {
        // console.log(e.target.value)
        setSelectedServiceCategory(e.target.value)
    }
    

    function handleServiceChange (e) {
        setSelectedServiceName(e.target.value)
    }

    if (selectedServiceCategory != 'Select') {
        
        serviceOptionsToBeDisplayed = serviceList.filter(serviceCategoryItem => serviceCategoryItem.serviceCategoryName == selectedServiceCategory)[0].services
        
    }



    // console.log(serviceList.filter(serviceCategoryItem => serviceCategoryItem.serviceCategoryName == selectedServiceCategoy)[0].services[0])

    return(
        <Layout>
           <div>
               <div className='flex flex-col font-serif'>
                   <div>
                       <div className='flex flex-col items-center py-8 px-4'>
                           <h1 className='text-4xl py-4 text-center text-gray-700'>Transparent Pricing = More Trust + Better Results</h1>
                           <p className="text-2xl py-2 text-gray-600">Check our standard packages or request a custom quote</p>
                       </div>
                   </div>
                   <form className='flex flex-col items-center bg-slate-100 py-8 px-4 w-screen'>
                       <div className='flex flex-col md:flex-row px-4'>  
                           <label className='flex flex-col md:flex-row p-2 justify-center items-center bg-slate-400'><span className='py-4 pr-4 text-lg'>Select a Service Category</span>                                 
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
                            <label className='flex flex-col md:flex-row  p-2 justify-center items-center bg-slate-400'><span className='py-4 pr-4 text-lg'>Choose a Service</span>                                 
                                <select className='py-1 px-4 text-lg rounded-sm' value={selectedServiceName} onChange={handleServiceChange}>
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
                           <button>Get Service Packages</button>
                       </div>
                   </form>
                   <div>Standard-width Pricing Structure</div>
               </div>
           </div>
        </Layout>
    )
}
export default PricingIndexPage