import { AppBar, Box, Button, Toolbar, useScrollTrigger } from '@mui/material';
import { Link } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });
  
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function NavBar(props: Props) {  
  return (
    <ElevationScroll {...props}>      
      <AppBar position='sticky' color='transparent'>
        <Toolbar>
          <Link href='/' underline='none' component='a'>
            <Image src={logo} alt='logo' style={{ width: '70px' }} />
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button>Sign In</Button>
            <Button> Sign up </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}
