// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../components/Link'
import StandardPage from '../components/wrappers/StandardPage'

import seoHelper from '../methods/seoHelper'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Page not found',
  nakedPageSlug: '404',
  pageAbstract: 'Sorry, the page you were looking for does not exist!',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    launch: file(relativePath: { eq: "launch.jpg" }) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <StandardPage className="" seoData={seoData} {...props}>
    <h1>Page not found!</h1>
    <h2>Something 1</h2>
    <h2>Something 2</h2>
    <p>
      <Link to="/">Homepage</Link>
    </p>
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
