import { signIn, signOut, useSession } from 'next-auth/client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [session, loading] = useSession();
  const [token, setToken] = useState();

  useEffect(async () => {
    const res = await fetch('/api/auth/token');
    const json = await res.json();
    setToken(json.idToken);
  }, [session]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {process.env.NEXT_PUBLIC_SITE_NAME}
        </h1>
        {!session && (
          <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
        {session && (
          <>
            <p>Signed in as {session.user.email}</p>
            <p>
              <button onClick={() => signOut()}>Sign out</button>
            </p>
          </>
        )}
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
