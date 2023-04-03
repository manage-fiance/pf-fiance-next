import ListBooks from '@/componets/books/List'
import { Button } from '@mui/material'
import React from 'react'

export default function ListBook() {
    const handleSuccessData = (value: boolean) => {
        console.log(value)
    }
  return (
    <div>
        <ListBooks onFetchSuccess={handleSuccessData}/>
        <Button>
            More infomation...
        </Button>
    </div>
  )
}
