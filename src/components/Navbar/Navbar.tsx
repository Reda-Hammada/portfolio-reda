import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {

    const [isAnimationVisible, setAnimationVisible] = useState(false);

    const handleNavBarVisibility = () =>  setAnimationVisible(!isAnimationVisible);

    
  return (
    <header className='w-full fixed bg-white z-10 font-[900] shadow-sm '>
        <nav className='w-[100%] pb-4 flex justify-between text-[#2d2e32]'>
            <div className='ml-12 mt-6'>
                <h1 className='text-xl'>Reda.dev</h1>
            </div>
            <div className=''>

                {/*navbar list for large screens  */}
                <ul className='lg:flex min-[320px]:hidden   mr-12 mt-6 justify-between'>
                    <li className='mr-7 cursor-pointer hover:text-[#147efb]'>Home</li>
                    <li className='mr-7 cursor-pointer hover:text-[#147efb]'>Skills</li>
                    <li className='mr-7 cursor-pointer hover:text-[#147efb]'>Projects</li>
                    <li className='mr-7 cursor-pointer hover:text-[#147efb]'>About</li>
                    <li className='mr-7 cursor-pointer hover:text-[#147efb]'>Contact</li>

                </ul>
                {/* Navbar burger */}
                <FontAwesomeIcon className='font-[900] cursor-pointer hover:text-[#147efb] lg:hidden mr-12 mt-6 text-2xl'
                                 onClick={handleNavBarVisibility}
                                 icon={faBars} 
                                 size='lg'/>

            </div>
            {/*Navbar for mobile and tablet */}
            <motion.div  className='bg-white absolute h-screen lg:hidden max-[800px]:block  w-screen bottom-0 top-0 left-0 '
                         animate={{x: isAnimationVisible? 0 : 2000}}
                         transition={{ ease: "easeInOut", duration: 0.5 }}>
             <div   onClick={handleNavBarVisibility}
                    className='font-extrabold	 w-[100%] ml-[85%] text-[30px] rounded hover:text-[#147efb] cursor-pointer font-poppins mr-12 mt-5 mb-12'>X</div>
             <ul className=' flex-col text-center w-[100%] text-2xl mt-28 mr-12 mt-6 justify-center'>
                    <li className='mr-7 cursor-pointer mb-6 hover:text-[#147efb]'>Home</li>
                    <li className='mr-7 cursor-pointer mb-6  hover:text-[#147efb]'>Skills</li>
                    <li className='mr-7 cursor-pointer mb-6  hover:text-[#147efb]'>Projects</li>
                    <li className='mr-7 cursor-pointer mb-6 hover:text-[#147efb]'>About</li>
                    <li className='mr-7 cursor-pointer mb-6 hover:text-[#147efb]'>Contact</li>
                </ul>
            </motion.div>
        </nav>
        
    </header> 
 )
}

export default Navbar