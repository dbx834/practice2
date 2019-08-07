// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Link as GatsbyLink } from 'gatsby'

import OutLink from '@bodhi-project/components/lib/Outlink'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Link */
const Link = ({ to, children, ...props }) => {
  const isOutLink = to.startsWith('http') || to.startsWith('https')
  const isHashLink = to.startsWith('#') || typeof to === 'undefined'

  return (
    <Fragment>
      {isOutLink === true ? (
        <OutLink to={to} {...props}>
          {children}
        </OutLink>
      ) : (
        <Fragment>
          {isHashLink === true ? (
            <a href="#" {...props}>
              {children}
            </a>
          ) : (
            <GatsbyLink to={to} {...props}>
              {children}
            </GatsbyLink>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

Link.propTypes = {
  to: PropTypes.string,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Link
