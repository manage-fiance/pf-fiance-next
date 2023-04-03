import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
export default function Footer() {
  return (
    <Box component="footer" className='footer'>
      <Container>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: '16px'
        }}>
          <Typography component='p'>About Us</Typography>
          <Typography component='p'>Subscription</Typography>
          <Typography component='p'>Contact</Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Facebook color='primary' />
          <Instagram color='primary' />
          <Twitter color='primary' />
        </Box>
      </Container>
    </Box>
  )
}
