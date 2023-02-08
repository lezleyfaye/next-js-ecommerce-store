import './global.scss';
import Link from 'next/link';
import styles from './page.module.scss';

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
      <div className={styles.mainButtons}>
        <div>
          <button className={styles.individualButton}>
            <Link href="beers">Beer</Link>
          </button>
        </div>
        <div>
          <button className={styles.individualButton}>
            <Link href="apparel">Apparel</Link>
          </button>
        </div>
        <div>
          <button className={styles.individualButton}>
            <Link href="other">Other Merch</Link>
          </button>
        </div>
      </div>
      {/* what I need here:
    logo
    photo collage
    buttons to the other pages */}
    </main>
  );
}
