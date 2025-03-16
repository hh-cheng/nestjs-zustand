'use client'

import { useCounterStore } from '@/stores/zustand'

export default function ZustandPage() {
  const { count, increment } = useCounterStore()
  
  return (
    <div>
      <h1>Zustand Counter: {count}</h1>
      <button onClick={increment}>+1</button>
    </div>
  )
}
