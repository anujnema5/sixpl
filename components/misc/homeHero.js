import { RocketLaunchIcon, CommandLineIcon, CubeIcon, PencilSquareIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Lead Gen Campaign',
    description:
      'A small real estate dealer got 19 site visits and 4 bookings in a month through FB/Insta lead generation campaign.',
    href: '/portfolio/digital-marketing/lead-generation-campaign-real-estate-hyderabad',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Blazing Web App',
    description:
      'An EdTech startup built a complex yet fast application using ReactJS, NextJS, Tailwind CSS, PostgreSQL in 21 Days.',
    href: '/portfolio/it/web-app-edtech-company-reactjs-nextjs-psql-heroku',
    icon: CommandLineIcon,
  },
  {
    name: 'Whitepaper & ICO Marketing',
    description:
      'A blockchain-based infrastructure platform created a white paper & launched successful ICO through community based marketing efforts.',
    href: '/portfolio/blockchain/technical-white-paper-blockchain-infrastructure-platform',
    icon: CubeIcon,
  },
  {
    name: 'SEO-optimized Content',
    description:
      'A resume builder platform grabbed top ranking on Google through 2000 comprehensive blogs in just 2 months.',
    href: '/portfolio/content/content-writing-marketing-resume-builder',
    icon: PencilSquareIcon,
  },
]

export default function HomeHero() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Check our results</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-800/90 sm:text-4xl">
            Results Speak Louder Than Promises
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Since 2011, We have contributed to the growth of 1600+ organizations from 25 countries across the globe. Check some of our results here: 
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-800/90">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
