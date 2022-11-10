import Image from 'next/image'
import phone from '../assets/phone.png'
function header() {
  return (
    <div className=' bg-slate-200 h-[20rem] relative overflow-hidden'>
      <div className='absolute -right-52 top-0 xl:right-48 xl:-top-12 '>
        <Image src={phone} />
      </div>
      <div className='flex-col space-y-1 px-5 ml-4 py-16 w-[100%] z-10 absolute md:w-[80%] md:mx-auto'>
        <p className='text-[1.1rem] md:text-[1.6rem text-gray-800 font-semibold lg:text-[2rem]'>
          Lorem ipsum
        </p>
        <p className='text-[1.6rem] md:text-[2.4rem] text-gray-800 font-semibold lg:text-[3rem]'>
          Lorem ipsum dolor
        </p>
        <h1 className='text-[3.2rem] font-black text-white md:text-[4.6rem] lg:text-[5rem]'>
          Header
        </h1>
        <button className='bg-red-400 text-white font-semibold rounded-full whitespace-nowrap px-5 py-3 text-[1.6rem] mt-5 md:absolute md:left-[60%] md:top-[60%] md:-translate-x-1/2 md:-translate-y-1/2 lg:left-[45%] lg:top-[65%] xl:top-[70%] xl:left-[40%] xl:-translate-y-3/4 hover:bg-transparent hover:border-red-400 border-solid hover:border-4'>
          Buy it now
        </button>
      </div>
    </div>
  )
}

export default header
