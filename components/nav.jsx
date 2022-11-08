import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import Image from 'next/image'
import Logo from '../assets/shopping.png'
import Navmodule from './navmodule'

function nav() {
  const [active, setActive] = useState(false)
  const handlerMenu = () => {
    setActive(!active)
  }
  return (
    <>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <div className='w-12 h-12'>
          <Image src={Logo} alt='storeLogo' />
        </div>
        <div className='hidden md:flex'>
          <ul className='flex space-x-4 font-semibold text-[20px] xl:text-[24px] cursor-pointer '>
            <li className=' text-green-600'>Shop</li>
            <li>Home</li>
            <li>Blog</li>
            <li>Promotion</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='active:animate-spin md:hidden' onClick={handlerMenu}>
          {active ? (
            <GrClose className='w-10 h-10' />
          ) : (
            <GiHamburgerMenu className='w-10 h-10' />
          )}
        </div>
      </div>
      <div className='flex justify-end '>{active ? <Navmodule /> : null}</div>
    </>
  )
}

export default nav
