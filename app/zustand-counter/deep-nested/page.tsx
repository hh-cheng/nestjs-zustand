'use client'

import { useCounterStore } from "@/stores/zustand"

// 层级1
const Layer1 = () => {
  const { count } = useCounterStore()
  return (
    <div className="layer">
      <h2>Layer 1 - Count: {count}</h2>
      <Layer2 />
    </div>
  )
}

// 层级2
const Layer2 = () => {
  const { count } = useCounterStore()
  return (
    <div className="layer">
      <h3>Layer 2 - Count: {count}</h3>
      <Layer3 />
    </div>
  )
}

// 层级3
const Layer3 = () => {
  const { count, increment } = useCounterStore()
  return (
    <div className="layer">
      <h4>Layer 3 - Count: {count}</h4>
      <button onClick={increment}>Increment from Layer 3</button>
    </div>
  )
}

export default function DeepNestedPage() {
  return (
    <main>
      <h1>Deep Nested Zustand Demo</h1>
      <Layer1 />
    </main>
  )
}
