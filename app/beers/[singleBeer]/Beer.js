'use client';
import Image from 'next/image';
import Link from 'next/link';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export const metadata = {
  title: 'Current Beers - Wappler',
  description: 'Wappler Webshop',
};

// beersCookie = [ {id: number, quantity: number  },  ]

export default function singleBeer(props) {
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
        <button
          onClick={() => {
            // get the cookie
            const beersInCookies = getParsedCookie('beersCookie');

            // cookie doesn't exist yet so create one
            if (!beersInCookies) {
              setStringifiedCookie('beersCookie', [
                { id: props.beer.id, quantity: 1 },
              ]);
              // no cookie, function stops
              return;
            }
            const foundBeer = beersInCookies.find((beerInCookie) => {
              return beerInCookie.id === props.beer.id;
            });

            //   exists but beer inside cookie
            if (foundBeer) {
              // add quantity
              foundBeer.quantity++;
              // beer not in cookie
            } else {
              // add beer to cookie array
              beersInCookies.push({ id: props.beer.id, quantity: 1 });
            }
            // update cookie w/ new value
            setStringifiedCookie('beersCookie', beersInCookies);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            // get the cookie
            const beersInCookies = getParsedCookie('beersCookie');

            // cookie doesn't exist yet so create one
            if (!beersInCookies) {
              // no cookie, function stops
              return;
            }
            const foundBeer = beersInCookies.find((beerInCookie) => {
              return beerInCookie.id === props.beer.id;
            });

            //   exists but beer not inside cookie
            if (foundBeer) {
              // update new quantity
              foundBeer.quantity--;
              // doesn't allow negatives
              if (foundBeer.quantity < 0) {
                foundBeer.quantity = 0;
              }
            }
            // update cookie w/ new value
            setStringifiedCookie('beersCookie', beersInCookies);
          }}
        >
          -
        </button>
      </div>
      <div>
        <button>
          {/* for when I add CSS: className={styles.shoppingCart} */}
          <Link href="cart">
            <img
              src="/shoppingCart.svg"
              alt="shopping cart"
              width={25}
              height={25}
            />
          </Link>
        </button>
      </div>
    </>
  );
}
