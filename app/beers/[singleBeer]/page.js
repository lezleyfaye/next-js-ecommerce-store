import { notFound } from 'next/navigation';
import { beers } from '../../../database/beers';
import Beer from './Beer';

export const metadata = {
  title: 'Current Beers - Wappler',
  description: 'Wappler Webshop',
};

export default function BeerPage({ params }) {
  const singleBeer = beers.find((beer) => {
    return beer.name.toLowerCase() === params.singleBeer;
  });
  // console.log(singleBeer);

  if (!singleBeer) {
    notFound();
  }

  // this line returns the params - raw data from beers array
  // return <div>{JSON.stringify(singleBeer)} </div>;

  return <Beer beer={singleBeer} />;
}
