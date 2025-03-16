'use client'

import { increment, store } from "@/stores/redux"
import { Provider, useDispatch, useSelector } from "react-redux"

// 必须用 Provider 包裹整个结构
const ReduxWrapper = ({ children }: { children: any }) => (
  <Provider store={store}>{children}</Provider>
)

// 层级1
const Layer1 = () => {
  const count = useSelector((state: any) => state.counter.value)
  return (
    <div className="layer">
      <h2>Layer 1 - Count: {count}</h2>
      <Layer2 />
    </div>
  )
}

// 层级2
const Layer2 = () => {
  const count = useSelector((state: any) => state.counter.value)
  return (
    <div className="layer">
      <h3>Layer 2 - Count: {count}</h3>
      <Layer3 />
    </div>
  )
}

// 层级3
const Layer3 = () => {
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="layer">
      <h4>Layer 3 - Count: {count}</h4>
      <button onClick={() => dispatch(increment())}>
        Increment from Layer 3
      </button>
    </div>
  )
}

export default function DeepNestedPage() {
  return (
    <ReduxWrapper>
      <main>
        <h1>Deep Nested Redux Demo</h1>
        <Layer1 />
      </main>
    </ReduxWrapper>
  )
}
