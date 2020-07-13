import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import '../styles/index/section1.scss'
import Header from '../components/header'
import Section1 from '../components/index/section1'
import { graphql } from 'gatsby'

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
