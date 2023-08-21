import { FunnelIcon, Square3Stack3DIcon,  CodeBracketSquareIcon, PencilIcon} from '@heroicons/react/20/solid'

const features = [
  
  {
    name: 'Digital Marketing',
    description:
      'Be visible to people who are looking to buy your offerings and generate more leads at a lower cost within a set timeframe',
    href: '/services',
    icon: FunnelIcon,
  },
  {
    name: 'IT',
    description:
      'Build Powerful, Fast Applications and Websites using React, NextJS, Tailwind CSS, Express, NodeJS, & PSQL/NoSQL tech stack.',
    href: '/services',
    icon: CodeBracketSquareIcon,
  },
  {
    name: 'Blockchain & Crypto',
    description:
      'Start your next web3 project from scratch or get technical/marketing whitepaper, community management or marketing advisory services.',
    href: '/services',
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Content & Strategy',
    description:
      'Tell your unique story in a compelling way! Connect with your audience at different stages of the buying journey and boost your marketing ROI.',
    href: '/services',
    icon: PencilIcon,
  },
]

export default function ServicesSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Work Smarter</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Built for Small and Medium Enterprises
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            80% of our clients are small and medium enteprises. While you work hard to deliver your offerings to your customers, we work harder to get new customrs for your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="lg:h-28 text-gray-400">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
