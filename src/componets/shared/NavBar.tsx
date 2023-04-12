import {
  AppBar,
  Box,
  Button,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import { Link } from '@mui/material';
import Image from 'next/image';
import React, { Fragment, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.svg';
import AuthModal from '@/layouts/AuthModal';
import { FormProps } from '@/models/auth';
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
    className: 'navbar-bg',
  });
}

export default function NavBar(props: Props) {
  const [isShowAuthModal, setStatusAuthModal] = useState<boolean>(false);
  const signInProps: FormProps = {
    action: '/auth/sign-in',
    onValidate: (args) => handleValidate(args),
    fields: [
      {
        key: 'email',
        label: 'Email',
        rule: [
          {
            required: true,
          },
        ],
      },
      {
        key: 'password',
        label: 'Password',
        rule: [
          {
            required: true,
          },
        ],
      },
    ],
    submitLabel: 'Sign in',
  };

  const signUpProps: FormProps = {
    action: '/auth/sign-up',
    onValidate: (args) => handleValidate(args),
    fields: [
      {
        key: 'email',
        label: 'Email',
        rule: [
          {
            required: true,
          },
        ],
      },
      {
        key: 'first_name',
        label: 'First name',
        rule: [
          {
            required: true,
          },
        ],
      },
      {
        key: 'last_name',
        label: 'Last name',
        rule: [
          {
            required: true,
          },
        ],
      },
      {
        key: 'password',
        label: 'Password',
        rule: [
          {
            required: true,
          },
        ],
      },
    ],
    submitLabel: 'Sign up',
  };

  const handleValidate = (args: any) => {
    console.log(args);
  };

  const handleSignIn = () => {
    setStatusAuthModal(true);
  };
  const handleSignUp = () => {
    setStatusAuthModal(true);
  };
  return (
    <Fragment>
      <ElevationScroll {...props}>
        <AppBar position='sticky'>
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
      <AuthModal
        open={isShowAuthModal}
        title='Sign In'
        closeModal={(val) => setStatusAuthModal(val)}
        formProps={signInProps}
      />

      <AuthModal
        open={isShowAuthModal}
        title='Sign Up'
        closeModal={(val) => setStatusAuthModal(val)}
        formProps={signUpProps}
      />
    </Fragment>
  );
}
