import React from 'react'
import explore from '../../Assets/explore.svg'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <>
    <div className='menu-section '>
      

        <div className="">
        <div className="btn-general">Movies</div>
            <div className="btn-general">Action</div>
            <div className="btn-general">Drama</div>
            <div className="btn-general">Romance</div>
            <div className="btn-general">Latest</div>
            <div className="btn-general">MarketPlace</div>
            <div className="btn-general">Gallary</div>
            <div className="btn-general">Playlist</div>
        </div>
        <div className="border-t ">
            <div className="btn-general">Settings</div>
            <div className="btn-general">Accounts</div>
            <div className="btn-general">Developer</div>
        </div>
      
      {/* <>
      <div className="mt-10">
        <div className="btn-general">
          <Image src={explore} width={32} height={32}/>
        </div>
        <div className="btn-general">
          <Image src={explore} width={32} height={32}/>
        </div>
        <div className="btn-general">
          <Image src={explore} width={32} height={32}/>
        </div>
     </div>   
            
        <div className="border-t ">
            
        <div className="btn-general">
          <Image src={explore} width={32} height={32}/>
        </div>
        <div className="btn-general">
          <Image src={explore} width={32} height={32}/>
        </div>
        <div className="btn-general">
          <Image src={explore} width={32} height={32}/>
        </div>
        </div>
      </>
        } */}
    </div>
</>
  )
}

export default Sidebar