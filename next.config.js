const withNextra = require('nextra')({
  target: 'serverless',
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_stork: false,
  unstable_staticImage: true
})

module.exports = withNextra({
  i18n: {
    locales: ['zh-CN'],
    defaultLocale: 'zh-CN'
  },
  redirects: () => {
    return [
      {
        source: '/note',
        destination: '/note/programme',
        statusCode: 301
      },
      {
        source: '/unity',
        destination: '/note/unity/unity',
        statusCode: 301
      },
      {
        source: '/unity/unity',
        destination: '/note/unity/unity',
        statusCode: 301
      },
      {
        source: '/blog',
        destination: '/blog/2019/command',
        statusCode: 302
      },
      {
        source: '/examples',
        destination: '/examples/basic',
        statusCode: 302
      }
    ]
  }
})
