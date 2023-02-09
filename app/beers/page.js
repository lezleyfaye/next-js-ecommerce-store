import Image from 'next/image';
import Link from 'next/link';
import { beers } from '../../database/beers';

export default function BeersPage() {
  return (
    <>
      <h1>beers page</h1>
      <main>
        {beers.map((beer) => {
          return (
            <div key={beer.id}>
              <Link href={`/beers/${beer.name.toLowerCase()}`}>
                <h2>{beer.name}</h2>
              </Link>
              <div>
                <h4>
                  {beer.type} | {beer.size} | {beer.abv}
                </h4>
              </div>
              <Link href={`/beers/${beer.name.toLowerCase()}`}>
                <Image
                  src={`/bottles/${beer.name}-${beer.id}.jpg`}
                  alt={beer.name}
                  width="258"
                  height="459"
                />
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
