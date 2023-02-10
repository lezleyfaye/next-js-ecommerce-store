'use client';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

export default function CookieBanner() {
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);

  useEffect(() => {
    const localStorageValue = getLocalStorage('areCookiesAccepted');
    const initialState =
      localStorageValue === undefined ? false : localStorageValue;

    setAreCookiesAccepted(initialState);
  }, []);

  return (
    !areCookiesAccepted && (
      <>
        <div>cookie banner goes here</div>
        <button
          onClick={() => {
            setAreCookiesAccepted(true);
            setLocalStorage('areCookiesTermsAccepted', true);
          }}
        >
          Accept
        </button>
      </>
    )
  );
}
