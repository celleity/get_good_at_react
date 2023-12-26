import Head from 'next/head';
import styles from '../styles/Home.module.css';
import QuantumImage from '../components/QuantumImage';
import DemonImage from '../components/DemonImage';
import PhotoTile from '../components/PhotoTile';
import PhotoGrid from '../components/PhotoGrid';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import React, { useRef } from 'react';



export default function Home() {
  const scrollToRef = useRef();
  const handleClickScroll = (scroll) => {
    if (typeof window !== "undefined") {
    const element = document.getElementById(scroll);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth', block: "center", inline: "center" });
    }}
  };
  return (
    <div className={styles.container}>

<main >

      <Stack  direction="column"
  justifyContent="left"
  alignItems="stretch" spacing="12" className={styles.demons} >
      <a className={styles.demonHeader1} onClick={() => document.getElementById("header-2").scrollIntoView(({ behavior: 'smooth', block: "center", inline: "center" }))} id="header-1"> ONE!</a>
      <div className={styles.demonHeader2} id="header-2" onClick={() => document.getElementById("header-3").scrollIntoView(({ behavior: 'smooth', block: "center", inline: "center" }))}> HUNDRED!</div>
      <div className={styles.demonHeader3} id="header-3"  onClick={() => document.getElementById("demons").scrollIntoView(({ behavior: 'smooth', block: "start", inline: "start" }))}> DEMONS!</div>
      </Stack>
    <div id="demons"/> 
      <PhotoGrid />
     </main>

     

    </div>
  )
}
