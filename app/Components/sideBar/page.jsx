import React from 'react'
// import Image from 'next/image'
import { menuItems } from './menuItems'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
    <div className='menu-section'>
      <nav>
        <ul>
          {menuItems.map(({href, title}) => (
            <li className='ml-2 mr-2 my-2' key={title}>
              <Link href={href} className='flex p-2 rounded bg-transparent hover:bg-gray-800 cursor-pointer'>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
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