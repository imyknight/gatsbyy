
import PropTypes from "prop-types"
import React from "react"
import Logo from './logo'
import '../styles/header.scss'

const Header = () => (
  <nav className="header">
   <Logo /> 
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
