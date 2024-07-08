import { addToCart, removeFromCart } from "@/store/slices/cart-slice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddToCart = ({ productItem }) => {
  const { cart } = useSelector((state) => state);
  console.log(cart?.cartItems);

  const dispatch = useDispatch()



function handleAddToCart(){
  dispatch(addToCart(productItem))

} 

function handleRemoveFromCart(){
  dispatch(removeFromCart(productItem?.id))
  
} 

  return (
    <button
      onClick={
        cart?.cartItems.some((item) => item.id === productItem.id)
          ? handleRemoveFromCart
          : handleAddToCart
      }
      className="w-full bg-[#A95D17] rounded-lg p-2 text-white cursor-pointer hover:scale-[1.1] transition-all  "
    >
      {cart?.cartItems.some((item) => item.id === productItem.id)
        ? "Remove from cart"
        : "Add to cart"}
    </button>
  );
};

export default AddToCart;
