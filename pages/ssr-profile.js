// This import is only included in the server build, because it's only used by getServerSideProps
import { getSession } from '@auth0/nextjs-auth0';
import { useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import styles from '../styles/Home.module.css';

export default function Profile({ user, idToken }) {
  useEffect(function () {
    window.localStorage.setItem('id_token', idToken);
  }, []);
  return (
    <div className={styles.container}>
      <ProfileCard user={user} idToken={idToken} />
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  // Here you can check authentication status directly before rendering the page,
  // however the page would be a serverless function, which is more expensive and
  // slower than a static page with client side authentication
  const session = await getSession(req, res);

  if (!session?.user) {
    res.writeHead(302, {
      Location: '/api/auth/login'
    });
    res.end();
    return;
  }
  const { user, idToken } = session;
  // console.log(accessToken)

  return {
    props: {
      user,
      idToken
    }
  };
};
