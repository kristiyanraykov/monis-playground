'use client';
import Button from '../components/button';
import GameDifficulty from '../components/game-difficulty';
import { useRouter } from 'next/navigation';
import { useGameState } from '../context/game-context';

const HomeScreen = () => {
  const { gameState } = useGameState();

  const router = useRouter();

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-mytheme-300'>
      <h1 className={'font-title font-bold text-mytheme-100 text-6xl py-24'}>Здравей, Мони!</h1>
      <h3 className={'font-title font-bold text-mytheme-100 text-4xl py-4'}>Избери трудност</h3>
      <GameDifficulty difficulty={gameState.difficulty} />
      <Button onClick={() => router.push('/game')} text={'Старт!'} />
    </div>
  );
};
export default HomeScreen;
