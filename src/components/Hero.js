import React from 'react'
import reda from '../assets/images/reda.jpeg'

const Hero = () => {
  return (
   <div className='bg-gray-100 justify-evenly pb-12 pt-12 ml-auto mr-auto flex w-[100%]'>
        <section className='mt-7'>
            <h2 className='text-[#2d2e32] font-extrabold text-[2.5rem]'>
                Full stack developer 
            </h2>
            <p className='font-thin w-[75%] mt-2'>
                Hey, I am Reda a passionate web developer based in Morocco 
            </p>
        </section>
        <section>
            <img className='rounded-full h-[250px]'
                src={reda}
                alt='Reda Hammada portfolio image' />
        </section>
   </div>
  )
}

export default Hero;
