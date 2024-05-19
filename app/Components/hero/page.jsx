"use client"
import React, { useEffect, useState } from 'react'
import Slider from '../slider/page'
import Minicard from '../card/minicard'
import links from '../../../constants/topanime.js'
import Newscard from '../news/newscard'
const Hero = () => {
  const [data,setData]=useState({})
 
 

  useEffect(() => {
    
    const run=async()=>{
      const res=await fetch('http://localhost:3000/api/test')
      const ans=await res.json()
      // console.log(ans.data);
      setData(await ans.data)
      setData(await ans.data)
    }
  
      run()
  }, [])
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
            links.map(({ link, name }) => {
              // console.log(link);
              return (

                <Minicard key={link} name={name} image={link} />
              )
              
            })
          }
        </div>
      </div>

      <div className="news">
        {/* <button className='bg-red-500 p-1 rounded-lg'
        onClick={e=>setClick(!click)}>Click</button> */}
        {/* <button className='bg-red-500 p-1 rounded-lg'
        onClick={e=>setClick(!click)}>Click</button> */}
        <div className="content">

      {/* {
        !click &&
      {/* {
        !click &&
        data.map(element=>{
          console.log(element)
          return(
            <Card key={element.mal_id}
            description={element.excerpt}
            title={element.title}
            images={element.images.jpg.image_url}/>
          )})
          
          
        } */}
     
      {
      
        Array.from(data).map(element=>{
          console.log(element)
          return(
            <Newscard key={element.mal_id}
            description={element.excerpt}
            title={element.title}
            images={element.images.jpg.image_url}/>
          )})
          
          
        }
        </div>
      </div>
    </div>
  )
}

export default Hero