import { configureStore } from '@reduxjs/toolkit'
import { TodoReducer } from '../features/todo'

export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
})
