import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preload" href="./resources/fonts/MazzardH-Bold.woff2" as="font" type="font/wof2" crossOrigin=""/>
        <link rel="preload" href="./resources/fonts/NeueMachina-Bold.woff2" as="font" type="font/wof2" crossOrigin=""/>
        <link rel="preload" href="./resources/fonts/MazzardH-Regular.woff2" as="font" type="font/wof2" crossOrigin=""/>
        <link rel="preload" href="./resources/fonts/NeueMachina-Regular.woff2" as="font" type="font/wof2" crossOrigin=""/>
        <link rel="preload" href="./resources/fonts/MazzardH-Medium.woff2" as="font" type="font/wof2" crossOrigin=""/>
        <link rel="preload" href="./resources/fonts/NeueMachina-Medium.woff2" as="font" type="font/wof2" crossOrigin=""/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
