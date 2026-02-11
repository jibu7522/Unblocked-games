
export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  iframeUrl: string;
  category: GameCategory;
  isPopular?: boolean;
}

export enum GameCategory {
  ALL = 'All',
  ACTION = 'Action',
  PUZZLE = 'Puzzle',
  ARCADE = 'Arcade',
  SPORTS = 'Sports',
  IO = 'IO Games',
  CLASSIC = 'Classic'
}

export type ViewState = {
  type: 'grid';
} | {
  type: 'play';
  gameId: string;
};
