"use client"
import React from 'react'
import Slider from '../slider/page'
import Minicard from '../card/minicard'
import links from '../../../constants/topanime.js'
import card from '../news/card'
import demo from '../../../constants/demo'
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
          hello
          {
            // links.map(({link,name}) => {
            //   return(

            //     <Minicard key={link} name={name} image={link}/>
            //   )
            //   console.log(link);
              demo[0].data.map((elements) => {
                return (
                <div key={elements.mal_id}>
                    <card img={elements.images.jpg.image_url} title={elements.title} desc={elements.excerpt} /> 
                </div>
                )
              })
}
        </div>
      </div>
    </div>
  )
}

export default Hero