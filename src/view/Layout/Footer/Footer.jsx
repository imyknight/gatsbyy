import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesomeLogoFull } from '@fortawesome/free-solid-svg-icons'
//component
import Logo from '../../../components/image/logo'
//style
import './Footer.scss'

const Footer = () => (
  <section className="section11">
    <div className="bg">
      <img alt="bg" src={require('./img/bg-footer.png')} />
    </div>
    <div className="container content">
      <div className="left">
        <Logo />
      </div>
      <div className="right">
        <FontAwesomeIcon icon={faFontAwesomeLogoFull} />
      </div>
    </div>
    <div className="content2">
      <p>
        © 2019 Copyrights PuriCreative
      </p>
    </div>
  </section>
)

export default Footer