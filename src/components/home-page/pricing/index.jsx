// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Box from '@bodhi-project/components/lib/box'
import '@bodhi-project/components/lib/box/style.less'

// import Button from 'antd/lib/button'
// import '@bodhi-project/antrd/lib/just-futura/3.19.3/button/style/css'

import ArrowRight from 'react-feather/dist/icons/arrow-right'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import './style.less'
import Link from '../../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    symbol13: file(relativePath: { eq: "symbols/symbol13.png" }) {
      ...max300
    }
    symbol14: file(relativePath: { eq: "symbols/symbol14.png" }) {
      ...max300
    }
    symbol15: file(relativePath: { eq: "symbols/symbol15.png" }) {
      ...max300
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @param  {...[type]} options.props [description]
 * @return {[type]}                  [description]
 */
const Pricing = ({ ...props }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="pricing">
            <Box className="default-container">
              <div className="small-container text">
                <div className="text">
                  <h2>
                    <span>Simple, Pay-for-what-you-use Pricing</span>
                  </h2>
                  <h3>
                    <span>
                      <span>transparent</span>
                      <span />
                    </span>
                    <small>&nbsp;and&nbsp;</small>
                    <span>
                      <span>competitive</span>
                      <span />
                    </span>
                    <small>
                      &nbsp;pricing inclusive of warranty and support
                    </small>
                  </h3>
                  <br />
                  <br />
                  <button className="pricing-button">
                    <Link
                      to="http://nimas.dmiepub.com/?module=contact"
                      className="centered-text ignore"
                    >
                      <span className="text">Get Started</span>
                      <span className="icon">
                        <ArrowRight size={18} />
                      </span>
                    </Link>
                  </button>
                </div>
                <div className="symbols">
                  <Img
                    fluid={data.symbol13.childImageSharp.fluid}
                    className="symbol1"
                  />
                  <Img
                    fluid={data.symbol14.childImageSharp.fluid}
                    className="symbol2"
                  />
                  <Img
                    fluid={data.symbol15.childImageSharp.fluid}
                    className="symbol3"
                  />
                </div>
              </div>
            </Box>
          </div>
        )
      }}
    />
  )
}
// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Pricing
