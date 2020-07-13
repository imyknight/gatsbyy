
import PropTypes from "prop-types"
import React from "react"
import Logo from './img/logo'
import '../styles/header.scss'
import '../styles/styles.scss'

const itemNav = ['Home', 'Features', 'Pricing', 'News', 'Contact']
  .map((item, index) => <div className="item" key={index}>{item}</div>)

const Header = () => (
  <nav className="container">
    <div className="box-logo">
      <div className="logo">
        <Logo />
      </div>
    </div>
    <div className="list-btn">
      <div className="list-nav-item">
        {itemNav}
      </div>
      <div className="btn-start-free-trial">
        Start free trial
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
