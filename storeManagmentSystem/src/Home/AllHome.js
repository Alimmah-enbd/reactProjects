import React from 'react'
import Preloader from '../Preloader'
import SubHeader from '../SubHeader'
import Header from '../Header'
import Banner from './Banner'
import Features from './Features'
import Basma from './Basma'

function AllHome() {
  return (
    <div>
        <Preloader/>
        <SubHeader/>
        <Header/> 
        <Banner/>
        <Features/>
        <Basma/>
    </div>
  )
}

export default AllHome