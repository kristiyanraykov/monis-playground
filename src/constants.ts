import { BoardSize, Character } from './interfaces';

export const characters: Character[] = [
  { name: 'chase', bg: 'blue', imgSrc: '/chase.webp' },
  { name: 'marshall', bg: 'red', imgSrc: '/marshall.webp' },
  { name: 'skye', bg: 'pink', imgSrc: '/skye.webp' },
  { name: 'rubble', bg: 'yellow', imgSrc: '/rubble.webp' },
  { name: 'zuma', bg: 'orange', imgSrc: '/zuma.webp' },
  { name: 'rocky', bg: 'green', imgSrc: '/rocky.webp' },
  { name: 'everest', bg: 'purple', imgSrc: '/everest.webp' },
  { name: 'coral', bg: 'teal', imgSrc: '/coral.webp' },
  { name: 'tracker', bg: 'brown', imgSrc: '/tracker.webp' },
  { name: 'rex', bg: 'darkseagreen', imgSrc: '/rex.webp' },
  { name: 'ryder', bg: 'white', imgSrc: '/ryder.webp' },
  { name: 'liberty', bg: 'coral', imgSrc: '/liberty.webp' }
];

export const boardSizes: BoardSize[] = ['2x2', '2x4', '3x4', '4x5'];
