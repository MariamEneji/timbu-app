"use client";

import { removeFromCart } from "@/store/slices/cart-slice";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CartComponent = () => {


    const [totalAmount, setTotalAmount] = useState(0)


  const { cart } = useSelector((state) => state);
  console.log(cart?.cartItems);

  const dispatch = useDispatch()

  function handleRemoveFromCart(getCurrentItemId){
    dispatch(removeFromCart(getCurrentItemId))

  }



  useEffect(() => {

    setTotalAmount(cart?.cartItems.reduce((acc, curr) => acc + curr?.price, 0))

  }, [cart?.cartItems])

  return (
    <div className="min-h-screen md:p-20 p-2">
      <h1 className="font-bold text-xl">Cart</h1>

      <div  className="  flex flex-col md:flex-row justify-center items-center md:px-20 p-2 md:py-10 my-10 w-full h-full md:border md:border-[#A95D17] rounded-xl md:bg-[#f5f5f5] ">
        <div className="flex flex-col md:flex-row gap-4  md:gap-10 w-full">
          <div className="border border-[#A95D17] rounded-xl p-6 min-h-80 md:w-1/2 font-bold bg-white">
            <h2>{cart?.cartItems.length ? 'Items' : 'No Items in cart'}</h2>
            {cart?.cartItems.map((item) => (
              <div className="flex flex-col md:flex-row   md:gap-10 pb-4 border-b border-[#A95D17]">
                <div className="border border-[#A95D17] rounded-xl p-6 w-40 h-40 bg-[#f5f5f5] my-4">
                    <img src={item?.thumbnail} alt={item?.title} className="w-full h-full" />
                </div>

                <div className="flex flex-col my-4 gap-2">
                    <h2>{item?.title}</h2>
                    <h2>${item?.price}</h2>
                    <button onClick={() => handleRemoveFromCart(item?.id)} className="text-red-600 text-left">Remove</button>


                </div>

              </div>
            ))}
          </div>

          <div className="border border-[#A95D17] flex flex-col gap-4 rounded-xl p-6  bg-white  md:w-1/4 h-1/2">
            <h2 className="font-bold">Order Summary</h2>
            <p>Total: ${totalAmount}</p>
            <Link href={'/checkout'}>
            <button className="text-white bg-[#A95D17] border border-[#A95D17] py-2 w-full rounded-lg hover:text-[#A95D17] hover:bg-white">Checkout</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComponent;
