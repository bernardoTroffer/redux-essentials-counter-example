import { createSlice } from '@reduxjs/toolkit'
import {Counter} from "../../Counter";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    counter: new Counter()
  },
  reducers: {
    increment: (state) => {
      const newCounter = Counter.createWith(state.counter)
      newCounter.increment()
      state.counter = newCounter
    },
    decrement: (state) => {
      const newCounter = Counter.createWith(state.counter)
      newCounter.decrement()
      state.counter = newCounter
    },
    incrementByAmount: (state, action) => {
      const newCounter = Counter.createWith(state.counter)
      newCounter.incrementByAmount(action.payload)
      state.counter = newCounter
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
//export const selectCount = (state) => state.counter.value
export const selectCount = (state) => state.counter.counter.getCount()
export default counterSlice.reducer
