import React from "react"
// import { Link } from "gatsby"
import SEO from "../components/seo"
import '../styles/index/section1.scss'
import Header from '../components/header'
import Section1 from '../components/index/section1'

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div>
      <section className="section1">
        <Header />
        <Section1 />
      </section>
    </div>
  </div>
)

export default IndexPage
