import { useRouter } from 'next/router';
import games from '../../public/games.json';

export default function GamePage() {
  const router = useRouter();
  const { slug } = router.query;
  const game = games.find((g) => g.slug === slug);

  if (!game) return <p>Oyun bulunamadı</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">{game.title}</h1>
      <iframe src={game.embedUrl} width="100%" height="600px" allowFullScreen />
    </div>
  );
}
