// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
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
    symbol7: file(relativePath: { eq: "symbols/symbol7.png" }) {
      ...max300
    }
    symbol8: file(relativePath: { eq: "symbols/symbol8.png" }) {
      ...max300
    }
    symbol9: file(relativePath: { eq: "symbols/symbol9.png" }) {
      ...max300
    }
    symbol10: file(relativePath: { eq: "symbols/symbol10.png" }) {
      ...max300
    }
    symbol11: file(relativePath: { eq: "symbols/symbol11.png" }) {
      ...max300
    }
    symbol12: file(relativePath: { eq: "symbols/symbol12.png" }) {
      ...max300
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** SpokenMathSpecialisation */
const SpokenMathSpecialisation = ({ ...props }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="specialization">
            <Box className="default-container">
              <div className="small-container text">
                <div className="text">
                  <h2>
                    <span>Also, we have sort-of specialized in MathML</span>
                  </h2>
                  <h3 className="mask-h1">
                    <small>ready for</small>
                    <span>
                      <span>mathml 3.0</span>
                      <span />
                    </span>
                  </h3>
                  <p>
                    <span>
                      We offer quality MathML conversion as a part of our NIMAS
                      conversion service. Our Spoken Maths processing is based
                      on an automated parser that we have developed over a
                      period of time, and fine-tuned with experts response and
                      quality validation.
                    </span>
                  </p>
                </div>
                <div className="symbols">
                  <Img
                    fluid={data.symbol7.childImageSharp.fluid}
                    className="symbol1"
                  />
                  <Img
                    fluid={data.symbol8.childImageSharp.fluid}
                    className="symbol2"
                  />
                  <Img
                    fluid={data.symbol9.childImageSharp.fluid}
                    className="symbol3"
                  />
                  <Img
                    fluid={data.symbol10.childImageSharp.fluid}
                    className="symbol4"
                  />
                  <Img
                    fluid={data.symbol11.childImageSharp.fluid}
                    className="symbol5"
                  />
                  <Img
                    fluid={data.symbol12.childImageSharp.fluid}
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

SpokenMathSpecialisation.propTypes = {
  to: PropTypes.string,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default SpokenMathSpecialisation
