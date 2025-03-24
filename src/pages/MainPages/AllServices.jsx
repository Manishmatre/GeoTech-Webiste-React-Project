import React from 'react'
import Header from '../../components/Header'
import ServicesSection from '../Services'
import Footer from '../../components/Footer'

const AllServices = () => {
  return (
    <div>
        <Header/>
        <div className='py-20'>
          <ServicesSection/>
        </div>
        <Footer/>
    </div>
  )
}

export default AllServices