import React from 'react'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby'

const LogoCHplay = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "img-googleplay.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default LogoChplay
