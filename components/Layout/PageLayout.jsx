import React from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/utils/siteMetadata'

function PageLayout({ content, children }) {
  const { title, date } = content
  return (
    <article className='max-w-7xl mx-auto mt-10 '>
      <div>
        <header>
          <div className="space-y-1 border-b border-gray-200 lg:pb-10 pb-7 lg:text-center text-left lg:px-0 px-7">

            {/* DATE */}
            <dl>
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 ">
                  <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                </dd>
              </div>
            </dl>

            {/* TITLE */}
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-700  sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">{title}</h1>
          </div>
        </header>


        <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0">

          {/* DESCRIPTION & CONTENT */}
          <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
            <div className="prose prose-p:-mb-6  max-w-none pb-8 pt-10 px-7 prose-headings:text-gray-700">{children}</div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PageLayout