import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const fetchproducts = createAsyncThunk ('productsSlice/fetchproducts', async ()=> {
   const res = await fetch ('http://localhost:9000/products')
    const data = await res.json (); 
    return data;
})


export const productsSlice = createSlice({
  
  initialState : [],
  name: 'productsSlice',
  reducers: {
    // increment: (state) => { 
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // }, 
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.fulfilled, (state,action) => {
        return action.payload;
  }
  )}
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = productsSlice.actions

export default productsSlice.reducer