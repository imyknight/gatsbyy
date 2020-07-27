import React from './node_modules/react'
//hook
import useTrackTargetVisibility from '../../helpers/useTrackTargetVisibility';
//style
import './Section4.scss'

const data = {
  content: `There are many variations of passages of lorem ipsum available,
   but the majority have suffered alteration in some form, by injected humour 
   lorem ipsum is simply free text in the`
}

function Section4() {

  const { isVisible, targetRef } = useTrackTargetVisibility();

  return (
    <section className="section4">
      <div className="container row" >
        <div className="left">
          <img className={"img-fluid" + isVisible === true ? "fade-right" : ""} name="1" ref={targetRef} alt="fluid" src={require('../../images/img-fluid.png')} />
          <img className="icon" alt="icon" src={require('../../images/img-circleicon1.png')} />
        </div>
        <div className="right">
          <div className="mg-15">
            <h6>01 – ADD NEW TASK</h6>
            <h2>Everything starts with the task</h2>
            <p>{data.content}</p>
            <div className="btn-start-free-trial">
              get started now
        </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section4;

