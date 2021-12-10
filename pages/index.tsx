// ---Dependencys
import { ReactElement } from 'react';
// ---Components
import Head from 'next/head';
import Home from 'containers/Home';

// ---------------------------Component--------------------------------------------------
export default function HomePage(): ReactElement {
  return (
    <>
      <Head>
        <title>CV | Start</title>
      </Head>
      <Home />
    </>
  );
}
