import React from 'react';
import { FaTwitter, FaDiscord, FaGlobe } from 'react-icons/fa';

const GameCard = ({ game }) => {
  return (
    <div className="bg-[#1a1a1a] border border-primary p-5 rounded-xl shadow-md hover:shadow-xl transition hover:scale-[1.02] flex flex-col">
      <img
        src={game.imageUrl}
        alt={game.Title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />

      <p className="text-sm text-primary mb-1">
        {game.Date} · {game.Genre.join(', ')}
      </p>

      <h2 className="text-xl font-bold mb-2">{game.Title}</h2>

      <p className="text-gray-400 text-sm mb-4">{game.Description}</p>

      <div className="flex gap-4 text-lg text-gray-400 mt-auto">
        {game.Links?.twitter && (
          <a href={game.Links.twitter} target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-primary" />
          </a>
        )}
        {game.Links?.discord && (
          <a href={game.Links.discord} target="_blank" rel="noreferrer">
            <FaDiscord className="hover:text-primary" />
          </a>
        )}
        {game.Links?.website && (
          <a href={game.Links.website} target="_blank" rel="noreferrer">
            <FaGlobe className="hover:text-primary" />
          </a>
        )}
      </div>
    </div>
  );
};

export default GameCard;
