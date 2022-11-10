import React from 'react'
import { IoIosContact } from 'react-icons/io'
import { TbTruckReturn } from 'react-icons/tb'
import { TbTruckDelivery } from 'react-icons/tb'
import Image from 'next/image'

function info() {
  return (
    <div className=' bg-slate-200 h-[5rem] rounded-xl flex items-center md:h-[7rem]'>
      <div className='flex w-[100%] justify-around lg:text-4xl text-gray-700 text-lg'>
        <div className='flex items-center text-green-600 font-bold'>
          <IoIosContact className='text-4xl md:text-6xl' />
          <p>Profesional support</p>
        </div>
        <div className='flex items-center text-red-400 font-semibold'>
          <TbTruckDelivery className='text-4xl md:text-6xl' />
          <p>24h Shipping</p>
        </div>
        <div className='flex items-center font-bold text-green-600'>
          <TbTruckReturn className='text-4xl md:text-6xl' />
          <p>Free Returns</p>
        </div>
      </div>
    </div>
  )
}

export default info
