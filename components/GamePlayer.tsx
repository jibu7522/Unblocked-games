
import React, { useState } from 'react';
import { Game } from '../types';

interface GamePlayerProps {
  game: Game;
  onBack: () => void;
}

export const GamePlayer: React.FC<GamePlayerProps> = ({ game, onBack }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col h-full bg-slate-950 animate-in fade-in duration-300">
      {/* Game Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800 shadow-xl">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors"
            title="Back to Lobby"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <div>
            <h1 className="font-bold text-xl text-white tracking-tight">{game.title}</h1>
            <p className="text-xs text-slate-500 uppercase font-semibold">{game.category}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
            Refresh
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('game-iframe');
              if (el?.requestFullscreen) el.requestFullscreen();
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-indigo-900/20"
          >
            Full Screen
          </button>
        </div>
      </div>

      {/* Main Player Area */}
      <div className="flex-1 relative bg-black overflow-hidden group">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 z-10">
            <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-400 font-medium animate-pulse">Loading {game.title}...</p>
          </div>
        )}
        <iframe
          id="game-iframe"
          src={game.iframeUrl}
          className="w-full h-full border-none"
          allowFullScreen
          onLoad={() => setIsLoading(false)}
        />
      </div>

      {/* Bottom Info Bar */}
      <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 text-slate-400 text-sm flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="M12 2v20"/><path d="m17 12-5 5-5-5"/><path d="m7 7 5-5 5 5"/></svg>
            Fast Server
          </span>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            Safe & Unblocked
          </span>
        </div>
        <div className="hidden md:block">
          Playing on Nexus Games Portal
        </div>
      </div>
    </div>
  );
};
