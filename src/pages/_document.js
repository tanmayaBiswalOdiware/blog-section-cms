import FooterComp from '@/components/FooterComp'
import Navigation from '@/components/Navigation'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navigation />
        <Main />
        <FooterComp />
        <NextScript />
      </body>
    </Html>
  )
}
