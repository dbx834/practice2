// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'

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
    cover1: file(relativePath: { eq: "covers/cover1.jpg" }) {
      ...max300
    }
    cover2: file(relativePath: { eq: "covers/cover2.jpg" }) {
      ...max300
    }
    cover3: file(relativePath: { eq: "covers/cover3.jpg" }) {
      ...max300
    }
    cover4: file(relativePath: { eq: "covers/cover4.jpg" }) {
      ...max300
    }
    cover5: file(relativePath: { eq: "covers/cover5.jpg" }) {
      ...max300
    }
    cover6: file(relativePath: { eq: "covers/cover6.jpg" }) {
      ...max300
    }
    cover7: file(relativePath: { eq: "covers/cover7.jpg" }) {
      ...max300
    }
    cover8: file(relativePath: { eq: "covers/cover8.jpg" }) {
      ...max300
    }
    cover9: file(relativePath: { eq: "covers/cover9.jpg" }) {
      ...max300
    }
    cover10: file(relativePath: { eq: "covers/cover10.jpg" }) {
      ...max300
    }
    cover11: file(relativePath: { eq: "covers/cover11.jpg" }) {
      ...max300
    }
    cover12: file(relativePath: { eq: "covers/cover12.jpg" }) {
      ...max300
    }
    cover13: file(relativePath: { eq: "covers/cover13.jpg" }) {
      ...max300
    }
    cover14: file(relativePath: { eq: "covers/cover14.jpg" }) {
      ...max300
    }
    cover15: file(relativePath: { eq: "covers/cover15.jpg" }) {
      ...max300
    }
    cover16: file(relativePath: { eq: "covers/cover16.jpg" }) {
      ...max300
    }
    cover17: file(relativePath: { eq: "covers/cover17.jpg" }) {
      ...max300
    }
    cover18: file(relativePath: { eq: "covers/cover18.jpg" }) {
      ...max300
    }
    cover19: file(relativePath: { eq: "covers/cover19.jpg" }) {
      ...max300
    }
    cover20: file(relativePath: { eq: "covers/cover20.jpg" }) {
      ...max300
    }
    cover21: file(relativePath: { eq: "covers/cover21.jpg" }) {
      ...max300
    }
    cover22: file(relativePath: { eq: "covers/cover22.jpg" }) {
      ...max300
    }
    cover24: file(relativePath: { eq: "covers/cover24.jpg" }) {
      ...max300
    }
    cover25: file(relativePath: { eq: "covers/cover25.jpg" }) {
      ...max300
    }
    cover26: file(relativePath: { eq: "covers/cover26.jpg" }) {
      ...max300
    }
    cover27: file(relativePath: { eq: "covers/cover27.jpg" }) {
      ...max300
    }
    cover28: file(relativePath: { eq: "covers/cover28.jpg" }) {
      ...max300
    }
    cover29: file(relativePath: { eq: "covers/cover29.jpg" }) {
      ...max300
    }
    cover30: file(relativePath: { eq: "covers/cover30.jpg" }) {
      ...max300
    }
    cover31: file(relativePath: { eq: "covers/cover31.jpg" }) {
      ...max300
    }
    cover32: file(relativePath: { eq: "covers/cover32.jpg" }) {
      ...max300
    }
    cover33: file(relativePath: { eq: "covers/cover33.jpg" }) {
      ...max300
    }
    cover34: file(relativePath: { eq: "covers/cover34.jpg" }) {
      ...max300
    }
    cover35: file(relativePath: { eq: "covers/cover35.jpg" }) {
      ...max300
    }
    cover36: file(relativePath: { eq: "covers/cover36.jpg" }) {
      ...max300
    }
    cover37: file(relativePath: { eq: "covers/cover37.jpg" }) {
      ...max300
    }
    cover38: file(relativePath: { eq: "covers/cover38.jpg" }) {
      ...max300
    }
    cover39: file(relativePath: { eq: "covers/cover39.jpg" }) {
      ...max300
    }
    cover40: file(relativePath: { eq: "covers/cover40.jpg" }) {
      ...max300
    }
    cover41: file(relativePath: { eq: "covers/cover41.jpg" }) {
      ...max300
    }
    cover42: file(relativePath: { eq: "covers/cover42.jpg" }) {
      ...max300
    }
    cover43: file(relativePath: { eq: "covers/cover43.jpg" }) {
      ...max300
    }
    cover44: file(relativePath: { eq: "covers/cover44.jpg" }) {
      ...max300
    }
    cover45: file(relativePath: { eq: "covers/cover45.jpg" }) {
      ...max300
    }
    cover46: file(relativePath: { eq: "covers/cover46.jpg" }) {
      ...max300
    }
    cover47: file(relativePath: { eq: "covers/cover47.jpg" }) {
      ...max300
    }
    cover48: file(relativePath: { eq: "covers/cover48.jpg" }) {
      ...max300
    }
    cover49: file(relativePath: { eq: "covers/cover49.jpg" }) {
      ...max300
    }
    cover50: file(relativePath: { eq: "covers/cover50.jpg" }) {
      ...max300
    }
    cover51: file(relativePath: { eq: "covers/cover51.jpg" }) {
      ...max300
    }
    cover52: file(relativePath: { eq: "covers/cover52.jpg" }) {
      ...max300
    }
    cover53: file(relativePath: { eq: "covers/cover53.jpg" }) {
      ...max300
    }
    cover54: file(relativePath: { eq: "covers/cover54.jpg" }) {
      ...max300
    }
    cover55: file(relativePath: { eq: "covers/cover55.jpg" }) {
      ...max300
    }
    cover56: file(relativePath: { eq: "covers/cover56.jpg" }) {
      ...max300
    }
    cover58: file(relativePath: { eq: "covers/cover58.jpg" }) {
      ...max300
    }
    cover59: file(relativePath: { eq: "covers/cover59.jpg" }) {
      ...max300
    }
    cover60: file(relativePath: { eq: "covers/cover60.jpg" }) {
      ...max300
    }
    cover65: file(relativePath: { eq: "covers/cover65.jpg" }) {
      ...max300
    }
    cover66: file(relativePath: { eq: "covers/cover66.jpg" }) {
      ...max300
    }
    cover67: file(relativePath: { eq: "covers/cover67.jpg" }) {
      ...max300
    }
    cover72: file(relativePath: { eq: "covers/cover72.jpg" }) {
      ...max300
    }
    cover73: file(relativePath: { eq: "covers/cover73.jpg" }) {
      ...max300
    }
    cover74: file(relativePath: { eq: "covers/cover74.jpg" }) {
      ...max300
    }
  }
`

// cover57: file(relativePath: { eq: "covers/cover57.jpg" }) {
//   ...max300
// }
// cover61: file(relativePath: { eq: "covers/cover61.jpg" }) {
//   ...max300
// }
// cover62: file(relativePath: { eq: "covers/cover62.jpg" }) {
//   ...max300
// }
// cover63: file(relativePath: { eq: "covers/cover63.jpg" }) {
//   ...max300
// }
// cover64: file(relativePath: { eq: "covers/cover64.jpg" }) {
//   ...max300
// }
// cover68: file(relativePath: { eq: "covers/cover68.jpg" }) {
//   ...max300
// }
// cover69: file(relativePath: { eq: "covers/cover69.jpg" }) {
//   ...max300
// }
// cover70: file(relativePath: { eq: "covers/cover70.jpg" }) {
//   ...max300
// }
// cover71: file(relativePath: { eq: "covers/cover71.jpg" }) {
//   ...max300
// }
// cover75: file(relativePath: { eq: "covers/cover75.jpg" }) {
//   ...max300
// }
// cover76: file(relativePath: { eq: "covers/cover76.jpg" }) {
//   ...max300
// }
// cover77: file(relativePath: { eq: "covers/cover77.jpg" }) {
//   ...max300
// }
// cover78: file(relativePath: { eq: "covers/cover78.jpg" }) {
//   ...max300
// }
// cover79: file(relativePath: { eq: "covers/cover79.jpg" }) {
//   ...max300
// }
// cover80: file(relativePath: { eq: "covers/cover80.jpg" }) {
//   ...max300
// }

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** AboutBlock */
const AboutBlock = ({ ...props }) => {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <div className="default-container about">
          <Division breakpoint={768} bigGolden>
            <div className="text">
              <h2>About</h2>
              <p>
                NIMAS Master is an offering enabled by a collaboration between
                Digital Media Initiatives and Bodhi Project.
              </p>
              <p>
                Founded in 2007, Digital Media Initiatives is a privatly-held
                (proprietorship) firm registered with Ministry of Micro, Small &
                Medium Enterprises, Goverment of India. Digital Media
                Initiatives has grown to become a leading digital-publishing
                company. A small team of seven engineers has consistently
                outperformed large software companies and won clients, from
                Fortune 500 companies to celebrity authors over the last 12
                years.
              </p>
              <h2>People</h2>
              <p>
                Digital Media Initiatives has a small, close-knit and formidable
                team with expertise in the domains of technology, design,
                teaching, marketing, finance, management and core banking. Our
                passion for social transformation informs what we do every day,
                whether it's building innovative technology tools, connecting
                with communities, or dreaming up new things.
              </p>
            </div>
            <Fragment>&nbsp;</Fragment>
          </Division>
          <h2>Recent Publications</h2>
          <div className="gallery">
            {Object.keys(data).map((image, i) => {
              // console.log(data[image])
              return (
                <div className="image" key={i}>
                  <Img fluid={data[image].childImageSharp.fluid} />
                </div>
              )
            })}
          </div>
        </div>
      )}
    />
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default AboutBlock
