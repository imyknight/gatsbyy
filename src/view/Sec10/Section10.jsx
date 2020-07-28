import React from 'react'
//component
import LogoCHplay from '../../components/image/logo-chplay'
import LogoAppstore from '../../components/image/logo-appstore'
//style
import './Section10.scss'

const Section10 = () => (
  <section className="section10">
    <div className="container">
      <div className="title">
        <h1>Download Today</h1>
        <p>and get started with a free 1 month trial for your business</p>
      </div>
      <div className="list-btn">
        <div className="btn">
          <LogoAppstore />
        </div>
        <div className="btn">
          <LogoCHplay />
        </div>
      </div>
    </div>
  </section>
)
export default Section10