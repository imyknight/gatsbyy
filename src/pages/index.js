import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import '../styles/index/section1.scss'
import '../styles/index/section2.scss'
import '../styles/index/section3.scss'
import '../styles/index/section4.scss'
import Header from '../components/header'
import Section1 from '../components/index/section1'
import Section2 from '../components/index/section2'
import Section3 from '../components/index/section3'
import { graphql } from 'gatsby'
import Section4 from "../components/index/section4"

const IndexPage = ({data}) => {
  console.log(data.site.siteMetadata.introduceIndex)
  return (
    <div>
      <SEO title="Home" />
      <div>
        <section className="section1">
          <Header />
          <Section1 data={data.site.siteMetadata.introduceIndex} />
        </section>
        <section className="section2">
          <Section2 />
        </section>
        <section className="section3">
          <Section3 />
        </section>
        <section className="section4">
          <Section4 />
        </section>
      </div>
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

export default IndexPage
