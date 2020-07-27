import React from 'react'
//img
import LogoChplay from './logo-appstore'
import LogoAppstore from './logo-appstore'
import Fluid from './Fluid'
//style
import './Sec1.scss'


const Section1 = ({ props }) => {
  return (
    <section className="section1">
      <div className="container flex-row content">
        <div className="c1">
          <div className="introduce">
            bb
          </div>
          <div className="detail">
            Purchase our premium quality complete landing page template.
        </div>
          <div className="lst-btn">
            <div className="icon">
              <LogoAppstore />
            </div>
            <div className="icon">
              <LogoChplay />
            </div>
          </div>
        </div>
        <div className="c2">
          <div className="img-fluid">
            <Fluid />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section1