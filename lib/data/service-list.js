import { CpuChipIcon } from '@heroicons/react/24/outline'

export const serviceList = [
    {
        serviceCategoryName: 'IT', 
        serviceCategoryPermalink: 'it', 
        name:"it",
        serviceDescription: "Information Technology, Digital Marketing, Blockchain & Content Solutions Designed To Start, Manage & Grow Your Business. Contact Us Now To Start Your Next Project Immediately.",
        services: [
            {serviceName: 'NextJS Development', servicePermalink: 'nextjs-development'},
            {serviceName: 'NodeJS Development', servicePermalink: 'nodejs-development'},
            {serviceName: 'React Development', servicePermalink: 'best-react-developers'},
            {serviceName: 'JavaScript Development', servicePermalink: 'javascript-development'},
            {serviceName: 'Web Application Development', servicePermalink: 'web-app-development'},
            {
                serviceName: 'Website Design & Development', 
                servicePermalink: 'website-design-development',
                servicePackages:
                    [ 
                        {
                            packageName: 'Starter',
                            packageDetails: {
                                onepager: {
                                    text: 'One Pager',
                                    quantity: ['8 Facebook Posts', '8 Instagram Posts', '8 LinkedIn Posts', '8 Twitter Posts']
                                },
                                corp: {
                                    text: 'Corporate Features',
                                    quantity: ['5 Keywords', 'All On-Page Features Included'],
                                    offpage: ['5 Citations', '40 Backlinks']
                                },
                                hosting: {
                                    text: 'Web Hosting',
                                    quantity: ['2 SEO Optimized Blogs', 'Featured Image for Each Blog', 'Each Blog Promoted on 6 Sites']
                                },
                                domain: {
                                    text: 'Domain Name',
                                    quantity: ['1 Google Ads Campaign', '1 Facebook/Instagram Paid Ad Campaign']
                                } 
                            }
                        },
                        {
                            packageName: 'Standard',
                            packageDetails: {
                                onepager: {
                                    text: 'One Pager',
                                    quantity: ['8 Facebook Posts', '8 Instagram Posts', '8 LinkedIn Posts', '8 Twitter Posts']
                                },
                                corp: {
                                    text: 'Corporate Features',
                                    quantity: ['5 Keywords', 'All On-Page Features Included'],
                                    offpage: ['5 Citations', '40 Backlinks']
                                },
                                hosting: {
                                    text: 'Web Hosting',
                                    quantity: ['2 SEO Optimized Blogs', 'Featured Image for Each Blog', 'Each Blog Promoted on 6 Sites']
                                },
                                domain: {
                                    text: 'Domain Name',
                                    quantity: ['1 Google Ads Campaign', '1 Facebook/Instagram Paid Ad Campaign']
                                } 
                            }
                        },
                        {
                            packageName: 'Plus',
                            packageDetails: {
                                onepager: {
                                    text: 'One Pager',
                                    quantity: ['8 Facebook Posts', '8 Instagram Posts', '8 LinkedIn Posts', '8 Twitter Posts']
                                },
                                corp: {
                                    text: 'Corporate Features',
                                    quantity: ['5 Keywords', 'All On-Page Features Included'],
                                    offpage: ['5 Citations', '40 Backlinks']
                                },
                                hosting: {
                                    text: 'Web Hosting',
                                    quantity: ['2 SEO Optimized Blogs', 'Featured Image for Each Blog', 'Each Blog Promoted on 6 Sites']
                                },
                                domain: {
                                    text: 'Domain Name',
                                    quantity: ['1 Google Ads Campaign', '1 Facebook/Instagram Paid Ad Campaign']
                                } 
                            }
                        }
                    ]
            },  
            {serviceName: 'Hire a Developer', servicePermalink: 'hire-developers'}
        ]
    },
    {
        serviceCategoryName: 'Digital Marketing',
        serviceCategoryPermalink: 'digital-marketing',
        name:"digitalmarketing",
        serviceDescription: "Generate more sales, leads and website traffic with our scientifically designed and tailor-made digital marketing services. From startups to multinational businesses, we have a result oriented digital marketing strategy for all businesses.",
        services: [
            {
                serviceName: 'Digital Marketing - Full Service', 
                servicePermalink: 'full-service',
                servicePackages:
                    [ 
                        {
                            packageName: 'Starter',
                            packagePrice: 35000,
                            packageFrequency: 'per month',
                            packageDetails: {
                                smo: {
                                    text: 'Social Media Optimizatoion',
                                    quantity: ['8 Facebook Posts', '8 Instagram Posts', '8 LinkedIn Posts', '8 Twitter Posts']
                                },
                                seo: {
                                    text: 'Search Engine Optimization',
                                    quantity: ['5 Keywords', 'All On-Page Features Included'],
                                    offpage: ['5 Citations', '40 Backlinks']
                                },
                                content: {
                                    text: 'Content Marketing',
                                    quantity: ['2 SEO Optimized Blogs', 'Featured Image for Each Blog', 'Each Blog Promoted on 6 Sites']
                                },
                                paid: {
                                    text: 'Paid Campaigns',
                                    quantity: ['1 Google Ads Campaign', '1 Facebook/Instagram Paid Ad Campaign']
                                } 
                            }
                        },
                        {
                            packageName: 'Standard',
                            packagePrice: 65000,
                            packageFrequency: 'per month',
                            packageDetails: {
                                smo: {
                                    text: 'Social Media Optimizatoion',
                                    quantity: ['20 Facebook Posts', '20 Instagram Posts', '20 LinkedIn Posts', '20 Twitter Posts']
                                },
                                seo: {
                                    text: 'Search Engine Optimization',
                                    quantity: ['15 Keywords', 'All On-Page Features Included'],
                                    offpage: ['5 Citations', '40 Backlinks']
                                },
                                content: {
                                    text: 'Content Marketing',
                                    quantity: ['2 SEO Optimized Blogs', 'Featured Image for Each Blog', 'Each Blog Promoted on 6 Sites']
                                },
                                paid: {
                                    text: 'Paid Campaigns',
                                    quantity: ['1 Google Ads Campaign', '1 Facebook/Instagram Paid Ad Campaign']
                                } 
                            }
                        },
                        {
                            packageName: 'Plus',
                            packagePrice: 85000,
                            packageFrequency: 'per month',
                            packageDetails: {
                                smo: {
                                    text: 'Social Media Optimizatoion',
                                    quantity: ['30 Facebook Posts', '30 Instagram Posts', '30 LinkedIn Posts', '30 Twitter Posts']
                                },
                                seo: {
                                    text: 'Search Engine Optimization',
                                    quantity: ['25 Keywords', 'All On-Page Features Included'],
                                    offpage: ['5 Citations', '40 Backlinks']
                                },
                                content: {
                                    text: 'Content Marketing',
                                    quantity: ['2 SEO Optimized Blogs', 'Featured Image for Each Blog', 'Each Blog Promoted on 6 Sites']
                                },
                                paid: {
                                    text: 'Paid Campaigns',
                                    quantity: ['5 Google Ads Campaign', '5 Facebook/Instagram Paid Ad Campaign']
                                } 
                            }
                        }
                    ]
            },
            {serviceName: 'Search Engine Optimization', servicePermalink: 'search-engine-optimization'},
            {serviceName: 'Social Media Optimization', servicePermalink: 'social-media-marketing'},
            {serviceName: 'Google Ads Management', servicePermalink: 'google-ads-management'},
            {serviceName: 'Facebook & Instagram Ads Management', servicePermalink: 'facebook-instagram-ads-management'},
        ]
    },
    {
        serviceCategoryName: 'Blockchain', 
        serviceCategoryPermalink: 'blockchain',
        name:"blockchain",
        serviceDescription: "Start your next innovative, groundbreaking blockchain-based projects now. From Web 3 development to community based marketing, we offer everything you need to stay ahead of the game in the blockchain ecosystem.",
        services: [
            {serviceName: 'Web3 Development', servicePermalink: 'web3-development'},
            {serviceName: 'Crypto Content', servicePermalink: 'cryptocurrency-content'},
            {serviceName: 'ICO/IDO/IEO White Paper Writing', servicePermalink: 'white-paper'},
            {serviceName: 'ICO Community Management Services', servicePermalink: 'community-management'},
        ]
    },
    {
        serviceCategoryName: 'Content', 
        serviceCategoryPermalink: 'content',
        name:"content",
        serviceDescription: "Get research-based, original, relevant and solution-oriented content to power your web presence. Attract new visitors to your website and web applications with useful content.",
        services: [
            {serviceName: 'Content Writing', servicePermalink: 'content-writing'},
            {serviceName: 'Academic Writing', servicePermalink: 'academic-writing'},
            {serviceName: 'SOP Writing', servicePermalink: 'sop-writing'},
            {serviceName: 'Resume Writing', servicePermalink: 'resume-writing'},
            {serviceName: 'Business Plan', servicePermalink: 'business-plan'},
        ]
    },  
]