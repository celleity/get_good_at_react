import Head from 'next/head';
import styles from '../styles/Home.module.css';
import QuantumImage from '../components/QuantumImage';
import PhotoTile from '../components/PhotoTile';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <div className={styles.container}>

<main >

      <Stack  direction="column"
  justifyContent="left"
  alignItems="stretch" spacing="12" className={styles.demons} >
      <div className={styles.demonHeader1} > ONE!</div>
      <div className={styles.demonHeader2} > HUNDRED!</div>
      <div className={styles.demonHeader3} > DEMONS!</div>
      </Stack>
     </main>

     

    </div>
  )
}
