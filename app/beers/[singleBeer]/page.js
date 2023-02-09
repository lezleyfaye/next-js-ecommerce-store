import Image from 'next/image';
import { beers } from '../../../database/beers';

export default function singleBeerPage(props) {
  const singleBeer = beers.find((beer) => {
    return beer.name.toLowerCase() === props.params.singleBeer;
  });
  console.log(singleBeer);

  return (
    <>
      <h1>{singleBeer.name}</h1>
      <div>
        <h4>
          {singleBeer.type} | {singleBeer.size} | {singleBeer.abv}
        </h4>
      </div>
      <main>
        <Image
          src={`/bottles/${singleBeer.name}-${singleBeer.id}.jpg`}
          alt={singleBeer.name}
          width="258"
          height="459"
        />
      </main>
    </>
  );
}
