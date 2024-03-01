import React from 'react'
import {Navbar,Sidebar,Hero} from './index'
const page = () => {
  return (
    <div className='base'>
      <Navbar/>
      <Sidebar/>
      <Hero/>
    </div>
  )
}

export default page