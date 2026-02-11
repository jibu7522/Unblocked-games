
import React, { useState, useMemo, useEffect } from 'react';
import { GAMES_DATA } from './gamesData';
import { GameCategory } from './types';
import { GameCard } from './components/GameCard';
import { GamePlayer } from './components/GamePlayer';

const App = () => {
  const [viewState, setViewState] = useState({ type: 'grid' });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(GameCategory.ALL);
  const [favorites, setFavorites] = useState([]);

  // Load favorites from local storage
  useEffect(() => {
    const stored = localStorage.getItem('nexus-favorites');
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === GameCategory.ALL || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleGameSelect = (id) => {
    setViewState({ type: 'play', gameId: id });
    window.scrollTo(0, 0);
  };

  const currentPlayingGame = useMemo(() => {
    if (viewState.type === 'play') {
      return GAMES_DATA.find(g => g.id === viewState.gameId);
    }
    return null;
  }, [viewState]);

  if (viewState.type === 'play' && currentPlayingGame) {
    return (
      <div className="fixed inset-0 z-50 overflow-hidden">
        <GamePlayer 
          game={currentPlayingGame} 
          onBack={() => setViewState({ type: 'grid' })} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setViewState({ type: 'grid' })}
          >
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center group-hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">NEXUS<span className="text-indigo-500">GAMES</span></span>
          </div>

          <div className="w-full md:max-w-md relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            </div>
            <input 
              type="text" 
              placeholder="Search games..." 
              className="w-full bg-slate-800 border border-slate-700 text-slate-200 pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <a href="#" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Discord</a>
            <a href="#" className="text-sm font-semibold text-slate-400 hover:text-white transition-colors">Requests</a>
            <button className="bg-slate-800 px-4 py-2 rounded-lg text-sm font-bold text-white hover:bg-slate-700 transition-colors">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-8">
        
        {/* Banner */}
        <div className="relative mb-12 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=1200" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-center px-12">
            <span className="inline-block bg-indigo-600 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full text-white mb-4 w-fit">
              Featured Release
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 max-w-lg leading-[1.1]">
              Next-Gen <span className="text-indigo-500">Unblocked</span> Gaming Experience
            </h1>
            <p className="text-slate-300 text-lg max-w-md mb-8">
              Play thousands of games instantly in your browser. No downloads, no blocks, just pure fun.
            </p>
            <button 
              onClick={() => handleGameSelect(GAMES_DATA[4].id)}
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-8 rounded-xl w-fit transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-600/20"
            >
              Play Slope Now
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-6 mb-12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-8 rounded bg-indigo-500/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
              </span>
              Explore Games
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 overflow-x-auto no-scrollbar">
            {Object.values(GameCategory).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' 
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredGames.length > 0 ? (
            filteredGames.map(game => (
              <GameCard 
                key={game.id} 
                game={game} 
                onClick={handleGameSelect} 
              />
            ))
          ) : (
            <div className="col-span-full py-24 flex flex-col items-center justify-center text-slate-500 bg-slate-800/20 rounded-3xl border-2 border-dashed border-slate-800">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-20"><circle cx="12" cy="12" r="10"/><path d="m16 16-4-4-4 4"/><path d="m12 12V8"/></svg>
              <h3 className="text-xl font-bold mb-1">No games found</h3>
              <p>Try searching for something else or changing categories.</p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </div>
              <span className="text-xl font-black tracking-tighter text-white">NEXUS<span className="text-indigo-500">GAMES</span></span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
              The ultimate destination for unblocked web games. Play 24/7 without restrictions.
            </p>
          </div>

          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Portal</h4>
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">DMCA</a>
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">Privacy</a>
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">Terms</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Support</h4>
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">Contact</a>
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">FAQ</a>
              <a href="#" className="text-slate-500 hover:text-indigo-400 transition-colors">Requests</a>
            </div>
          </div>
          
          <div className="text-slate-500 text-[10px] uppercase font-bold text-center md:text-right">
            &copy; 2024 Nexus Games. All rights reserved.<br/>
            Unblocked for School and Work.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
