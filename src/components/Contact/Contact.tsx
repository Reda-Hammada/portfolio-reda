import React from 'react'
import ReusableButton from '../Button/ReusableButton';

const Contact = () => {
  return (
    <div className='w-[100%] pb-12  pt-7  '>
        <div className='max-[800px]:text-center max-[800px]:w-[80%] max-[800px]:mr-auto max-[800px]:ml-auto w-[80%]  mt-5 mb-6 ml-28'>
            <h2 className='font-[900] text-[2rem]'>Get in Touch</h2>

        </div>
        <div className='w-[80%] max-[800px]:w-[100%] ml-32 max-[800px]:w-[85%] w-[80%] max-[800px]:ml-auto max-[800px]:mr-auto '>
            <p className='w-[60%] max-[800px]:text-center max-[800px]:w-[100%] text-[1.2rem]'>Are you looking for a fast-performing and user-friendly website to represent your product or business? or looking for any kind of consultation? or want to ask questions? or have some advice for me or just want to say "Hi 👋" in any case feel free to Let me know. I will do my best to respond back. 😊 The quickest way to reach out to me is via email.</p>
        </div>
        <div className='ml-32 max-[800px]:ml-0 max-[800px]:text-center'>
            <a href="mailto:hammada.reda.dev@gmail.com">
                <ReusableButton  className='bg-black text-white rounded  mt-5  w-[300px] h-[45px] hover:border-[#147efb] hover:bg-white  pt-2 pb-2   hover:text-[#147efb]   font-bold ' 
                text='hammada.reda.dev@gmail.com'/>
            </a>
        </div>
    </div>
  )
}

export default Contact