import ListBooks from '@/componets/books/List'
import { Button } from '@mui/material'
import React from 'react'

export default function ListBook() {
  return (
    <div>
        <ListBooks />
        <Button>
            Load more
        </Button>
    </div>
  )
}
