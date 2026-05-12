import styles from './layout.module.css';
import Link from 'next/link';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header>
        {home ? (
          <h1>My Blog</h1>
        ) : (
          <h2><Link href="/">My Blog</Link></h2>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}