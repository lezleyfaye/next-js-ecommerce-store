import { notFound } from 'next/navigation';
import { beers } from '../../../database/beers';
import Beer from './Beer';

export default function singleBeerPage({ params }) {
  const singleBeer = beers.find((beer) => {
    return beer.name.toLowerCase() === params.singleBeer;
  });
  // console.log(singleBeer);

  // if (!singleBeer) {
  //   throw new Error('not allowed');
  //   notFound();
  // }

  return <Beer fruit={singleBeer} />;
}
