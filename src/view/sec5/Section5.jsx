import React from './node_modules/react'
//style
import './Section5.scss'

const data = {
  content: 'There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour lorem ipsum is simply free text in the'
}

const Section5 = () => (
  <section className="section5">
    <div className="container row">
      <div className="left">
        <div>
          <h6>01 – ADD NEW TASK</h6>
          <h2>Everything starts with the task</h2>
          <p>{data.content}</p>
          <div className="btn-start-free-trial">
            get started now
        </div>
        </div>
      </div>
      <div className="right">
        <img className="img-fluid" alt="fluid" src={require('../../images/img-fluid.png')} />
        <img className="icon" alt="icon" src={require('../../images/img-circleicon2.png')} />
      </div>
    </div>
  </section>
)

export default Section5