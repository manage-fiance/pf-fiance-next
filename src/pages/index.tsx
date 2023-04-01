import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from './home-page'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps(context:any) {
  return {
    props: {}
  }
}

export default function Home() {  
  return (
    <>
      <HomePage />
    </>
  )
}
