import { useRouter } from 'next/router'
import React from 'react'

export interface TaskDetailPage {}

export default function TaskDetail(props: TaskDetailPage) {
  const router = useRouter()
  return (
    <div>
      <p>This is Detail page</p>
      <p>{JSON.stringify(router.query)}</p>
    </div>
  )
}
