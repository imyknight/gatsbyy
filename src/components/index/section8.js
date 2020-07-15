import React from 'react'
import '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const data = {
  content: `
  As part of the classes I teach, I task my students with preparing a lot 
  of presentations. To save time &amp;
  reduce boredom, I occasionally have only a pick who presents the good work!`
}

const Section8 = () => (
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
)

export default Section8;