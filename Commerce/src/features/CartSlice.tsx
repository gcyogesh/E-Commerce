import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";



const initialState : any = {
    value: 0,
    cart : [],
    totalprice : 0,
    quantity : 0,
    

}



export const cartSlice = createSlice({
    name: 'cart',
    initialState:initialState,
    reducers: {
    
      AddCart: (state, action: PayloadAction<any>)=>{
        state.value += 1
         state.cart.push({ ...action.payload});
         state.totalprice += action.payload.totalprice;
         
       
         
      },
      
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
      },

      
    },
  })



export default cartSlice.reducer;

export const {AddCart} = cartSlice.actions;
