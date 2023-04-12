import { Box, Container, Typography } from '@mui/material';
import React from 'react';

import Link from 'next/link';
// import Facebook from '@/assets/images/facebook.svg';
// import Instagram from '@/assets/images/instagram.svg';
import Image from 'next/image';
export default function Footer() {
  return (
    <Box component='footer' className='footer'>
      <Container>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: '16px',
          }}
        >
          <Link href='/about'>
            <Typography component='p'>About Us</Typography>
          </Link>
          <Link href='/'>
            <Typography component='p'>Subscription</Typography>
          </Link>
          <Link href='/'>
            <Typography component='p'>Contact</Typography>
          </Link>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <div className='icon-social'>
            <Image src={Facebook} alt='facebook' width={50} height={50} color='#3956ea'/>            
          </div>
          <div className='icon-social'>
            <Image src={Instagram} alt='instagram' width={50} height={50}/>
          </div> */}
        </Box>
      </Container>
    </Box>
  );
}
