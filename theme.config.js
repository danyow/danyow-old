// noinspection HtmlUnknownTarget,JSUnresolvedLibraryURL,JSUnusedGlobalSymbols

import { useRouter } from 'next/router'

const Logo = ({ height }) => (
  <svg height={height} viewBox='0 0 69 69' fill='none'>
    <path
      d='M29.17,10.15c-1.33,0.9-0.69,2.29-0.95,3.55c-0.13,0.63-0.73,0.98-0.91,1.59c-0.34,1.15-0.09,3.71,0.56,4.73 c0.59,0.94,3.09,0.98,3.03,2.22c-0.04,0.7-0.74,1.36-1.07,1.95c-0.8,1.42-1.7,3.1-2.27,4.62c-0.56,1.47-0.77,2.94-1.15,4.44 c-0.94,3.77-1.67,7.45-1.3,11.37c0.1,1.01,0.74,1.49,1.21,2.31c0.38,0.66,0.56,1.55,0.67,2.31c0.13,0.93,0.05,1.91,0.05,2.84 c0,0.41-0.07,0.97,0.18,1.33c0.57,0.8,2.02,0.34,2.71,1.07c0.8,0.84,0.84,2.41,1.19,3.46c0.22,0.66,0.47,1.34,0.88,1.9 c0.37,0.5,0.92,0.87,1.14,1.47c0.18,0.49,0.11,1.09,0.11,1.6h3.91c0.43,0,1.11,0.1,1.42-0.28c0.4-0.51,0.09-1.45,0.04-2.03 c-0.06-0.59,0.01-1.19-0.14-1.78c-0.33-1.3-1.09-2.44-1.42-3.73c-0.16-0.6-0.38-1.34-0.06-1.92c0.42-0.76,1.42-1.08,1.57-2 c0.24-1.47-1.18-2.86-1.57-4.25c0.69-0.23,1.38-0.48,1.83-1.09c0.34-0.45,0.42-1.05,0.89-1.4c1.01-0.76,2.15-0.65,2.98-1.79 c1.34-1.84,1.71-4.17,1.95-6.38c0.34-3.06,0.4-7.07-1.35-9.77c-0.57-0.87-1.44-1.12-2.12-1.83c-0.66-0.69-0.96-1.48-1.87-1.92 c-0.99-0.48-1.97-0.41-3.02-0.52c1.09-0.57,2.31-0.79,3.36-1.48c1.4-0.91,2-2.46,2.33-4.03c1.02,0.48,4.1,2.05,4.04-0.35 c-0.03-1.28-2.47-1.33-3.17-2.25c-0.61-0.79-0.46-2.15-0.94-3.09c-1.44-2.84-4.49-4.18-7.57-3.95C32.56,7.22,29.27,7.87,29.17,10.15z'
      fill='currentColor'
    />
  </svg>
)

const Vercel = ({ height = 20 }) => (
  <svg height={height} viewBox='0 0 283 64' fill='none'>
    <path
      fill='currentColor'
      d='M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z'
    />
  </svg>
)

const TITLE_WITH_TRANSLATIONS = {
  'zh-CN': 'string all'
}

export default {
  github: 'https://github.com/danyow',
  docsRepositoryBase: 'https://github.com/danyow/danyow',
  titleSuffix: ' – danyow',
  search: true,
  unstable_stork: false,
  floatTOC: true,
  logo: () => {
    const { locale } = useRouter()
    return (
      <>
        <Logo height={18} />
        <span className='mx-2 font-extrabold hidden md:inline select-none'>
          danyow
        </span>
        <span className='text-gray-600 font-normal hidden lg:!inline whitespace-no-wrap'>
          {TITLE_WITH_TRANSLATIONS[locale]}
        </span>
      </>
    )
  },
  head: ({ title, meta }) => {
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#000000'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Language' content='en' />
        <meta
          name='description'
          content={
            meta.description ||
            'SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.'
          }
        />
        <meta
          name='og:description'
          content={
            meta.description ||
            'SWR is a React Hooks library for data fetching. SWR first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.'
          }
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@vercel' />
        <meta
          name='twitter:image'
          content={
            meta.image ||
            'https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg'
          }
        />
        <meta
          name='og:title'
          content={
            title ? title + ' – SWR' : 'SWR: React Hooks for Data Fetching'
          }
        />
        <meta
          name='og:image'
          content={
            meta.image ||
            'https://assets.vercel.com/image/upload/v1572282926/swr/twitter-card.jpg'
          }
        />
        <meta name='apple-mobile-web-app-title' content='SWR' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css'
          media='print'
          onLoad="this.media='all'"
        />
      </>
    )
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      default:
        return '在 GitHub 上编辑本页'
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      default:
        return (
          <a
            href='https://vercel.com/?utm_source=swr_zh-cn'
            target='_blank'
            rel='noopener'
            className='inline-flex items-center no-underline text-current font-semibold'
          >
            <span className='mr-2'>由</span>
            <span className='mr-2'>
              <Vercel />
            </span>
            驱动
          </a>
        )
    }
  },
  i18n: [
    { locale: 'zh-CN', text: '简体中文' }
  ]
}
