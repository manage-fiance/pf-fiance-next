import { AppBar, Box, Button, Container, Toolbar, useScrollTrigger } from '@mui/material';
import { Link } from '@mui/material';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import AuthModal from '@/layouts/AuthModal';
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
    className: 'navbar-bg'
  });
}

export default function NavBar(props: Props) {
  const [isShowAuthModal, setStatusAuthModal] = useState<boolean>(false)
  const handleSignIn = () => {
    setStatusAuthModal(true)
  }
  const handleSignUp = () => {
    setStatusAuthModal(true)
  }
  return (
    <Fragment>
      <ElevationScroll {...props}>
        <AppBar position='sticky' className='navbar-bg'>
          <Toolbar>
            <Link href='/' underline='none' component='a'>
              <Image src={logo} alt='logo' width={80} height={80} />
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button onClick={handleSignIn}>Sign In</Button>
              <Button onClick={handleSignUp}> Sign up </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <AuthModal open={isShowAuthModal} title='Sign In' closeModal={(val) => setStatusAuthModal(val) }>
        <p>Sign in</p>
      </AuthModal>
      <AuthModal open={isShowAuthModal} title='Sign Up' closeModal={(val) => setStatusAuthModal(val) }>
        <p>Sign in</p>
      </AuthModal>
    </Fragment>
  );
}
