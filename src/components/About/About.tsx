import React from 'react'
import reda from '../../assets/images/coder.jpg'
import ReusableImage from '../ImageComponent/ReusableImage'
const About = () => {
  return (
    <div  id='about-section' 
         className='w-[100%]    mt-12 mb-32'>
        <div className='max-[800px]:text-center max-[800px]:w-[80%] max-[800px]:mr-auto max-[800px]:ml-auto w-[80%]  mt-5 mb-6 ml-28'>
          <h2 className='  font-[900]  text-[2rem]'>About me</h2>

        </div>
        <div className='w-[80%] max-[800px]:w-[85%] w-[80%] max-[800px]:ml-auto max-[800px]:mr-auto  ml-auto mr-auto flex justify-center max-[800px]:flex-col'>
          <ReusableImage imgContainerStyle='w-[100%]'
                         imgStyle='h-[290px] max-[800px]:w-[100%] text-center rounded'
                         src={reda}
                         alt='about me image coding computer reda hammada'

             />
         
          <div className='w-[100%] max-[800px]:mt-2   h-[290px] text-[1.2rem] text-start ml-6 max-[800px]:ml-0 max-[800px]:mt-2 max-[800px]:text-center'>
              <p>
                I'm a Full Stack Web Developer Based in Morocco. I like to code things from scratch, and enjoy bringing ideas to life in the browser. Whatever if it is a simple website or complex web Applications, I have serious passion for providing digital solution to individual and businesses needs through programming,design thinking and prototyping, coding for me is solving real life problems with digitalized solutions .
              </p>
          </div>
        </div>
    </div>
  )
}

export default About