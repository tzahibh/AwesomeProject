import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../reducers/counterSlice'
import counterReducer from '../reducers/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})