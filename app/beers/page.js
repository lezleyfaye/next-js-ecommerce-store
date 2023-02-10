import Image from 'next/image';
import Link from 'next/link';
import { beers } from '../../database/beers';
import styles from '../beers/page.module.scss';

export default function BeersPage() {
  return (
    <div>
      <h1 className={styles.beerTitle}>Current beer selection</h1>
      {beers.map((beer) => {
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
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
