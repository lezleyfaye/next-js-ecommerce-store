// this also on cart page
import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { beers } from '../../database/beers';
import styles from '../beers/page.module.scss';

export const metadata = {
  title: 'Current Beers - Wappler',
  description: 'Wappler Webshop',
};

export default function BeersPage() {
  // want this on cart page?
  const beersCookie = cookies().get('beersCookie');

  let beersCookieParsed = [];

  if (beersCookie) {
    beersCookieParsed = JSON.parse(beersCookie.value);
  }
  // console.log(beersCookieParsed);

  const beersWithQuantity = beers.map((beer) => {
    const beerWithQuantity = { ...beer, quantity: 0 };

    const beerInCookie = beersCookieParsed.find(
      (beerObject) => beer.id === beerObject.id,
    );

    if (beerInCookie) {
      beerWithQuantity.quantity = beerInCookie.quantity;
    }

    return beerWithQuantity;
  });

  // console.log('beersWithQuantity', beersWithQuantity);
  // ends here
  return (
    <div>
      <h1 className={styles.beerTitle}>Current beer selection</h1>
      {beersWithQuantity.map((beer) => {
        return (
          // anchor tag required with data test id, need to change to <a> but get hydration error?
          <div
            data-test-id={`beers-${beer.id}`}
            key={beer.id}
            className={styles.beerCard}
          >
            <div className={styles.beerInfo}>
              <Link href={`/beers/${beer.name.toLowerCase()}`}>
                <Image
                  src={`/bottles/${beer.name}-${beer.id}.jpg`}
                  alt={beer.name}
                  width="258"
                  height="459"
                />
              </Link>

              <div>
                <Link href={`/beers/${beer.name.toLowerCase()}`}>
                  <h2>{beer.name}</h2>
                </Link>
                <div>
                  <h4>
                    {beer.type} | {beer.size} | {beer.abv}
                  </h4>
                  <h5>{beer.price} EUR</h5>
                  {/* this line also on cart page? */}
                  <p>Quantity: {beer.quantity} </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
