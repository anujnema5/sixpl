import siteMetadata from "@/utils/siteMetadata"
import { services } from '@/lib/data/services-details'

export default async function sitemap() {
    
    // ATTRACTION POINT
    // FETCHING URLs FOR /SERVICES PAGE
    const siteUrl = siteMetadata.siteUrl
    const servicePageSlug = []

    for (const serviceKey in services) {
        const service = services[serviceKey]
        const slug = service.slug
        servicePageSlug.push({
            url: siteUrl + "/" + slug,
            lastModified: new Date().toISOString().split('T')[0],
            priority: 0.8
        })
    }

    // MAIN SITE URL
    const site = [{
        url: siteUrl,
        lastModified: new Date().toISOString().split('T')[0],
        priority: 0.8
    }]

    // FETCHING OTHER PAGES
    const routes = ['about-us', 'pricing', 'services', 'contact-us'].map((route) => ({
        url: `${siteUrl}/${`${route}`}`,
        lastModified: new Date().toISOString().split('T')[0],
        priority: 0.8
    }))

    // FETCHING PRICING ROUTES
    const pricingRoutes = ['seo-packages', 'website-packages', 'smo-packages', 'ppc-packages'].map((route) => ({
        url: `${siteUrl}/pricing/${`${route}`}`,
        lastModified: new Date().toISOString().split('T')[0],
        priority: 0.8
    }))

    return [...site, ...routes, ...servicePageSlug, ...pricingRoutes]
}