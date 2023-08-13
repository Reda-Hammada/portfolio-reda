import React from 'react'
import ReusableImage from '../ImageComponent/ReusableImage'
import HTML from '../../assets/images/html-5.svg'
import CSS from '../../assets/images/css-3.svg'
import Tailwind from '../../assets/images/tailwindcss-icon.svg'
import JavaScript from '../../assets/images/javascript.svg'
import TypeScript from '../../assets/images/typescript-icon.svg';
import ReactJs from '../../assets/images/react.svg'
import VueJs from '../../assets/images/vue.svg'
import PHP from '../../assets/images/php.svg'
import Laravel from '../../assets/images/laravel.svg'
import Github from '../../assets/images/github-icon.svg'
import Git from '../../assets/images/git-icon.svg'

const Skills = () => {
  return (
    <section id='skills-section'
             className='bg-gray-100 w-[100%] pb-32 max-[800px]:pl-0 pl-32 pt-12 '>

        <div className=' max-[800px]:w-[100%] max-[800px]:mr-auto  max-[800px]:ml-auto w-[100%]   mt-10 mr-4 font-[900] text-[2rem]   '>
          <h2 className='max-[800px]:text-center'>Skills</h2>
        </div>
        <div className='flex justify-start max-[800px]:w-[95%] max-[800px]:justify-center mr-auto ml-auto max-[800px]:mr-auto max-[800px]:ml-auto flex-wrap mt-7 w-[100%]'>
            <ReusableImage
               imgContainerStyle='w-[110px] ml-3 mt-4  rounded shadow-sm text-center bg-white'
               imgStyle='w-[50%] max-[800px]:mb-3 ml-auto mr-auto mt-5 mb-3'
               src={HTML}
               alt='HTML Icon'

            />
            <ReusableImage
               imgContainerStyle='w-[110px] ml-3 mt-4  rounded shadow-sm text-center bg-white'
               imgStyle='w-[50%] max-[800px]:mb-3 ml-auto mr-auto mt-5 mb-3'
               src={CSS}
               alt='CSS Icon'

            />
           
            <ReusableImage
               imgContainerStyle='w-[110px] h-content ml-3 mt-4  rounded shadow-sm text-center bg-white '
               imgStyle='w-[50%] max-[800px]:mb-3 ml-auto mr-auto mt-10'
               src={Tailwind}
               alt='Tailwind css Icon'

            />
            <ReusableImage
               imgContainerStyle='w-[110px] h-content ml-3 mt-4 rounded shadow-sm text-center bg-white '
               imgStyle='w-[70%] max-[800px]:mb-3 ml-auto mr-auto mt-4'
               src={JavaScript}
               alt='Javascript Icon'

            />
             <ReusableImage
               imgContainerStyle='w-[110px] h-content ml-3 mt-4 rounded shadow-sm text-center bg-white '
               imgStyle='w-[70%] max-[800px]:mb-3 ml-auto mr-auto mt-4'
               src={TypeScript}
               alt='TypeScript Icon'

            />
             <ReusableImage
               imgContainerStyle='w-[110px] h-content ml-3 mt-4 rounded shadow-sm text-center bg-white '
               imgStyle='w-[70%] max-[800px]:mb-3 ml-auto mr-auto mt-5'
               src={ReactJs}
               alt='ReactJs Icon'

            /> 
            <ReusableImage
              imgContainerStyle='w-[110px] h-content ml-3 mt-4 rounded shadow-sm text-center bg-white '
              imgStyle='w-[70%] max-[800px]:mb-3 ml-auto mr-auto mt-6'
              src={VueJs}
              alt='VueJs Icon'

            />
            <ReusableImage
               imgContainerStyle='w-[110px] ml-3 mt-4 rounded shadow-sm text-center bg-white '
               imgStyle='w-[80%] max-[800px]:mb-3 ml-auto mr-auto mt-7'
               src={PHP}
               alt='PHP Icon'

            />
            <ReusableImage
               imgContainerStyle='w-[110px] ml-3 mt-4 rounded shadow-sm text-center bg-white '
               imgStyle='w-[70%] max-[800px]:mb-3 ml-auto mr-auto mt-4'
               src={Laravel}
               alt='Laravel Icon'

            />  
            <ReusableImage
               imgContainerStyle='w-[110px] ml-3 mt-4 rounded shadow-sm text-center bg-white '
               imgStyle='w-[70%] max-[800px]:mb-3 ml-auto mr-auto mt-4'
               src={Github}
               alt='Github Icon'

            />  
            <ReusableImage
               imgContainerStyle='w-[110px] ml-3 mt-4 rounded shadow-sm text-center bg-white '
               imgStyle='w-[70%] pt-2 pb-2 max-[800px]:mb-3 ml-auto mr-auto mt-1 max-[800px]:mt-4' 
               src={Git}
               alt='Laravel Icon'

            />                
          </div>
    </section>
  )
}

export default Skills