// app/zustand-counter/hybrid/page.tsx
import { useCounterStore } from '@/stores/zustand'
import { Suspense } from 'react'

// 服务端组件
async function ServerComponent() {
  const data: any = await fetchData()
  return <div>Server Data: {data}</div>
}

// 客户端组件
function ClientLayer() {
  const { count } = useCounterStore()
  return <div>Client Count: {count}</div>
}

export default function HybridPage() {
  return (
    <div>
      <Suspense fallback="Loading...">
        <ServerComponent />
        <ClientLayer />
      </Suspense>
    </div>
  )
}

function fetchData (){
  return { data: 'data from server' }
}

