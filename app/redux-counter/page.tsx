'use client'

import { Provider, useSelector, useDispatch } from 'react-redux'
import { store, increment } from '@/stores/redux'

function Counter() {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Redux Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
    </div>
  )
}

export default function ReduxPage() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
