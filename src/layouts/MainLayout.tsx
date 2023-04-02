import Footer from '@/componets/shared/Footer'
import NavBar from '@/componets/shared/NavBar'
import Sidebar from '@/componets/shared/Sidebar'
import { Box, Container, Grid, Slide, Toolbar, useScrollTrigger } from '@mui/material'
import { AppProps } from 'next/app'
import React, { Fragment } from 'react'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <NavBar>
        <Fragment></Fragment>
      </NavBar>
      <Box component="main">
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
