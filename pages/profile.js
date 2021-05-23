// This import is only needed when checking authentication status directly from getInitialProps
// import auth0 from '../lib/auth0'
import ProfileCard from '../components/ProfileCard';
import { useFetchUser } from '../lib/user';
import styles from '../styles/Home.module.css';

function Profile() {
  const { user, loading } = useFetchUser({ required: true });

  return (
    <div className={styles.container}>
      {loading ? <>Loading...</> : <ProfileCard user={user} />}
    </div>
  );
}

export default Profile;
