import Link from 'next/link';

const beers = [
  { id: 1, name: 'Buntspecht' },
  { id: 2, name: 'Kohlmeise' },
  { id: 3, name: 'Mehlschwalbe' },
  { id: 4, name: 'Rotkehlchen' },
];

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
