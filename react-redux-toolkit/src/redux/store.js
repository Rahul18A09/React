import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from '../feactures/counter/counterSlice'


export const store =  configureStore({
  reducer: {
    counter: counterSlice
  },
})