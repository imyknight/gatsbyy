import React from "react"
import { graphql } from 'gatsby'
//style
import '../styles/styles.scss'
//component
import SEO from "../components/seo"
import Layout from "../view/Layout/Layout"
import Section1 from "../view/sec1/sec1"
import Section2 from '../view/sec2/section2'
import Section3 from '../view/sec3/section3'

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <>
        <Layout>
          <Section1 props={data.site.siteMetadata} />
          <Section2 />
          <Section3 />
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
