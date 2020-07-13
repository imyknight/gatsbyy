import React from 'react'
import Appstore from '../img/appstore'
import CHplay from '../img/CHplay'
import Fluid from '../img/Fluid'

const Section1 = ({ data }) => {
  return (
    <div className="container flex-row">
      <div className="c1">
        <div className="introduce">
          {data}
        </div>
        <div className="detail">
          Purchase our premium quality complete landing page template.
        </div>
        <div className="lst-btn">
          <div className="icon">
            <Appstore />
          </div>
          <div className="icon">
            <CHplay />
          </div>
        </div>
      </div>
      <div className="c2">
        <div className="img-fluid">
          <Fluid />
        </div>
      </div>
      <div className="list-logo">
        
      </div>
    </div>
  )
}

export default Section1