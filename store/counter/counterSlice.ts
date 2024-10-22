import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  initialized: boolean
}

const initialState: CounterState = {
  value: 0,
  initialized: false
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initCount: (state, action: PayloadAction<number>) => {
        if (state.initialized)
            return;

        if(action.payload < 0){ 
          action.payload = 0;
        } 
        state.value = action.payload;
        state.initialized = true;
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      if (state.value <= 0) return;  
      state.value -= 1
    },
    resetCount: (state, action: PayloadAction<number>) => {
      if(action.payload < 0){ 
        action.payload = 0;
    } 
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, resetCount, initCount } = counterSlice.actions

export default counterSlice.reducer