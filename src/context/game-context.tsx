'use client';
import React, { createContext, useContext, useState } from 'react';
import { BoardSize, GameState } from '../interfaces';

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

  const setDifficulty = React.useCallback(
    (boardSize: BoardSize) => setGameState(prev => ({ ...prev, difficulty: boardSize }) as GameState),
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
