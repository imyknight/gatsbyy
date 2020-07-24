import React, { useRef, useEffect } from 'react'
import '../../styles/index/section4.scss'

const data = {
  content: `There are many variations of passages of lorem ipsum available,
   but the majority have suffered alteration in some form, by injected humour 
   lorem ipsum is simply free text in the`
}

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
}

function Section4() {
  const imgFluid = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      console.group('Intersection')
      for (const entry of entries) {
        console.log('observe entry ...', entry.isIntersecting)
      }
      console.groupEnd()
    }, observerOptions);

    observer.observe(imgFluid.current)

    return () => observer.unobserve(imgFluid.current)
  }, [])

  return (
    <div className="container row" >
      <div className="left">
        <img className="img-fluid" name="1" ref={imgFluid} alt="fluid" src={require('../../images/img-fluid.png')} />
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
  )
}

export default Section4;