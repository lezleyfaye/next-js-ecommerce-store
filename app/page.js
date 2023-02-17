import './global.scss';
import Link from 'next/link';
import styles from './page.module.scss';

export const metadata = {
  title: 'Wappler Brewing Webshop',
  description: 'Wappler Webshop',
};

export default function HomePage() {
  return (
    <main>
      <div className={styles.mainPagePic}>
        {/* not optimized-fix image import, min 16 of next.js video 2/2 */}
        <img
          src="/mainPagePic.png"
          alt="Wappler Logo with collage"
          width={450}
          height={450}
        />
      </div>
      {/* these are the buttons that were below the pic */}
      {/* <div className={styles.mainButtons}>
        <div>
          <button className={styles.individualButton}>
            <Link href="beers">Beer</Link>
          </button>
        </div>
        <div>
          <button className={styles.individualButton}>
            <Link href="other">Other Merch</Link>
          </button>
        </div>
      </div>
       */}
    </main>
  );
}
