import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1 }
  }
})

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})

export const { increment } = counterSlice.actions
