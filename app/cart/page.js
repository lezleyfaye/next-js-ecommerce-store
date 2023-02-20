import Link from 'next/link';

// import { cookies } from 'next/headers';
// import { CookieValue } from '../../utils/cookies';
// import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export const metadata = {
  title: 'Cart - Wappler Brewing',
  description: 'Wappler Webshop',
};

export default function cartPage() {
  // const beersCookie = cookies().get('beersCookie');

  // let beersCookieParsed = [];

  // if (beersCookie) {
  //   beersCookieParsed = JSON.parse(beersCookie.value);
  // }
  // // console.log(beersCookieParsed);

  // const beersWithQuantity = beers.map((beer) => {
  //   const beerWithQuantity = { ...beer, quantity: 0 };
  //   return beerWithQuantity;
  // });

  return (
    <div>
      <h1>cart page</h1>
      <button>
        <Link href="checkout">Go to checkout</Link>
      </button>
      {/* <p>Quantity: {beer.quantity} </p> */}
    </div>
  );
}
