import React from 'react'
import {like} from '@/app/Assets/icons.js'
import Image from 'next/image'

const Minicard = ({image,name}) => {
  return (
      <div className="w-[fit] h-[fit]  rounded card grid grid-rows-3 grid-cols-3
        bg-[#2c2b2b58]">
        <img className="object-contain w-full h-full col-start-1 col-end-4 row-start-1 row-end-4"
            src={image}
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMUoRp-0fn33Xn6HcKDIs2mtLGX5vuiYZ5Xg&usqp=CAU"
            alt="anime"/>
        <div className="w-full h-full col-start-1 col-end-4 row-start-4 row-end-4 p-1 font-mono tracking-tighter text-white bg-black">
            <h1 className="pb-3 text-2xl ">{name}</h1>
             <div className="flex justify-between w-full px-1">
                <ul className="flex w-[80%] flex-wrap text-xs tracking-wider text-gray-400 gap-x-3 gap-y-1">
                    
                    <li>Action</li>
                <li>Horror</li>
                <li>Romance</li>
                <li>2024</li>
                <li>Hentai</li>
            </ul>
               <Image alt='social links' src={like} width={32} height={32}/>
               </div> 
             
        </div>
    </div>
  )
}

export default Minicard