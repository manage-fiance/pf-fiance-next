import List from '@/componets/books/List'
import RectangleImageHomepage from '@/componets/retangle';
import { BookRequest } from '@/models/books';
import { Box, Button, Container, Skeleton } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function HomePage() {
  const [filter, setFilter] = useState<BookRequest>({
    limit: 12,
    page: 1,
    title: ''
  })

  const [isLoading, setLoading] = useState(true)
  const handleFetchingData = (value: boolean) => {
    setLoading(value)
  }
  const router = useRouter()
  const handleToPageBooks = () => {
    router.push("/books")
  }
  return (
    <div>
      <RectangleImageHomepage />
      <Container maxWidth='lg'>
        <h1>Sach moi cap nhat</h1>
        {isLoading &&
          <Skeleton />}

        <Container>
          <List limit={filter.limit} page={filter.page} onFetchSuccess={handleFetchingData} />
          <Box sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Button onClick={handleToPageBooks} variant='contained' disabled={isLoading}>
              More infor
            </Button>
          </Box>
        </Container>
      </Container>
    </div>
  )
}
