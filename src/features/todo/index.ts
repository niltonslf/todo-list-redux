import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type TodoState = {
  items: Array<string>
}

const initialState: TodoState = {
  items: ['one', 'two'],
}

const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, actions: PayloadAction<string>) => {
      state.items.push(actions.payload)
    },
  },
})

export const { addTodo } = TodoSlice.actions
export const TodoReducer = TodoSlice.reducer
