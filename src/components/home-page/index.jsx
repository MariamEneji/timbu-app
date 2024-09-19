'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'



const HomePage = () => {
  const pathname = usePathname();



  return (
    
    <div  className='h-screen bg-center bg-cover bg-no-repeat ' id='hero' >

      <div className='h-full w-full bg-black/70  flex flex-col justify-center items-center  text-center  text-white p-6 pt-10 md:p-36 lg:p-72'>

        <p className='pb-10 md:text-2xl font-white'>Shoes are very important to people because they provide protection and lead us to adventure. In the Holocaust Museum, there are over 25,000 shoes that remain from the ruins of the concentration camps. Everyone who sees these shoes are left with profound thought because every one of them has the imprint of</p>

       <Link href={'/men'} className='bg-[#A95D17] text-white font-bold px-6 py-2 border border-[#A95D17] rounded-xl'>Our Products</Link>

      

      </div>


   
    

      
      
      
    </div>
  )
}

export default HomePage
