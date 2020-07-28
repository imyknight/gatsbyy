import React from "react"
import { graphql } from 'gatsby'
//style
import '../styles/styles.scss'
//component
import SEO from "../components/seo"
import Layout from "../view/Layout/Layout"
import Section1 from "../view/Sec1/sec1"
import Section2 from '../view/Sec2/Section2'
import Section3 from '../view/Sec3/Section3'
import Section4 from '../view/Sec4/Section4'
import Section5 from '../view/Sec5/Section5'
import Section6 from '../view/Sec6/Section6'
import Section7 from '../view/Sec7/Section7'
import Section8 from '../view/Sec8/Section8'
import Section9 from '../view/Sec9/Section9'
import Section10 from '../view/Sec10/Section10'

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
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
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
