import Image from 'next/image'
import Link from 'next/link'

const SecondaryNavBar = () => {
    return (
        <header>
            <nav className=" text-white text-sm bg-sptheme-lightgreen"> 
                <div>
                    <div className="text-sm py-1 px-1 md:flex md:text-base">
                        <div className="px-1 flex justify-center md:mr-auto">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                            </div> 

                            <div>
                                <a className='px-1 text-sm' href="tel:+91 93184 84366"> 
                                    US: +1 779 545 2612
                                </a>
                            </div>
                            <div>
                                <a className="pl-2 text-sm" href="tel:+91 93184 84366">
                                    IN: +91 9318484366
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="px-1 flex">
                                <a className="" href="mailto: sales@sixpl.com">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-1 inline-flex" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    sales@sixpl.com
                                </a>  
                            </div>
                            <div className="px-1">
                                <a className="inline-flex" href="skype:sixpl.com?chat">
                                    <div className='h-4 w-4 m-1'><Image priority height={16} width={16} src="/skype-icon.svg" /></div>
        
                                    sixpl.com
                                </a>  
                            </div>
                            <div className="px-1">
                                <a className="flex" href="https://wa.me/17795452612">
                                    <div className='h-4 w-4 m-1'><Image priority height={16} width={16} src="/whatsapp-icon.svg" /></div>
                                    
                                </a>  
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default SecondaryNavBar