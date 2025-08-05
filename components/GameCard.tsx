import Link from 'next/link';

export default function GameCard({ game }) {
  return (
    <Link href={`/game/${game.slug}`}>
      <div className="border rounded p-2 hover:shadow-lg">
        <img src={game.thumbnail} alt={game.title} className="w-full" />
        <h2 className="mt-2 font-semibold">{game.title}</h2>
      </div>
    </Link>
  );
}
