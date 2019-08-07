// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import CountUp from 'react-countup'
import TextLoop from '@bodhi-project/react-text-loop/lib/components/TextLoop'

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
    img: file(relativePath: { eq: "technology-for-good.png" }) {
      ...max900
    }
  }
`
const smallDefaultContainer = 'abc'
// const smallDefaultContainer = container({ smallDefault: true, block: true })

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 *
 */
class TechnologyForGood extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props)

    const heading1 = [
      'Books',
      'Publications',
      'Titles',
      'Tomes',
      'Volumes',
      'Treatise',
      'Works',
      'Opuses',
    ]
    const heading2 = [
      'dealt with',
      'managed',
      'tackled',
      'taken care of',
      'contended with',
      'given attention to',
      'seen to',
      'taken stock of',
      'handled',
      'confronted',
      'addressed',
      'grappled with',
    ]
    const heading = `
    ${heading1[Math.floor(Math.random() * heading1.length)]}
    ${heading2[Math.floor(Math.random() * heading2.length)]}
    as of
    `

    /**
     * state
     */
    this.state = {
      initCount: 23782500, // Count of pages as on 20'th Sept 2017 -- prevent FOFT
      totalBooks: 67950,
      oldCount: undefined,
      updatedCount: undefined,
      heading,
    }

    this.update = this.update.bind(this)
    this.getToday = this.getToday.bind(this)
    this.daysSince = this.daysSince.bind(this)
    this.update = this.update.bind(this)
  }

  /**
   * componentDidMount - Invoked immediately after a component is mounted
   */
  componentDidMount() {
    this.update(true)
    setInterval(() => {
      this.update()
    }, 3625)
  }

  /**
   * daysSince
   */
  getToday() {
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    const yyyy = today.getFullYear()
    if (dd < 10) {
      dd = `0${dd}`
    }
    if (mm < 10) {
      mm = `0${mm}`
    }
    today = `${mm}/${dd}/${yyyy}`
    return today
  }

  /**
   * daysSince
   */
  daysSince(date1, date2) {
    const dateA = new Date(date1)
    const dateB = new Date(date2)
    const timeDiff = Math.abs(dateB.getTime() - dateA.getTime())
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
    return diffDays
  }

  /**
   * update
   */
  update(isInit) {
    if (isInit) {
      // How many pages have we converted?
      const daysSinceStart = this.daysSince('01/01/2000', this.getToday()) // We started on 1'st of Jan
      const avgWorkingDays = Math.round(daysSinceStart * 0.7) // We've worked about 70% of the time
      const avgBooksPerDay = 15 // We convert about 15 books a day
      const avgPapersPerBook = 350 // There are about 350 pages in a book
      const totalBooks = avgWorkingDays * avgBooksPerDay // Total books
      const totalPages = totalBooks * avgPapersPerBook // Total pages
      this.setState({ initCount: totalPages, totalBooks })
    } else {
      const addPages = (15 * 350) / 8400 // We convert about 5,250 pages a day (15 books * 350 pages). We work for about 7 hours a day(25200 seconds). Because we update the count every 3 seconds there are (25200/3 = 8400 ticks).
      const updatedCount =
        (typeof this.state.updatedCount === 'undefined'
          ? this.state.initCount
          : this.state.updatedCount) + addPages
      this.setState({
        oldCount:
          typeof this.state.updatedCount === 'undefined'
            ? this.state.initCount
            : this.state.updatedCount,
        updatedCount,
      })
    }
  }

  /** standard renderer */
  render() {
    const datetime = new Date().toLocaleString('en-US', {
      hour12: false,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    return (
      <StaticQuery
        query={query}
        render={data => (
          <div className="tech-for-good">
            <div className="small-default-container">
              <div className="tech-container">
                <Division breakpoint={768}>
                  <Fragment>
                    <div className="tablet-only">
                      <Img fluid={data.img.childImageSharp.fluid} />
                    </div>
                  </Fragment>
                  <Fragment>
                    <h2>
                      <span>technnology for good</span>
                    </h2>
                    <h3>
                      <span>
                        accessible and
                        <br />
                        equitable education
                      </span>
                    </h3>
                    <div className="mask-p">
                      <i>
                        Book published as of {datetime}:
                        <br />
                        {this.state.totalBooks.toLocaleString()}
                        &nbsp;with about
                        <CountUp
                          start={
                            this.state.updatedCount
                              ? this.state.oldCount
                              : this.state.initCount * 0.8
                          }
                          end={
                            this.state.updatedCount
                              ? this.state.updatedCount
                              : this.state.initCount
                          }
                          duration={2.75}
                          useEasing
                          useGrouping
                          separator=","
                          decimal="."
                          prefix=" "
                          suffix=" pages "
                        />
                        <br />
                        <TextLoop style={{ display: 'inline-block' }}>
                          <span>by about 4,000 authors.</span>
                          <span>by about 1,200 publishers.</span>
                          <span>from about 12 countries.</span>
                          <span>in about 15 languages.</span>
                          <span>in the last 12 years.</span>
                        </TextLoop>
                      </i>
                    </div>
                    <p>
                      <span>
                        Our service is used by curriculum materials publishers,
                        academic publishers, education agencies, schools and
                        colleges, universities and governmental and
                        non-governmental organizations; and we are proud that
                        our work has helped tens of thousands of differently
                        abled students.
                      </span>
                    </p>
                  </Fragment>
                </Division>
              </div>
            </div>
          </div>
        )}
      />
    )
  }
}

TechnologyForGood.propTypes = {
  to: PropTypes.string,
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default TechnologyForGood
