"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import account from '../../Assets/account.svg'
const Navbar = () => {
  const [dropdown,setDropdown]=useState(false)
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
            <li className='links'>
              <div className="">

              <button
              onClick={()=>setDropdown(!dropdown)}
              >
                
                <Image  src={account} height={0} width={25}/>
                </button> 
              {dropdown && <div className="dropdown ">
                <button  className='drop-button'>My Profile</button>
                <button className='drop-button'>My Anime</button>
                <button className='drop-button'>My Watchlist</button>
                <button className='drop-button'>Sign Out</button>
              </div>}
              </div>
              </li>
          </ul>
          
        </div>
    </div>
  )
}

export default Navbar