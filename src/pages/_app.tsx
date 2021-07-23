import { AppProps } from 'next/app';
import React from 'react';
import { MoviesProvider } from '../context/MoviesContext';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MoviesProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </MoviesProvider>
    </>
  );
}

export default MyApp
