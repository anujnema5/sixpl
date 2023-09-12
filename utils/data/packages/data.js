import { nanoid } from "nanoid"
import { ppcPackage, seoPackages, smoPackage, webPackages } from "@/lib/data/allPackages"

const data = {
    smoPackages: {
        id: nanoid(),
        title: "Afforadable SMO Packages",
        slug: "smo-packages",
        package: {
            pricing: smoPackage,
            heading: "SMO Packages",
            subHeading: "Supercharge Your Brand with Our SMO Packages",
            description: "Boost your brand on social media with our SMO Packages. Elevate engagement, drive awareness, and connect with your audience effectively.",
        },

    },

    websitePackages: {
        id: nanoid(),
        title: "Afforabable Website Packages",
        slug: "website-packages",
        package: {
            pricing: webPackages,
            heading: "Website Packages",
            subHeading: "Unlock Your Online Presence with Our Comprehensive Website Package",
            description: "Enhance your online presence with our complete Website Package. Get noticed, engage customers, and succeed online.",
        },
    },

    seoPackages: {
        id: nanoid(),
        title: "Afforable SEO Packages",
        slug: "seo-packages",
        package: {
            pricing: seoPackages,
            heading: "SEO Packages",
            subHeading: "Tailored solutions to empower SEO teams for success.",
            description: "Boost your online visibility with our SEO Packages. Drive organic traffic and stand out in search results with our proven strategies.",
        }
    },

    ppcPackages: {
        id: nanoid(),
        title: "Affordable Digital Marketing PPC Packages",
        slug: "ppc-packages",
        package: {
            pricing: ppcPackage,
            heading: "PPC Packages",
            subHeading: "Empower Your Growth with Our Effective PPC Packages",
            description: "Accelerate Growth with Our Results-Driven PPC Packages. Maximize Reach, Drive Leads.",
        }
    }
}

export default data;