// noinspection HtmlRequiredTitleElement

import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { SkipNavLink } from '@reach/skip-nav'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='zh-CN'>
        <Head />
        <body>
        <SkipNavLink />
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
