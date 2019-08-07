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

// import container from '@bodhi-project/components/lib/methods/container'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import './style.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    symbol1: file(relativePath: { eq: "symbols/symbol1.png" }) {
      ...max300
    }
    symbol2: file(relativePath: { eq: "symbols/symbol2.png" }) {
      ...max300
    }
    symbol3: file(relativePath: { eq: "symbols/symbol3.png" }) {
      ...max300
    }
    symbol4: file(relativePath: { eq: "symbols/symbol4.png" }) {
      ...max300
    }
    symbol5: file(relativePath: { eq: "symbols/symbol5.png" }) {
      ...max300
    }
    symbol6: file(relativePath: { eq: "symbols/symbol6.png" }) {
      ...max300
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Opener */
const Opener = ({ ...props }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="opener">
            <Box className="default-container">
              <div className="small-container text">
                <div className="text">
                  <h2 className="mask-h1">
                    <small>services that</small>
                    <span>
                      <span>publishers trust</span>
                      <span />
                    </span>
                  </h2>
                  <p style={{ marginBottom: 0, marginTop: 0 }}>
                    <span>
                      9 out of 10 clients come back to us with more work for a
                      reason.
                    </span>
                    <br className="desktop-only" />
                    <span className="tablet-only">&nbsp;</span>
                    <span>
                      Expertise, care to detail and professionalism matter
                      deeply to us and our clients recognise it in us.
                    </span>
                  </p>
                </div>
                <div className="symbols">
                  <Img
                    fluid={data.symbol1.childImageSharp.fluid}
                    className="symbol1"
                  />
                  <Img
                    fluid={data.symbol2.childImageSharp.fluid}
                    className="symbol2"
                  />
                  <Img
                    fluid={data.symbol3.childImageSharp.fluid}
                    className="symbol3"
                  />
                  <Img
                    fluid={data.symbol4.childImageSharp.fluid}
                    className="symbol4"
                  />
                  <Img
                    fluid={data.symbol5.childImageSharp.fluid}
                    className="symbol5"
                  />
                  <Img
                    fluid={data.symbol6.childImageSharp.fluid}
                    className="symbol6"
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
export default Opener
