import React from 'react'
import {insta,meta,telegram,like,chat} from '@/app/Assets/icons.js'
import Image from 'next/image'

  const Card = ({title,banner,description}) => {
    return (
      <section className=" col-start-3 col-end-13 grid grid-cols-8 grid-rows-6  max-h-[600px] row-start-2 row-end-9">
              <img className='col-span-8 row-start-1 row-end-5 min-w-full  min-h-full' src={banner} alt="banner" />
              <div className="absolute top-[22rem]">
            <div className="info col-start-1 col-end-10 bg-[#08030376] backdrop-blur-sm lg:row-start-4 lg:row-end-7 row-start-5 row-end-7  ">

              <div className="title text-6xl font-mono tracking-wider">{title}</div>
              <div className="title text-xl font-mono tracking-wider min-h-[6rem] ">{description.substring(0,200)}...</div>
              <div className="flex  justify-between">
                <div className="left flex gap-5">
                  <Image alt='social links' src={insta} width={32} height={32}/>
                  <Image alt='social links' src={meta} width={32} height={32}/>
                  <Image alt='social links' src={telegram} width={32} height={32}/>
                </div>
                <div className="right flex gap-5">
                  <Image src={chat} alt='social links' width={32} height={32}/>
                  <Image src={like} alt='social links' width={32} height={32}/>
                </div>
              </div>
              </div>
              </div>
          </section> 
    
    )
}

      export default Card