'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { BoardSize, GameState } from '../interfaces';
import { DIFFICULTY } from '../constants';

const GameContext = createContext<
  | {
      gameState: GameState;
      setGameState: React.Dispatch<React.SetStateAction<GameState>>;
      setDifficulty: (boardSize: BoardSize) => void;
    }
  | undefined
>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [gameState, setGameState] = useState<GameState>({
    status: 'welcome',
    gameMode: 'paw-patrool',
    difficulty: '2x2'
  });

  /* avoiding hydration issues loading the difficulty directly from localStorage */
  useEffect(() => {
    const savedDifficulty = localStorage.getItem(DIFFICULTY) as BoardSize;
    if (savedDifficulty) {
      setGameState(prev => ({ ...prev, difficulty: savedDifficulty }));
    }
  }, []);

  const setDifficulty = React.useCallback(
    (boardSize: BoardSize) =>
      setGameState(prev => {
        localStorage.setItem(DIFFICULTY, boardSize);
        return { ...prev, difficulty: boardSize } as GameState;
      }),
    []
  );

  return <GameContext.Provider value={{ gameState, setGameState, setDifficulty }}>{children}</GameContext.Provider>;
}

export function useGameState() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameProvider');
  }
  return context;
}
