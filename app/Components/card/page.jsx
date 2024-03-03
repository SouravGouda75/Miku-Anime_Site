import React from 'react'
import insta from '../../Assets/instagram.svg'
import meta from '../../Assets/meta.svg'
import telegram from '../../Assets/telegram.svg'
import like from '../../Assets/like.svg'
import chat from '../../Assets/chat.svg'
import Image from 'next/image'

//   return (
  //       <div className="grid grid-cols-8 h-full gap-1.5 p-1 ">
  //         <div className='picture'>
  //           <img src='https://cdn.wallpapersafari.com/11/97/jl57Gf.jpg'/>
  //         </div>
  //         <div className="info">
  //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim recusandae voluptas tempora iusto voluptatibus, maiores nihil? Soluta omnis nobis eaque aliquid beatae dignissimos, quasi porro voluptatibus illo libero aut accusamus, nostrum eos a id. Temporibus porro assumenda optio quas tempore nesciunt, molestiae, sed fugiat odit soluta iste corporis ipsum? Temporibus porro assumenda optio quas tempore nesciunt, molestiae, sed fugiat odit soluta iste corporis ipsum?
  //         </div>
  //       </div>
  
  const Card = () => {
    return (
    <div className=" lg:w-[100%]  sm:w-[80%] w-[90%] grid grid-rows-5   grid-cols-5 rounded-2xl overflow-hidden aspect-video">
      <img className="h-full w-full col-start-1 col-end-6 row-start-1 row-end-6 "
          src='https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/11/21/date-night-anime.jpg'
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspPcUwFtJkLkbQo3oghag7_9Wh1CDoVr98w&usqp=CAU"
        alt=""/>
        <div className="col-start-1 col-end-6 row-start-4 p-2 row-end-6 font-mono   bg-[#04050496]  text-white
    grid grid-rows-5 grid-col-5 ">
          <div className="heading tracking-wide text-3xl row-start-1 row-end-1">Satoru Gojo</div>
          <div className="info mt-0 tracking-tight h-fit w-fit text-lg 
        leading-6 row-start-2 row-end-3 col-span-2">

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex, atque recusandae magni ratione quidem.
            Natus nesciunt atque eveniet, excepturi incidunt cumque aspernatur vel iusto molestias quam quis iste
            saepe?
          </div>
          <div className="links flex w-[100%]  col-span-6  row-start-4 row-end-5 justify-between">
            <div className="left flex gap-5 ">
              <Image src={insta} width={32} height={32}/>
              <Image src={meta} width={32} height={32}/>
              <Image src={telegram} width={32} height={32}/>
             </div>
             <div className="flex gap-6 pr-2">
             <Image src={chat} width={32} height={32}/>
              <Image src={like} width={32} height={32}/>

             </div>
          </div>
        </div>
      </div>
    
    )
}

      export default Card