import siteMetadata from "@/utils/siteMetadata";

export function genPageMetaData({ title, description, image, ...rest }) {
    return {
        title,
        openGraph: {
            title: title,
            description: description,
            url: './',
            siteName: siteMetadata.title,
            images: image ? [image] : [siteMetadata.socialBanner],
            locale: 'en_US',
            type: 'website',
        },
        twitter: {
            title: `${title} | ${siteMetadata.title}`,
            card: 'summary_large_image',
            images: image ? [image] : [siteMetadata.socialBanner],
        },
        ...rest,
    }
}