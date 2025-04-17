export type GameState = {
  status: 'welcome' | 'playing' | 'gameover';
  gameMode: 'paw-patrool' | 'barbapapa';
  difficulty: BoardSize;
};

export type BoardSize = '2x2' | '2x4' | '3x4' | '4x5';

export type Character = {
  name: string;
  bg: string;
  imgSrc: string;
};
