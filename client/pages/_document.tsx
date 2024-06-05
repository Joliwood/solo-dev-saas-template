import React from 'react';
import {
  Html, Head, Main, NextScript,
} from 'next/document';

const Document = (): JSX.Element => {
  return (
    <Html lang="fr">
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="icon" type="image/png" sizes="512" href="/logo512.png" />
        <link
          rel="alternate"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <meta
          name="keywords"
          content="saas, portfolio, application, blabla"
        />
        <meta
          name="description"
          content="This app is at this moment a template but can be a nice app"
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;