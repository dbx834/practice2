// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

// import Button from 'antd/lib/button'
// import '@bodhi-project/antrd/lib/just-futura/3.19.3/button/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import './style.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    banner: file(relativePath: { eq: "nimas-conversion-services.jpg" }) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** HeroBox */
const HeroBox = props => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="cover">
            <div className="banner">
              <Img
                fluid={data.banner.childImageSharp.fluid}
                title="NIMAS Conversion Service"
                alt="NIMAS Conversion Service"
              />
            </div>
            <div className="abstract">
              <h1>
                <small>nimas&nbsp;</small>
                <span>
                  <span>
                    <span>conversion</span>
                    <span />
                  </span>
                </span>
                <small>service</small>
              </h1>
              <h2 className="mask-h3">
                <span>Simple and&nbsp;</span>
                <strong>comprehensive</strong>
                <br />
                <span>content conversion</span>
              </h2>
              <p>
                <span>
                  We offer a broad range of conversion services (e.g.,
                  conversion from print to digital, or conversion from one
                  digital format to another, etc.). These services are available
                  to curriculum materials publishers and to state and local
                  education agencies.
                </span>
              </p>
            </div>
          </div>
        )
      }}
    />
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default HeroBox
