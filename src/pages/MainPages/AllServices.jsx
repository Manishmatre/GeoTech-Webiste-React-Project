import React from 'react'
import Header from '../../components/Header'
import ServicesSection from '../Services'
import Footer from '../../components/Footer'
import PageHeading from '../../components/PageHeading'

const AllServices = (heading) => {
  return (
    <div>
        <Header/>
        <PageHeading heading="All Services"/>
        <div className='py-20'>
          <ServicesSection/>
        </div>
        <Footer/>
    </div>
  )
}

export default AllServices