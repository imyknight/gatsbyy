import React from 'react'
//component
import Header from './Header/Header'
import Footer from './Footer/Footer'
//style
const Layout = ({ children }) => (
  <>
    <Header />
      {children}
    <Footer />
  </>
)

export default Layout