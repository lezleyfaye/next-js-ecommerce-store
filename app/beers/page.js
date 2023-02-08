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
              <Link href={`/beers/${beer.name}`}>
                <h3>{beer.name}</h3>
              </Link>
              <Link href={`/beers/${beer.name}`}>
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
