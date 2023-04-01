import MainLayout from '@/layouts/MainLayout'
import "@assets/styles/_index.scss"
import type { AppProps } from 'next/app'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return <MainLayout>
    {children}
  </MainLayout>
}

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
