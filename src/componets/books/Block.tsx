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

export default function BookBlock(props: BookProps, className?: string) {
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

  const handleHover = () => {
    console.log('hover');
  };

  const { item, loading } = props;
  return (
    <Fragment>
      {loading && <Skeleton variant='rectangular' width={210} height={118} />}
      <Grid item xs={12} md={6} lg={4} key={item.id} className={className}>
        <div className='card-background'>
          <img src={item.avatar} alt={item.name} className='card_bg' />
          <div className='card_content'>
            <h3 className='card__category'></h3>
          </div>
        </div>
      </Grid>

      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} open={isShowToast}>
        <Alert severity='success' sx={{ width: '100%' }}>
          Copied Success
        </Alert>
      </Snackbar>
    </Fragment>
  );
}
