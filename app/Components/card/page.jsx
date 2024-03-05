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
      <section className=" col-start-3 col-end-13 flex flex-col row-start-2 row-end-9">
        <div className="grid grid-cols-9  h-full grid-rows-7 ">
            <div className="col-start-1  col-end-10 row-start-1  row-end-7">

                <img className='w-full h-[550px]  object-cover' 
                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh40iBKJEJVHPf6RtM5LHUa10hakH8MgZy-mUm-LhQLSYCvaWEvy3n-1C69kORhP639s&usqp=CAU" 
                src="https://dbz-store.com/cdn/shop/products/6_f7ffc081-98cb-4868-9ff6-d23887806a45_990x700.jpg?v=1649998251" 
                // src="https://preview.redd.it/new-poster-for-the-scott-pilgrim-anime-v0-1ki0ha3ifr0c1.jpg?auto=webp&s=846466f799b384b580e23db72489db39e719cdbc" 
                />
            </div>
            <div className="info col-start-1 col-end-10 bg-[#08030376] backdrop-blur-sm lg:row-start-4 lg:row-end-7 row-start-5 row-end-7  ">
              <div className="title text-6xl font-mono tracking-wider">Dragon Ball Z</div>
              <div className="title text-xl font-mono tracking-wider mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore maiores voluptatum voluptates fuga. Tenetur molestiae doloremque minima iste aspernatur placeat soluta sint corrupti, ab amet atque repellat in omnis nisi.</div>
              <div className="flex pt-10 justify-between">
                <div className="left flex gap-5">
                  <Image alt='' src={insta} width={32} height={32}/>
                  <Image alt='' src={meta} width={32} height={32}/>
                  <Image alt='' src={telegram} width={32} height={32}/>
                </div>
                <div className="right flex gap-5">
                  <Image src={chat} alt='' width={32} height={32}/>
                  <Image src={like} alt='' width={32} height={32}/>
                </div>
              </div>
            </div>
        </div>
    </section>
    
    )
}

      export default Card