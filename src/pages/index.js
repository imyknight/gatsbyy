import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import '../styles/index/section1.scss'
import '../styles/index/section2.scss'
import '../styles/index/section3.scss'
import '../styles/index/section4.scss'
import '../styles/index/section5.scss'
import '../styles/index/section6.scss'
import Header from '../components/header'
import Section1 from '../components/index/section1'
import Section2 from '../components/index/section2'
import Section3 from '../components/index/section3'
import Section4 from "../components/index/section4"
import Section5 from "../components/index/section5"
import Section6 from '../components/index/section6'


const IndexPage = ({ data }) => {
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
        <section className="section5">
          <Section5 />
        </section>
        <section className="section6">
          <Section6 />
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
