import Head from 'next/head';
import styles from '../styles/Home.module.css';
import QuantumImage from '../components/QuantumImage';
import PhotoTile from '../components/PhotoTile';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <div className={styles.container}>

<main >

      <Stack alignItems="stretch" className={styles.demons} >
      <div className={styles.demonHeader} > ONE!</div>
      <div className={styles.demonHeader} > HUNDRED!</div>
      <div className={styles.demonHeader} > DEMONS!</div>
      </Stack>
     </main>

     

    </div>
  )
}
