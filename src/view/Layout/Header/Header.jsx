import React from 'react'
//img
import Logo from '../../../components/image/logo'
//style
import './Header.scss'

const Header = () => (
  <section className="header">
    <nav className="container">
      <div className="box-logo">
        <div className="logo">
          <Logo />
        </div>
      </div>
      <div className="list-btn">
        <div className="list-nav-item">
          <div className="item">
            Home <b>▾</b>
            <div className="dropdown">
              <div className="link1">Home page 1</div>
              <div className="link2">Home page 2</div>
            </div>
          </div>
          <div className="item">Features</div>
          <div className="item">Pricing</div>
          <div className="item">
            News <b>▾</b>
            <div className="dropdown">
              <div className="link1">Blog list</div>
              <div className="link2">Blog detail</div>
            </div>
          </div>
          <div className="item">Contact</div>
        </div>
        <div className="btn-start-free-trial">
          <div className="text">
            Start free trial
          </div>
          <div className="decor" />
        </div>
      </div>
    </nav>
  </section>
)

export default Header