import React from 'react'
import Navbar from '../Navbar'
import Download from '../Home/Download'
import Footer from '../Home/Footer'
import { CartProvider } from 'react-use-cart'

function Alldownload() {
  return (
      <CartProvider>
          <Navbar />
          <Download />
          <Footer/>
      </CartProvider>
  )
}

export default Alldownload