import Head from 'next/head';
import styles from '../styles/Home.module.css';
import QuantumImage from '../components/QuantumImage';
import PhotoTile from '../components/PhotoTile';

export default function Demons() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
      </Head>

      <main>
        <h1 className={styles.title}>
         Celine Perley's Website
        </h1>
        <div> Enjoy </div> 
      

       
        <PhotoTile/>
        
      </main>

     

    </div>
  )
}
