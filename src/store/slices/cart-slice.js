import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState = {
    cartItems : []
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addToCart(state,action){
            console.log(state, action);
            state.cartItems.push(action.payload)

        },
        removeFromCart(state, action){
            let copyCartItems =[...state.cartItems];
            copyCartItems = copyCartItems.filter((item) => item.id !== action.payload);

            state.cartItems= copyCartItems;

            return state
            
        }
    }
})





export const {addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;