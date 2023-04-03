import Footer from '@/componets/shared/Footer'
import NavBar from '@/componets/shared/NavBar'
import { Box, Grid } from '@mui/material'
import Head from 'next/head'
import React, { Fragment } from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Head>
        <title>Book Sharing</title>
      </Head>
      <NavBar>
        <Fragment></Fragment>
      </NavBar>
      <Box component="main" sx={{
        pb: 16
      }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  )
}
