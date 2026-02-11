
import React from 'react';

export const GameCard = ({ game, onClick }) => {
  return (
    <div 
      onClick={() => onClick(game.id)}
      className="group relative bg-slate-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-indigo-500/20"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {game.isPopular && (
          <div className="absolute top-2 left-2 bg-indigo-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Popular
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg text-slate-100 group-hover:text-indigo-400 transition-colors">
            {game.title}
          </h3>
          <span className="text-[10px] bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full uppercase">
            {game.category}
          </span>
        </div>
        <p className="text-slate-400 text-sm line-clamp-2">
          {game.description}
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <button className="w-full bg-indigo-600 text-white font-bold py-2 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
          Play Now
        </button>
      </div>
    </div>
  );
};
