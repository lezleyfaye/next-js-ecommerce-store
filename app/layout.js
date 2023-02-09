import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <div className={styles.banner}>
          <Link href="https://wapplerbrewing.com" target="_blank">
            <img
              src="/wapplerMainHead.svg"
              alt="Wappler logo"
              width={61}
              height={123}
            />
          </Link>
        </div>
        <header className={styles.header}>
          <nav>
            <Link className={styles.mainSiteLink} href="/">
              <img
                src="/newWapplerRectangular.svg"
                alt="Wappler Name with Logo"
                width={168}
                height={40}
              />
            </Link>
            <Link href="beers">Beer</Link>
            <Link href="apparel">Apparel</Link>
            <Link href="other">Other Merch</Link>
            <Link className={styles.shoppingCart} href="checkout">
              <img
                src="/shoppingCart.svg"
                alt="shopping cart"
                width={25}
                height={25}
              />
            </Link>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          Made with hops and love! | Copyright Wappler Brewing
        </footer>
      </body>
    </html>
  );
}
