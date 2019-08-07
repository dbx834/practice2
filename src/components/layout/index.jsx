// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import MediaQuery from 'react-responsive'

// import { Box } from 'grommet'

import InitializeMeta from '@bodhi-project/seo/lib/InitializeMeta'
import UpdateTitle from '@bodhi-project/seo/lib/UpdateTitle'
import WebsiteSchema from '@bodhi-project/seo/lib/WebsiteSchema'
import OrganisationSchema from '@bodhi-project/seo/lib/OrganisationSchema'

import '@bodhi-project/antrd/lib/just-futura/3.19.3/style/index.css'
import '@bodhi-project/antrd/lib/just-futura/3.19.3/style/v2-compatible-reset.css'

import '@bodhi-project/components/lib/containers/default-container.less'
import '@bodhi-project/components/lib/containers/small-default-container.less'
import '@bodhi-project/components/lib/containers/small-container.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import './style.less'
import '../../styles/index.less'
import '../../styles/type.less'
import indexImage from '../../images/banners/launch.jpg'
import data from '../../data/website.json'

import Header from './header'
import Footer from './footer'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
export const defaultImage = graphql`
  fragment max90 on File {
    childImageSharp {
      fluid(maxWidth: 90, quality: 80) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max300 on File {
    childImageSharp {
      fluid(
        maxWidth: 300
        quality: 80
        srcSetBreakpoints: [100, 150, 200, 250, 300]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment max900 on File {
    childImageSharp {
      fluid(maxWidth: 900, quality: 80, srcSetBreakpoints: [300, 600, 900]) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------- Global SEO
// ----------------------------------------------------------------------------
const websiteSchemaData = {
  url: data.websiteUrl,
  name: data.websiteName,
  description: data.websiteDescription,
  author: data.org.name,
  publisher: data.org.name,
  image: indexImage,
}

const organisationSchemaData = {
  name: data.org.name,
  legalName: data.org.legalName,
  url: data.org.url,
  logo: `${data.org.url}${data.org.logo}`,
  foundingDate: new Date(data.org.foundingDate).toISOString(),
  founders: data.org.founders,
  streetAddress: data.orgLocation.streetAddress,
  addressLocality: data.orgLocation.addressLocality,
  addressRegion: data.orgLocation.addressRegion,
  postalCode: data.orgLocation.postalCode,
  addressCountry: data.orgLocation.addressCountry,
  telephone: data.orgContact.telephone,
  email: data.orgContact.email,
  sameAs: data.orgSocialMediaProfiles,
  image: indexImage,
}

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Layout */
class Layout extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    this.state = {
      client: false,
    }
  }

  /** after mount */
  componentDidMount() {
    this.setState({ client: true })
  }

  /** on mount */
  componentDidUpdate() {
    if (typeof window !== 'undefined') {
      if (this.state.client === true) {
        const element = document.getElementById('layout')
        element.scrollTop = 0
      }
    }
  }

  /** standard renderer */
  render() {
    const { children, className = '' } = this.props
    const { client } = this.state
    const classNameX = className
    const props = this.props

    return (
      <Fragment>
        <InitializeMeta data={{ titleTemplate: `%s | ${data.websiteName}` }} />
        <UpdateTitle title={data.websiteAbstract} />
        <WebsiteSchema data={websiteSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />
        <div className={classNameX} id="layout">
          {client === true && (
            <Fragment>
              <br style={{ display: 'none' }} />
              <MediaQuery minWidth={992}>
                {matches => (
                  <Fragment>
                    <Header isDesktop={matches} type="" {...props} />
                    <main role="main">{children}</main>
                    <Footer isDesktop={matches} />
                  </Fragment>
                )}
              </MediaQuery>
              <br style={{ display: 'none' }} />
            </Fragment>
          )}
          {client === false && (
            <Fragment>
              <Header isDesktop type="" {...props} />
              <main role="main">{children}</main>
              <Footer isDesktop />
            </Fragment>
          )}
        </div>
      </Fragment>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// ----------------------------------------------------------------------- Export
export default Layout
