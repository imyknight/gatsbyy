import React from "react"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import '../styles/index/section1.scss'
import '../styles/index/section2.scss'
import '../styles/index/section3.scss'
import '../styles/index/section4.scss'
import '../styles/index/section5.scss'
import '../styles/index/section6.scss'
import '../styles/index/section7.scss'
import '../styles/index/section8.scss'
import '../styles/index/section9.scss'
import '../styles/index/section10.scss'
import '../styles/index/Section11.scss'
import Header from '../components/header'
import Section1 from '../components/index/section1'
import Section2 from '../components/index/section2'
import Section3 from '../components/index/section3'
import Section4 from "../components/index/section4"
import Section5 from "../components/index/section5"
import Section6 from '../components/index/section6'
import Section7 from '../components/index/section7'
import Section8 from '../components/index/section8'
import Section9 from '../components/index/section9'
import Section10 from '../components/index/section10'
import Section11 from '../components/index/section11'

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Home" />
      <div>
        <section className="header">
          <Header />
        </section>
        <section className="section1">
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
        <section className="section7">
          <Section7 />
        </section>
        <section className="section8">
          <Section8 />
        </section>
        <section className="section9">
          <Section9 />
        </section>
        <section className="section10">
          <Section10 />
        </section>
        <div className="section11">
          <Section11 />
        </div>
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

export default IndexPage;
