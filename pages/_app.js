import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Shop.co</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;