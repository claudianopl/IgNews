/* eslint-disable @next/next/no-img-element */
import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Ig.News" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>

        </nav>

        <SignInButton />
      </div>
    </header>
  )
}