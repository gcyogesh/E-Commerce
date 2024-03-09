import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Productss:React.FC = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Products/>
      <Footer />
    </React.Fragment>
  )
}

export default Productss
