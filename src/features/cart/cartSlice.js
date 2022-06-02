import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem : [],
    amount : 5,
    total:0,
    isLoading:true
}

const cartSlice = createSlice({
    name:"cart",
    initialState
})


// console.log(cartSlice);
export default cartSlice.reducer