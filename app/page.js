import React from 'react'
import {Navbar,Sidebar,Hero, News} from './index'
const page = () => {
  return (
    <div className=''>
      <Navbar/>
      <div className='base'>
      <Sidebar/>
      </div>
      <Hero/>
    </div>
  )
}

export default page