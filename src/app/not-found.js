import Link from 'next/link'
import React from 'react'

const NotFound = () => {



    
  return (
    <div className='h-[80vh]  flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-2xl font-bold'>Not found</h1>
      <Link className='border p-2 ' href={'/'}>Go home</Link>
      
    </div>
  )
}

export default NotFound
