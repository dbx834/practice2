// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

// import container from '@bodhi-project/components/lib/methods/container'
// import keygen from '@bodhi-project/components/lib/methods/keygen'

// import Menu from 'antd/lib/menu'
// import '@bodhi-project/antrd/lib/just-futura/3.19.3/menu/style/css'

// import Drawer from 'antd/lib/drawer'
// import '@bodhi-project/antrd/lib/just-futura/3.19.3/drawer/style/css'

// import Button from 'antd/lib/button'
// import '@bodhi-project/antrd/lib/just-futura/3.19.3/button/style/css'

import MenuIcon from 'react-feather/dist/icons/menu'
import X from 'react-feather/dist/icons/x'

import { Layer } from 'grommet'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import './style.less'
import Link from '../../Link'

import websiteMenu from '../../../data/menu.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React
const { nav } = websiteMenu

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    squareLogo: file(relativePath: { eq: "logos/logo-square.jpg" }) {
      ...max900
    }
    logoWithText: file(relativePath: { eq: "logos/logo-with-text.jpg" }) {
      ...max900
    }
    buttonBg: file(relativePath: { eq: "button-bg.png" }) {
      ...max300
    }
    buttonBgHover: file(relativePath: { eq: "button-bg-hover.png" }) {
      ...max300
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const Nav = ({ isMobile }) => (
  <nav id="nav" className="mask-p">
    {nav.map(topLevel => {
      const { title, menu, link, mobileOnly, otherProps } = topLevel
      let returnObj = <Fragment key={link} />
      if (mobileOnly === isMobile) {
        if (typeof link === 'undefined') {
          returnObj = (
            <ul title={<span>{title}</span>} key={link}>
              {menu.map(subMenu => {
                const { title: subTitle, link: thisLink } = subMenu
                return (
                  <li key={link}>
                    <Link to={thisLink} {...otherProps}>
                      <span>{subTitle}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )
        } else {
          returnObj = (
            <li key={link}>
              <Link to={link} {...otherProps}>
                <span>{title}</span>
              </Link>
            </li>
          )
        }
      }

      return returnObj
    })}
  </nav>
)

/**
 * [description]
 * @param  {[type]} props [description]
 * @return {[type]}       [description]
 */
const Header = props => {
  const { isDesktop } = props
  const [show, setShow] = React.useState()

  return (
    <StaticQuery
      query={query}
      render={data => (
        <header
          className={`default-container ${
            isDesktop === true ? 'desktop-header' : 'mobile-header'
          }`}
        >
          {isDesktop === true && (
            <Fragment>
              <Link to="/" className="logo">
                <Img
                  fluid={data.squareLogo.childImageSharp.fluid}
                  title="NIMAS Master"
                  alt="We offer extensive accessibility services to publishers and educators that enable accessible and equitable education."
                />
              </Link>
              <Nav isMobile={false} />
              <div className="actions">
                <button type="ghost" className="sunburst" size="large">
                  <div className="buttonBg">
                    <Img fluid={data.buttonBg.childImageSharp.fluid} />
                  </div>
                  <div className="button-bg-hover">
                    <Img fluid={data.buttonBgHover.childImageSharp.fluid} />
                  </div>
                  <Link
                    to="http://nimas.dmiepub.com/?module=signin"
                    className="button-bg-text"
                  >
                    <span>Login</span>
                  </Link>
                </button>
                <button className="get-started">
                  <Link
                    to="http://nimas.dmiepub.com/?module=contact"
                    className="centered-text ignore"
                  >
                    <span>Contact</span>
                  </Link>
                </button>
              </div>
            </Fragment>
          )}
          {isDesktop === false && (
            <Fragment>
              <div className="bordered">
                <Link to="/" className="logo">
                  <Img
                    fluid={data.logoWithText.childImageSharp.fluid}
                    title="NIMAS Master"
                    alt="We offer extensive accessibility services to publishers and educators that enable accessible and equitable education."
                  />
                </Link>
                <div className="actions">
                  <button className="menu-button" onClick={() => setShow(true)}>
                    <MenuIcon color="#fff" />
                  </button>
                  {show && (
                    <Layer
                      onEsc={() => setShow(false)}
                      onClickOutside={() => setShow(false)}
                      full
                      margin="large"
                    >
                      <div className="mobile-menu">
                        <div className="mobile-menu-actions">
                          <button
                            className="menu-button"
                            onClick={() => setShow(false)}
                          >
                            <X color="#fff" />
                          </button>
                        </div>
                        <Nav isMobile={true} />
                      </div>
                    </Layer>
                  )}
                </div>
              </div>
            </Fragment>
          )}
        </header>
      )}
    />
  )
}

// --------------------------------------------------------------------- Export
export default Header
