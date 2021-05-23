import styles from '../styles/Home.module.css';

export default function ProfileCard({ user, idToken }) {
  return (
    <div className={styles.container}>
      <h1>Profile</h1>

      <div>
        <h3>Profile (client rendered)</h3>
        <img src={user.picture} alt="user picture" />
        <p>nickname: {user.nickname}</p>
        <p>name: {user.name}</p>
      </div>
      {idToken && (
        <div>
          <h3>ID Token</h3>
          <p>{`${idToken.substr(0, 55)}...`}</p>
        </div>
      )}
    </div>
  );
}
