import React from 'react'
//hook
import useTrackTargetVisibility from '../../helpers/useTrackTargetVisibility'
//style
import './Section5.scss'

const data = {
  content: 'There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour lorem ipsum is simply free text in the'
}

function Section5() {
  const { isVisible, targetRef } = useTrackTargetVisibility();
  return (
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
          <img 
            className={isVisible?"img-fluid img-fluid-visible":"img-fluid img-fluid-hide"}
            alt="fluid" 
            src={require('../../images/img-fluid.png')} 
          />
          <img 
            className={isVisible?"icon icon-visible":"icon icon-hide"}
            alt="icon" 
            ref={targetRef} 
            src={require('../../images/img-circleicon2.png')} 
          />
        </div>
      </div>
    </section>
  )
}

export default Section5