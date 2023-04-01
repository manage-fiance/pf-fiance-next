import { TaskDetail } from '@/models/todo-list'
import Link from 'next/link'
import React from 'react'



export default function TodoApp() {
    const dataList: Array<TaskDetail> = [
        {
            id: 1,
            title: "Learn react",
            short_description: "Apply Next JS",
            description: ""
        }
    ] 
  return (
    <div>
        <p>This is page Todo App</p>
        <ul>
            {dataList.map((item: TaskDetail) => <li key={item.id}>
                <Link href={`/todo-app/${item.id}`}>
                    {item.title}
                </Link>
            </li>)}
            
        </ul>
    </div>
  )
}
