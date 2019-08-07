// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import data from './data/website.json'
// import './assets/third-party/gtag--UA-109854711-2'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** HTML */
const HTML = props => {
  const { headComponents, body, postBodyComponents } = props

  return (
    <html lang="en" className="lk-loading">
      <head>
        <meta name="fragment" content="!" />
        <meta
          name="google-site-verification"
          content={data.googleSiteVerification}
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{`Content Conversion Services for Publishers | ${data.websiteName}`}</title>
        {headComponents}
      </head>
      <body id="copy">
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
        <link rel="stylesheet" href="/third-party/wmk0bcp.css" />
        <script async src="/third-party/gtag--UA-109854711-2.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (typeof window !== 'undefined') {
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-109854711-2');
            }
            `,
          }}
        />
      </body>
    </html>
  )
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default HTML
