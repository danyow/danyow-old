import { draw } from './drawer'

const PATHS = {
  'zh-CN': {
    defaultCacheProvider:
      'M26.6 32c2.8 0 4.5-1.8 4.5-4.7 0-3-1.7-4.8-4.4-4.8h-3.2V32h3zm-1.7-1.2v-7h1.7c2 0 3.1 1.2 3.1 3.5 0 2.2-1 3.5-3.2 3.5h-1.6zM35.8 32c1.5 0 2.6-.7 3-1.9l-1.4-.2c-.2.7-.8 1-1.6 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3.1-3.6-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .7-1.8 1.9-1.8 1 0 1.7.8 1.7 1.8h-3.6zm9.8-2.9h-1.5v-.6c0-.7.3-1 1-1l.6.1.3-1.1-1.2-.2c-1 0-2 .7-2 2v.8h-1.2V26h1.1v6h1.4v-6h1.5v-1zm3.2 7.3c1.2 0 1.9-.6 2.1-1.2h.1v1h1.3v-4.7c0-2-1.6-2.5-2.7-2.5-1.3 0-2.5.5-3 1.8l1.4.3c.2-.5.7-1 1.6-1 .9 0 1.4.5 1.4 1.3 0 .5-.6.5-1.8.7-1.4.1-2.8.5-2.8 2.1 0 1.4 1.1 2.2 2.4 2.2zm.3-1.2c-.7 0-1.3-.3-1.3-1s.7-1 1.5-1c.4-.2 1.5-.3 1.7-.5v1c0 .8-.7 1.5-1.9 1.5zm9.5-2c0 1.3-.9 1.8-1.7 1.8-.8 0-1.4-.6-1.4-1.5v-4.4h-1.4v4.5c0 1.8 1 2.7 2.3 2.7 1.1 0 1.8-.6 2.2-1.3V32H58v-7h-1.4v4zm4.6-6.5h-1.4V32h1.4v-9.5zm5 2.4h-1.4v-1.7h-1.4V25h-1v1h1v4.2c0 1.3 1 2 2.1 1.9l.9-.2-.3-1.1h-.4c-.5 0-.9 0-.9-.9V26h1.5v-1zm12.9.7c-.4-2-2-3.2-4-3.2-2.4 0-4.2 1.8-4.2 4.9 0 3 1.8 4.8 4.3 4.8 2 0 3.6-1.3 3.9-3.1h-1.5c-.2 1.2-1.2 1.8-2.4 1.8-1.6 0-2.9-1.2-2.9-3.5s1.2-3.6 2.9-3.6c1.2 0 2.2.7 2.4 2h1.5zm3.6 6.6c1.1 0 1.8-.6 2-1.2h.1v1h1.4v-4.7c0-2-1.7-2.5-2.8-2.5-1.3 0-2.5.5-3 1.8l1.4.3c.2-.5.7-1 1.6-1 1 0 1.4.5 1.4 1.3 0 .5-.5.5-1.8.7-1.4.1-2.7.5-2.7 2.1 0 1.4 1 2.2 2.4 2.2zM83 31c-.8 0-1.4-.3-1.4-1s.7-1 1.5-1c.4-.2 1.5-.3 1.7-.5v1c0 .8-.7 1.5-1.8 1.5zm8 1.1c1.6 0 2.7-1 2.8-2.3h-1.3c-.2.7-.8 1.2-1.6 1.2-1.1 0-1.9-1-1.9-2.5 0-1.6.8-2.5 2-2.5.8 0 1.3.5 1.5 1.2h1.3c-.1-1.4-1.3-2.4-2.9-2.4-2 0-3.3 1.5-3.3 3.7 0 2.1 1.3 3.6 3.3 3.6zm5.6-4.3c0-1.1.7-1.8 1.7-1.8s1.5.6 1.5 1.7V32h1.4v-4.5c0-1.8-1-2.7-2.4-2.7-1.1 0-1.8.5-2.1 1.3v-3.6h-1.5V32h1.4v-4.2zm9.5 4.3c1.5 0 2.6-.7 3-1.9l-1.4-.2c-.2.7-.8 1-1.6 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3.1-3.6-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .7-1.8 1.9-1.8 1 0 1.7.8 1.7 1.8h-3.6zm10 4.2h1.4v-3.3h2c2.1 0 3.2-1.3 3.2-3 0-1.8-1-3.2-3.3-3.2h-3.3V32zm1.4-4.5v-3.7h1.8c1.4 0 2 .7 2 1.8 0 1-.6 1.9-2 1.9h-1.8zm6.7 4.5h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7zm7.6.1c2 0 3.4-1.4 3.4-3.6s-1.4-3.7-3.4-3.7-3.3 1.5-3.3 3.7 1.3 3.6 3.3 3.6zm0-1.1c-1.3 0-1.9-1.2-1.9-2.5 0-1.4.6-2.5 2-2.5 1.3 0 1.9 1.1 1.9 2.5 0 1.3-.6 2.5-2 2.5zm10.6-6H139l-1.8 5.4h-.1l-1.8-5.5h-1.5l2.6 7.1h1.5l2.5-7zm1.3 7h1.4v-7h-1.4v7zm.7-8.2c.4 0 .8-.4.8-.8 0-.5-.4-.8-.8-.8-.5 0-.9.3-.9.8 0 .4.4.8.9.8zm5.1 8.3c1.3 0 1.8-.8 2-1.2h.2V32h1.3v-9.5h-1.4v3.6c-.3-.5-.8-1.3-2-1.3-1.8 0-3 1.4-3 3.7 0 2.3 1.2 3.6 2.9 3.6zm.3-1.1c-1.2 0-1.9-1.1-1.9-2.5 0-1.5.7-2.5 2-2.5 1.1 0 1.8 1 1.8 2.5 0 1.4-.7 2.5-1.9 2.5zm8.2 1c1.5 0 2.6-.7 3-1.9l-1.4-.2c-.2.7-.8 1-1.6 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3.1-3.6-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .8-1.8 1.9-1.8 1 0 1.8.8 1.8 1.8H154zm6.5 4.2h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7z',
    firstCacheProvider:
      'M60.2 57.6c-.3-2-1.9-3.2-3.9-3.2-2.4 0-4.3 1.8-4.3 4.9 0 3 1.8 4.8 4.3 4.8 2 0 3.6-1.3 4-3.1h-1.5c-.3 1.2-1.3 1.8-2.5 1.8-1.6 0-2.8-1.2-2.8-3.5s1.2-3.6 2.8-3.6c1.2 0 2.2.7 2.5 2h1.4zm3.6 6.6c1.2 0 1.8-.6 2.1-1.2v1h1.4v-4.7c0-2-1.6-2.5-2.8-2.5-1.2 0-2.4.5-2.9 1.8l1.3.3c.2-.5.7-1 1.7-1 .9 0 1.3.5 1.3 1.3 0 .5-.5.5-1.8.7-1.3.1-2.7.5-2.7 2.1 0 1.4 1 2.2 2.4 2.2zm.3-1.2c-.8 0-1.3-.3-1.3-1s.6-1 1.4-1c.5-.2 1.5-.3 1.7-.5v1c0 .8-.6 1.5-1.8 1.5zm8 1.1c1.6 0 2.7-1 2.9-2.3h-1.4c-.1.7-.7 1.2-1.5 1.2-1.2 0-2-1-2-2.5 0-1.6.8-2.5 2-2.5.8 0 1.4.5 1.5 1.2H75c-.2-1.4-1.3-2.4-3-2.4-2 0-3.2 1.5-3.2 3.7 0 2.1 1.2 3.6 3.3 3.6zm5.7-4.3c0-1.1.7-1.8 1.7-1.8s1.5.6 1.5 1.7V64h1.4v-4.5c0-1.8-1-2.7-2.5-2.7-1 0-1.7.5-2 1.3h-.2v-3.6h-1.3V64h1.4v-4.2zm9.4 4.3c1.5 0 2.6-.7 3-1.9l-1.4-.2c-.2.7-.8 1-1.6 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3.1-3.6-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .8-1.8 2-1.8 1 0 1.7.8 1.7 1.8h-3.7zm10 4.2h1.4v-3.3h2c2.2 0 3.2-1.3 3.2-3 0-1.8-1-3.2-3.2-3.2h-3.4V64zm1.4-4.5v-3.7h1.8c1.4 0 2 .7 2 1.8 0 1-.6 1.9-2 1.9h-1.8zm6.7 4.5h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7zm7.7.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.3 1.5-3.3 3.7S109 64 111 64zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm10.6-6H120l-1.8 5.4-1.9-5.5H115l2.5 7.1h1.5l2.6-7zm1.2 7h1.4v-7h-1.4v7zm.7-8.2c.5 0 .9-.4.9-.8 0-.5-.4-.8-.9-.8s-.9.3-.9.8c0 .4.4.8 1 .8zm5.1 8.3c1.3 0 1.8-.8 2-1.2h.2V64h1.4v-9.5h-1.4v3.6h-.1c-.3-.5-.7-1.3-2-1.3-1.8 0-3 1.4-3 3.7 0 2.3 1.2 3.6 3 3.6zm.3-1.1c-1.2 0-1.8-1.1-1.8-2.5 0-1.5.6-2.5 1.8-2.5 1.3 0 1.9 1 1.9 2.5 0 1.4-.7 2.5-1.9 2.5zm8.2 1.1c1.6 0 2.7-.7 3-1.9l-1.3-.2c-.3.7-.9 1-1.7 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3-3.6-2 0-3.4 1.5-3.4 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .8-1.8 2-1.8 1 0 1.7.8 1.7 1.8h-3.7zm6.5 4.2h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7z',
    secondCacheProvider:
      'M92.2 89.6c-.3-2-1.9-3.2-3.9-3.2-2.4 0-4.3 1.8-4.3 4.9 0 3 1.8 4.8 4.3 4.8 2 0 3.6-1.3 4-3.1h-1.5c-.3 1.2-1.3 1.8-2.5 1.8-1.6 0-2.8-1.2-2.8-3.5s1.2-3.6 2.8-3.6c1.2 0 2.2.7 2.5 2h1.4zm3.6 6.6c1.2 0 1.8-.6 2.1-1.2v1h1.4v-4.7c0-2-1.6-2.5-2.8-2.5-1.2 0-2.4.5-2.9 1.8l1.3.3c.2-.5.7-1 1.7-1 .9 0 1.3.5 1.3 1.3 0 .5-.5.5-1.8.7-1.3.1-2.7.5-2.7 2.1 0 1.4 1 2.2 2.4 2.2zm.3-1.2c-.8 0-1.3-.3-1.3-1s.6-1 1.4-1c.5-.2 1.5-.3 1.7-.5v1c0 .8-.6 1.5-1.8 1.5zm8 1.1c1.6 0 2.7-1 2.9-2.3h-1.4c-.1.7-.7 1.2-1.5 1.2-1.2 0-2-1-2-2.5 0-1.6.8-2.5 2-2.5.8 0 1.4.5 1.5 1.2h1.4c-.2-1.4-1.3-2.4-3-2.4-2 0-3.2 1.5-3.2 3.7 0 2.1 1.2 3.6 3.3 3.6zm5.7-4.3c0-1.1.7-1.8 1.7-1.8s1.5.6 1.5 1.7V96h1.4v-4.5c0-1.8-1-2.7-2.5-2.7-1 0-1.7.5-2 1.3h-.2v-3.6h-1.3V96h1.4v-4.2zm9.4 4.3c1.5 0 2.6-.7 3-1.9l-1.4-.2c-.2.7-.8 1-1.6 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3.1-3.6-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .8-1.8 2-1.8 1 0 1.7.8 1.7 1.8h-3.7zm10 4.2h1.4v-3.3h2c2.2 0 3.2-1.3 3.2-3 0-1.8-1-3.2-3.2-3.2h-3.4V96zm1.4-4.5v-3.7h1.8c1.4 0 2 .7 2 1.8 0 1-.6 1.9-2 1.9h-1.8zm6.7 4.5h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7zm7.7.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.3 1.5-3.3 3.7S141 96 143 96zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm10.6-6H152l-1.8 5.4-1.9-5.5H147l2.5 7.1h1.5l2.6-7zm1.2 7h1.4v-7h-1.4v7zm.7-8.2c.5 0 .9-.4.9-.8 0-.5-.4-.8-.9-.8s-.9.3-.9.8c0 .4.4.8 1 .8zm5.1 8.3c1.3 0 1.8-.8 2-1.2h.2V96h1.4v-9.5h-1.4v3.6h-.1c-.3-.5-.7-1.3-2-1.3-1.8 0-3 1.4-3 3.7 0 2.3 1.2 3.6 3 3.6zm.3-1.1c-1.2 0-1.8-1.1-1.8-2.5 0-1.5.6-2.5 1.8-2.5 1.3 0 1.9 1 1.9 2.5 0 1.4-.7 2.5-1.9 2.5zm8.2 1.1c1.6 0 2.7-.7 3-1.9l-1.3-.2c-.3.7-.9 1-1.7 1-1.2 0-2-.8-2-2.1h5v-.5c0-2.6-1.5-3.6-3-3.6-2 0-3.4 1.5-3.4 3.7s1.3 3.6 3.4 3.6zm-2-4.3c0-1 .8-1.8 2-1.8 1 0 1.7.8 1.7 1.8h-3.7zm6.5 4.2h1.4v-4.3c0-1 .7-1.6 1.7-1.6h.7v-1.3h-.6c-.8 0-1.5.5-1.8 1.2v-1h-1.4v7z',
    leftSWRHooks:
      'M153.2 172h1.4c0-1.5-1.4-2.6-3.3-2.6s-3.3 1.1-3.3 2.7c0 1.3 1 2.1 2.4 2.5l1.1.3c1 .3 1.8.6 1.8 1.5s-.8 1.5-2 1.5-2-.5-2.2-1.5h-1.4c.1 1.7 1.4 2.8 3.6 2.8s3.5-1.2 3.5-2.8c0-1.7-1.6-2.4-2.8-2.7l-.9-.2c-.7-.2-1.7-.5-1.7-1.5 0-.8.7-1.4 1.9-1.4 1 0 1.8.6 2 1.4zm5 7h1.5l2-7 2 7h1.5l2.6-9.5h-1.5l-1.8 7.4h-.1l-2-7.4H161l-2 7.4-1.9-7.4h-1.5l2.6 9.5zm10.8 0h1.5v-3.6h1.9l2 3.6h1.6l-2-3.8c1.1-.5 1.7-1.4 1.7-2.7 0-1.7-1.1-3-3.3-3H169v9.5zm1.5-4.8v-3.4h1.8c1.4 0 2 .6 2 1.7 0 1-.6 1.7-2 1.7h-1.8zm10.2 4.8h1.5v-4.1h4.7v4.1h1.4v-9.5h-1.4v4.2h-4.7v-4.2h-1.5v9.5zm12.5.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.3 3.6zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm7.8 1.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.4 1.5-3.4 3.7s1.4 3.6 3.4 3.6zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm4.7 1h1.4v-2.5l.7-.7 2.4 3.2h1.7l-3-4 2.8-3h-1.6l-2.9 3v-5.5h-1.5v9.5zm12.5-5.4c-.3-1-1.1-1.8-2.7-1.8s-2.7.9-2.7 2.1c0 1 .6 1.7 2 2l1.1.3c.7.1 1 .4 1 .9s-.5 1-1.5 1c-.8 0-1.3-.4-1.5-1.1l-1.3.2c.2 1.2 1.3 2 2.9 2 1.7 0 2.9-1 2.9-2.3 0-1-.7-1.6-2-1.9l-1.1-.2c-.8-.2-1.1-.5-1.1-1s.6-.9 1.4-.9c.8 0 1.2.5 1.4 1l1.2-.3z',
    rightSWRHooks:
      'M404.2 172h1.4c0-1.5-1.4-2.6-3.3-2.6s-3.3 1.1-3.3 2.7c0 1.3 1 2.1 2.4 2.5l1.1.3c1 .3 1.8.6 1.8 1.5s-.8 1.5-2 1.5-2-.5-2.2-1.5h-1.4c.1 1.7 1.4 2.8 3.6 2.8s3.5-1.2 3.5-2.8c0-1.7-1.6-2.4-2.8-2.7l-.9-.2c-.7-.2-1.7-.5-1.7-1.5 0-.8.7-1.4 1.9-1.4 1 0 1.8.6 2 1.4zm5 7h1.5l2-7 2 7h1.5l2.6-9.5h-1.5l-1.8 7.4h-.1l-2-7.4H412l-2 7.4-1.9-7.4h-1.5l2.6 9.5zm10.8 0h1.5v-3.6h1.9l2 3.6h1.6l-2-3.8c1.1-.5 1.7-1.4 1.7-2.7 0-1.7-1.1-3-3.3-3H420v9.5zm1.5-4.8v-3.4h1.8c1.4 0 2 .6 2 1.7 0 1-.6 1.7-2 1.7h-1.8zm10.2 4.8h1.5v-4.1h4.7v4.1h1.4v-9.5h-1.4v4.2h-4.7v-4.2h-1.5v9.5zm12.5.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.3 1.5-3.3 3.7s1.3 3.6 3.3 3.6zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm7.8 1.1c2 0 3.3-1.4 3.3-3.6s-1.3-3.7-3.3-3.7c-2 0-3.4 1.5-3.4 3.7s1.4 3.6 3.4 3.6zm0-1.1c-1.3 0-2-1.2-2-2.5 0-1.4.7-2.5 2-2.5s1.9 1.1 1.9 2.5c0 1.3-.6 2.5-2 2.5zm4.7 1h1.4v-2.5l.7-.7 2.4 3.2h1.7l-3-4 2.8-3h-1.6l-2.9 3v-5.5h-1.5v9.5zm12.5-5.4c-.3-1-1.1-1.8-2.7-1.8s-2.7.9-2.7 2.1c0 1 .6 1.7 2 2l1.1.3c.7.1 1 .4 1 .9s-.5 1-1.5 1c-.8 0-1.3-.4-1.5-1.1l-1.3.2c.2 1.2 1.3 2 2.9 2 1.7 0 2.9-1 2.9-2.3 0-1-.7-1.6-2-1.9l-1.1-.2c-.8-.2-1.1-.5-1.1-1s.6-.9 1.4-.9c.8 0 1.2.5 1.4 1l1.2-.3z'
  }
}

export const Cache = () => (
  <svg viewBox='0 0 588 311' fill='none' className='invert-on-dark'>
    <path stroke='#D2D2D2' d='M22.5 59.5h543v232h-543z' />
    <path fill='#fff' d='M40 43h116v33H40z' />
    <path fill='#141414' d={draw(PATHS, 'firstCacheProvider')} />
    <path stroke='#D2D2D2' d='M54.5 91.5h256v168h-256z' />
    <circle cx={183} cy={174} r={44.5} fill='#EAEAEA' stroke='#D3D3D3' />
    <path fill='#000' d={draw(PATHS, 'leftSWRHooks')} />
    <circle cx={434} cy={174} r={44.5} fill='#EAEAEA' stroke='#D3D3D3' />
    <path fill='#000' d={draw(PATHS, 'rightSWRHooks')} />
    <path fill='#fff' d='M72 75h116v33H72z' />
    <path fill='#141414' d={draw(PATHS, 'secondCacheProvider')} />
    <path fill='#9A9A9A' d={draw(PATHS, 'defaultCacheProvider')} />
  </svg>
)
