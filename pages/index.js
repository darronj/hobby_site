import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{' '}
          <a href={process.env.NEXT_PUBLIC_URL}>
            {process.env.NEXT_PUBLIC_SITE_NAME}
          </a>
        </h1>
        <ul>
          <li key={1}>Puppy-O</li>
          <li key={2}>Spots</li>
          <li key={3}>Bert</li>
        </ul>
        <h2>{process.env.NEXT_PUBLIC_URL}</h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
