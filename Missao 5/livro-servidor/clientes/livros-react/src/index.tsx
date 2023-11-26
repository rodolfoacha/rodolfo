// pages/index.tsx
import Head from 'next/head';
import { Menu } from './Menu';
import '../src/styles/styles.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Bem-vindo à Loja Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Página Inicial
        </h1>

      </main>


    </div>
  );
};

export default Home;
