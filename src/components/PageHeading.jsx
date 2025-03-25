import React from 'react'

const PageHeading = (props) => {
  return (
    <div className='w-screen mt-24 h-20 justify-center flex text-5xl items-center'>
        <h1 className='text-gray-800 underline font-bold  '>{props.heading}</h1>
    </div>
  )
}

export default PageHeading