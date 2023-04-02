import { Book } from '@/models/books';
import { get } from '@/services/api';
import { getRatingValue } from '@/utils/rating';
import { Button, Grid, Rating, Typography } from '@mui/material';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const fetchBookDetail = async (id: any) => {
  const bookDetailResp = await get(`/api/books/${id}`);
  if (bookDetailResp.success) {
    return bookDetailResp.data?.data;
  }
};

export default function BookDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [book, setBook] = useState<Book>({
    avatar: '',
    created_at: '',
    description: '',
    name: '',
    id: 0,
    short_description: '',
    rating: '',
  });
  useEffect(() => {
    if (!router.isReady) return;
    fetchBookDetail(id)
      .then((res: Book) => {
        const bookData: Book = JSON.parse(JSON.stringify(res));
        setBook(bookData);
      })
      .catch((e) => {});
  }, [id, router.isReady]);
  return (
    <Grid container>
      <Grid item xs={8}>
        <img alt={book.name} src={book?.avatar} />
      </Grid>
      <Grid item xs={4}>
        <h1>{book?.name}</h1>
        <Rating value={getRatingValue(book?.rating)}></Rating>
        <Typography>{book?.description}</Typography>

        <Button>Add to cart</Button>
        <Button>Like</Button>
      </Grid>
    </Grid>
  );
}
