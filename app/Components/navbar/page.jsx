import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar-section letter-style'>
        <div className="logo flex">
            <img className='h-[50px]' src={"https://wallpaperset.com/w/full/2/6/e/22530.jpg"}/>
            <span className='tracking-widest'>
              MIKU
            </span>
        </div>
        <div className="nav-options">
          <ul className='flex justify-between'>
            <li className='links'>Home</li>
            <li className='links'>About</li>
            <li className='links'>Blogs</li>
            <li className='links'>Services</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar