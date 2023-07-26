import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full font-extrabold drop-shadow-2xl '>
        <nav className='w-[100%] pb-4 flex justify-between text-[#2d2e32]'>
            <div className='ml-12 mt-6'>
                <h1 className='text-xl'>Reda.dev</h1>
            </div>
            <div className=''>
                <ul className='flex mr-12 mt-6 justify-between'>
                    <li className='mr-7 cursor-pointer'>Home</li>
                    <li className='mr-7 cursor-pointer'>About</li>
                    <li className='mr-7 cursor-pointer'>Projects</li>
                    <li className='mr-7 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </nav>
    </header> 
 )
}

export default Navbar