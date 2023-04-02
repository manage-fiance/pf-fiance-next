import List from '@/componets/books/List'
import RectangleImageHomepage from '@/componets/retangle';
import { BookRequest } from '@/models/books';
import { Button, Container } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function HomePage() {
  const [filter, setFilter] = useState<BookRequest>({
    limit: 12,
    page: 1,
    title: ''
  })
  const router = useRouter()
  const handleToPageBooks = () => {
    router.push("/books")
  }
  return (
    <div>
      <RectangleImageHomepage />
      <Container maxWidth='lg'>
        <h1>Sach moi cap nhat</h1>
        <List {...filter} />
        <Container>
          <Button onClick={handleToPageBooks}>
            More infor
          </Button>
        </Container>
      </Container>
    </div>
  )
}
