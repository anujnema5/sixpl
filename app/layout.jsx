import TopNav from '../components/nav/TopNav'
import Footer from '../components/nav/footer'
import siteMetadata from '@/utils/siteMetadata'
import './globals.css'
import React from 'react'
import ReduxProvider from '@/components/providers/ReduxProvider'
import SessionWrapper from '@/components/providers/SessionProvider'


export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang={siteMetadata.language}
      suppressHydrationWarning
    >
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" type="image/png" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/apple-icon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/apple-icon-16x16.png" />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" />
      <body className='bg-indigo-50/60 lg:bg-white min-h-screen overflow-x-hidden'>
          <ReduxProvider>
            <div>
              <TopNav />
              <main className="">{children}</main>
              <Footer />
            </div>
          </ReduxProvider>
      </body>
    </html>
  )
}