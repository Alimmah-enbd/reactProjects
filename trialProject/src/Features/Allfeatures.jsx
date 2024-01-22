import React from 'react'
import Navbar from '../Navbar'
import About from '../Home/About'
import { CartProvider } from 'react-use-cart'

function Allfeatures() {
  return (
      <CartProvider>
          <Navbar/>
          <About/>
    </CartProvider>
  )
}

export default Allfeatures