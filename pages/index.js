import Head from 'next/head'

import Script from 'next/script'

import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Image from './components/Image'
import Title_Info from './components/Title_Info'
import Scorebord from './components/Scorebord'
import Detail from './components/Details'
import Footer from './components/Footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        
      </Head>
      <Script src="https://cdn.tailwindcss.com"></Script>
      <Script src="https://code.iconify.design/2/2.1.2/iconify.min.js"></Script>
      <div>
        <Navbar />
        <Image />
        <Title_Info />
        <Detail />
        {/* <Userdetail/> */}
        <Footer />
      </div>
    </div>
  )
}
