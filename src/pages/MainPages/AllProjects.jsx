import React from 'react'
import Header from '../../components/Header'
import Projects from '../Projects'
import Footer from '../../components/Footer'
import PageHeading from '../../components/PageHeading'

const AllProjects = (heading) => {
  return (
   <div>
     <Header/>
     <PageHeading heading="All Projects"/>
     <div className='py-20'>
     
         <Projects/>
     </div>
     <Footer/>
   </div>
    
  )
}

export default AllProjects