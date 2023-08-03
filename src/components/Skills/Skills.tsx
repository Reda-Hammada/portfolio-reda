import React from 'react'
import HTML from '../assets/images/html-5.svg'
import CSS from '../assets/images/css-3.svg'
import Tailwind from '../assets/images/tailwindcss-icon.svg'
import JavaScript from '../assets/images/javascript.svg'
import TypeScript from '../assets/images/typescript-icon.svg';
import ReactJs from '../assets/images/react.svg'
import VueJs from '../assets/images/vue.svg'
import PHP from '../assets/images/php.svg'
import Laravel from '../assets/images/laravel.svg'

const Skills = () => {
  return (
    <section className='bg-gray-100 w-[100%] pb-32  pl-32 pt-12 mb-16'>

        <div className=' max-[800px]:w-[50%] max-[800px]:mr-auto  max-[800px]:ml-auto w-[70%] text-start  mt-10 mr-4 font-[900] text-[2rem]   '>
          <h2>Skills</h2>
        </div>
        <div className='flex  max-[800px]:w-[100%]  flex-wrap mt-7 w-[90m%]'>
            <div className='w-[110px] ml-3 mt-4  rounded shadow-sm text-center bg-white '>
              <img className='w-[50%] ml-auto mr-auto mt-5 '
                  src={HTML}
                  alt='html icon' />
            </div>
            <div className='w-[110px] ml-3 mt-4  rounded shadow-sm text-center bg-white '>
              <img className='w-[50%] max-[800px]:mb-3 ml-auto mr-auto mt-5 mb-3'
                  src={CSS}
                  alt='css icon' />
            </div>
            <div className='w-[110px] h-content ml-3 mt-4  rounded shadow-sm text-center bg-white '>
              <img className='w-[50%] max-[800px]:mb-3 ml-auto mr-auto mt-10'
                  src={Tailwind}
                  alt='tailwind css icon' />
            </div>
            <div className='w-[110px] h-content ml-3 mt-4 rounded shadow-sm text-center bg-white '>
              <img className='w-[70%]  max-[800px]:mb-3 ml-auto mr-auto mt-4'
                  src={JavaScript}
                  alt='javascript icon' />
            </div>
            <div className='w-[110px] ml-3 h-content  mt-4 rounded shadow-sm text-center bg-white '>
              <img className='w-[70%] max-[800px]:mb-3 ml-auto mr-auto mt-4'
                  src={TypeScript}
                  alt='Typescript icon' />
            </div>
            <div className='w-[110px] ml-3 mt-4  h-content rounded shadow-sm text-center bg-white '>
              <img className='w-[70%] max-[800px]:mb-3 ml-auto mr-auto mt-5'
                  src={ReactJs}
                  alt='React icon' />
            </div>
            <div className='w-[110px]  h-content ml-3 mt-4 rounded shadow-sm text-center bg-white '>
              <img className='w-[70%] max-[800px]:mb-3 ml-auto mr-auto mt-6'
                  src={VueJs}
                  alt='Vue.js icon' />
            </div>
            <div className='w-[110px] ml-3 mt-4 rounded shadow-sm text-center bg-white '>
              <img className='w-[80%] max-[800px]:mb-3 ml-auto mr-auto mt-7'
                  src={PHP}
                  alt='PHP icon' />
            </div>
            <div className='w-[110px] ml-3  mt-4 rounded shadow-sm text-center bg-white '>
              <img className='w-[70%] mb-3 max-[800px]:mb-3 ml-auto mr-auto mt-5'
                  src={Laravel}
                  alt='Laravel icon' />
            </div>
          
          </div>
    </section>
  )
}

export default Skills