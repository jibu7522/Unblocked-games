
import { GameCategory } from './types';

export const GAMES_DATA = [
  {
    id: '2048',
    title: '2048',
    description: 'Join the numbers and get to the 2048 tile!',
    thumbnail: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=400&h=300&fit=crop',
    iframeUrl: 'https://play2048.co/',
    category: GameCategory.PUZZLE,
    isPopular: true
  },
  {
    id: 'hextris',
    title: 'Hextris',
    description: 'A fast-paced puzzle game inspired by Tetris.',
    thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop',
    iframeUrl: 'https://hextris.io/',
    category: GameCategory.ARCADE,
    isPopular: true
  },
  {
    id: 'snake',
    title: 'Classic Snake',
    description: 'The legendary retro game of eating and growing.',
    thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop',
    iframeUrl: 'https://snake.io/',
    category: GameCategory.CLASSIC
  },
  {
    id: 'crossy-road',
    title: 'Crossy Road',
    description: 'Why did the chicken cross the road?',
    thumbnail: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop',
    iframeUrl: 'https://poki.com/en/g/crossy-road',
    category: GameCategory.ARCADE,
    isPopular: true
  },
  {
    id: 'slope',
    title: 'Slope',
    description: 'A fast-paced 3D running game with high speeds.',
    thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop',
    iframeUrl: 'https://slope.io/',
    category: GameCategory.ACTION,
    isPopular: true
  },
  {
    id: 'flappy-bird',
    title: 'Flappy Bird',
    description: 'Tap to flap and avoid the pipes in this challenging classic.',
    thumbnail: 'https://images.unsplash.com/photo-1561149834-5866fa0490b4?w=400&h=300&fit=crop',
    iframeUrl: 'https://flappybird.io/',
    category: GameCategory.ARCADE
  },
  {
    id: 'paper-io',
    title: 'Paper.io 2',
    description: 'Capture as much territory as possible and defeat your enemies.',
    thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
    iframeUrl: 'https://paper-io.com/',
    category: GameCategory.IO,
    isPopular: true
  },
  {
    id: 'basketball-stars',
    title: 'Basketball Stars',
    description: 'Show your skills on the court in this multiplayer sports game.',
    thumbnail: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
    iframeUrl: 'https://poki.com/en/g/basketball-stars',
    category: GameCategory.SPORTS
  }
];
