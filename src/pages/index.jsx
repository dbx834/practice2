// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import StandardPage from '../components/wrappers/StandardPage'
import seoHelper from '../methods/seoHelper'

import Cover from '../components/home-page/cover'
import Opener from '../components/home-page/opener'
import Clients from '../components/home-page/clients'
import Services from '../components/home-page/services'
import Specialisation from '../components/home-page/specialisation'
import TechnologyForGood from '../components/home-page/technology-for-good'
import Pricing from '../components/home-page/pricing'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
const pageData = {
  pageTitle: 'Content Conversion Services for Publishers',
  nakedPageSlug: '',
  pageAbstract:
    'We offer extensive accessibility services to publishers and educators that enable accessible and equitable education.',
}

const seoData = seoHelper(pageData)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Page */
const Page = props => (
  <StandardPage className="page" seoData={seoData} {...props}>
    <Cover />
    <Opener />
    <Services />
    <Specialisation />
    <TechnologyForGood />
    <Clients />
    <Pricing />
  </StandardPage>
)

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Page
