'use client';

import React from 'react';
import FlippCard from '../../components/card';
import { characters } from '../../constants';
import { useGameState } from '../../context/game-context';
import { calculateBoardSize } from '../../utils';
import { Character } from '../../interfaces';

type DiscoveredMap = {
  [key: number]: {
    name: string;
    flipped: boolean;
    guessed: boolean;
  };
};

const GamePage = () => {
  const { gameState } = useGameState();

  const [discoveredCards, setDiscoveredCards] = React.useState<DiscoveredMap>({});
  const [firstFlippedCard, setFirstFlippedCard] = React.useState<number | null>(null);
  const [charactersToRender, setCharactersToRender] = React.useState<Character[]>([]);
  const [locked, setLocked] = React.useState(false);

  const handleCardClick = React.useCallback(
    (index: number, name: string) => {
      if (discoveredCards[index]?.flipped || locked) return;
      if (firstFlippedCard === null) {
        setFirstFlippedCard(index);
        setDiscoveredCards(prev => ({
          ...prev,
          [index]: { name, flipped: true, guessed: false }
        }));
        return;
      }
      setDiscoveredCards(prev => ({
        ...prev,
        [index]: { name, flipped: true, guessed: false }
      }));
      if (discoveredCards[firstFlippedCard!].name === name) {
        setFirstFlippedCard(null);
        setDiscoveredCards(prev => ({
          ...prev,
          [index]: { name, flipped: true, guessed: true },
          [firstFlippedCard!]: { ...prev[firstFlippedCard!], flipped: true, guessed: true }
        }));
      } else {
        setLocked(true);
        setTimeout(() => {
          setDiscoveredCards(prev => ({
            ...prev,
            [index]: { name, flipped: false, guessed: false },
            [firstFlippedCard!]: { ...discoveredCards[firstFlippedCard!], flipped: false, guessed: false }
          }));
          setFirstFlippedCard(null);
          setLocked(false);
        }, 1000);
      }
    },
    [discoveredCards, firstFlippedCard, locked]
  );

  const { width, height } = React.useMemo(() => calculateBoardSize(gameState.difficulty), [gameState.difficulty]);
  const imgSize = width === 4 ? 100 : 150;
  const charactersSlice = React.useMemo(() => characters.slice(0, (width * height) / 2), [width, height]);

  React.useEffect(() => {
    const shuffledCharacters = [...charactersSlice, ...charactersSlice].sort(() => Math.random() - 0.5);
    setCharactersToRender(shuffledCharacters);
  }, [charactersSlice]);

  return (
    <div className='p-4 flex justify-center items-center min-h-screen bg-mytheme-300'>
      <div
        className='grid gap-4'
        style={{
          gridTemplateColumns: `repeat(${width}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${height}, minmax(0, 1fr))`,
          maxWidth: `${width * imgSize}px`
        }}
      >
        {charactersToRender.map((character, index) => {
          const isFlipped = !!discoveredCards?.[index]?.flipped;
          const isGuessed = !!discoveredCards?.[index]?.guessed;
          return (
            <FlippCard
              key={`${character.name}-${index}`}
              background={character.bg}
              imgSrc={character.imgSrc}
              isSmall={width > 2}
              index={index}
              handleClick={handleCardClick}
              characterName={character.name}
              isFlipped={isFlipped}
              guessed={isGuessed}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GamePage;
