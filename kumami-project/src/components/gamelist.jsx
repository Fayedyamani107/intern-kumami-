import React, { useState } from 'react';
import { games } from '../data/games';
import GameCard from './gamecard';

const GameList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');

  const allGenres = ['All', ...new Set(games.flatMap(game => game.Genre))];

  const filteredGames = games.filter(game => {
    const matchSearch = game.Title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchGenre = selectedGenre === 'All' || game.Genre.includes(selectedGenre);
    return matchSearch && matchGenre;
  });

  return (
    <div className="flex flex-col gap-6">
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
        <input
          type="text"
          placeholder="Search games..."
          className="px-4 py-2 rounded bg-[#1a1a1a] text-white border border-primary w-full md:w-64 text-center"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedGenre}
          onChange={e => setSelectedGenre(e.target.value)}
          className="px-4 py-2 rounded bg-[#1a1a1a] text-white border border-primary w-full md:w-48 text-center"
        >
          {allGenres.map((genre, idx) => (
            <option key={idx} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredGames.length > 0 ? (
          filteredGames.map((game, index) => <GameCard key={index} game={game} />)
        ) : (
          <p className="text-center text-gray-400 col-span-full">No games found.</p>
        )}
      </div>
    </div>
  );
};

export default GameList;
