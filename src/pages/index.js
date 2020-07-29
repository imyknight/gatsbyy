import React from "react"
import { graphql } from 'gatsby'
//style
import '../styles/styles.scss'
//component
import SEO from "../components/seo"
import Layout from "../view/Layout/Layout"
import Section1 from "../view/Sec1/Sec1"
import Section2 from "../view/sec2/section2"
import Section3 from "../view/sec3/Section3"
import Section4 from "../view/sec4/Section4"
import Section6 from "../view/sec6/section6"
import Section5 from "../view/sec5/Section5"


const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title="Home" />
      <Layout>
        <Section1 props={data.site.siteMetadata} />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </Layout>
    </>
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
