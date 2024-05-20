import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../reducers/todoSlice'
import filtersReducer from '../reducers/todoSlice'

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
})