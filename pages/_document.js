import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Agam Dimaestra - Freelance Back-end Engineer',
    description: 'Hi, I\'m Agam. I\'m a Freelance Back-end Engineer. I enjoy working with Express.js, but I\'m always open to new possibilities of solving problems. In this blog/portfolio site, you can expect to find various writings and projects I made. Feel free to contact me for business inquiries at: agamdimaestra@gmail.com.',
    image: './images/favicon.ico'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}