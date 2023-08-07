import React from 'react'
import reda from '../../assets/images/reda.jpeg'
import ReusableButton from '../Button/ReusableButton'
import { SocialIcon } from 'react-social-icons'

const Hero = () => {
  return (
   <div className='bg-gray-100  justify-evenly pb-12 pt-32 ml-auto mr-auto flex  flex-wrap w-[100%]'>
        <section className='mt-7 lg:w-[50%] max-[800px]:text-center max-[800px]:order-1 max-[800px]:w-[91%]'>
            <h2 className='text-[#2d2e32] m font-[900] text-[2.5rem]'>
                Full stack web developer 
            </h2>
            <p className='font-thin max-[800px]:w-[100%] max-[800px]:text-center text-xl lg:w-[75%] mt-2'>
                Hey, I am Reda a passionate web developer based in Morocco 
            </p>
            <div >
                <a href='https://drive.google.com/uc?export=download&id=1HH7fxsuzIZvBBIT09kaOGEMfEPmZ7cT_'>
                <ReusableButton text='Download my resume'
                                className='bg-black text-white rounded hover:shadow-2xl mt-5 w-[200px] h-[40px]' />
                </a>     
            </div>
            <div className='mt-9'>
                <SocialIcon className=''
                            url='https://github.com/Reda-Hammada' />
                <SocialIcon  className='ml-5'
                             url='https://www.linkedin.com/in/reda-hammada/' />
                <SocialIcon className='ml-5'
                            url='https://twitter.com/_Reda_Hammada_?t=IyxVzpSgJiN7AA-zjx_6KQ&s=09' />
            </div>
        </section>
        <section className=''>
            <img className='rounded-full h-[250px]'
                src={reda}
                alt='Reda Hammada portfolio image' />
        </section>
   </div>
  )
}

export default Hero;
