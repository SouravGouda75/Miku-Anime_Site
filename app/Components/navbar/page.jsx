"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { hamburger, account } from '@/app/Assets/icons.js'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { Dropdown } from '@/app/Components'

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false)
  const [providers, setProviders] = useState(null)
  const { data: session } = useSession()

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()
      console.log(response)
      setProviders(response)
    }
    setUpProviders()
  }, [])
  return (
    <div className='navbar-section letter-style flex w-full'>
      <Link href="/" className="logo flex flex-start mt-2">
        <img className='h-[50px] ml-3' src={"https://wallpaperset.com/w/full/2/6/e/22530.jpg"} alt='logo' />
        <span className='tracking-widest'>
          MIKU
        </span>
      </Link>
      <div className="nav-options flex-end mt-2">
        <div className="flex max-sm:col-start-10 max-sm:col-span-2">
          {/* <Image className='hidden' src={hamburger} width={15} alt='social links' />
          <button 
            onClick={() => setDropdown(!dropdown)}
          >

            <Image src={account} height={0} width={25} alt='social links' />
          </button>
          {dropdown && <Dropdown />} */}

          {session?.user ? (
            <div>
              <button onClick={() => setDropdown(!dropdown)}>
                <Image src={session?.user.image} height={0} width={25} alt='social links' />
              </button>
              {dropdown && <Dropdown onClick={signOut} />}
            </div>
          ) : (
            <>
              {providers && Object.values(providers).map((provider) => (
                <button type='button' key={provider.name} onClick={() => signIn(provider.id)} className='bg-gray-600 text-gray-200 hover:bg-gray-800 hover:text-gray-300 px-2 py-2 rounded'>
                  SignIn
                </button>
              ))}
            </>
          )}

        </div>

      </div>
    </div>
  )
}

export default Navbar