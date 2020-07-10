import React from 'react'
import { graphql } from 'gatsby'


const Section1 = ({data}) => {
  console.log(data)
  return (
    <div className="container flex-row">
      <div className="c1">
        {data}
      </div>
      <div className="c2">
        2
      </div>
    </div>
  )
}

export const query = graphql`
query MyQuery {
  site {
    siteMetadata {
      introduceIndex
    }
  }
}

`



export default Section1