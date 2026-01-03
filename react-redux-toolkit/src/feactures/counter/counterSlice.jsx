import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increament: (state) => {
      state.value += 1
    },
    decreament: (state) => {
      state.value -= 1
    },
    reset: (state) => {
        state.value = 0
    },

    increamentByAmount: (state, action) => {
        state.value += Number(action.payload)
    }
  
  },
})

// Action creators are generated for each case reducer function
export const { increament, decreament, reset, increamentByAmount } = counterSlice.actions

export default counterSlice.reducer