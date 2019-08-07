// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/just-futura/3.19.3/row/style/css'
import '@bodhi-project/antrd/lib/just-futura/3.19.3/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import './style.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    eduFore: file(
      relativePath: {
        eq: "nimas-conversion-service-for-educators-foreground.jpg"
      }
    ) {
      ...max900
    }
    eduBack: file(
      relativePath: {
        eq: "nimas-conversion-service-for-educators-background.jpg"
      }
    ) {
      ...max900
    }
    pubFore: file(
      relativePath: {
        eq: "nimas-conversion-service-for-publishers-foreground.jpg"
      }
    ) {
      ...max900
    }
    pubBack: file(
      relativePath: {
        eq: "nimas-conversion-service-for-publishers-background.jpg"
      }
    ) {
      ...max900
    }
    img4: file(
      relativePath: {
        eq: "nimas-conversion-service-for-local-and-state-education-agencies.png"
      }
    ) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** HomeServiceDescriptor */
const HomeServiceDescriptor = ({ ...props }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <div className="services">
          <div className="educators-container">
            <div className="small-default-container">
              <div className="educators">
                <Division breakpoint={768}>
                  <Fragment>
                    <h2>
                      <span>educators</span>
                    </h2>
                    <h3>
                      <span>
                        outstanding service
                        <br />
                        and impeccable support
                      </span>
                    </h3>
                    <p>
                      <i>
                        Our service is for you if you are a curriculum material
                        publisher and are in need of technical development
                        support.
                      </i>
                    </p>
                    <p>
                      We can help you prepare, structure, edit and convert your
                      source files to NIMAS-conformant filesets. Our service is
                      inclusive of fileset validation, quality assurance,
                      preparation of title metadata, upload to the NIMAC portal
                      and revision management till a title has been certified by
                      NIMAC.
                    </p>
                  </Fragment>
                  <Fragment>
                    <div className="fore-back">
                      <Img
                        fluid={data.eduFore.childImageSharp.fluid}
                        className="fore"
                      />
                      <Img
                        fluid={data.eduBack.childImageSharp.fluid}
                        className="back"
                      />
                    </div>
                  </Fragment>
                </Division>
              </div>
            </div>
          </div>
          <div className="publishers-container">
            <div className="small-default-container">
              <div className="publishers">
                <Division breakpoint={768}>
                  <Fragment>
                    <h2>
                      <span>publishers</span>
                    </h2>
                    <h3>
                      <span>
                        end-to-end service
                        <br />
                        with quick turnaround
                      </span>
                    </h3>
                    <p>
                      <i>
                        Our service is for you if you are a publisher with a
                        large catalogue of curriculum materials and student
                        textbooks and you need to contract NIMAS conversion
                        work.
                      </i>
                    </p>
                    <p>
                      <span>
                        We have a mature and seasoned team that can handle
                        complex tasks <strong>at scale</strong>. We can enable
                        you to meet and exceed the strictest accesibility
                        standards and regulations.
                      </span>
                    </p>
                  </Fragment>
                  <Fragment>
                    <div className="fore-back">
                      <Img
                        fluid={data.pubFore.childImageSharp.fluid}
                        className="fore"
                      />
                      <Img
                        fluid={data.pubBack.childImageSharp.fluid}
                        className="back"
                      />
                    </div>
                  </Fragment>
                </Division>
              </div>
            </div>
          </div>
          <div className="schools-container">
            <div className="small-default-container">
              <div className="schools">
                <Division breakpoint={768}>
                  <Fragment>
                    <h2>
                      <span>education agencies</span>
                    </h2>
                    <h3>
                      <span>
                        extensive technical
                        <br />
                        experience you can rely on
                      </span>
                    </h3>
                    <p>
                      <i>
                        Our service is for you if you are a state or local
                        education agency and wish to develop NIMAS-conformant
                        filesets or student-ready versions.
                      </i>
                    </p>
                    <p>
                      We have extensive technical experience and are able to
                      resolve technical issues with respect to accessible
                      formats (NIMAS, DAISY, DTB, Braille) and other digital
                      instructional materials (EPUB, KINDLE, EDUPUB, SCORM, IMS
                      QTI, Learning Objects).
                    </p>
                  </Fragment>
                  <Fragment>
                    <div className="fore-back">
                      <div className="just-cover">
                        <Img fluid={data.img4.childImageSharp.fluid} />
                      </div>
                    </div>
                  </Fragment>
                </Division>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
}

HomeServiceDescriptor.propTypes = {
  to: PropTypes.string,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default HomeServiceDescriptor
