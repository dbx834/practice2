// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

// import ContainerDimensions from 'react-container-dimensions'

import Box from '@bodhi-project/components/lib/box'
import '@bodhi-project/components/lib/box/style.less'

import MultiCarousel from '@bodhi-project/components/lib/gatsby/multi-carousel'
import '@bodhi-project/antrd/lib/just-futura/3.19.3/carousel/style/css'

import { WorldMap } from 'grommet'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import './style.less'
import Link from '../../Link'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
// const { Fragment } = React
// https://api.mapbox.com/styles/v1/randombot/cjrkvcykf68nn2sqfmi4ryixg.html?fresh=true&title=true&access_token=pk.eyJ1IjoicmFuZG9tYm90IiwiYSI6ImNqcmt0bndicjAxZWQ0M3FxczhwbzM1eGUifQ.Ubi_5vBv84X1IaFEPoz4hw#2.0/28.205038/-7.111308/0
// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    ce: file(relativePath: { eq: "clients/300w/ce.png" }) {
      ...max300
    }
    cmat: file(relativePath: { eq: "clients/300w/cmat.png" }) {
      ...max300
    }
    cpm: file(relativePath: { eq: "clients/300w/cpm.png" }) {
      ...max300
    }
    davis: file(relativePath: { eq: "clients/300w/davis.png" }) {
      ...max300
    }
    fivePondsPress: file(
      relativePath: { eq: "clients/300w/five-ponds-press.png" }
    ) {
      ...max300
    }
    k12: file(relativePath: { eq: "clients/300w/k12.png" }) {
      ...max300
    }
    lwt: file(relativePath: { eq: "clients/300w/lwt.png" }) {
      ...max300
    }
    mathLearningCenter: file(
      relativePath: { eq: "clients/300w/math-learning-center.png" }
    ) {
      ...max300
    }
    perfectionLearning: file(
      relativePath: { eq: "clients/300w/perfection-learning.png" }
    ) {
      ...max300
    }
    starfall: file(relativePath: { eq: "clients/300w/starfall.png" }) {
      ...max300
    }
    studiesWeekly: file(
      relativePath: { eq: "clients/300w/studies-weekly.png" }
    ) {
      ...max300
    }
    whs: file(relativePath: { eq: "clients/300w/whs.png" }) {
      ...max300
    }
    templeColorLogo: file(
      relativePath: { eq: "clients/300w/temple-color-logo.jpg" }
    ) {
      ...max300
    }
    ccedColorLogo: file(
      relativePath: { eq: "clients/300w/cced-color-logo.jpg" }
    ) {
      ...max300
    }
    plColorLogo: file(
      relativePath: { eq: "clients/300w/perfection-learning-color-logo.jpg" }
    ) {
      ...max300
    }
    swColorLogo: file(
      relativePath: { eq: "clients/300w/studies-weekly-color-logo.jpg" }
    ) {
      ...max300
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Clients */
const Clients = ({ ...props }) => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const carouselData = [
          {
            title: 'Wisconsin Historical Society',
            cover: data.whs.childImageSharp.fluid,
            abstract: 'Wisconsin Historical Society',
          },
          {
            title: 'Studies Weekly',
            cover: data.studiesWeekly.childImageSharp.fluid,
            abstract: 'Studies Weekly',
          },
          {
            title: 'Studies Weekly',
            cover: data.starfall.childImageSharp.fluid,
            abstract: 'Studies Weekly',
          },
          {
            title: 'Connecticut Explored',
            cover: data.ce.childImageSharp.fluid,
            abstract: 'Connecticut Explored',
          },
          {
            title: 'Center for Mathematics and Teaching',
            cover: data.cmat.childImageSharp.fluid,
            abstract: 'Studies Weekly',
          },
          {
            title: 'CPM',
            cover: data.cpm.childImageSharp.fluid,
            abstract: 'CPM',
          },
          {
            title: 'Davis',
            cover: data.davis.childImageSharp.fluid,
            abstract: 'Davis',
          },
          {
            title: 'Five Ponds Press',
            cover: data.fivePondsPress.childImageSharp.fluid,
            abstract: 'Five Ponds Press',
          },
          {
            title: 'K12',
            cover: data.k12.childImageSharp.fluid,
            abstract: 'K12',
          },
          {
            title: 'Learning Without Tears',
            cover: data.lwt.childImageSharp.fluid,
            abstract: 'Learning Without Tears',
          },
          {
            title: 'Math Learning Center',
            cover: data.mathLearningCenter.childImageSharp.fluid,
            abstract: 'Math Learning Center',
          },
          {
            title: 'Perfection Learning',
            cover: data.perfectionLearning.childImageSharp.fluid,
            abstract: 'Perfection Learning',
          },
        ]

        const testimonials = [
          {
            text:
              'They are excellent to work with and have always met deadlines or exceeded them.',
            person: 'Randy K. Messer',
            companyName: 'Perfection Learning',
            companyLink: 'https://www.perfectionlearning.com/',
            cover: data.plColorLogo.childImageSharp.fluid,
          },
          {
            text:
              'Working with NIMAS Master was quick and easy! Everything went smoothly!',
            person: 'Greg Synnott',
            companyName: 'Center for Civic Education',
            companyLink: 'http://www.civiced.org/',
            cover: data.ccedColorLogo.childImageSharp.fluid,
          },
          {
            text: 'The conversions have been impeccable and reliably done.',
            person: 'Dr. Kenneth Bruscia',
            companyName: 'Temple University, USA',
            companyLink: 'https://www.temple.edu/',
            cover: data.templeColorLogo.childImageSharp.fluid,
          },
          {
            text:
              'It is a very nice feature to have the products automatically sent to NIMAC.',
            person: 'Sheldon Savage',
            companyName: 'Studies Weekly',
            companyLink: 'https://www.studiesweekly.com/',
            cover: data.swColorLogo.childImageSharp.fluid,
          },
        ]

        return (
          <div className="small-default-container clients">
            <h2>trusted by leading educational publishers</h2>
            <div className="map">
              <div className="map-container">
                <WorldMap
                  color="#d8e0e6"
                  continents={[
                    {
                      name: 'North America',
                      color: '#d8e0e6',
                    },
                  ]}
                  alignSelf="center"
                  places={[
                    {
                      name: 'Learning Without Tears',
                      location: [39.14344, -77.20137],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'Connecticut Explored',
                      location: [41.762009, -67.3],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'Centre for Mathematics and Teaching',
                      location: [33.844978, -118.387238],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'CPM',
                      location: [38.581573, -121.4944],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'Davis Publications',
                      location: [38.262592, -71.802292],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'Five Ponds Press',
                      location: [37.043594, -95.658791],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'The Math Learning Centre',
                      location: [40.804134, -124.554199],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'K12 Inc',
                      location: [35.96973, -77.383873],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'Studies Weekly',
                      location: [40.297119, -111.695007],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'Perfection Learning',
                      location: [41.73521, -111.834862],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'Starfall',
                      location: [40.014984, -105.270546],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'Wisconsin Historical Society',
                      location: [43.784439, -88.787865],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'Centre for the Collaborative Classroom',
                      location: [37.765205, -124.241638],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                    {
                      name: 'EdGems',
                      location: [39.776871, -85.853142],
                      color: '#583e85',
                      onHover: name => <span>{name}</span>,
                    },
                  ]}
                />
              </div>
            </div>
            <Box className="clients-carousel">
              <div className="contains-clients-carousel">
                <MultiCarousel data={carouselData} Img={Img} />
              </div>
            </Box>
            <div className="clients-testimonials">
              <div className="contains-clients-testimonials">
                {testimonials.map(
                  ({ text, person, companyName, companyLink, cover }) => (
                    <div className="testimonial" key={companyLink}>
                      <div className="quoteLogo">
                        <Link to={companyLink}>
                          <Img fluid={cover} title={companyName} />
                        </Link>
                      </div>
                      <p className="what">
                        <span>"{text}"</span>
                      </p>
                      <p className="who">
                        <span>
                          {person}
                          &nbsp;for&nbsp;
                          <i>
                            <u>
                              <Link to={companyLink}>{companyName}</Link>
                            </u>
                          </i>
                        </span>
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

Clients.propTypes = {
  to: PropTypes.string,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default Clients
