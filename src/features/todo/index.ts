import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TodoProps = {
  name: string
  isDone: boolean
}

type TodoState = {
  items: Array<TodoProps>
}

const initialState: TodoState = {
  items: [],
}

const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, actions: PayloadAction<TodoProps>) => {
      state.items.push(actions.payload)
    },
    updateTodo: (state, actions: PayloadAction<{ index: number; todo: TodoProps }>) => {
      state.items[actions.payload.index] = actions.payload.todo
    },
  },
})

export const { addTodo, updateTodo } = TodoSlice.actions
export const TodoReducer = TodoSlice.reducer
