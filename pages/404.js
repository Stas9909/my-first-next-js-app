import styles from '@/styles/error.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ErrorPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');//router.push создает новую запись в истории браузера
    }, 3000)
  }, []);

  return (
    <div className={styles.divForError}>
      <h1 className={styles.error}>404 - Page Not Found</h1>
      <p>Please <Link href={"/"}>go back</Link> to safety in 3 seconds</p>
    </div>
  );
}

export default ErrorPage;