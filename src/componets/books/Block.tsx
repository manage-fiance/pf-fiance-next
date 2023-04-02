import { Book } from '@/models/books';
import {
    Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Rating,
  Skeleton,
  Snackbar,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';

type BookProps = {
  item: Book;
  loading: boolean;
};

export default function BookBlock(props: BookProps) {
  const [isShowToast, setShowToast] = useState(false);
  const router = useRouter();
  const handleDetail = (id: number) => {
    router.push(`/books/${id}`);
  };

  const handleSharing = (id: number) => {
    const currentBook = window.location.toString() + 'books/' + id;
    navigator.clipboard.writeText(currentBook);
    setShowToast(true);
  };

  const { item, loading } = props;

  return (
    <Fragment>
      {loading && <Skeleton variant='rectangular' width={210} height={118} />}
      <Grid item xs={12} md={6} lg={4} key={item.id}>
        <Card sx={{ height: 450 }} className='books-block'>
          <CardMedia component='img' image={item.avatar} height={150} />
          <CardHeader
            title={item.name}
            subheader={<Rating value={parseInt(item.rating)} />}
          ></CardHeader>
          <CardContent>
            <p className='books-block__short-description'>{item.short_description}</p>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleSharing(item.id)} variant='contained'>
              Share
            </Button>
            <Button onClick={() => handleDetail(item.id)} variant='contained'>
              Detail
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={isShowToast}>
        <Alert severity='success' sx={{ width: '100%' }}>
          Copied Success
        </Alert>
      </Snackbar>
    </Fragment>
  );
}
