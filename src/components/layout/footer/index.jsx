// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'
// import classNames from "classnames";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import keygen from '@bodhi-project/components/lib/methods/keygen'

import Heart from 'react-feather/dist/icons/heart'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import './style.less'

import Link from '../../Link'

import footerMenu from '../../../data/footerMenu.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    logoWithText: file(relativePath: { eq: "logos/logo-with-text.jpg" }) {
      ...max900
    }
    linkedinLogo: file(relativePath: { eq: "logos/linkedin.jpg" }) {
      ...max300
    }
    twitterLogo: file(relativePath: { eq: "logos/twitter.jpg" }) {
      ...max300
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Footer */
const Footer = props => {
  const { isDesktop } = props

  return (
    <StaticQuery
      query={query}
      render={data => (
        <footer>
          <div className="top-note">
            <Link to="/" className="logo">
              <Img
                fluid={data.logoWithText.childImageSharp.fluid}
                title="NIMAS Master"
              />
            </Link>
            <div className="nav">
              {footerMenu.map(block => {
                const { title, menu } = block

                return (
                  <div key={keygen()}>
                    <h2>
                      <span>{title}</span>
                    </h2>
                    <ul className="mask-p">
                      {menu.map(({ title: itemTitle, link }) => (
                        <li title="Coming soon">
                          <Link
                            to={link}
                            disabled="disabled"
                            className="disabled ignore"
                            title="Coming soon"
                          >
                            <span>{itemTitle}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
            <div className="social">
              <Link
                to="https://linkedin.com/company/nimasmaster"
                className="linkedin"
              >
                <Img
                  fluid={data.linkedinLogo.childImageSharp.fluid}
                  title="NIMAS Master on LinkedIn"
                />
              </Link>
              <Link to="https://twitter.com/nimasmaster" className="twitter">
                <Img
                  fluid={data.twitterLogo.childImageSharp.fluid}
                  title="NIMAS Master on Twitter"
                />
              </Link>
            </div>
            <div className="copyright">
              <p className="info">
                <span>
                  NIMAS Master is an offering enabled by a collaboration between{' '}
                  <Link to="https://www.dmi.systems/">
                    Digital Media Initiatives
                  </Link>
                  &nbsp;and&nbsp;
                  <Link to="https://www.bodhiproject.org/">Bodhi Project</Link>.
                  Digital Media Initiatives addresses challenges in the domains
                  of publishing and education. Our other offerings:
                </span>
              </p>
              <ul className="mask-p other-services">
                <li>
                  <Link to="https://www.epubnow.com/">ePubNow!</Link>
                </li>
                <li>
                  <Link to="https://www.digitalmediareserve.com/">
                    Digital Media Reserve
                  </Link>
                </li>
                <li>
                  <Link to="https://www.digitalmediareserve.com/">
                    ONIX Master
                  </Link>
                </li>
                <li>
                  <Link to="https://www.pisamaster.com/">PISA Master</Link>
                </li>
                <li>
                  <Link to="https://www.stmweekly.com/">STM Weekly</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="post-note">
            <p className="text">
              <span>we enable accessible and equitable education</span>
            </p>
            <p className="year">
              Copyright © 2000 — 2019&nbsp;
              <Link to="https://www.dmi.systems/">
                Digital Media Initiatives
              </Link>
            </p>
            <p className="message">
              Made with by&nbsp;
              <Heart size={14} />
              &nbsp;
              <Link to="https://www.xn--kla-1oa.org/">Kāla</Link>
            </p>
          </div>
        </footer>
      )}
    />
  )
}

Footer.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
}

// --------------------------------------------------------------------- Export
export default Footer
