import { useRouter } from 'next/navigation';
import Button from './button';
import { ParticlesContainer } from './particles';

export const GameOver = () => {
  const router = useRouter();
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-mytheme-300'>
      <ParticlesContainer />
      <h1 className='font-title font-bold text-mytheme-100 text-6xl pt-24'>Играта свърши!</h1>
      <h3 className='font-title font-bold text-mytheme-100 text-4xl py-4'>Браво!</h3>

      {/* <Button onClick={handleReset} text={'Пак!'} /> */}
      <Button onClick={() => router.push('/')} text={'Край!'} />
    </div>
  );
};
