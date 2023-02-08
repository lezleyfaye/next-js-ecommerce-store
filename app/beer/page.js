import Image from 'next/image';
import Link from 'next/link';
import { beers } from '../../database/beers';

export default function BeerPage() {
  return (
    <>
      <h1>beer page</h1>
      <main>
        {beers.map((beer) => {
          return (
            <div key={beer.id}>
              <Link href={`/beer/${beers.id}`}>
                <h3 key={beer.id}>{beer.name}</h3>
              </Link>
              <Link href={`/beer/${beers.id}`}>
                <Image
                  src={`/bottles/${beer.name}-${beer.id}.jpg`}
                  alt={beers.name}
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
//  <div>
//           <Link href="/beer/buntspecht">Buntspecht</Link>
//         </div>
