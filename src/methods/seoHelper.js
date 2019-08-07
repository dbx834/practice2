// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withUrl from '@bodhi-project/components/lib/methods/withUrl'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import ogX from '../images/banners/ogX.jpg'
import twitterSummaryX from '../images/banners/twitterSummaryX.jpg'
import data from '../data/website.json'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const ogY = withUrl(ogX, data)
const twitterSummaryY = withUrl(twitterSummaryX, data)

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
/** seoHelper */
const seoHelper = pageData => {
  const twitterCover =
    typeof pageData.cover === 'undefined'
      ? twitterSummaryY
      : withUrl(pageData.cover, data)
  const ogCover =
    typeof pageData.cover === 'undefined' ? ogY : withUrl(pageData.cover, data)

  const returnObject = {
    pageTitle: pageData.pageTitle,
    twitterSummaryX: twitterCover,
    generalMetaData: {
      description: pageData.pageAbstract,
      keywords: data.websiteKeywords,
      image: ogCover,
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
    },
    twitterSummaryCardData: {
      site: data.websiteName,
      creator: data.org.name,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image: twitterCover,
      alt: pageData.pageAbstract,
    },
    openGraphSummaryData: {
      siteName: data.websiteName,
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      title: pageData.pageTitle,
      description: pageData.pageAbstract,
      image: ogCover,
    },
    webpageSchemaData: {
      url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
      name: pageData.pageTitle,
      description: pageData.pageAbstract,
      author: data.org.founders[0],
      publisher: data.org.name,
      image: ogCover,
    },
    breadcrumbSchemaData: {
      breadcrumbs: [
        { name: 'Home', url: `${data.websiteUrl}` },
        {
          name: pageData.pageTitle,
          url: `${data.websiteUrl}${pageData.nakedPageSlug}`,
        },
      ],
    },
  }

  return returnObject
}

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default seoHelper
