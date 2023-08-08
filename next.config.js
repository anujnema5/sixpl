const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/content-writing',
          destination: '/services/content/content-writing',
          statusCode: 301,
        },
        {
            source:'/blockchain-cryptocurrency-content-writer',
            destination: '/services/blockchain/cryptocurrency-content',
            statusCode: 301,
        },
        {
            source:'/ico-white-paper',
            destination: '/services/blockchain/white-paper',
            statusCode: 301,
        },
        {
            source:'/ico-community-management-services',
            destination: '/services/blockchain/community-management',
            statusCode: 301,
        },
        {
            source:'/business-plan-writer',
            destination: '/services/content/business-plan',
            statusCode: 301,
        },
        {
            source:'/digital-marketing',
            destination: '/services/digital-marketing/full-service',
            statusCode: 301,
        },
        {
            source:'/search-engine-optimization',
            destination: '/services/digital-marketing/search-engine-optimization',
            statusCode: 301,
        },
        {
            source:'/social-media-optimization',
            destination: '/services/digital-marketing/social-media-marketing',
            statusCode: 301,
        },
        {
            source:'/pay-per-click-advertising',
            destination: '/services/digital-marketing/google-ads-management',
            statusCode: 301,
        },
        {
            source:'/me',
            destination: '/about-us/saket-kumar-singh',
            statusCode: 301,
        },
        {
            source:'/content-writing-samples',
            destination: '/services/content/content-writing',
            statusCode: 301,
        },
        {
            source:'/best-react-developers',
            destination: '/services/it/best-react-developers',
            statusCode: 301,
        },

      ]
    },
  }

  module.exports= withContentlayer(nextConfig);