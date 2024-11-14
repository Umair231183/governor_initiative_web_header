import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/logo.png'
const Navbar = () => {
  return (
    <>
    <nav className='h-20 w-full pt-[10px]  flex items-center px-4 bg-sky-800  text-white sticky top-0  '>
      <div  className='flex items-center'>
       <Image
       src={Logo}
       alt='logo'
       width={90}
       height={90}
       className=' mt-16 h-[70px]   object-contain '/>
      </div>
      <div className='flex justify-around items-center text-zinc-500  font-bold pl-20'>
          Tuition Free Education Program on Latest technologies  
      </div>
      <div className=''>
       <ul className='text-white flex justify-around items-center gap-5 pl-20 text-sm'>
        <li>Home</li>
        <li>Apply</li>
        <li>Jobs</li>
        <li>Result</li>
        <li>Courses</li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar
