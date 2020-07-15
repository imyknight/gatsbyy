import React from 'react'
import Logo from '../img/logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFontAwesomeLogoFull } from '@fortawesome/free-solid-svg-icons'

const Section11 = () => (
  <div>
    <div className="bg">
      <img alt="bg" src={require('../../images/bg-footer.png')} />
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
  </div>
)

export default Section11