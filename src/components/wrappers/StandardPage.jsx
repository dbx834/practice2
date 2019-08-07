// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import UpdateTitle from '@bodhi-project/seo/lib/UpdateTitle'
import GeneralMeta from '@bodhi-project/seo/lib/GeneralMeta'
import TwitterSummaryCard from '@bodhi-project/seo/lib/TwitterSummaryCard'
import OpenGraphSummary from '@bodhi-project/seo/lib/OpenGraphSummary'
import WebpageSchema from '@bodhi-project/seo/lib/WebpageSchema'
import BreadcrumbSchema from '@bodhi-project/seo/lib/BreadcrumbSchema'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Layout from '../layout'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Functions
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** StandardPage */
const StandardPage = props => {
  const { className, seoData, children } = props
  const {
    pageTitle,
    generalMetaData,
    twitterSummaryCardData,
    openGraphSummaryData,
    webpageSchemaData,
    breadcrumbSchemaData,
  } = seoData

  return (
    <Layout {...props} className={className}>
      <UpdateTitle title={pageTitle} />
      <GeneralMeta data={generalMetaData} />
      <TwitterSummaryCard data={twitterSummaryCardData} />
      <OpenGraphSummary data={openGraphSummaryData} />
      <WebpageSchema data={webpageSchemaData} />
      <BreadcrumbSchema data={breadcrumbSchemaData} />
      {children}
    </Layout>
  )
}

StandardPage.propTypes = {}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default StandardPage
