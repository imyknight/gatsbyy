import React from 'react'
//component
import CHplay from '../../components/img/CHplay'
import Appstore from '../../components/img/appstore'
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
          <Appstore />
        </div>
        <div className="btn">
          <CHplay />
        </div>
      </div>
    </div>
  </section>
)
export default Section10