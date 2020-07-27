import React from "react"
import { graphql } from 'gatsby'
//style
import '../styles/styles.scss'
//component
import SEO from "../components/seo"
import Layout from "../view/Layout/Layout"
import Section1 from "../view/sec1/sec1"

const IndexPage = ({ data }) => {
  console.log(data.site.siteMetadata.introduceIndex)
  return (
    <div>
      <SEO title="Home" />
      <>
        <Layout>
          <Section1 props={data.site.siteMetadata} />
        </Layout>
      </>
    </div>
  )
}

export const data = graphql`
 query {
  site {
    siteMetadata {
      introduceIndex
    }
  }
}
`

export default IndexPage;
