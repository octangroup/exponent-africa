import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Exponent Africa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div><img src="/logo.png" width="150" height="150" /></div>
        <h1 className={styles.title}>
          Exponent Africa
        </h1>

        <p className={styles.description}>
          Our website is almost ready!
        </p>
      </main>
    </div>
  );
}
