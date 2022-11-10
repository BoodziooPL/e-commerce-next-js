import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { AiFillApple } from 'react-icons/ai'
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
        <div>
          <a href='#'>
            <AiFillApple className='w-10 h-10' />
          </a>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex space-x-4 font-semibold text-[20px] xl:text-[24px] cursor-pointer '>
            <li className=' text-green-600'>
              <a href='#'>Shop</a>
            </li>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Promotion</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
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
