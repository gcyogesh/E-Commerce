import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";



const initialState : any = {
    value: 0,
    cart : [],
    totalprice : 0,
    quantity : 0,

}


const savedState = localStorage.getItem("reduxState");
const persistedState = savedState ? JSON.parse(savedState) : initialState;


export const cartSlice = createSlice({
    name: 'cart',
    initialState:persistedState,
    reducers: {
    
      AddCart: (state, action: PayloadAction<any>)=>{
        state.value += 1
         state.cart.push({ ...action.payload});
         state.totalprice += action.payload.totalprice;
         localStorage.setItem("reduxState", JSON.stringify(state));
      },
      
      
      incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload
        localStorage.setItem("reduxState", JSON.stringify(state));
      },
      removeFromCart: (state, action: PayloadAction<number>) => {
        const indexToRemove = action.payload;
        const itemToRemove = state.cart[indexToRemove];
        state.cart.splice(indexToRemove, 1);
        state.totalprice -= itemToRemove.totalprice;
        localStorage.setItem("reduxState", JSON.stringify(state));
    },
    plusByOne: (state) => {
      state.value += 1;
      // Increment totalprice by the last item's price in the cart
      const lastItem = state.cart[state.cart.length - 1];
      if (lastItem) {
        state.totalprice += lastItem.totalprice;
        console.log(state.totalprice)
      }
    },
    


      
    },
  })



export default cartSlice.reducer;

export const {AddCart, removeFromCart, plusByOne} = cartSlice.actions;
