import Macbook from '../assets/macbook.png'
import Image from 'next/image'

function product() {
  return (
    <div className='flex-col md:flex md:flex-row gap-1 '>
      <div className='relative bg-slate-300 mt-2'>
        <div className='relative z-0 overflow-hidden bg-gradient-to-b from-slate-200 to-slate-300 opacity-50 '>
          <Image src={Macbook} />
        </div>
        <div className='absolute top-[75%] left-[50%] -translate-x-2/4 -translate-y-3/4 text-gray-800 text-center space-y-6'>
          <p className='text-3xl font-semibold '>Lorem Ipsum Dolor</p>
          <button className='bg-red-300 py-1 px-6 sm:px-8 sm:py-2 rounded-2xl text-xl font-bold text-white md:px-6'>
            <a href='#'>Click Me</a>
          </button>
        </div>
      </div>
      <div className='relative bg-slate-300 mt-2'>
        <div className='relative z-0 overflow-hidden bg-gradient-to-b from-slate-200 to-slate-300 opacity-50 '>
          <Image src={Macbook} />
        </div>
        <div className='absolute top-[75%] left-[50%] -translate-x-2/4 -translate-y-3/4 text-gray-800 text-center space-y-6'>
          <p className='text-3xl font-semibold '>Lorem Ipsum Dolor</p>
          <button className='bg-red-300 py-1 px-6 sm:px-8 sm:py-2 rounded-2xl text-xl font-bold text-white md:px-6'>
            <a href='#'>Click Me</a>
          </button>
        </div>
      </div>
      <div className='relative bg-slate-300 mt-2'>
        <div className='relative overflow-hidden bg-gradient-to-b from-slate-200 to-slate-300 opacity-50'>
          <Image src={Macbook} />
        </div>
        <div className='absolute top-[75%] left-[50%] -translate-x-2/4 -translate-y-3/4 text-gray-800 text-center space-y-6 '>
          <p className='text-3xl font-semibold '>Lorem Ipsum Dolor</p>
          <button className='bg-red-300 py-1 px-6 sm:px-8 sm:py-2 rounded-2xl text-xl font-bold text-white md:px-6'>
            <a href='#'>Click Me</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default product
