"use client";


import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import atm from '../../../public/atm.png'
import Link from "next/link";

const CartComponent = () => {


    const [totalAmount, setTotalAmount] = useState(0)


  const { cart } = useSelector((state) => state);
  console.log(cart?.cartItems);





  useEffect(() => {

    setTotalAmount(cart?.cartItems.reduce((acc, curr) => acc + curr?.price, 0))

  }, [cart?.cartItems])

  return (
    <div className="min-h-screen md:p-20 p-2">
      <h1 className="font-bold text-xl">Check out</h1>

      <div  className="  flex flex-col-reverse md:flex-row justify-center  md:px-20 p-2 md:py-10 my-10 w-full h-full md:border md:border-[#A95D17] rounded-xl md:bg-[#f5f5f5] gap-4  md:gap-10  ">

      <div className="border border-[#A95D17] flex flex-col gap-4 rounded-xl p-6  bg-white  md:w-2/3 h-1/2">

        <div>

        <h1 className="font-bold text-xl">Make Payment</h1>
        <p className="">We're almost there. Let's complete the final stage</p>

        </div>

        <div>
            <div className="flex items-center justify-between">
                <p>Card Name</p>
                <Image src={atm} alt="atm" />
            </div>
            <input className="border border-[#A95D17] w-full p-2 rounded my-2 " type="text" placeholder="Input name on card" />

        </div>


        <div>
            <p>Card Number</p>
            <input className="border border-[#A95D17] w-full p-2 rounded my-2 " type="text" placeholder="Input Number on card" />
        </div>


        <div className="flex gap-4">
        <div>
            <p>Expiration Date</p>
            <input className="border border-[#A95D17] w-full p-2 rounded my-2 " type="text" placeholder="MM/DD" />
        </div>

        <div>
            <p>CVV</p>
            <input className="border border-[#A95D17] w-full p-2 rounded my-2 " type="text" placeholder="CVV" />
        </div>

        </div>



        <Link href={'/payment'}>
        <button className="text-white bg-[#A95D17] border border-[#A95D17] py-2 w-full rounded-lg hover:text-[#A95D17] hover:bg-white">Make Payment</button>
        </Link>
       

      


         
           
          </div>
       

          <div className="border border-[#A95D17] flex flex-col gap-4 rounded-xl p-6  bg-white  md:w-1/3 h-1/2">
            <h2 className="font-bold">Payment Summary</h2>
            <p >Total: ${totalAmount}</p>
           
          </div>
        </div>
      </div>
  
  );
};

export default CartComponent;
