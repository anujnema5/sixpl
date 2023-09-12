import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth'>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
        
      </Head>
      <body className='bg-indigo-50/60 lg:bg-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}