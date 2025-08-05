import Head from 'next/head';
import GameCard from '../components/GameCard';
import games from '../data/games.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Oyundolu - Oyunların Adresi</title>
      </Head>
      <main className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {games.map((game, i) => (
          <GameCard key={i} game={game} />
        ))}
      </main>
    </>
  );
}
