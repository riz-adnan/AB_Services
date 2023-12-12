import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
const Layout = ({children}) => {
  return (
    <div> <div className="layout">
    
    <Navbar />
    <main style={{ minHeight: "70vh" }}>
    
      
      
      


      {children}
    </main>
    <Footer />
  </div></div>
  )
}

export default Layout