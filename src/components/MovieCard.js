import React from 'react';
import { useNavigate } from 'react-router-dom';

function MovieCard({ film }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/film/${film.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105 hover:shadow-xl"
    >
      <img
        src={film.posterURL}
        alt={film.titre}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{film.titre}</h3>
        <p className="text-gray-600 mb-3">{film.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-yellow-500 text-2xl">⭐</span>
            <span className="ml-2 text-lg font-semibold">{film.note}/5</span>
          </div>
          <span className="text-blue-500 font-semibold">Voir plus →</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
