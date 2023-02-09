import Image from 'next/image';

// import styles from './layout.module.scss';

export default function RootLoading() {
  return (
    <div>
      Loading...
      <br></br>
      <Image
        // className={styles.loadingLogo}
        src="/multiWapplerRound.svg"
        alt="Wappler Round Logo"
        width="450"
        height="450"
      />
    </div>
  );
}
