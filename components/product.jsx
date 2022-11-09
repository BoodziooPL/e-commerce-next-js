import Macbook from '../assets/macbook.png'
import Beats from '../assets/beats.png'
import Iphone from '../assets/iphone.png'
import Powerbank from '../assets/powerbank.png'
import Image from 'next/image'

function product() {
  return (
    <div className=' bg-slate-200 rounded-xl flex-col md:flex md:flex-row py-2 px-2 md:flex-wrap justify-center'>
      <div>
        <div className=' bg-green-800 md:w-[45vw] rounded-xl mx-1 my-2 flex justify-center relative'>
          <div className='h-[100%]'>
            <Image src={Macbook} />
          </div>

          <div className='absolute w-[100%] h-[100%] rounded-xl text-center flex-col center z-10 bg-gray-900 bg-opacity-50'>
            <h1 className='text-[2.5rem] sm:mt-[20%] md:text-[4rem] md:mt-3 xl:text-[5rem] xl:mt-[10%] font-black'>
              Hello
            </h1>
            <p className='font-semibold w-[80%] text-xl mx-auto '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem esse laborum eligendi magnam.
            </p>
            <button className='bg-red-500 rounded-xl whitespace-nowrap font-semibold py-1 px-1 mt-5'>
              <a href='#'>Checkout</a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className=' bg-green-800 md:w-[45vw] rounded-xl mx-1 my-2 flex justify-center relative'>
          <div className='h-[50%]w-[577px] h-[433px]'>
            <Image src={Beats} className='w-[577px] h-[433px] relative' />
          </div>

          <div className='absolute w-[100%] h-[100%] rounded-xl text-center flex-col center z-10 bg-gray-900 bg-opacity-50'>
            <h1 className='text-[2.5rem] sm:mt-[20%] md:text-[4rem] md:mt-3 xl:text-[5rem] xl:mt-[10%] font-black'>
              Hello
            </h1>
            <p className='font-semibold w-[80%] text-xl mx-auto '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem esse laborum eligendi magnam.
            </p>
            <button className='bg-red-500 rounded-xl whitespace-nowrap font-semibold py-1 px-1 mt-5'>
              <a href='#'>Checkout</a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className=' bg-green-800 md:w-[45vw] rounded-xl mx-1 my-2 flex justify-center relative'>
          <div className='h-[100%]'>
            <Image src={Powerbank} className='w-[30rem]' />
          </div>

          <div className='absolute w-[100%] h-[100%] rounded-xl text-center flex-col center z-10 bg-gray-900 bg-opacity-50'>
            <h1 className='text-[2.5rem] sm:mt-[20%] md:text-[4rem] md:mt-3 xl:text-[5rem] xl:mt-[10%] font-black'>
              Hello
            </h1>
            <p className='font-semibold w-[80%] text-xl mx-auto '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem esse laborum eligendi magnam.
            </p>
            <button className='bg-red-500 rounded-xl whitespace-nowrap font-semibold py-1 px-1 mt-5'>
              <a href='#'>Checkout</a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className=' bg-green-800 md:w-[45vw] rounded-xl mx-1 my-2 flex justify-center relative'>
          <div className='h-[100%]'>
            <Image src={Iphone} className='w-[30rem]' />
          </div>

          <div className='absolute w-[100%] h-[100%] rounded-xl text-center flex-col center z-10 bg-gray-900 bg-opacity-50'>
            <h1 className='text-[2.5rem] sm:mt-[20%] md:text-[4rem] md:mt-3 xl:text-[5rem] xl:mt-[10%] font-black'>
              Hello
            </h1>
            <p className='font-semibold w-[80%] text-xl mx-auto '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem esse laborum eligendi magnam.
            </p>
            <button className='bg-red-500 rounded-xl whitespace-nowrap font-semibold py-1 px-1 mt-5'>
              <a href='#'>Checkout</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default product
