
'use client'
import React from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";


const Footer = () => {
    const pathname = usePathname()
   



  return (

    <div>
        
    <div className={pathname === '/' ? 'flex h-[10vh] absolute bottom-0  w-full justify-between py-4 px-2 md:px-80 bg-[#2B2016] text-white ': 'flex h-[10vh]   w-full justify-between  py-4 px-2 md:px-80 bg-[#2B2016] text-white'} >
        <div>
        <Link href={"/"}>
        <h1 className="font-extrabold text-xl cursor-pointer hover:scale-[1.1] transition-all ">Reeves</h1>
      </Link>
        </div>
        <div>
        <Link href={"/"}>
        <p>Home</p>
      </Link>
          
      <Link href={"/men"}>
        <p>Products</p>
      </Link>
        </div>

        <div>
        <Link href={"/go"}>
        <p>Terms of Use</p>
      </Link>

      <Link href={"/go"}>
        <p>Privacy Policy</p>
      </Link>
        
        </div>

        <div>
        <Link href={"/go"}>
        <p>FAQ</p>
      </Link>

      <Link href={"/go"}>
        <p>Contact Us</p>
      </Link>
          
        </div>

    </div>

</div>
  )
}

export default Footer
