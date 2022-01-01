import Link from 'next/link'
import Image from 'next/image'

import { serviceList } from '../../lib/data'

const Footer = () => {
    return(
        <footer>
            <div className=" bg-stone-800 text-white font-serif">
                <div className="lg:flex lg:justify-center">
                    <div className="pb-2 pt-4 px-8">
                        <div className="font-extrabold text-2xl">Company</div>
                        <ul>
                            <li className="px-4 py-1"><Link href="/about-us"><a>About Us</a></Link></li>
                            <li className="px-4 py-1"><Link href="/contact-us"><a>Contact Us</a></Link></li>
                        </ul>
                    </div>
                    <div className="px-8 pt-4 pb-2 lg:px-4">
                        <div className="font-extrabold text-2xl">Services</div>
                            <div className="lg:flex">
                                {serviceList.map(serviceCategoryItem => {
                                    return(
                                        <div key={serviceCategoryItem.serviceCategory}>
                                            <div className="px-4 py-2 font-bold text-lg">{serviceCategoryItem.serviceCategory}</div>
                                            <ul className="px-4 py-2">
                                                {serviceCategoryItem.services.map(serviceItem => {
                                                    return (
                                                        <li key={serviceItem.serviceName} className="py-2">{serviceItem.serviceName}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )
                                })} 
                            </div>
                    </div>
                    <div className="pb-2 pt-4 lg:px-2 px-8">
                        <div className="font-extrabold text-2xl">Useful Links</div>
                        <ul>
                            <li className="py-1 px-4"><Link href="/about-us"><a>Disclaimer</a></Link></li>
                            <li className="py-1 px-4"><Link href="/contact-us"><a>Terms & Conditions</a></Link></li>
                            <li className="py-1 px-4"><Link href="/contact-us"><a>Privacy Policy</a></Link></li>
                            <li className="py-1 px-4"><Link href="/contact-us"><a>Refunds & Cancellation Policy</a></Link></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center">
                        <div className="p-2"><Image src="/images/facebook-icon.svg" width="30px" height="30px" /></div>
                        <div className="p-2"><Image src="/images/instagram-icon.svg" width="30px" height="30px" /></div>
                        <div className="p-2"><Image src="/images/youtube-icon.svg" width="30px" height="30px" /></div>
                        <div className="p-2"><Image src="/images/linkedin-icon.svg" width="30px" height="30px" /></div>
                        <div className="p-2"><Image src="/images/twitter-icon.svg" width="30px" height="30px" /></div>
                    </div>
                </div>
            </div>

            

        </footer>
        
    )
}
export default Footer