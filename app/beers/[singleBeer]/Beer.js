'use client';
import Image from 'next/image';

export default function Beer(props) {
  return (
    <>
      <h1>{props.beer.name}</h1>
      <div>
        <h4>
          {props.beer.type} | {props.beer.size} | {props.beer.abv}
        </h4>
        {/* product price required with data test id */}
        <h5 data-test-id="product-price">{props.beer.price} EUR</h5>
        <p>{props.beer.description}</p>
      </div>
      <main>
        <Image
          data-test-id="product-image"
          src={`/bottles/${props.beer.name}-${props.beer.id}.jpg`}
          alt={props.beer.name}
          width="258"
          height="459"
        />
      </main>
      <div>
        <button>+</button>
        <button>-</button>
      </div>
    </>
  );
}
