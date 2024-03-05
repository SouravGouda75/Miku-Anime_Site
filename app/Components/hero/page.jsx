"use client"
import React from 'react'
import Slider from '../slider/page'
import Minicard from '../card/minicard'
import links from '../../../constants/topanime.js'
const Hero = () => {

  
  return (
    <div className='main-section'>
      <div className="hero-section">
        <Slider />
      </div>
      <div className="top-anime ">
        <h1 className="title">
          Top Anime This Week
        </h1>
        <div className="content">
          {
            links.map(({link,name}) => {
              return(

                <Minicard key={link} name={name} image={link}/>
              )
              console.log(link);
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Hero