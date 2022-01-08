import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'

import { primaryNavItems } from '../../lib/data'


const PrimaryNavBar = () => {
    
    const router = useRouter() //Extract current router using router.pathname
    const [isOpen, setIsOpen] = useState(false)

    const handleMobileMenuClick = () => {
        setIsOpen(!isOpen)
    }
    return(
        <header >
            <nav className="shadow-md">
                <div className="md:hidden">
                    <div className="flex items-center p-2">
                        <div>
                            <Link href="/"><a><Image priority src="/sixpl-logo.svg" width="72" height="39" /></a></Link>
                        </div>
                        <div className="ml-auto">  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg> {/* Search Icon */}
                        </div>
                        
                        <div className="ml-auto pr-6">
                            <button onClick={handleMobileMenuClick}>
                                {isOpen ?

                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                
                                : 
                                
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                }
                                
                            </button>
                        </div>    
                    </div>
                    
                </div>
                <div className="hidden md:flex md:items-center">
                    <div className="p-1">
                        <Link href="/"><a><Image priority src="/sixpl-logo.svg" width="105px" height="58px" /></a></Link>
                    </div>
                    <div className="flex ml-auto p-2 text-lg font-serif text-slate-700">
                        {primaryNavItems.map(navItem => {
                            return(
                                <Link key={navItem.text} href={navItem.permalink}><a className={`px-2 hover:text-emerald-700 ${router.pathname === navItem.permalink ? "text-emerald-700" : "text-slate-700"}`}>{navItem.text}</a></Link>
                            )
                        })}
                    </div>
                </div>

            </nav>
            <div className={`${isOpen ? '': 'hidden'} `}>
                <div className="absolute z-50 w-full grid">
                    <div className="border border-t-2 border-t-teal-600 bg-gray-100 w-6/12 justify-self-center font-serif text-lg text-slate-700">
                        <ul>
                            {primaryNavItems.map(navItem => {
                                return(
                                    <li key={navItem.text} className="border-b border-t-gray-200 p-2"><Link href={navItem.permalink}><a className={`px-2 hover:text-emerald-700 ${router.pathname === navItem.permalink ? "text-emerald-700" : "text-slate-700"}`}>{navItem.text}</a></Link></li>
                                )
                            })}
                        </ul>
                </div>
                </div>
            </div>
        </header>
    )
}

export default PrimaryNavBar