import React from 'react';
import Image from 'next/image';
import Pic from '../../../public/image-1.jpg';
import Two from '../../../public/image-2.jpg';
import Three from '../../../public/image-3.jpg'; 
import Four from '../../../public/image-4.jpg';
import Five from '../../../public/image-5.jpg';


const Main = () => {
  return (
    <>
    <main className='flex  justify-between items-center gap-4 px-[5%]  py-[20%]'>
      <Image 
        src={Pic}
        alt='image-1'
        height={100}
        className='w-[30%] sm:w-[100%] border-none rounded-xl '
      />
      <Image 
        src={Two}
        alt='image-2'
        height={100}
        className='w-[30%] sm:w-[100%] border-none rounded-xl'
      />
      <Image 
        src={Three}
        alt='image-3'
        height={100}
        className='w-[30%] sm:w-[100%] border-none rounded-xl'
      />
    </main>
    <div className='flex flex-wrap  justify-between items-center gap-4 px-4 py-4'>
    <div className='w-[48%]  sm:w-[100%] lg:w-[48%]'>
       <Image 
       src={Four}
       alt='iamge-4'
       height={100}
       className='w-full border-none rounded-xl'/>
   </div>
   <div className='w-[48%]  sm:w-[100%] lg:w-[48%] '>
         <Image 
         src={Five}
         alt='image-5'
         height={100}
         className='w-full border-none rounded-xl '/>
    </div>
    </div>
    </>
  )
}

export default Main;
