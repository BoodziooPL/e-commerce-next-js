import React from 'react'
import { IoIosContact } from 'react-icons/io'
import { TbTruckReturn } from 'react-icons/tb'
import { TbTruckDelivery } from 'react-icons/tb'

function info() {
  return (
    <div className=' bg-slate-200 flex items-center md:h-[7rem]'>
      <div className='flex-col w-[100%] justify-center sm:flex sm:flex-row sm:justify-around sm:h-[5rem] lg:text-2xl text-gray-700 text-md'>
        <div className='flex items-center justify-center text-green-600 font-semibold'>
          <IoIosContact className='text-4xl md:text-6xl' />
          <p>Profesional support</p>
        </div>
        <div className='flex items-center justify-center  text-red-400 font-bold'>
          <TbTruckDelivery className='text-4xl md:text-6xl' />
          <p>24h Shipping</p>
        </div>
        <div className='flex items-center font-semibold justify-center  text-green-600'>
          <TbTruckReturn className='text-4xl md:text-6xl' />
          <p>Free Returns</p>
        </div>
      </div>
    </div>
  )
}

export default info
