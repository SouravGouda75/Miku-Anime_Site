"use client"
import React from 'react'
import demo from '../../../constants/demo'
import card from './card'

const page = () => {
  return (
    <div>
       <div className='card bg-red-500 '>
        hello
       {/* {

        // demo[0].data.map(elements=>{
        //   console.log(elements.images.jpg.image_url)
        // })
        // console.log(demo[0].data)
        // demo.map....
        demo[0].data.map((elements) => {
          return (
          <div key={elements.mal_id}>
              <card img={elements.images.jpg.image_url} title={elements.title} desc={elements.excerpt} /> 
          </div>
          )
        })
      } */}
       </div>
    </div>
  )
}

export default page
