import React from './node_modules/react'
//font awesome
import './node_modules/@fortawesome/fontawesome-svg-core'
import { faStar } from './node_modules/@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from './node_modules/@fortawesome/react-fontawesome'
//style
import './Section8.scss'
const data = {
  content: `
  As part of the classes I teach, I task my students with preparing a lot 
  of presentations. To save time &amp;
  reduce boredom, I occasionally have only a pick who presents the good work!`
}

const Section8 = () => (
  <section className="section8">
    <div className="container">
      <img className="bg-testimonial" alt="bg" src={require('../../images/bg-testimonial1.jpg')} />
      <div className="title">
        <h6>user reviews</h6>
        <h2>What users say about us</h2>
      </div>
      <div className="list-user">
        <div className="user active">
          <img alt="avt" src={require('../../images/img-testimonial1.png')} />
          <h3>Arya Start</h3>
          <h4>Client</h4>
          <ul>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
          </ul>
          <p>
            {data.content}
          </p>
        </div>
        <div className="user">
          <img alt="avt" src={require('../../images/img-testimonial1.png')} />
          <h3>Arya Start</h3>
          <h4>Client</h4>
          <ul>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
          </ul>
          <p>
            {data.content}
          </p>
        </div>
        <div className="user">
          <img alt="avt" src={require('../../images/img-testimonial1.png')} />
          <h3>Arya Start</h3>
          <h4>Client</h4>
          <ul>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
            <li><FontAwesomeIcon icon={faStar} /></li>
          </ul>
          <p>
            {data.content}
          </p>
        </div>
      </div>
    </div>
  </section>

)

export default Section8;