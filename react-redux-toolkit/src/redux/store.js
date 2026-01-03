import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feactures/counter/counterSlice';


export const store =  configureStore({
  reducer: {
    counter: counterReducer,
  },
})