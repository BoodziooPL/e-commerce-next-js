import React, { useState } from 'react'
import { IoIosContacts } from 'react-icons/io'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { BsTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'

function contact() {
  return (
    <div
      id='contact'
      className='bg-slate-200 pb-2 md:flex md:flex-row md:items-center md:justify-around flex-col text-2xl text-gray-700 lg:text-3xl'>
      <div>
        <div className='flex-col text-center'>
          <div className='flex justify-center'>
            <IoIosContacts className='w-10 h-10' />
          </div>
          <h3>Contact:</h3>
          <div className='flex justify-center items-center space-x-2'>
            <BsTelephoneFill />
            <a href='tel:123456789'>123-123-123</a>
          </div>
          <div className='flex justify-center items-center space-x-2'>
            <GrMail />
            <a href='mailto:name@email.com'>company@company.org</a>
          </div>
          <div className='flex justify-center items-center space-x-2'>
            <FaMapMarkedAlt />
            <p>Poland (FullAddress)</p>
          </div>
        </div>
      </div>
      <div className='flex-col md:mt-3 md:w-[50%]'>
        <form className='flex-col mx-auto w-[90%] md:w-[90%] text-center lg:text-lg'>
          <input
            className='w-[100%] h-[3rem] md:h-[2rem] mb-2 rounded-lg placeholder:text-center'
            type='text'
            placeholder='FirstName'
            name='name'
          />
          <input
            className='w-[100%] h-[3rem] md:h-[2rem] mb-2 rounded-lg placeholder:text-center'
            type='text'
            placeholder='Surname'
            name='surname'
          />
          <input
            className='w-[100%] h-[3rem] md:h-[2rem] mb-2 rounded-lg placeholder:text-center'
            type='text'
            placeholder='email'
            name='email'
          />
          <textarea
            className='w-[100%] h-[4rem] md:h-[2.5rem] rounded-lg placeholder:text-center'
            name='message'
            placeholder='Write something...'
            id='message'></textarea>
          <br />
          <input
            className='w-[50%] py-2 px-2 rounded-xl bg-red-300 md:py-1 '
            type='submit'
            value='Submit'
          />
        </form>
      </div>
    </div>
  )
}

export default contact
