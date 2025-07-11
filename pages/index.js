import React from 'react';
import Head from 'next/head';
import MainPage from '../pages/MainPage';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>WJC 우진화성</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <MainPage />
    </>
  );
};

export default HomePage; 