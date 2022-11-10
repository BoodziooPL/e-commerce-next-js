import React from 'react'

function navmodule() {
  return (
    <div className=' bg-gradient-to-b from-slate-300 to-slate-400 w-[100vw] h-[90vh] flex justify-center rounded-xl mt-2 z-50 relative'>
      <ul className='flex-col w-[40%] h-[100%] mt-[20%] text-left font-medium text-lg space-y-6'>
        <li className='h-[10%] uppercase text-2xl text-green-600 font-bold'>
          <a href='#'>Shop</a>
        </li>
        <li className='h-10'>
          <a href='#'>Home</a>
        </li>
        <li className='h-10'>
          <a href='#'>Blog</a>
        </li>
        <li className='h-10'>
          <a href='#'>Promotions</a>
        </li>
        <li className='h-10'>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default navmodule
