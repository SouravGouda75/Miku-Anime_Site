import React from 'react'
import {Navbar,Sidebar,Hero} from './index'
const page = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='base'>
      <Sidebar/>
      <Hero/>
      </div>
    </div>
  )
}

export default page